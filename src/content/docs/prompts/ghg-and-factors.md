---
title: "Prompts: GHG accounting & factors"
description: Reusable prompts for inventories, factor matching, extraction, anomaly review and variance explanations.
reviewed: 2026-10-07
owner: Workflow owner — GHG accounting
tags: [prompts, ghg-accounting, emission-factors, supplier-data]
status: stable
sidebar:
  order: 1
---

Prompts embedded in playbooks: [P-01 inventory (1.1–1.5)](/playbooks/ghg-inventory-scope-3/#prompts) · [P-02 factor matching (2.1–2.2)](/playbooks/emission-factor-matching/) · [P-03 extraction (3.1–3.4)](/playbooks/supplier-data-extraction/#prompts). The prompts below are additional, general-purpose ones.

```text title="G-1 — Anomaly review of an activity dataset"
You are reviewing an activity dataset before calculation. Do not calculate emissions.
For the attached table, list records that may be wrong, grouped by: unit magnitude (≥ 50× peer median for the same
activity type), duplicates (same site, period, quantity), period gaps or overlaps by site, negative or zero values,
country/site mismatches, estimated values without a method. For each: record_id · issue · evidence (values) ·
suggested question for the data owner. Explain the peer grouping you used.
DATA: {{activity_table_csv}}
```

```text title="G-2 — Variance explanation from linked data"
Explain the change in {{metric}} between {{period_1}} and {{period_2}} using ONLY the bridge table attached
(driver, contribution in tCO2e, evidence reference). Rank drivers by absolute contribution. Separate real changes
(activity, efficiency, energy mix) from methodology or factor changes and from boundary changes.
If the bridge does not fully explain the change, state the unexplained amount from the table — do not speculate.
```

```text title="G-3 — Scope 2 instrument quality check"
For each contractual instrument in INSTRUMENTS (type, generator location, vintage, market, volume, retirement
evidence, claimed site), check against the GHG Protocol Scope 2 Quality Criteria as summarised in CRITERIA.
Return: instrument_id · criterion · pass/fail/unclear · evidence · note. Flag instruments claimed for more than one
site or market, vintages outside the allowed window, and missing retirement or cancellation evidence.
```

```text title="G-4 — Double-counting screen"
Given the Scope 3 spend classification and the activity datasets (energy, fuel, travel, freight), list potential
double counts: spend lines that duplicate measured activity, upstream and downstream transport counted twice,
Scope 2 losses also in Category 3, capital goods also in purchased goods. Return line references from both
datasets and the suggested treatment. Do not change any data.
```

```text title="G-5 — Methodology change impact memo"
Draft a methodology change memo using the before/after calculation outputs attached: what changed (factor source,
version, method), why, impact per scope and on the base year (copy figures from the outputs), whether the
recalculation policy threshold of {{threshold}} is exceeded (compare the provided impact percentage only),
and the proposed disclosure wording. Mark the restatement decision "for management decision".
```
