---
title: "P-10 · EU Taxonomy alignment"
description: Screen activities for eligibility, test technical screening criteria, DNSH and minimum safeguards, and draft KPI disclosures — using the simplified 2026 rules.
reviewed: 2026-10-07
owner: Workflow owner — CSRD
tags: [eu-taxonomy, csrd, regulatory]
status: draft
reviewEveryMonths: 3
sidebar:
  order: 10
  label: "P-10 EU Taxonomy"
---

## What changed (checked 7 Oct 2026)

Commission Delegated Regulation **(EU) 2026/73** simplified Taxonomy reporting. It applies from 1 January 2026 (covering FY2025 reports), with an option to apply the previous rules in full for FY2025. For non-financial undertakings it introduced a **materiality threshold**: activities that together are below 10% of the relevant KPI denominator (turnover, CapEx or OpEx) may be excluded from the eligibility and alignment assessment, with the excluded amounts disclosed as non-material; OpEx may be omitted if not material to the business model. Sources: [EUR-Lex 2026/73](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX%3A32026R0073), [BDO summary](https://www.bdo.global/en-gb/news/ifrs-news/eu-publishes-delegated-act-introducing-simplified-eu-taxonomy-requirements). Read the official text for the precise conditions.

## At a glance

| | |
|---|---|
| **Outcome** | Activity inventory mapped to Taxonomy activities, eligibility and alignment assessment with evidence, KPI tables and narrative |
| **AI does** | Maps business activities and NACE codes to candidate Taxonomy activities; extracts technical screening criteria; drafts evidence requests and DNSH assessments |
| **AI never does** | Conclude alignment; compute KPIs (finance systems and the reporting tool do) |
| **Time-saving estimate** | 25–40% less time on activity mapping and criteria research (estimate) |

## Workflow

1. **Activity inventory** from segment reporting, revenue streams and capex projects.
2. **Prompt 10.1:** propose candidate Taxonomy activities per business activity using the official activity descriptions (load them as a file).
3. **Materiality threshold:** finance calculates the shares; decide exclusions under the 10% rule and document them.
4. **Technical screening criteria (Prompt 10.2):** extract the criteria for each eligible activity and generate the evidence checklist.
5. **DNSH and minimum safeguards:** assess with evidence; minimum safeguards involve human rights, bribery/corruption, taxation and fair competition processes.
6. **KPIs:** computed from finance data in the reporting tool; AI drafts the accompanying narrative from the computed tables.

```text title="Prompt 10.1 — Activity mapping"
Map each business activity in ACTIVITIES to candidate EU Taxonomy activities from TAXONOMY_ACTIVITIES (official
descriptions provided). Return: business activity · candidate activity number and name · environmental objective ·
match rationale · confidence · information needed to confirm. Do not include activities not in the provided list.
```

```text title="Prompt 10.2 — Screening criteria checklist"
For Taxonomy activity {{activity_id}} under objective {{objective}}, extract from the provided delegated act text:
substantial contribution criteria · DNSH criteria per objective · any thresholds with units · referenced standards.
Turn each into an evidence request (document, owner, period). Quote the criteria with article/annex references.
```

## Controls

- [ ] Delegated act versions recorded; transition option (old vs new rules) documented
- [ ] Materiality-threshold calculation done by finance and reviewed
- [ ] Every alignment conclusion supported by evidence against each criterion
- [ ] KPIs reconcile to the financial statements
