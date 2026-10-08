---
title: "P-11 · Assurance readiness & evidence packs"
description: Get a client's sustainability information ready for limited or reasonable assurance — controls, lineage and a PBC-indexed evidence pack generated from the data, not assembled by hand.
reviewed: 2026-10-07
owner: Workflow owner — Assurance readiness
tags: [assurance, evidence-packs, quality]
status: stable
reviewEveryMonths: 3
sidebar:
  order: 11
  label: "P-11 Assurance readiness"
  badge: { text: Deep, variant: success }
---

:::caution[Independence first]
Readiness work is an advisory service. If your firm is (or may become) the client's assurance provider, readiness services may be restricted or prohibited — for example, designing controls or preparing the information you would later assure. Confirm with your independence team before starting. See [Independence considerations](/quality-risk/independence-assurance/).
:::

## At a glance

| | |
|---|---|
| **Outcome** | Readiness assessment, control descriptions, data lineage for each reported metric, and an evidence pack indexed to a PBC (prepared-by-client) list with file hashes |
| **Standards the assurer may use** | ISSA 5000 (IAASB; effective for periods beginning on or after 15 Dec 2026, early application permitted), ISAE 3000 (Revised) and ISAE 3410 (GHG statements), ISO 14064-3 (GHG verification), AICPA attestation standards for some US engagements. See the [tracker](/reference/regulatory-tracker/#assurance-standards) |
| **AI does** | Builds the metric inventory and lineage maps from documents and systems; drafts control narratives; generates PBC lists; checks the pack for completeness and broken links |
| **AI never does** | Concludes that the information is "assurance-ready" on its own; alters evidence |
| **Time-saving estimate** | See [estimate](#time-saving-estimate) |

## What assurers ask for (and how to have it ready)

| Assurer question | Ready answer |
|---|---|
| "Where did this number come from?" | Lineage per metric: source document/system → extraction → calculation (factor, version, row) → aggregation → disclosure, with references |
| "What criteria did you apply?" | Reporting criteria / basis of preparation document: boundaries, definitions, methods, factors, estimates |
| "How do you know it is complete?" | Completeness controls: site and supplier lists reconciled to finance; period coverage reports |
| "Who reviewed it?" | Maker-checker evidence: preparer, reviewer, date, what was checked |
| "What changed?" | Change log: restatements, methodology changes, significance tests |
| "Was AI used? How was it controlled?" | AI use register: where AI touched the process, the tool and version, the human checkpoint, and evaluation evidence (see below) |

## Workflow

### 1. Scope and criteria (1–2 days)
- List the metrics in scope for assurance (for example Scope 1, 2 and selected Scope 3 categories, energy, water).
- **Prompt 11.1** drafts the basis of preparation for each metric from existing methodology notes; gaps are marked TO CONFIRM.

### 2. Lineage mapping (2–4 days)
- **Prompt 11.2** builds a lineage map per metric from process walkthrough notes and system documentation.
- Validate by walking one real item end to end per metric (a "walkthrough"), with screenshots or exports.

### 3. Control assessment (2–3 days)
- Identify key controls: completeness, accuracy (factor selection, unit conversion), cut-off, review and approval, IT general controls over the systems used, and controls over AI-assisted steps.
- **Prompt 11.3** drafts control descriptions in a standard format (objective, activity, frequency, owner, evidence). People confirm with control owners.

### 4. Evidence pack (1–2 days, then regenerated each period)
- Build the PBC list (**Prompt 11.4**) and assemble evidence against it.
- **Hash every file** (SHA-256) into a manifest, so the assurer can verify nothing changed after the pack was issued.
- Generate as much as possible **from the system of record** (lineage exports, factor register, ledger or audit log extracts) rather than by hand. A pack that can be regenerated is a pack that stays consistent.
- **Prompt 11.5** checks the pack: every PBC item has evidence, every metric has lineage, every file in the manifest exists and is referenced.

### 5. Dry run (1 day)
- Pick 10–20 items an assurer might select and trace them using only the pack. Fix anything that needs someone to "just explain it".

## Evidence pack — standard contents

| # | Item | Typical source |
|---|---|---|
| 01 | PBC index (item, description, owner, file, hash) | Generated |
| 02 | Basis of preparation / reporting criteria | Methodology |
| 03 | Metric lineage (per metric) | Calculation tool export |
| 04 | Emission factor register (publisher, dataset, version, table, row, file hash) | Calculation tool |
| 05 | Sources manifest (all input documents with hashes) | Intake log |
| 06 | Control matrix and evidence of operation | Control owners |
| 07 | Review and sign-off records | Workflow tool |
| 08 | Estimates and extrapolations log (method, share of total) | Calculation tool |
| 09 | Restatements and significance tests | Methodology |
| 10 | Reconciliations (finance to activity; disclosure to calculation output) | Tie-out |
| 11 | Anomaly and exception log with resolutions | Validation rules |
| 12 | AI use register and evaluation scorecards | AI lead |
| 13 | Manifest (SHA-256 of every file above) | Generated |

## Controls over AI-assisted steps (assurers will ask)

- **Register** every place AI is used in producing reported information: purpose, tool, version, inputs, output, human checkpoint.
- **Evaluation evidence:** accuracy on a labelled test set (for example field-level precision/recall for extraction; agreement with reviewers for classification) — run before use and after changes. See [Evals for prompts](/prompts/evals/).
- **Change control:** prompt, threshold or model changes are accepted only if the evaluation does not regress; the attempt and result are logged.
- **Traceability:** each AI-assisted value keeps the trace (input, output, model, reviewer decision).
- **No write path:** AI proposes; a person approves; the system enforces it.

## Prompts

```text title="Prompt 11.1 — Basis of preparation draft"
Draft a basis of preparation for each metric in METRICS using only METHODOLOGY_NOTES and CALC_LOG.
For each metric: definition · boundary · reporting period · data sources · calculation method · factors (source,
version) · estimates and their share · exclusions · changes vs prior period. Mark anything not evidenced TO CONFIRM.
```

```text title="Prompt 11.2 — Lineage map"
From the walkthrough notes and system documentation attached, build a lineage map for {{metric}}:
step number · system or document · transformation (extract / convert / calculate / aggregate / disclose) ·
control at this step (if any) · evidence available · gap. Output as a table plus a one-line text flow
("Utility bill PDF → extraction tool → activity table → calc tool → disclosure table").
Do not assume steps that are not described; list questions instead.
```

```text title="Prompt 11.3 — Control description"
Write a control description for the activity described below in this format:
Control ID · Objective (the risk it addresses) · Control activity (who does what, using what) · Frequency ·
Type (preventive/detective; manual/automated/IT-dependent) · Evidence of operation · Owner.
Use precise, testable language ("Reviewer compares… and signs off in…"), not intentions ("ensures accuracy").
```

```text title="Prompt 11.4 — PBC list"
Create a PBC list for limited assurance over METRICS, organised by: governance & criteria · completeness ·
accuracy (by source type) · cut-off · estimates · IT systems · AI-assisted steps · disclosure tie-out.
For each item: ID · description · period · format · owner (role) · due date {{due_date}}.
```

```text title="Prompt 11.5 — Pack completeness check"
Compare PBC_INDEX, MANIFEST and the file listing. Report: PBC items with no file · files not in the manifest ·
manifest entries with no file · metrics without a lineage document · documents referenced in lineage but missing.
Report only; do not modify anything.
```

## Review checkpoints

| Checkpoint | Who | What |
|---|---|---|
| Criteria | Manager + client | Basis of preparation complete and consistent with disclosures |
| Lineage | Senior | One real walkthrough per metric |
| Controls | Manager + control owners | Descriptions accurate; evidence of operation exists |
| Dry run | Engagement leader | 10–20 sample traces using only the pack |

## Time-saving estimate

:::note[Estimate, not a measured result]
**Planning estimate:** first-year readiness effort roughly unchanged (the work is in fixing processes); **second and later periods** 40–60% less effort assembling the pack when it is generated from the system of record.

**Assumptions:** a calculation tool that exports lineage and factor registers; stable scope; client control owners engaged. Replace with measured numbers.
:::

## Related

[P-12 Assurance testing](/playbooks/assurance-testing/) · [Tool approval & documentation](/quality-risk/tool-approval-documentation/) · [Reference build: evidence pack](/reference-build/emissions-prototype/)
