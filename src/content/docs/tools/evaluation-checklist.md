---
title: Tool evaluation checklist
description: A practical checklist and scoring sheet for evaluating AI and sustainability software — focused on what assurance and regulators will care about.
reviewed: 2026-10-07
owner: AI lead
tags: [tools, governance]
status: stable
sidebar:
  order: 2
---

Use this alongside your firm's procurement and security review. Score 0–2 per line (0 = no, 1 = partly, 2 = yes, demonstrated). **Ask for a demonstration on your own (anonymised) data**, not a scripted demo.

## Data, provenance and audit trail
- [ ] Every number traces to source record, factor (publisher, dataset, version, table/row) and calculation steps
- [ ] Factor versions are pinned per period; changing a factor creates a new version, not an overwrite
- [ ] Immutable or tamper-evident audit log of changes and approvals
- [ ] Lineage and factor registers can be exported for an assurer
- [ ] Location- and market-based Scope 2 supported, with instrument quality checks

## Controls and workflow
- [ ] Maker-checker enforced by the system (the preparer cannot approve; AI cannot approve)
- [ ] Role-based access; SSO
- [ ] Validation rules configurable and logged
- [ ] One snapshot feeds all disclosures; cross-framework tie-out available

## AI features
- [ ] AI outputs are proposals with confidence and rationale; nothing auto-applies to reported figures without a rule you approved
- [ ] Vendor can explain how AI features are evaluated, and you can test them on your data
- [ ] AI runs are logged (inputs, model/version, output, decision)
- [ ] Clear data terms: retention, training use, processing location

## Reporting
- [ ] Framework coverage you need (ESRS, IFRS S2/local versions, CDP, SB 253)
- [ ] XBRL tagging and validation against current taxonomies
- [ ] Narrative linked to data (no retyped numbers)

## Operations
- [ ] Data import/export in open formats; no lock-in of your history
- [ ] Integration options (APIs, connectors) that respect access controls
- [ ] Security attestations relevant to your firm's requirements
- [ ] Total cost, including implementation and licensed datasets

## Scoring sheet

| Area | Max | Vendor A | Vendor B | Notes |
|---|---|---|---|---|
| Provenance & audit trail | 10 | | | |
| Controls & workflow | 8 | | | |
| AI features | 8 | | | |
| Reporting | 6 | | | |
| Operations | 8 | | | |
| **Total** | **40** | | | |
