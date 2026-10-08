---
title: "P-14 · Proposal & pitch prep"
description: Research a prospect, shape the offer and draft the proposal faster — using public information only and firm-approved templates and credentials.
reviewed: 2026-10-07
owner: Business development lead
tags: [business-development]
status: draft
sidebar:
  order: 14
  label: "P-14 Proposals & pitches"
---

## At a glance

| | |
|---|---|
| **Outcome** | Prospect brief, regulatory applicability view, tailored approach and workplan, proposal draft in the firm template |
| **AI does** | Summarises public filings and disclosures; maps likely obligations; drafts approach, workplan and FAQs |
| **AI never does** | Invent credentials, case studies, client names, team bios or pricing; use other clients' confidential information |
| **Time-saving estimate** | 30–50% less time to a first proposal draft (estimate; assumes firm templates and approved credentials exist) |

:::caution[Confidentiality and independence]
Use only public information about the prospect and **approved** credentials. Never paste another client's deliverables into a prompt. For audit or assurance clients, run independence checks before proposing any service.
:::

## Workflow

1. **Prospect brief (Prompt 14.1)** from public sources: annual report, sustainability report, CDP response (if public), regulatory filings.
2. **Applicability view (Prompt 14.2):** which regimes likely apply (CSRD, ISSB-based local rules, SB 253/261, CDP requests) — framed as hypotheses to confirm.
3. **Approach and workplan (Prompt 14.3)** using relevant [playbooks](/playbooks/) as modules, with AI-enabled steps described honestly (what is automated, what is reviewed).
4. **Proposal draft** in the firm template; insert only approved credentials and team information from the firm's systems.
5. **Review:** engagement leader, risk/independence clearance, pricing by the appropriate approver.

```text title="Prompt 14.1 — Prospect brief (public sources only)"
Using only the public documents attached for {{prospect}}, write a one-page brief: business overview · footprint
and geographies · current sustainability disclosures (frameworks, assurance, targets) · stated priorities · gaps or
inconsistencies visible in public reporting · questions to ask in the first meeting. Cite each point with document
and page. Do not speculate about non-public matters.
```

```text title="Prompt 14.2 — Applicability hypotheses"
Based on the brief and the regulatory tracker summary attached (dated {{tracker_date}}), list sustainability reporting
regimes that may apply to {{prospect}}, each with: why it may apply (facts) · what would confirm it · first reporting
period if it applies · confidence. Frame everything as hypotheses to validate, not conclusions.
```

```text title="Prompt 14.3 — Approach and workplan"
Draft an approach for {{service}} for {{prospect}} using these modules: {{playbook_modules}}. For each phase: objective ·
activities · where AI accelerates the work and where people review · deliverables · client inputs · duration.
Do not include claims about outcomes, savings or credentials; leave placeholders [CREDENTIAL] [TEAM] [FEES].
```
