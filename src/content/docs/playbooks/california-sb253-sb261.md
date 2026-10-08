---
title: "P-07 · California SB 253 / SB 261"
description: Readiness, drafting and assurance-preparation workflow for California's climate disclosure laws — with the status as of October 2026.
reviewed: 2026-10-07
owner: Workflow owner — US disclosure
tags: [california, ghg-accounting, assurance, regulatory]
status: stable
reviewEveryMonths: 1
sidebar:
  order: 7
  label: "P-07 SB 253 / SB 261"
  badge: { text: Deep, variant: success }
---

## Status snapshot (checked 7 Oct 2026)

| Law | What it requires | Status | Source |
|---|---|---|---|
| **SB 253** (Climate Corporate Data Accountability Act) | US entities doing business in California with total annual revenue above $1bn report Scope 1 and 2 emissions, later Scope 3, with assurance phasing in | **In effect.** First report (prior fiscal-year Scope 1 and 2) due **10 Nov 2026**, extended from 10 Aug 2026 in CARB's revised Initial Regulation, which was resubmitted to the Office of Administrative Law on 21 Sep 2026 and was pending approval at the time of checking. CARB guidance indicates limited assurance is not required in the first year. Scope 3 reporting begins in 2027. | [CARB 2026 guidance](https://ww2.arb.ca.gov/sites/default/files/2026-09/2026_SB253_Reporting_Guidance.pdf); [Ropes & Gray, Sep 2026](https://www.ropesgray.com/en/insights/viewpoints/2026/09/102o3aw/california-sb-253-261-update-carbs-2026-initial-regulation-nears-the-finish-li); [White & Case](https://www.whitecase.com/insight-alert/california-climate-disclosure-laws-carb-releases-optional-intake-platform-and) |
| **SB 261** (Climate-Related Financial Risk Act) | US entities doing business in California with revenue above $500m publish a biennial climate-related financial risk report | **Enforcement enjoined** by the Ninth Circuit on 18 Nov 2025 pending appeal. Oral argument was heard in January 2026; no merits ruling had been reported as of early October 2026. Voluntary submissions are possible via CARB's docket. | [Jones Day, Nov 2025](https://www.jonesday.com/en/insights/2025/11/ninth-circuit-enjoins-sb-261s-climaterelated-risk-reporting-requirements-declines-to-enjoin-sb-253); [Foley & Lardner, Jan 2026](https://www.foley.com/insights/publications/2026/01/ninth-circuit-hears-oral-argument-in-challenge-to-california-climate-disclosure-l/) |

:::danger[Verify before advising]
This area is moving quickly (regulation approval, litigation, CARB guidance). Re-check CARB's SB 253/SB 261 pages and the [regulatory tracker](/reference/regulatory-tracker/) before giving any client a date. This page is not legal advice.
:::

## At a glance

| | |
|---|---|
| **Outcome** | Applicability memo, Scope 1–2 report package ready for CARB submission, assurance-readiness file, and (optionally) a voluntary SB 261 report aligned to TCFD/IFRS S2 |
| **AI does** | Applicability fact-finding from public filings; maps existing GHG data to CARB's reporting fields; drafts methodology and boundary notes; builds the PBC list for the future assurer |
| **AI never does** | Determine "doing business in California" (legal question); calculate the reported figures |
| **Time-saving estimate** | See [estimate](#time-saving-estimate) |

## Workflow — SB 253

### 1. Applicability (1 day)
- **Prompt 7.1** gathers facts from public filings: legal form, US formation, revenue, California presence. The "doing business in California" and entity-structure questions go to counsel; the AI only collects facts with citations.
- Decide which entity reports (parent vs subsidiaries) per CARB's regulation and guidance.

### 2. Inventory readiness (1–3 days)
- Confirm Scope 1 and 2 are prepared under the GHG Protocol, for the prior fiscal year, with location- and market-based Scope 2.
- Re-use the [GHG inventory playbook](/playbooks/ghg-inventory-scope-3/) controls: factor provenance, estimates log, tie-out.
- Note CARB's first-year enforcement approach (good-faith reporting; specific relief for entities that were not collecting data as of 5 Dec 2024, per CARB's enforcement notice and guidance).

