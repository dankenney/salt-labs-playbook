---
title: "P-04 · CSRD double materiality assessment"
description: Run a proportionate, evidence-backed double materiality assessment under the revised ESRS — AI builds the long-list and drafts rationale; people make every materiality call.
reviewed: 2026-10-07
owner: Workflow owner — CSRD
tags: [csrd, esrs, materiality]
status: stable
reviewEveryMonths: 3
sidebar:
  order: 4
  label: "P-04 Double materiality"
  badge: { text: Deep, variant: success }
---

## At a glance

| | |
|---|---|
| **Outcome** | A documented DMA: context, IRO (impact, risk, opportunity) list, assessment with evidence, thresholds, stakeholder input, conclusions per topic, and the audit trail behind them |
| **Basis** | ESRS 1 and ESRS 2 as revised by Commission Delegated Regulation (EU) 2026/1563 (mandatory for FYs beginning on or after 1 Jan 2027; optional earlier). See the [regulatory tracker](/reference/regulatory-tracker/) |
| **AI does** | Reads strategy, value chain and sector material; proposes IROs with sources; drafts severity/likelihood rationale; synthesises stakeholder input; drafts the DMA narrative |
| **AI never does** | Scores or concludes materiality on its own; sets thresholds; invents stakeholder views |
| **Time-saving estimate** | See [estimate](#time-saving-estimate) |

## What changed with the revised ESRS (why this playbook is "proportionate")

The double materiality principle is unchanged. The revised ESRS 1 makes the process more focused and proportionate. According to the Commission's adopted text and public summaries ([EUR-Lex C(2026)5010](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=intcom%3AC%282026%295010); [PwC Viewpoint deep dive](https://viewpoint.pwc.com/gx/en/pwc/in-depth/2026/id_int202603.html)), an undertaking:

- is **not required to assess every possible IRO** across all operations and the value chain;
- may use **reasonable and supportable information available without undue cost or effort**;
- may reach conclusions **top-down** (from strategy, business model, sector, geographies and value-chain features) or **bottom-up** (IRO by IRO);
- need not evaluate every time horizon or every severity characteristic if further work would not change the conclusion.

:::caution[Check the final text and transition options]
For FY2026, entities may choose between ESRS Set 1, early adoption of the revised ESRS, or a hybrid with selected reliefs (as summarised in public technical updates). Confirm the client's choice before designing the DMA. Always read the requirement in the official text; summaries, including this page, can be wrong.
:::

## Inputs

- [ ] Strategy and business model description, segment reporting, annual report
- [ ] Value chain map (upstream, own operations, downstream) with geographies
- [ ] Prior DMA (if any), risk register (ERM), stakeholder engagement records, grievance data
- [ ] Sector material: ESRS sector-agnostic topics list (ESRS 1 Appendix), recognised sector guidance, peer disclosures
- [ ] Thresholds and scales agreed with the client (or to be agreed)

## Workflow

### Step 1 — Context and approach (1–2 days)

1. **Prompt 4.1** builds a context brief from the documents: activities, value chain, geographies, key relationships — every statement cited.
2. **Checkpoint A:** the team and the client choose top-down, bottom-up or a mix per topic, and document why.

### Step 2 — IRO long-list (1–2 days)

1. **Prompt 4.2** proposes IROs per ESRS topic and sub-topic, each tied to a value-chain location and a source (client document, sector reference or peer disclosure).
2. De-duplicate and merge with the client's ERM risks. Keep a mapping so financial-materiality conclusions stay consistent with the risk register.
3. **Checkpoint B:** the team removes irrelevant IROs and adds missing ones from interviews. Track adds and removes with reasons.

### Step 3 — Evidence-backed assessment (3–5 days)

1. For each IRO, **Prompt 4.3** drafts a rationale for scale, scope, irremediability and likelihood (impacts), and magnitude and likelihood (financial effects), quoting evidence.
2. **Scores are entered by people** in the assessment tool, not by the model. The AI may suggest a band with its rationale; the assessor records the decision and any change.
3. Run a **consistency check** (Prompt 4.4): similar IROs with very different scores, IROs scored without evidence, conflicts with the ERM register.

### Step 4 — Stakeholder input (parallel)

1. Use AI to cluster and summarise interview notes, survey free text and grievance themes, **with quotes and counts**. Never generate or paraphrase stakeholder views beyond the source.
2. **Checkpoint C:** a person confirms that each summary reflects the source notes (sample at least 20%).

### Step 5 — Conclusions and documentation (1–2 days)

1. Apply thresholds and draw conclusions per topic (material / not material), noting where entity-specific disclosures are needed.
2. **Prompt 4.5** drafts the DMA process description for ESRS 2 from the assessment log.
3. **Checkpoint D:** client management approves; engagement leader signs off the deliverable.

## Prompts

```text title="Prompt 4.1 — Context brief"
Prepare a double materiality context brief for {{client_name}} using ONLY the attached documents.
Sections: Business model and strategy · Products/services and revenue split · Own operations (sites, workforce,
geographies) · Upstream value chain (key inputs, sourcing countries, supplier tiers) · Downstream (customers,
use phase, end of life) · Known sustainability incidents or controversies · Existing policies and targets.
Rules: cite document and page for each point; write "NOT IN SOURCES" where information is missing and list
the questions to ask management at the end.
```

```text title="Prompt 4.2 — IRO long-list"
Propose a long-list of impacts, risks and opportunities (IROs) for {{client_name}} across the ESRS topics
(E1–E5, S1–S4, G1) and entity-specific topics.

For each IRO return a row: id · ESRS topic / sub-topic · type (actual/potential negative impact, positive impact,
risk, opportunity) · description (one sentence) · value-chain location (upstream/own ops/downstream) ·
geography · time horizon (short/medium/long) · source (document + page, or "sector reference: <name>") ·
confidence (low/med/high).

Rules:
- Every IRO needs a source. Do not include an IRO you cannot source.
- Do not assess materiality. This is a long-list for the team to edit.
- Flag IROs that also appear in the ERM register: {{erm_register}}.
```

```text title="Prompt 4.3 — Assessment rationale draft"
For the IRO below, draft an assessment rationale for the assessor. Do not decide the score.

Impacts: describe evidence on scale, scope, irremediability (negative impacts only) and likelihood (potential impacts).
Financial: describe evidence on potential magnitude and likelihood of effects on cash flows, financial position,
performance, access to finance or cost of capital, over short/medium/long term.
For each element: quote evidence with source and page; state what evidence is missing; suggest a band
(low/medium/high) with one-line reasoning, labelled "SUGGESTION — assessor decides".
IRO: {{iro_row}}  EVIDENCE: {{evidence_bundle}}  SCALES: {{scoring_scales}}
```

```text title="Prompt 4.4 — Consistency review"
Review the attached DMA assessment table. Report, as a table:
1. IROs with similar descriptions but scores that differ by two or more bands.
2. Scores entered without any cited evidence.
3. Financial-materiality conclusions that conflict with the ERM register ratings.
4. Topics concluded "not material" where an IRO scored high on either dimension.
5. Positive impacts or opportunities that were never assessed.
Do not change any score. List the row ids and the specific inconsistency.
```

```text title="Prompt 4.5 — DMA process description (ESRS 2)"
Draft the description of the process to identify and assess material IROs for the sustainability statement,
using ONLY the attached assessment log, thresholds memo and stakeholder engagement log.
Cover: approach (top-down / bottom-up per topic and why) · value-chain coverage · stakeholder engagement ·
thresholds and how they were set · link to risk management · how conclusions were approved · changes vs prior year.
Rules: no numbers or claims that are not in the attached files; mark gaps "TO CONFIRM"; concise, factual tone.
```

## Human review checkpoints

| Checkpoint | Who | What |
|---|---|---|
| A — Approach | Manager + client | Top-down vs bottom-up choice per topic, documented |
| B — Long-list | Team | IROs added and removed, with reasons; ERM mapping |
| C — Stakeholder synthesis | Senior | Summaries match source notes (≥20% sample) |
| D — Conclusions | Client management + engagement leader | Thresholds applied consistently; conclusions approved |

## Quality and risk controls

- **Every IRO and every rationale is sourced.** Unsourced items are deleted, not "kept for completeness".
- **Scores are human entries** with an audit trail of who changed what and why.
- **No synthetic stakeholder voice.** AI summarises real input only, with quotes and counts.
- **Consistency with ERM and financial statements** is checked and differences explained.
- **Retain the assessment log** as evidence; an assurer will ask how the conclusions were reached.

## Output template

| IRO id | Topic | Type | Value chain | Evidence (source, page) | Impact severity (scale/scope/irremediability) | Likelihood | Financial magnitude | Likelihood | Impact material? | Financial material? | Conclusion | Decided by / date |
|---|---|---|---|---|---|---|---|---|---|---|---|---|

## Time-saving estimate

:::note[Estimate, not a measured result]
**Planning estimate:** 25–40% less preparer time on context research, long-list building and documentation; little change to workshop and client-decision time, which is where the judgement sits.

**Assumptions:** good access to strategy and value-chain documents; an approved assistant that can read long PDFs; scoring done in a structured tool. Replace with measured numbers.
:::

## Related

[P-05 ESRS gap analysis](/playbooks/esrs-gap-analysis/) · [Regulatory tracker](/reference/regulatory-tracker/) · [Citation discipline](/quality-risk/citation-discipline/)
