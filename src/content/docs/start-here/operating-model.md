---
title: Operating model and roles
description: Who does what in an AI-first practice — AI lead, workflow owners, reviewers — plus RACI and cadence.
reviewed: 2026-10-07
owner: AI lead
tags: [operating-model, governance]
status: stable
sidebar:
  order: 3
---

Keep the operating model light. Most teams need three new responsibilities, not a new department. These are roles, not job titles; one person can hold more than one in a small team.

## Roles

| Role | Typical seniority | Responsibilities | Time |
|---|---|---|---|
| **AI lead** | Manager / senior manager | Owns this playbook, the approved-tool list for the team, the use-case backlog and metrics. Liaises with firm risk, IT and independence teams. Chairs the monthly review. | ~20% |
| **Workflow owner** (one per playbook) | Senior / manager with domain depth | Owns a playbook end to end: prompts, golden set, review checklist, output template. Accepts or rejects changes. Reviews the page on cadence. | ~5–10% per workflow |
| **Reviewer** | Anyone signing off work today | Reviews AI-assisted outputs using the playbook checklist. Records corrections. Escalates systematic errors to the workflow owner. | Part of normal review |
| **Practitioner** | All staff | Runs workflows, flags failures, suggests improvements via the [ideas inbox](/ideas/inbox/). | — |
| **Engagement leader / partner** | Partner / director | Accountable for the deliverable. Decides whether AI-assisted workflows are appropriate for the engagement and client. | — |
| **Firm functions** (risk, IT security, independence, quality) | — | Approve tools and data uses; set policy. The playbook follows them. | — |

## RACI for common decisions

| Decision | AI lead | Workflow owner | Reviewer | Engagement leader | Firm functions |
|---|---|---|---|---|---|
| Add a new use case to the backlog | A | C | I | C | I |
| Use a new AI tool | R | C | I | C | **A** |
| Change a prompt in a Stable playbook | I | **A/R** | C | I | — |
| Use AI on a specific engagement | C | C | I | **A** | C (independence for assurance clients) |
| Accept an AI-assisted output into a deliverable | I | I | **R** | **A** | — |
| Publish a regulatory update on this site | **A** | R | I | I | — |

R = responsible, A = accountable, C = consulted, I = informed.

## Cadence

| Rhythm | What happens | Who |
|---|---|---|
| Weekly (during pilots) | 30-minute failure review: what broke, what to change | Workflow owners, practitioners |
| Monthly | Regulatory tracker refresh; metrics; backlog prioritisation; [changelog](/updates/changelog/) entry | AI lead |
| Quarterly | Playbook review against the `reviewed` date; retire stale content; golden-set refresh | Workflow owners |
| Per engagement | Kick-off: pick playbooks to use; close-out: capture lessons and new prompts | Engagement team |

## Skills to build

- **Specification writing:** describing a task precisely enough that a model, or a junior colleague, can do it. This is the core skill.
- **Review of AI output:** knowing the typical failure modes (fabricated citations, unit confusion, plausible-but-wrong numbers, over-confident summaries).
- **Basic evaluation:** building a small golden set and measuring accuracy before trusting a workflow.
- **Data handling judgement:** knowing which data can go where.
