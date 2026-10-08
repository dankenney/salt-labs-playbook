---
title: Model/tool approval & quality-management documentation
description: What to document when a team adopts an AI tool or workflow, so it stands up under internal quality reviews and external inspection.
reviewed: 2026-10-07
owner: AI lead
tags: [governance, quality, assurance]
status: stable
reviewEveryMonths: 3
sidebar:
  order: 6
---

Firms operate a system of quality management (for example under **ISQM 1** from the IAASB, and for PCAOB-registered firms **QC 1000**, whose effective date was postponed to **15 Dec 2026**; source: [PCAOB](https://pcaobus.org/news-events/news-releases/news-release-detail/pcaob-postpones-effective-date-of-qc-1000-and-related-standards--rules--and-forms)). These frameworks treat technology used in engagements as a resource the firm must govern. Your firm will have its own approval process; this page describes the documentation a team should be ready to provide to it.

:::note
Always use your firm's tool-approval process and templates. Do not adopt tools for client work outside that process.
:::

## Approval dossier for a new AI tool or workflow

| Section | Contents |
|---|---|
| Purpose and scope | The task(s), engagement types and data classes it will be used for |
| Tool description | Vendor/product or internal build, model(s) and versions, hosting location, retention and training-use terms |
| Data handling | What data goes in, minimisation, anonymisation, access control |
| Risk assessment | Failure modes (fabrication, unit errors, bias, leakage) and their impact on deliverables |
| Controls | Human checkpoints, deterministic validations, tie-outs, logging |
| Evaluation evidence | Golden-set results per failure mode, trap and pushback tests, date and version |
| Change management | How prompt, model and threshold changes are tested and approved; "what we tried" log |
| Monitoring | Metrics tracked (corrections per item, defects), re-evaluation cadence |
| Ownership | Workflow owner, AI lead, approver |
| Independence | Consultation outcome where used on or for assurance clients |

## Engagement-level documentation

For each engagement where AI assists:

- [ ] Which workflows and tools were used, with versions
- [ ] What the AI produced and who reviewed it (preparer/reviewer evidence)
- [ ] Inputs and outputs retained, or their hashes and locations
- [ ] Exceptions and how they were resolved
- [ ] For assurance: how the AI-assisted procedure contributes to evidence, and that the team's conclusions do not rest on unverified AI output

## Regulatory context worth knowing

- The **EU AI Act** obligations for general-purpose AI models have applied since 2 Aug 2025, transparency obligations under Article 50 from 2 Aug 2026, and Annex III high-risk obligations from 2 Dec 2027 following the Digital Omnibus (source: [EU AI Act Service Desk timeline](https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act)). Most practice use cases are unlikely to be "high-risk" under the Act, but firm legal teams decide that.
