---
title: Tools landscape
description: The categories of tools an AI-first sustainability practice uses, with honest notes and public sources. No endorsements.
reviewed: 2026-10-07
owner: AI lead
tags: [tools]
status: draft
sidebar:
  order: 1
---

:::caution[Read this first]
- **Your firm's approved-tool catalogue comes first.** Many firms have their own assistants and platforms; use those for client work.
- Product mentions below are **examples of a category, not endorsements**. Capability statements are quoted from the vendor's own public pages (linked) and have **not been independently tested** by the playbook team.
- Vendors change quickly. Check the date at the top of this page.
:::

## Map of categories

| Category | What it is for | Where AI helps | Watch-outs |
|---|---|---|---|
| **LLM assistants** (enterprise) | Reading, drafting, summarising, analysis with documents | Everywhere in the playbooks | Data terms, retention, model changes; fabricated citations |
| **Document extraction** (OCR, layout, field extraction) | Bills, invoices, questionnaires → structured data | [P-03](/playbooks/supplier-data-extraction/) | Field-level accuracy must be measured on your documents; licence terms |
| **Carbon accounting platforms** | Activity data → factors → emissions, with lineage | [P-01](/playbooks/ghg-inventory-scope-3/), [P-02](/playbooks/emission-factor-matching/) | Factor provenance and versioning; methodology transparency; export of lineage for assurance |
| **Disclosure management** | Controlled, linked, tagged reports (incl. XBRL) | [P-05](/playbooks/esrs-gap-analysis/), [P-08](/playbooks/cdp-response-drafting/) | Link to calculation of record; taxonomy versions |
| **Emission factor sources** | Published factors and datasets | [P-02](/playbooks/emission-factor-matching/) | Vintage, licence, combustion vs lifecycle |
| **Data platforms** | Storing and joining ERP, utility, travel, logistics data | All data-heavy playbooks | Access control, lineage, cost |
| **XBRL validation** | Validating tagged reports against taxonomies | [P-05](/playbooks/esrs-gap-analysis/) | Draft vs final taxonomies |
| **Eval & tracing** | Testing prompts, logging AI runs | [Evals](/prompts/evals/) | Self-host or keep traces in approved stores |

## Notes by category

### LLM assistants
Enterprise versions of general assistants are offered by several major providers, and many firms deploy their own. What matters for this practice: approval for client data, document-reading limits, citation behaviour, admin controls, and whether prompts are retained or used for training. Evaluate with your own [golden sets](/prompts/evals/), not public leaderboards.

### Document extraction
Cloud document-AI services from the large cloud providers and open-source parsers both exist. Open-source examples relevant to [P-03](/playbooks/supplier-data-extraction/):
- [OpenDataLoader PDF](https://github.com/opendataloader-project/opendataloader-pdf) — Apache-2.0; its README describes bounding boxes for every element and CPU operation, and the project publishes a benchmark ([opendataloader-bench](https://github.com/opendataloader-project/opendataloader-bench)).
- [Docling](https://github.com/docling-project/docling) — open-source document conversion.

Layout benchmarks are not invoice-field benchmarks. Build a field-level test set before choosing.

### Carbon accounting platforms
Examples of how vendors describe themselves (quoted from their public pages):
- **Watershed**: "500,000 built-in emissions factors" and "purpose-built methodologies for all 15 Scope 3 categories" ([Watershed platform](https://watershed.com/en-GB/platform)); a supplier portal where "responses flow directly into your footprint" ([Watershed supply chain](https://watershed.com/solutions/supply-chain)).
- **Workiva** (carbon module): "Automate scope 1, 2, and 3 emissions calculations" and "AI-powered emissions factor matching" ([Workiva carbon management](https://www.workiva.com/solutions/carbon-management)).

Many other vendors operate in this market, including modules from large ERP and cloud providers. Use the [evaluation checklist](/tools/evaluation-checklist/).

### Disclosure management
- **Workiva** describes "XHTML export and built-in XBRL tagging" and real-time co-authoring "with version control, permissions, and an audit trail" ([Workiva sustainability reporting](https://www.workiva.com/solutions/sustainability-reporting)), and documents ESRS XBRL taxonomy use in its support site ([Workiva Support](https://support.workiva.com/hc/en-us/articles/22929364571796)).

### Emission factor sources (public and licensed)

| Source | Publisher | Access | Notes |
|---|---|---|---|
| GHG Emission Factors Hub | US EPA | Free | Updated annually |
| eGRID | US EPA | Free | US grid subregion factors |
| Supply Chain GHG Emission Factors (USEEIO-based) | US EPA | Free | Spend-based screening; base-year dollars |
| Greenhouse gas reporting: conversion factors | UK DESNZ | Free | Annual; includes WTT and freight/travel |
| European residual mixes | AIB | Free | Market-based Scope 2 in Europe |
| Green-e residual mix | Center for Resource Solutions | Free | Market-based Scope 2 in the US |
| IEA emissions factors | IEA | Licensed | Common for international location-based Scope 2 |
| ecoinvent | ecoinvent | Licensed | Lifecycle inventory database |

### XBRL validation
- [Arelle](https://arelle.org/) is an open-source XBRL processor that can validate reports against published taxonomies, including ESRS taxonomies. EFRAG published a draft XBRL taxonomy for the revised ESRS in September 2026 for consultation ([EFRAG](https://www.efrag.org/en/projects/esrs-xbrl-taxonomy/exposure-draft-consultation)).

### Eval and tracing
Open-source and commercial tools exist for prompt evaluation and run tracing. Keep traces local or in approved stores; many tracing products are SaaS by default.
