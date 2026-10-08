---
title: "P-06 · IFRS S2 / ISSB readiness"
description: Assess readiness for IFRS S2 (or a jurisdictional version such as UK SRS S2) — governance, strategy, risk management, metrics and targets — with AI doing the first-pass gap work.
reviewed: 2026-10-07
owner: Workflow owner — Disclosure
tags: [issb, regulatory]
status: draft
reviewEveryMonths: 3
sidebar:
  order: 6
  label: "P-06 IFRS S2 readiness"
---

## At a glance

| | |
|---|---|
| **Outcome** | Readiness assessment against IFRS S2 (and S1 where relevant) by pillar, jurisdiction-specific reliefs, a gap list and a roadmap |
| **Context** | More than 40 jurisdictions have adopted, use or are introducing ISSB Standards (IFRS Foundation, 2026). Jurisdictions often modify scope, timing and reliefs — always use the jurisdictional version. See the [tracker](/reference/regulatory-tracker/#issb-adoption) |
| **AI does** | Reads existing TCFD/CDP/annual-report disclosures and maps them to requirements with quotes; drafts gap findings and roadmap |
| **AI never does** | Decide which transition reliefs to use; quantify anticipated financial effects |
| **Time-saving estimate** | 30–45% less time on first-pass gap assessment (estimate; assumes existing TCFD-style disclosures to map from) |

## Workflow

1. **Confirm the applicable version.** IFRS S2 as issued, or a jurisdictional version (for example UK SRS S2 under the FCA's comply-or-explain rules for listed issuers, for periods beginning on or after 1 Jan 2027; Australia's AASB S2). Record the version and the reliefs available (for example Scope 3 relief in the first year).
2. **Collect sources:** TCFD report, CDP response, annual report risk section, transition plan, scenario analysis, GHG inventory.
3. **Map by pillar (Prompt 6.1):** governance, strategy (including climate resilience and scenario analysis), risk management, metrics and targets (including Scope 1–3 GHG, cross-industry metrics, industry-based metrics referencing SASB).
4. **Reviewer confirms** every "met" finding against the requirement text.
5. **Connectivity check (Prompt 6.2):** are climate assumptions consistent with the financial statements (impairment, useful lives, provisions)? Flag for discussion with the audit team.
6. **Roadmap:** sequence by first reporting period and assurance expectations in the jurisdiction.

```text title="Prompt 6.1 — IFRS S2 pillar mapping"
Map the client's existing disclosures to the requirements in REQUIREMENTS ({{standard_version}}).
For each requirement: status (Met / Partial / Gap) · quote (≤ 30 words) · source and page · missing elements ·
note if a transition relief in RELIEFS could apply (do not decide).
Rules: use only the requirement text supplied; "Met" needs a quote covering every element; flag
industry-based metric requirements separately.
REQUIREMENTS: {{requirements_table}}  RELIEFS: {{reliefs}}  SOURCES: {{documents}}
```

```text title="Prompt 6.2 — Connectivity with the financial statements"
Compare climate-related statements in the sustainability disclosures with the financial statements and notes.
List: (1) assumptions used in one but not the other (carbon prices, transition timelines, asset lives);
(2) apparent inconsistencies; (3) climate risks disclosed as significant with no visible financial-statement
consideration. Quote both sides with page numbers. Do not conclude on accounting treatment.
```

## Review checkpoints and controls

- [ ] Jurisdictional version and effective date confirmed from the official source
- [ ] Reliefs chosen by the client, documented
- [ ] Financial-statement connectivity points shared with the audit team through proper channels
- [ ] Scope 3 approach consistent with the [GHG inventory](/playbooks/ghg-inventory-scope-3/)

## Related

[P-08 CDP](/playbooks/cdp-response-drafting/) (CDP publishes a mapping of its questionnaire to IFRS S2) · [P-09 Scenario analysis](/playbooks/scenario-analysis-transition-plans/) · [Regulatory tracker](/reference/regulatory-tracker/)
