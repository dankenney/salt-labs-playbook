---
title: "P-03 · Supplier data collection & utility-bill / invoice extraction"
description: Turn PDFs, scans and supplier questionnaires into validated activity data with page-level provenance, exception queues and maker-checker review.
reviewed: 2026-10-07
owner: Workflow owner — Data & extraction
tags: [supplier-data, extraction, ghg-accounting, agents]
status: stable
sidebar:
  order: 3
  label: "P-03 Supplier data & bills"
  badge: { text: Deep, variant: success }
---

## At a glance

| | |
|---|---|
| **Outcome** | A structured activity table where every value links back to the source document, page and region it came from, with exceptions resolved and approvals logged |
| **Pattern** | Parse → extract → validate → human review → load (see [agent patterns](/prompts/agent-patterns/)) |
| **AI does** | Reads layout and tables, extracts fields, proposes fixes for validation failures, drafts supplier follow-up emails |
| **AI never does** | Approves its own extractions, changes a value without a reviewer, sends anything to a supplier |
| **Time-saving estimate** | See [estimate](#time-saving-estimate) |

## When to use

- Utility bills (electricity, gas, water, district heat), fuel invoices, refrigerant service tickets, waste hauler reports.
- Supplier questionnaires and facility-level energy surveys (for example Tier 1 and Tier 2 manufacturing suppliers).
- Any long tail of documents where manual keying is the current method.

## Inputs

- [ ] Documents (PDF, scans, spreadsheets, email attachments) in an approved, access-controlled location
- [ ] Site and meter master list (site ID, meter ID, supplier, country, expected unit)
- [ ] Field specification for each document type (see template below)
- [ ] Prior-period data for continuity checks

## Workflow

### 1. Intake and fingerprinting

- Assign every file an ID and compute a **SHA-256 hash** on arrival. The hash is the document's identity in the evidence trail; if a file changes, its hash changes.
- De-duplicate by hash and by (supplier, account, period).
- Classify document type (bill, invoice, questionnaire, other) with **Prompt 3.1**.

### 2. Parse layout before extracting fields

- Convert each document to structured text with layout, tables and **bounding boxes** (page + coordinates of each element). Good parsing improves accuracy more than a cleverer prompt.
- Open-source parsers worth evaluating include [OpenDataLoader PDF](https://github.com/opendataloader-project/opendataloader-pdf) (Apache-2.0, emits bounding boxes, runs on CPU) and [Docling](https://github.com/docling-project/docling). Published layout benchmarks measure tables and reading order, **not** invoice-field accuracy, so build your own field-level test set. Check licences before use; avoid copyleft parsers for anything you may deploy to clients unless legal has approved.
- For scans, use OCR from an approved tool and keep the OCR confidence per field.

### 3. Extract fields with provenance

Run **Prompt 3.2** with the field specification. Every extracted value carries `doc_sha256`, `page` and `bbox` (or a quoted text snippet). A value without provenance is rejected automatically.

### 4. Validate deterministically

Run rules in code, not in the model:

| Rule | Example failure |
|---|---|
| Period coverage | Billing periods overlap or leave gaps for a meter |
| Unit sanity | kWh value 1,000× peer median (MWh entered as kWh) |
| Cost–quantity sanity | Implied unit price outside the expected band for the tariff and country |
| Meter continuity | Closing read ≠ next opening read |
| Site match | Meter or address not in the master list; wrong country |
| Duplicate | Same supplier, account and period already loaded |
| Negative or zero | Credit notes and corrections treated as consumption |
| Estimated reads | Bill marked "E" or "estimated" — flag, do not reject |

### 5. Exception queue with AI proposals

For each failure, **Prompt 3.3** proposes a fix with confidence, rationale and estimated tCO2e impact. **Nothing changes until a reviewer approves**, and the person who prepared the item cannot approve it (maker-checker). AI accounts are never allowed to approve.

### 6. Supplier follow-up

For issues only the supplier can resolve, **Prompt 3.4** drafts a short, specific email. A person reviews and sends it from the normal channel.

### 7. Load and lock

Approved values load into the calculation tool with their provenance. Keep the extraction log, the rule results, the proposals and the decisions; these become part of the [evidence pack](/playbooks/assurance-readiness/).

### 8. Learn

When the same correction is approved repeatedly (for example, "this supplier reports MWh in the kWh column"), turn it into a **tested deterministic rule** with its own test case and an owner. Over time, fewer items need AI or human judgement. See [codify the job](/prompts/agent-patterns/#pattern-4--codify-the-job).

## Prompts

```text title="Prompt 3.1 — Document triage"
Classify each document into one of: electricity_bill, gas_bill, water_bill, district_heat_bill,
fuel_invoice, refrigerant_service, waste_report, supplier_questionnaire, other.
Return JSON: file_id, doc_type, supplier_name (as printed), account_or_meter_ids (list),
period_start, period_end, language, confidence (0-1), notes.
If a field is not visible, return null. Do not guess.
```

```text title="Prompt 3.2 — Field extraction with provenance"
Extract the fields in FIELD_SPEC from the parsed document below.

For EVERY field return:
  field, value (as printed, no conversion), unit (as printed), page, bbox [x0,y0,x1,y1] or null,
  source_text (exact quote, max 15 words), confidence (0-1)

RULES
- Copy values exactly as printed. Do not convert units, sum lines or compute totals.
- If a bill has several meters or periods, return one record per meter per period.
- If a field is missing or illegible, return value=null and explain in notes.
- Flag estimated readings, credits, adjustments and prior-period corrections explicitly.

FIELD_SPEC: {{field_spec}}
DOC_SHA256: {{doc_sha256}}
PARSED_DOCUMENT: {{parsed_json}}
```

```text title="Prompt 3.3 — Exception fix proposal"
A validation rule failed. Propose a correction for human review.

Return: record_id, rule, proposed_action ("correct_value" | "request_from_supplier" | "accept_as_is" |
"exclude"), proposed_value (if any, with unit), rationale (max 40 words), confidence (0-1),
evidence (quote + page), needs_supplier_followup (true/false).

RULES
- Base the proposal only on the document, the master data and prior-period values provided.
- If two explanations are plausible, choose "request_from_supplier".
- Never propose a value you cannot point to in the evidence.
- If the supplier objects to your proposal without new evidence, keep your recommendation and say so.

FAILURE: {{failure_json}}  CONTEXT: {{context_json}}
```

```text title="Prompt 3.4 — Supplier follow-up email (draft for review)"
Draft a short, polite email to {{supplier_contact_role}} at {{supplier_name}} about the issues below.
- One numbered item per issue, each with: what we saw (quote + page), what we need, and by when ({{due_date}}).
- Plain English, under 150 words, no jargon, no blame.
- Do not mention internal systems, other suppliers or emissions estimates.
ISSUES: {{issues_json}}
```

## Human review checkpoints

| Checkpoint | Who | What |
|---|---|---|
| Field spec sign-off | Workflow owner | Fields, units and rules per document type |
| Exception decisions | Reviewer (not the preparer) | Approve, reject or escalate each proposal |
| Sample re-performance | Senior | Re-key 5–10% of auto-passed records from the source; track error rate |
| Load approval | Manager | Coverage by site and month; open exceptions and their impact |

## Quality and risk controls

- **Provenance or reject:** no page/bbox/snippet → no load.
- **Measure field-level accuracy** on a labelled set of 50–100 documents per document type before going live and after every prompt or parser change. Report precision and recall per field.
- **Pushback test:** re-run proposals with a supplier-style objection ("our meter is correct"); proposals that flip without new evidence go to a person by default.
- **Data handling:** supplier documents may contain personal data (names, addresses, account numbers). Use only approved tools and minimise what you send.
- **Trace every AI call** (inputs, model and version, output, reviewer decision) in a local log whose hash you keep with the evidence.

## Output template

| record_id | site_id | meter_id | period_start | period_end | quantity | unit | estimated? | doc_sha256 | page | bbox / snippet | rule results | decision | decided_by | decided_at |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

## Time-saving estimate

:::note[Estimate, not a measured result]
**Planning estimate:** 40–70% less keying and checking time per document once the field spec, rules and golden set exist; little or no saving in the first cycle while these are built.

**Assumptions:** mostly digital PDFs from a stable set of suppliers; a reviewer clears exceptions daily; sample re-performance continues. Handwritten or low-quality scans reduce the saving sharply. Replace with measured numbers.
:::

## Related

[Agent patterns](/prompts/agent-patterns/) · [Evals for prompts](/prompts/evals/) · [Confidentiality](/quality-risk/confidentiality-data-handling/) · [Ideas inbox: extraction with lineage](/ideas/inbox/)
