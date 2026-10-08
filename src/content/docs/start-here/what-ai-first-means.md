---
title: What "AI-first" means for a sustainability practice
description: A working definition, what changes in day-to-day delivery, and what does not change.
reviewed: 2026-10-07
owner: AI lead
tags: [operating-model, adoption, governance]
status: stable
sidebar:
  order: 1
---

**AI-first** does not mean "AI does the work". It means that for every recurring task, the *default first move* is an approved AI workflow that produces a draft, an extraction or an analysis, and a qualified person then reviews, corrects and signs off. The human stays accountable; the AI changes where the hours go.

:::note[Firm policy comes first]
This playbook is a practical working guide. It does not replace your firm's policies on AI use, data handling, independence or quality management. Where anything here conflicts with firm policy, firm policy wins. Use only tools your firm has approved for the data you are handling.
:::

## The one-sentence test

> If a task is done more than twice a quarter, it should have a named workflow, a tested prompt or agent, a review checkpoint and an owner.

## What changes

| Before | AI-first |
|---|---|
| Analysts start from a blank page or last year's file | Analysts start from an AI draft that cites its sources, then edit |
| Data requests go out as generic spreadsheets | Requests are generated from the boundary and the materiality result, and responses are extracted and validated automatically |
| Reviewers read everything | Reviewers focus on flagged exceptions, high-impact numbers and judgement calls; low-risk items are sampled |
| Knowledge lives in people's heads and old decks | Methods are written down as prompts, rules and checklists that anyone can run |
| Quality is checked at the end | Controls (tie-outs, citation checks, eval sets) run at every step |
| Each engagement reinvents its templates | A shared library of prompts, templates and lessons learned improves after every engagement |

## What does not change

- **Professional judgement and accountability.** Materiality, methodology choices, conclusions and opinions belong to qualified people.
- **The math of record.** Reported numbers come from calculation tools you can re-perform, not from a language model. See [Numeric tie-out rules](/quality-risk/numeric-tie-out-rules/).
- **Evidence standards.** If you could not defend it to a reviewer before AI, you cannot defend it now.
- **Confidentiality and independence.** Client data only goes into approved tools, and assurance teams apply independence rules to any AI-enabled service. See [Independence](/quality-risk/independence-assurance/).

## The four layers of an AI-first practice

1. **People and roles**: an AI lead, workflow owners and trained reviewers. See [Operating model](/start-here/operating-model/).
2. **Workflows**: each use case written as a playbook with inputs, steps, prompts, checkpoints and an output template. See [Use-case playbooks](/playbooks/).
3. **Assets**: a versioned prompt and agent library, golden test sets, templates. See [Prompt & agent library](/prompts/).
4. **Controls**: tie-outs, citation rules, approval of tools, documentation that satisfies a quality reviewer. See [Quality, risk & ethics](/quality-risk/hallucination-controls/).

## Where AI is strong, and where it is not

| Strong today | Use with care | Do not use for |
|---|---|---|
| Summarising long regulations and standards with citations | Drafting narrative that will be published | Calculating reported figures |
| Extracting fields from bills, invoices, supplier questionnaires | Classifying spend to emission-factor categories (needs thresholds and review) | Deciding materiality or an assurance conclusion |
| First-pass mapping (datapoints, IROs, CDP questions) | Answering "why did this number move?" without linked data | Anything involving client data in an unapproved tool |
| Comparing documents (last year vs this year, policy vs disclosure) | Scenario narratives and qualitative risk assessments | Inventing benchmarks, statistics or citations |
| Generating checklists, data requests, PBC lists | Sampling and anomaly flags (the method must be documented) | Replacing required procedures or sign-offs |

## How to read this playbook

- Start with the [30/60/90-day plan](/start-here/30-60-90-day-plan/) if you are setting up a team.
- Go straight to a [playbook](/playbooks/) if you have an engagement this week.
- Read [Quality, risk & ethics](/quality-risk/hallucination-controls/) before you use AI on anything client-facing.
