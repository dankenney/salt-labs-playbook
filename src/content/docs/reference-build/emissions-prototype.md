---
title: "Reference prototype: AI-first emissions management"
description: A worked example of the playbook's principles in software — a reference prototype of AI-first emissions management for a multinational apparel company, built on synthetic data.
reviewed: 2026-10-07
owner: Playbook maintainers
tags: [reference-build, ghg-accounting, assurance, evidence-packs]
status: stable
sidebar:
  order: 1
---

:::note[What this is]
A **concept prototype** built in October 2026 to test whether the principles in this playbook — AI proposes, people decide; AI never does the math of record; cite or abstain — can be implemented end to end. The example tenant is a **multinational apparel company with synthetic activity data**. Emission factors and GWP values come from real published sources. It is not a product and is not connected to any company's systems. The code is held privately; ask the playbook maintainers for a walkthrough.
:::

## What it demonstrates

| Principle | How the prototype implements it |
|---|---|
| **One system of record** | An append-only, hash-chained ledger; all state is re-derived from it. Edits to history are detectable |
| **Factor provenance** | ~10,700 factors loaded from 17 public sources (for example US EPA GHG Emission Factors Hub, eGRID, UK DESNZ, USEEIO, AIB and Green-e residual mixes, IPCC defaults). Each factor records publisher, table, row locator, version and the source file's SHA-256 |
| **Factor vintage cut-off** | Only factors published by year-end + 15 days are eligible; comparatives are restated on the same factor set |
| **AI proposes, people decide** | Supplier data-quality issues and spend classifications arrive as AI proposals with confidence, rationale and estimated impact. Nothing changes until a reviewer approves |
| **Segregation of duties** | The submitter cannot approve; AI and system actors are barred from approving; enforced on the server |
| **AI never does the math of record** | A deterministic calculation engine computes gas-level results with retained arithmetic steps; the AI layer has no write path to reported figures |
| **Bound narrative** | Narrative uses binding tokens; any unbound number fails the build |
| **Tie-out as a build gate** | One signed snapshot produces data tables, CDP, SB 253, ESRS E1 and IFRS S2 outputs; every datapoint (89 in the demo) is checked against the snapshot and across frameworks |
| **Evidence pack from the data** | A 23-file, PBC-indexed zip with a SHA-256 manifest: lineage, factor register, sources manifest, control matrix, sign-offs, ledger verification, reconciliation, restatement memo |
| **Honest reconciliation** | Results are reconciled to the company's published figures, with each line classed as *independent*, *input tie* or *calibrated* so calibrated matches are never presented as validation |

## The seven screens

1. **Overview** — Scope 1/2/3 by year; Scope 2 location- vs market-based; trend against targets; 95% confidence intervals.
2. **Lineage drill-down** — any calculation → activity record → factor (publisher, table, row, version, file hash) → arithmetic → ledger entries.
3. **Supplier intake queue** — data-quality flags and AI proposals; approve/reject posts to the ledger; self-approval is blocked.
4. **Anomalies & double counting** — nine double-counting controls, anomaly detection, Scope 2 instrument quality register, AI spend classification.
5. **Restatement & base year** — methodology-change replication and base-year significance tests.
6. **Disclosure center** — all framework outputs from one snapshot with per-datapoint tie-out status; iXBRL preview; bound narrative.
7. **Assurance evidence pack** — PBC index, control matrix, ledger entries, download.

## Seeded "messy data" test

Eight realistic supplier data problems were seeded into the synthetic data — unit errors, a mass reported in the wrong unit, a wrong country, a partial year, a duplicate, an unknown steam source, a negative value, and a late/unverified submission. All eight were detected; for each the AI proposed a fix with rationale, and corrections only took effect after reviewer approval. Three were deliberately left open to show that supplier follow-up is still needed.

## What it is not

- Not connected to real systems; no licensed datasets (where they would be used, public proxies are flagged).
- No production authentication (SSO) yet.
- The iXBRL output is a preview, not a validated filing.
- Time-saving benefits are **estimates to validate in a pilot**, not measured results.

## How to use it as a team

- As a **demo** of what "assurance-grade AI-first" looks like in practice, alongside [P-01](/playbooks/ghg-inventory-scope-3/), [P-03](/playbooks/supplier-data-extraction/) and [P-11](/playbooks/assurance-readiness/).
- As a **design reference** for requirements when evaluating vendor platforms (see the [evaluation checklist](/tools/evaluation-checklist/)).
- As a **training environment** for reviewers to practise spotting AI failure modes on synthetic data.

Next: [What red-teaming it taught us](/reference-build/red-team-lessons/).
