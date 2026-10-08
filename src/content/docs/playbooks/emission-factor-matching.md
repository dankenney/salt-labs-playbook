---
title: "P-02 · Emission factor matching & spend-to-activity mapping"
description: Use AI to propose emission factor candidates and convert spend to activity data — with provenance, vintage rules and thresholds that a reviewer can test.
reviewed: 2026-10-07
owner: Workflow owner — GHG accounting
tags: [emission-factors, ghg-accounting, scope-3]
status: draft
sidebar:
  order: 2
  label: "P-02 Factor matching"
---

## At a glance

| | |
|---|---|
| **Outcome** | A factor register where every activity is matched to a published factor with a documented rationale, and a log of spend lines converted to physical activity where possible |
| **AI does** | Proposes 3–5 candidate factors from a provided factor library with reasons; suggests spend-to-activity conversions (e.g. fuel spend → litres using a price source you supply); flags mismatched units and geographies |
| **AI never does** | Supplies a factor value from memory; makes the final selection |
| **Time-saving estimate** | 30–50% less time on factor matching for long activity lists (estimate; assumes a structured factor library and a reviewer who knows the sources) |

## When to use

- Long activity or spend lists that need factors from several sources (for example US EPA GHG Emission Factors Hub, UK DESNZ/Defra conversion factors, eGRID, IEA under licence, EEIO tables, ecoinvent under licence).
- Moving categories from spend-based to activity-based methods to improve data quality.

## Workflow

1. **Load the factor library as a file** (CSV or spreadsheet) with columns: factor_id, publisher, dataset, version, published date, table, row, description, unit, geography, gases or CO2e, GWP basis. The AI may only choose from this file.
2. **Apply the vintage rule first** (for example: latest edition published on or before year-end + N days). Remove ineligible versions before matching.
3. Run **Prompt 2.1** on the activity list. For each item, the AI returns ranked candidates with a match rationale and a unit-compatibility check.
4. **Deterministic checks:** unit dimension match, geography match (country → grid subregion where relevant), and year. Reject any candidate that fails, regardless of confidence.
5. **Reviewer selection:** accept, override or escalate. Record the reason for overrides; they become rules for next time (see [codify the job](/prompts/agent-patterns/#pattern-4--codify-the-job)).
6. **Spend → activity** (optional, **Prompt 2.2**): where the client can supply unit prices or quantities, convert spend to physical units, keeping the price source and date.

```text title="Prompt 2.1 — Factor candidate matching"
Match each activity below to emission factors from FACTOR_LIBRARY only.

For each activity return up to 3 candidates as JSON:
  activity_id, factor_id, match_quality ("exact" | "close" | "proxy"), unit_compatible (true/false),
  geography_match ("exact" | "regional" | "global"), rationale (max 25 words)

RULES
- Never output a factor value or a factor_id that is not in FACTOR_LIBRARY.
- Prefer, in order: same activity and unit → same geography → most recent eligible version.
- If no reasonable match exists, return "NO_MATCH" and say what data would allow a match.
- Flag combustion vs lifecycle factor mismatches (e.g. a lifecycle grid factor used for Scope 2).

FACTOR_LIBRARY: {{factor_library_csv}}
ACTIVITIES: {{activities_csv}}
```

```text title="Prompt 2.2 — Spend-to-activity conversion proposal"
For each spend line, propose whether it can be converted to a physical quantity using PRICE_SOURCES.
Return: line_id, convertible (yes/no), quantity_formula (as text, e.g. "amount / price_per_litre"),
price_source_id, assumptions, risk_of_error (low/med/high).

RULES
- Do not compute the final quantity; the calculation tool will apply your formula.
- Only use prices in PRICE_SOURCES, matched by product, geography and period.
- If prices include tax or delivery, say so.
```

## Review checkpoints and controls

- [ ] Every selected factor resolves to a file, table and row you can open
- [ ] Combustion factors for Scope 1 and 2; well-to-tank and T&D in Category 3; lifecycle factors labelled as such
- [ ] Scope 2 market-based uses contractual instruments that meet the Scope 2 Quality Criteria, then residual mix (for example AIB for Europe, Green-e for the US), then location-based as last resort, flagged
- [ ] EEIO factors adjusted for currency and inflation to the factor's base year, with the index source recorded
- [ ] GWP basis stated (for example IPCC AR5 or AR6, 100-year) and consistent with the reporting framework
- [ ] Overrides logged with reasons; recurring overrides turned into rules

## Output template

| activity_id | description | factor_id | publisher / dataset / version | table · row | unit | GWP basis | match quality | selected by | reason |
|---|---|---|---|---|---|---|---|---|---|

## Related

[P-01 GHG inventory](/playbooks/ghg-inventory-scope-3/) · [Reference build: factor provenance](/reference-build/emissions-prototype/) · [Prompt library](/prompts/ghg-and-factors/)
