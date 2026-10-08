---
title: "P-12 · Limited vs reasonable assurance testing with AI support"
description: How AI can support analytics, sampling, anomaly detection, recalculation and tie-outs in sustainability assurance — within your firm's methodology and the applicable standards.
reviewed: 2026-10-07
owner: Workflow owner — Sustainability assurance
tags: [assurance, testing, quality, independence]
status: stable
reviewEveryMonths: 3
sidebar:
  order: 12
  label: "P-12 Assurance testing"
  badge: { text: Deep, variant: success }
---

:::danger[Your firm's methodology governs]
Assurance work must follow the applicable standard (for example ISSA 5000, ISAE 3000 (Revised) / ISAE 3410, ISO 14064-3 or AICPA attestation standards) **and your firm's audit/assurance methodology and approved tools**. This page describes general patterns for using AI as a support tool. It does not change what procedures are required, and any tool used must be approved under your firm's system of quality management.
:::

## Limited vs reasonable assurance — what differs

| | Limited assurance | Reasonable assurance |
|---|---|---|
| Conclusion | Negative form ("nothing has come to our attention…") | Positive form ("in our opinion… in all material respects") |
| Risk assessment | Understanding sufficient to identify where material misstatement is likely | More extensive understanding, including controls relevant to the engagement |
| Main procedures | Inquiry and analytical procedures, with limited detailed testing where needed | Tests of controls where relied on, substantive analytics and tests of details with larger samples |
| Evidence | Less extensive | Sufficient and appropriate to reduce risk to an acceptably low level |
| Where AI helps most | Fast, full-population analytics to target inquiries; drafting inquiry lists | Full-population analytics, exception identification, document matching, recalculation at scale |

## Where AI support fits in the engagement

| Phase | Support pattern | AI's role | Human role |
|---|---|---|---|
| Planning | Read prior reports, criteria, process documents; draft risk-factor list | Summarise with citations; propose risks | Assess risks; set materiality; design procedures |
| Understanding the process | Turn walkthrough notes into process maps; spot missing controls | Draft maps and questions | Perform walkthroughs; conclude |
| Analytics | Expectations vs actuals: intensity by site, year-on-year, peer ratios | Help write and document the analytic; explain outliers to investigate | Set expectations and thresholds; evaluate differences |
| Anomaly detection | Unusual values across the full population (unit errors, duplicates, outliers) | Flag candidates using **documented, deterministic or validated** methods | Decide which are exceptions; follow up |
| Sampling | Select items for detail testing | Help stratify; never the sole selector unless the method is approved and reproducible | Choose the method (statistical or not); document it |
| Tests of details | Match activity data to source documents (bills, invoices) | Extract and compare fields with page references | Inspect the document; conclude on each item |
| Recalculation | Re-perform emissions calculations | **Generate deterministic scripts**; the script does the math | Review the script; run it; evaluate differences |
| Disclosure tie-out | Every reported number to the calculation output and between frameworks | Find all numbers; build the tie-out list | Agree values; conclude |
| Documentation | Working-paper drafts | Draft from the evidence; cite it | Review, edit and sign off |

## Workflows

### A. Full-population analytics with documented thresholds

1. Obtain the full activity dataset. Assess the reliability of the data (source, completeness, accuracy) before using it — this is information produced by the entity.
2. Ask the assistant (**Prompt 12.1**) to propose analytics and expectation models given the business context; select those that are meaningful.
3. Implement the analytics as **scripts or approved tool configurations**, not as chat answers. Store the script and its version in the file.
4. Set thresholds for investigation before seeing the results; document the basis.
5. Investigate differences above threshold through inquiry and corroborating evidence.

### B. Anomaly detection to target testing

- Use transparent rules first (unit magnitude, duplicate keys, negative values, period gaps, factor vintage, location vs market-based mix-ups). Add statistical outlier methods (for example robust z-scores on log intensity by peer group) with documented parameters.
- Treat ML/LLM-flagged anomalies as **leads**, not evidence. Each lead is resolved by a person with evidence.
- Keep a list of items **not** flagged that you sampled anyway, to check the method is not missing whole classes of error.

### C. Document matching for tests of details

1. Select the sample using the approved method.
2. Extract key fields from source documents (**Prompt 12.2**) with page references.
3. Compare to the client's records with a deterministic comparison (tolerance documented).
4. **A person inspects each source document** for the sampled items and concludes; the extraction is an aid, not a substitute for inspection.

### D. Recalculation at scale

1. **Prompt 12.3** writes a recalculation script from the client's methodology and factor register.
2. Review the script line by line (or have a second person review) and test it on a few hand-calculated items.
3. Run on the full population; investigate differences above tolerance.

### E. Disclosure tie-out

1. **Prompt 12.4** lists every number in the draft report with its location.
2. Agree each to the calculation output, and check the same metric is identical across documents (sustainability statement, CDP, SB 253 report, annual report), or the difference is explained.

## Prompts

```text title="Prompt 12.1 — Analytics design (planning aid)"
Context: {{entity_description}}; metrics in scope: {{metrics}}; data available: {{data_fields}}.
Propose analytical procedures for {{assurance_level}} assurance. For each: purpose · expectation model
(e.g. kWh per m² by site type; fuel litres per vehicle-km) · data needed · how to set the investigation threshold ·
what a difference might indicate · limitations.
Do not set the thresholds or conclude. This is a planning aid for the engagement team.
```

```text title="Prompt 12.2 — Source-document field extraction for sampled items"
For each sampled item, extract from the attached source document: document date, period, account/meter,
quantity, unit, amount — each with page and exact source text. Return null if not found.
Do not compare to the client's records and do not conclude; extraction only.
```

```text title="Prompt 12.3 — Recalculation script"
Write a Python script that recalculates {{metric}} from ACTIVITY_DATA and FACTOR_REGISTER per METHODOLOGY.
Requirements: no hard-coded factor values (read them from the register by factor_id); explicit unit conversion
with checks; output one row per activity with inputs, factor_id, factor value, result and difference vs the client's
figure; summary by site and total; deterministic (no randomness). Include three unit tests with hand-calculated
expected values I will verify.
```

```text title="Prompt 12.4 — Number inventory for tie-out"
List every number, percentage and date in the attached report section with: page · sentence · metric it describes ·
unit · the calculation-output reference it should agree to (if stated). Do not assess correctness.
```

## Controls specific to AI-supported assurance

- [ ] Tools used are approved by the firm for assurance use and for the client's data
- [ ] Independence: AI-enabled services to an assurance client are permitted (see [Independence](/quality-risk/independence-assurance/))
- [ ] Every AI-assisted procedure is documented: purpose, tool and version, inputs, outputs, the person who reviewed it, and their conclusion
- [ ] Analytics, anomaly rules and recalculations are reproducible (scripts or saved configurations), not one-off chat answers
- [ ] Data reliability (information produced by the entity) is evaluated before data is used in procedures
- [ ] Sampling methods are approved methods; any AI involvement in selection is reproducible and documented
- [ ] Professional scepticism applied to AI output; contradictory evidence is followed up
- [ ] The engagement partner is satisfied the evidence is sufficient and appropriate — the AI is never the basis of the conclusion

## Time-saving estimate

:::note[Estimate, not a measured result]
**Planning estimate:** 20–35% less time on analytics, document matching and recalculation for engagements with large activity populations; working-paper review time unchanged or higher at first.

**Assumptions:** firm-approved tools; data available in structured form; scripts reused across engagements. Replace with measured numbers.
:::

## Related

[P-11 Assurance readiness](/playbooks/assurance-readiness/) · [Numeric tie-out rules](/quality-risk/numeric-tie-out-rules/) · [Tool approval & documentation](/quality-risk/tool-approval-documentation/) · [Prompt library: assurance](/prompts/assurance/)
