---
title: "P-01 · GHG inventory build & Scope 3 screening"
description: Build a GHG Protocol inventory and a defensible Scope 3 screening with AI handling the reading, mapping and drafting — and a calculation tool handling every number.
reviewed: 2026-10-07
owner: Workflow owner — GHG accounting
tags: [ghg-accounting, scope-3, emission-factors]
status: stable
sidebar:
  order: 1
  label: "P-01 GHG inventory & Scope 3"
  badge: { text: Deep, variant: success }
---

## At a glance

| | |
|---|---|
| **Outcome** | Boundary memo, data request, Scope 1–2 inventory, Scope 3 screening across all 15 categories with a hotspot view, methodology notes and a data-quality improvement plan |
| **Standards** | GHG Protocol Corporate Standard, Scope 2 Guidance, Corporate Value Chain (Scope 3) Standard and its technical calculation guidance |
| **AI does** | Reads prior reports and documents; drafts the boundary memo and data request; classifies spend lines; maps activities to factor candidates; drafts methodology text; flags gaps and anomalies |
| **AI never does** | The arithmetic of record, the final factor choice, boundary and materiality judgements |
| **Time-saving estimate** | See [estimate](#time-saving-estimate) — planning figure, not a measured result |

## When to use

- First-time inventories, or a re-baseline after acquisitions, divestments or a methodology change.
- Scope 3 screening to decide which categories need primary data, which can use averages and which are not relevant.
- Preparing inventory data for CSRD (ESRS E1), IFRS S2, CDP, SB 253 or a science-based target.

**Not a fit** when the client already runs a mature carbon-accounting platform; use the [assurance readiness](/playbooks/assurance-readiness/) or [factor matching](/playbooks/emission-factor-matching/) playbooks instead.

## Inputs

- [ ] Legal entity list, ownership percentages and operational control information
- [ ] Prior sustainability reports, CDP responses and any previous inventory workbooks
- [ ] Site list with country, floor area and activity type
- [ ] Energy and fuel data (utility bills, meter data, fuel cards), refrigerant service records
- [ ] General ledger spend extract for the reporting year (supplier, description, account, amount, currency)
- [ ] Travel and logistics data (agency reports, freight invoices, carrier data)
- [ ] Product sales volumes and basic product specifications (for categories 9–12)
- [ ] The client's reporting calendar and the frameworks it reports under

## Workflow

### Step 1 — Boundary and base year (half a day)

1. Feed the entity list and prior reports to the assistant with **Prompt 1.1**. It drafts a boundary memo: consolidation approach options, entities in or out, and open questions.
2. **Checkpoint A (manager):** confirm the consolidation approach (equity share, financial control or operational control) with the client. This is a judgement; the AI only lays out the options and their consequences.
3. Record the base year and the recalculation policy (structural changes, methodology changes, errors, and the significance threshold the client uses).

### Step 2 — Data request generated from the boundary (2 hours)

1. Run **Prompt 1.2** to turn the boundary and site list into a tailored data request: one tab per source type, units specified, evidence required, owner and due date.
2. Send through the client's normal channel. For long-tail documents (bills, invoices), use the [supplier data extraction playbook](/playbooks/supplier-data-extraction/).

### Step 3 — Scope 1 and 2 (1–3 days, depending on data)

1. Extract activity data from source documents into a structured activity table (date range, site, quantity, unit, source document, page).
2. Validate: period coverage per site (missing months), unit sanity, duplicates, year-on-year swings beyond ±30%, consumption per m² against peers.
3. Calculate in the calculation tool of record (firm tool, client platform or controlled workbook) using factors from published sources. Scope 2 is reported **location-based and market-based**.
4. **Checkpoint B (senior):** review every factor selection and every estimate (gap-filled months, extrapolated sites).

### Step 4 — Scope 3 screening across all 15 categories (2–4 days)

1. Classify GL spend with **Prompt 1.3**: map each line to a Scope 3 category and an EEIO commodity, with confidence and a reason. Lines below the confidence threshold, or above a value threshold, go to a person.
2. Exclude spend already measured elsewhere (energy, fuel, travel booked through the agency, freight with activity data) to avoid double counting.
3. Calculate a spend-based screening estimate per category in the calculation tool (for example with the US EPA supply-chain factors based on USEEIO, adjusted for currency and inflation to the factor's base year).
4. Use **Prompt 1.4** to draft a relevance assessment per category against the Scope 3 Standard's relevance criteria (size, influence, risk, stakeholders, outsourcing, sector guidance) and the client's context.
5. **Checkpoint C (manager):** decide which categories are relevant, which are excluded (with justification), and where primary data is worth the effort.

### Step 5 — Hotspots, methodology notes and improvement plan (1 day)

1. Produce the hotspot view: categories ranked by estimated emissions, with data quality scores.
2. Run **Prompt 1.5** to draft the methodology notes from the calculation log (not from memory). Every number in the text must be pulled from the calculation output.
3. Draft a data-quality improvement plan: which suppliers or categories to move from spend-based to activity-based or supplier-specific data next year.
4. **Checkpoint D (engagement leader):** sign off the deliverable.

## Prompts

Copy into a firm-approved assistant. Replace `{{variables}}`. Keep the "rules" block; it is what makes outputs reviewable.

```text title="Prompt 1.1 — Boundary memo draft"
You are a GHG Protocol specialist helping prepare an organisational boundary memo.

CONTEXT
- Client: {{client_name}} ({{sector}}), reporting year {{reporting_year}}.
- Attached: entity list with ownership and control information, prior sustainability report(s).

TASK
1. Summarise how the client defined its boundary previously, quoting the exact wording and page.
2. For each consolidation approach (equity share, financial control, operational control), list
   which entities would be in or out and why, in a table.
3. List joint ventures, franchises, leased assets and recent acquisitions/divestments that need
   a decision, with the specific question to ask the client.
4. Note any inconsistency between the entity list and the prior report.

RULES
- Use only the attached documents. If information is missing, write "NOT IN SOURCES" and add a question.
- Cite document name and page for every factual statement.
- Do not recommend an approach; present the options and consequences. The team decides.
- Output: Markdown with headings: Prior approach · Options table · Decisions needed · Inconsistencies.
```

```text title="Prompt 1.2 — Tailored data request"
Using the boundary memo and site list attached, create a GHG data request for {{client_name}}.

For each site type and source (electricity, natural gas, other fuels, district heat/steam, refrigerants,
company vehicles, business travel, freight, waste, purchased goods spend):
- the exact data item, preferred unit and acceptable alternatives
- the period required ({{period_start}} to {{period_end}}), with monthly granularity where available
- the evidence needed (invoice, meter export, supplier statement)
- a suggested client owner (role) and a due date of {{due_date}}

RULES
- Do not ask for data outside the confirmed boundary.
- Flag any site where data is likely to be estimated and say what estimate method would apply.
- Output as a table I can paste into a spreadsheet: Tab | Site | Item | Unit | Period | Evidence | Owner | Due.
```

```text title="Prompt 1.3 — GL spend classification for Scope 3 screening"
Classify each general-ledger line below for a Scope 3 screening.

For each line return JSON with:
  line_id, scope3_category (1-15 or "EXCLUDE"), eeio_commodity (from the list provided),
  confidence (0-1), reason (max 20 words), double_count_risk ("energy" | "travel" | "freight" | "none")

RULES
- Use only the commodity list provided in COMMODITIES. Never invent a commodity code.
- Mark as EXCLUDE: taxes, intercompany, payroll, depreciation, financial transfers, and any spend
  already measured as activity data (energy, fuel, agency travel, freight with tonne-km data).
- If the description is ambiguous, set confidence below 0.6 and explain the ambiguity.
- Do not calculate emissions.

COMMODITIES: {{commodity_list}}
LINES: {{gl_lines_csv}}
```

```text title="Prompt 1.4 — Scope 3 relevance assessment draft"
Draft a relevance assessment for all 15 Scope 3 categories for {{client_name}} ({{sector}}).

Inputs attached: screening results table (category, estimated tCO2e from the calculation tool,
share of total, data quality score), business description, prior disclosures.

For each category write: Relevant? (Yes/No/Further work) · Evidence · Reasoning against the
GHG Protocol relevance criteria (size, influence, risk, stakeholders, outsourcing, sector guidance) ·
Recommended method (supplier-specific / hybrid / average-data / spend-based) · Open questions.

RULES
- Quote numbers exactly as they appear in the screening table. Do not round or recompute.
- Where you exclude a category, give a justification a reviewer could test.
- Mark every judgement as "PROPOSED — for team decision".
```

```text title="Prompt 1.5 — Methodology notes from the calculation log"
Write methodology notes for the GHG inventory using ONLY the calculation log and factor register attached.

Structure: Boundary · Base year and recalculation policy · Scope 1 · Scope 2 (location- and market-based) ·
Scope 3 by category · Emission factor sources and versions · GWP basis · Estimates and data gaps · Exclusions.

RULES
- Every number must be copied from the attached files with its reference, written as [ref:<row id>].
- If a method or factor is not in the log, write "TO CONFIRM" — do not fill in from general knowledge.
- Name factor sources with publisher, dataset and version exactly as in the register.
- Plain, past-tense, third-person style suitable for a published report.
```

## Human review checkpoints

| Checkpoint | Reviewer | What they check | Evidence kept |
|---|---|---|---|
| A — Boundary | Manager | Consolidation approach agreed with the client; entity list complete | Signed boundary memo |
| B — Scope 1/2 | Senior | Every factor and estimate; location vs market-based; coverage | Factor register, estimate log |
| C — Scope 3 relevance | Manager | Category decisions and exclusions are justified and consistent with prior years | Relevance table with decisions |
| D — Deliverable | Engagement leader | Numbers in text tie to the calculation output; caveats are clear | Tie-out sheet, sign-off |

## Quality and risk controls

- **Math of record:** all emissions are calculated in the calculation tool; AI-generated text is tied back to its outputs. See [Numeric tie-out rules](/quality-risk/numeric-tie-out-rules/).
- **Factor provenance:** every factor recorded with publisher, dataset, version, table and row. Do not accept a factor the AI "remembers"; it must come from a file you can open.
- **Factor vintage:** define a cut-off rule (for example, the latest version published before a fixed date after year-end) and apply it consistently.
- **Classification threshold:** auto-accept AI spend classifications only above an agreed confidence (for example 0.8) *and* below a value threshold; review the rest. Sample 5–10% of auto-accepted lines.
- **Double-count checks:** spend vs activity data (energy, travel, freight), Scope 2 vs Category 3 (well-to-tank and T&D losses belong in Category 3), and upstream vs downstream transport.
- **Unit safety:** every quantity carries a unit; energy carries a heating-value basis (HHV/LHV) where relevant.
- **Golden set:** keep 50–100 labelled GL lines from past engagements (anonymised) to test classification prompts before each season.

## Output template

```markdown title="Inventory summary — template"
# {{client_name}} — GHG inventory {{reporting_year}} (DRAFT v{{version}})

## 1. Summary
| Scope | tCO2e | Method | Data quality (1–5) | Ref |
|---|---|---|---|---|
| Scope 1 | [ref] | Activity-based | | |
| Scope 2 — location-based | [ref] | | | |
| Scope 2 — market-based | [ref] | | | |
| Scope 3 — total relevant | [ref] | Mixed | | |

## 2. Boundary and base year
## 3. Scope 3 screening and relevance (15-category table)
## 4. Hotspots and data-quality plan
## 5. Methodology, factor register and estimates
## 6. Open items and client confirmations
```

## Time-saving estimate

:::note[Estimate, not a measured result]
**Planning estimate:** 20–40% less preparer time on a first-time inventory with Scope 3 screening, concentrated in document review, data-request drafting, GL classification and methodology drafting.

**Assumptions:** GL extract available in one file; a firm-approved assistant that can read the documents; a calculation tool already in place; reviewer time unchanged or slightly higher during the first two engagements. Savings shrink when source data is mainly paper, or when the classification golden set does not yet exist. Replace this with your measured figures.
:::

## Related

- [P-02 Emission factor matching](/playbooks/emission-factor-matching/) · [P-03 Supplier data extraction](/playbooks/supplier-data-extraction/) · [Prompt library: GHG & factors](/prompts/ghg-and-factors/) · [Reference build](/reference-build/emissions-prototype/)
