---
title: Glossary
description: Plain-language definitions of the terms used across the playbook — sustainability reporting, assurance and AI.
reviewed: 2026-10-07
owner: Playbook maintainers
tags: [glossary]
status: stable
sidebar:
  order: 2
---

## Sustainability reporting

| Term | Meaning |
|---|---|
| **Activity data** | A quantity of activity that causes emissions (kWh, litres, tonne-km, spend) |
| **AIB residual mix** | Emission factors for European electricity after tracked attributes (e.g. guarantees of origin) are removed; used for market-based Scope 2 |
| **CDP** | A global disclosure system that companies use to report environmental information to investors and customers |
| **CSRD** | EU Corporate Sustainability Reporting Directive; requires in-scope companies to report under ESRS |
| **Datapoint** | The smallest disclosure item in a standard (e.g. an ESRS datapoint), often with an XBRL identifier |
| **DMA (double materiality assessment)** | Assessing sustainability matters from both impact materiality (effects on people and environment) and financial materiality (effects on the company) |
| **DNSH** | "Do no significant harm" criteria under the EU Taxonomy |
| **Emission factor** | A coefficient converting activity data into emissions (e.g. kg CO2e per kWh) |
| **ESRS** | European Sustainability Reporting Standards; revised in 2026 by Delegated Regulation (EU) 2026/1563 |
| **EEIO** | Environmentally extended input–output model; provides spend-based factors (e.g. USEEIO) |
| **GHG Protocol** | The most widely used accounting standards for greenhouse gas inventories (Corporate, Scope 2 Guidance, Scope 3 Standard) |
| **GWP** | Global warming potential; converts gases to CO2-equivalent (e.g. IPCC AR5 or AR6 100-year values) |
| **HHV / LHV** | Higher / lower heating value; the energy-content basis of a fuel quantity — mixing them causes errors |
| **IFRS S1 / S2** | ISSB Standards for general sustainability-related and climate-related financial disclosures |
| **IRO** | Impact, risk or opportunity — the unit of analysis in a DMA |
| **ISSB** | International Sustainability Standards Board of the IFRS Foundation |
| **Location-based / market-based** | The two Scope 2 methods: grid-average factors vs factors reflecting contractual instruments |
| **Residual mix** | Grid factor after removing claimed renewable attributes; used for uncovered load in market-based Scope 2 |
| **SB 253 / SB 261** | California laws on GHG emissions reporting (SB 253) and climate-related financial risk reporting (SB 261) |
| **Scope 1 / 2 / 3** | Direct emissions / purchased energy emissions / other value-chain emissions (15 categories) |
| **TCFD** | Task Force on Climate-related Financial Disclosures; recommendations now incorporated in ISSB Standards |
| **UK SRS** | UK Sustainability Reporting Standards — UK-endorsed versions of IFRS S1 and S2 |
| **WTT** | Well-to-tank: upstream emissions from producing and delivering fuels (Scope 3 Category 3) |
| **XBRL / iXBRL** | Machine-readable tagging of report data / tags embedded in a human-readable document |

## Assurance

| Term | Meaning |
|---|---|
| **Limited assurance** | Lower level of assurance with a negative-form conclusion; mainly inquiry and analytics |
| **Reasonable assurance** | Higher level of assurance with a positive-form opinion; more extensive testing |
| **ISSA 5000** | IAASB's general standard for sustainability assurance engagements |
| **ISAE 3410** | IAASB standard for assurance on greenhouse gas statements |
| **ISO 14064-3** | ISO standard for validation and verification of GHG statements |
| **IESSA** | IESBA's ethics and independence standards for sustainability assurance |
| **ISQM 1 / QC 1000** | Quality management standards for firms (IAASB / PCAOB) |
| **PBC** | "Prepared by client": the list of items the client provides to the assurer |
| **Tie-out** | Agreeing every reported number to its source calculation and across documents |
| **Maker-checker** | Segregation of duties: the person who prepares an item cannot approve it |
| **Self-review threat** | Independence threat when an assurer evaluates work their firm performed |

## AI

| Term | Meaning |
|---|---|
| **Agent** | A workflow where a model takes multiple steps (reading, tool calls, checks) before human review |
| **Binding token** | A placeholder in text (e.g. `{{metric:S1_total}}`) replaced by a value from the calculation of record |
| **Calibration** | Whether a model's confidence matches how often it is right |
| **Contextual retrieval** | Adding a short context header to each indexed chunk to improve search accuracy |
| **Eval / golden set** | A labelled set of examples used to measure a prompt or model's accuracy |
| **Hallucination** | Fluent but unsupported or false output |
| **MCP** | Model Context Protocol: an open protocol for connecting AI assistants to tools and data |
| **Provenance** | Where a value came from: document hash, page, location, and transformation steps |
| **Trace** | A log of one AI run: inputs, model and version, output, and human decision |
| **Trap question** | A test where the plausible answer is wrong and the right behaviour is to flag or abstain |