### 3. Report package (1–2 days)
- **Prompt 7.2** maps the inventory output to the fields and attachments in CARB's guidance and intake platform.
- **Prompt 7.3** drafts the methodology statement from the calculation log.
- Run the tie-out: every figure in the package matches the calculation of record, and Scope 1/2 match what the company reports elsewhere (CDP, sustainability report, CSRD if any), or the difference is explained.

### 4. Assurance readiness (ongoing)
- Even where first-year assurance is not required, build the file now: evidence for each material source, control descriptions, and the PBC index from the [assurance readiness playbook](/playbooks/assurance-readiness/). Limited assurance is phased in and reasonable assurance later under the statute.

### 5. Scope 3 for 2027
- Start the [Scope 3 screening](/playbooks/ghg-inventory-scope-3/#step-4--scope-3-screening-across-all-15-categories-24-days) now; track CARB rulemaking on Scope 3 timing and safe harbour.

## Workflow — SB 261 (voluntary while enjoined)

- If the client chooses to publish, base the report on TCFD recommendations or IFRS S2 (both referenced in the statute) and reuse the [IFRS S2 readiness](/playbooks/ifrs-s2-readiness/) mapping.
- Keep a decision memo: publish voluntarily, prepare but hold, or pause — with the litigation status and date.

## Prompts

```text title="Prompt 7.1 — Applicability fact pack (for counsel review)"
Using ONLY the public filings attached (10-K, annual report, state registrations), compile a fact pack for
{{entity_name}}: state of formation · entity type · total annual revenue for the last fiscal year (quote and page) ·
California operations, sales, property or payroll mentioned · subsidiaries formed in the US.
Rules: cite every fact; do not conclude whether SB 253 or SB 261 applies; list facts counsel would need that
are not in the filings.
```

```text title="Prompt 7.2 — Map inventory to CARB reporting fields"
Map the inventory output (attached) to the reporting fields in CARB's SB 253 guidance (attached, version {{guidance_date}}).
For each field: value reference (cell/row in the inventory output — do not retype numbers) · status (ready / needs
input / not applicable) · note. List any field in the guidance with no matching data.
```

```text title="Prompt 7.3 — Methodology statement"
Draft the SB 253 methodology statement from the calculation log and factor register. Include: reporting period,
organisational boundary and consolidation approach, GHG Protocol standards applied, Scope 2 methods, emission factor
sources and versions, GWP basis, estimates and their share, exclusions, changes from prior disclosures.
Rules: no numbers that are not referenced to the log; mark gaps TO CONFIRM.
```

## Review checkpoints and controls

| Checkpoint | Who | What |
|---|---|---|
| Applicability | Counsel + engagement leader | Legal conclusion on scope and reporting entity |
| Inventory | Senior | Factors, estimates, boundary consistency |
| Package tie-out | Manager | Every figure ties to the calculation of record and to other public disclosures |
| Submission | Client | Client submits; firm does not submit on the client's behalf unless engaged and authorised to |

## Time-saving estimate

:::note[Estimate, not a measured result]
**Planning estimate:** 25–40% less time preparing the first-year package where a GHG Protocol inventory already exists; minimal saving where the inventory itself must be built (use P-01's estimate).

**Assumptions:** existing inventory in a structured tool; CARB guidance stable; counsel available for applicability. Replace with measured numbers.
:::

## Related

[P-01 GHG inventory](/playbooks/ghg-inventory-scope-3/) · [P-11 Assurance readiness](/playbooks/assurance-readiness/) · [Regulatory tracker](/reference/regulatory-tracker/#california)
