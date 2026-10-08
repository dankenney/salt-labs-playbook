---
title: "P-09 · Climate scenario analysis & transition plans"
description: Use AI to accelerate scenario research, risk narratives and transition-plan drafting — while models, assumptions and numbers stay in controlled tools.
reviewed: 2026-10-07
owner: Workflow owner — Climate strategy
tags: [transition-plans, issb, csrd]
status: draft
sidebar:
  order: 9
  label: "P-09 Scenarios & transition"
---

## At a glance

| | |
|---|---|
| **Outcome** | Scenario set and assumptions log, qualitative and (where feasible) quantitative risk/opportunity assessment, and a transition plan draft aligned to the framework the client reports under |
| **Common references** | NGFS scenarios, IEA scenarios (licence terms apply), IPCC SSP/RCP pathways; transition-plan guidance such as the TPT disclosure framework (now maintained by the IFRS Foundation) and ESRS E1 transition plan requirements |
| **AI does** | Summarises scenario narratives and variables with citations; drafts risk narratives per business unit; structures the transition plan; checks consistency with targets and capex plans |
| **AI never does** | Produce scenario numbers, carbon prices or financial impacts from memory |
| **Time-saving estimate** | 20–35% less time on research and first drafts (estimate; assumes the client's targets, capex and inventory are available) |

## Workflow

1. **Select scenarios** (at least one orderly-transition and one high-physical-risk scenario is common practice). Record source, version and variables used in an assumptions log.
2. **Prompt 9.1:** extract the relevant variables and narratives from the scenario documentation for the client's sectors and geographies, with page references.
3. **Risk and opportunity narratives (Prompt 9.2)** per business unit: transition (policy, technology, market, reputation) and physical (acute, chronic), linked to assets and value-chain locations.
4. **Quantify in a model** (spreadsheet or approved tool) where data allows — carbon cost exposure, physical-risk exposure by site. The AI may help write the model logic; the model computes.
5. **Transition plan draft (Prompt 9.3):** targets, levers, milestones, capex/opex, governance, dependencies — every number referenced to client data.
6. **Consistency check:** targets vs inventory base year, decarbonisation levers vs capex plan, statements vs other disclosures.

```text title="Prompt 9.1 — Scenario variable extraction"
From SCENARIO_DOCS (source: {{scenario_source}}, version {{version}}), extract variables relevant to
{{sectors}} in {{regions}} for {{years}}: carbon prices, energy mix, technology adoption, demand shifts, physical
hazards. Return: variable · scenario · value as stated · unit · year · region · page. Do not interpolate or
estimate values that are not stated.
```

```text title="Prompt 9.2 — Risk narrative per business unit"
For business unit {{bu}} (activities, sites and value chain attached), draft climate risk and opportunity narratives
under each scenario in ASSUMPTIONS_LOG. For each: driver · mechanism (how it affects the business) · time horizon ·
affected assets/value-chain stage · indicators to monitor · data needed to quantify. Cite assumptions log IDs.
Do not estimate financial impacts.
```

```text title="Prompt 9.3 — Transition plan structure"
Draft a transition plan outline for {{client_name}} reporting under {{framework}}. Sections: ambition and targets ·
decarbonisation levers by scope · milestones · financial planning (capex/opex references) · governance ·
engagement (value chain, policy) · dependencies and uncertainties · metrics to track.
Reference every number to CLIENT_DATA; mark gaps TO CONFIRM. Avoid claims of alignment with any pathway unless
the evidence shows it and the method is stated.
```

## Controls

- [ ] Scenario source, version and licence recorded
- [ ] All quantitative outputs from the model, not the assistant
- [ ] Targets and base years tie to the inventory and any validation record
- [ ] Alignment claims (for example "1.5°C-aligned") supported by a stated method and evidence
