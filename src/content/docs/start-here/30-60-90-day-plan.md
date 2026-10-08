---
title: 30/60/90-day adoption plan
description: A sequenced plan to move a team from ad-hoc AI use to governed, measured AI-first delivery.
reviewed: 2026-10-07
owner: AI lead
tags: [adoption, operating-model, metrics]
status: stable
sidebar:
  order: 2
---

This plan assumes a team of roughly 10–40 practitioners, access to at least one firm-approved AI assistant, and a sponsor who can protect some time. Adjust the scope, not the sequence: **baseline → pilot → control → scale**.

:::tip[Pick two use cases, not ten]
The fastest path is two high-volume, low-judgement workflows that every engagement touches, for example [supplier data extraction](/playbooks/supplier-data-extraction/) and [ESRS datapoint mapping](/playbooks/esrs-gap-analysis/). Prove them, then expand.
:::

## Days 0–30: Baseline and safe foundations

**Goal:** everyone knows what is allowed, two pilots are chosen, and you have a baseline to measure against.

- [ ] Confirm which AI tools are approved, for which data classes, with your firm's risk, IT and independence contacts. Write it on one page.
- [ ] Appoint the AI lead and two workflow owners (see [Operating model](/start-here/operating-model/)).
- [ ] Run a 60-minute "rules of the road" session: [hallucination controls](/quality-risk/hallucination-controls/), [tie-out rules](/quality-risk/numeric-tie-out-rules/), [confidentiality](/quality-risk/confidentiality-data-handling/).
- [ ] Inventory recurring tasks. For each, note frequency, hours per occurrence, judgement level and data sensitivity. Score and pick two pilots.
- [ ] **Measure the baseline**: time how long the two pilot tasks take today on 3–5 real (or realistic) instances, and record error or rework rates.
- [ ] Build a small **golden set** for each pilot: 20–50 examples with known correct answers. See [Evals for prompts](/prompts/evals/).
- [ ] Set up the shared prompt library (this site) and a simple intake for ideas.

**Exit criteria:** approved-tool list published; baseline measured; golden sets exist; pilots have owners.

## Days 31–60: Pilot with controls

**Goal:** both pilots run on live work with review checkpoints and measured results.

- [ ] Write each pilot as a playbook page using the [page template](/maintaining/page-template/).
- [ ] Iterate prompts against the golden set until results are stable. Log every change and its score ("what we tried" log).
- [ ] Run the pilots on 2–3 engagements with a named reviewer for every output.
- [ ] Track: time per task, reviewer corrections per item, defects caught downstream, and practitioner feedback.
- [ ] Hold a weekly 30-minute review: what failed, what to change, what to codify as a rule rather than a prompt.
- [ ] Document the workflow for quality-management purposes (see [Tool approval & documentation](/quality-risk/tool-approval-documentation/)).

**Exit criteria:** each pilot shows a measured result against baseline (positive or not), a stable prompt version, and no unresolved quality issues.

## Days 61–90: Scale what worked

**Goal:** proven workflows become the default; the next wave is queued.

- [ ] Promote proven playbooks to **Stable** and train the wider team (45-minute walkthrough plus office hours).
- [ ] Retire what did not work, and write down why in the [changelog](/updates/changelog/).
- [ ] Pick the next 2–3 use cases from the backlog, favouring the [deep-dive playbooks](/playbooks/).
- [ ] Add the playbooks to engagement kick-off checklists so they are used by default.
- [ ] Report results to leadership using the [success metrics](/start-here/success-metrics/): measured time saved, quality indicators, adoption.
- [ ] Set the review cadence: monthly for regulatory pages, quarterly for playbooks.

**Exit criteria:** at least two workflows in default use; metrics reported; next wave started; maintenance cadence running.

## Common failure modes

| Failure | Prevention |
|---|---|
| "Pilot purgatory": many experiments, nothing adopted | Two pilots, fixed dates, exit criteria, a sponsor decision at day 60 |
| No baseline, so no credible result | Measure before you start, even roughly |
| Prompts drift and quality silently drops | Version prompts; re-run the golden set on every change |
| Reviewers rubber-stamp AI output | Reviewer checklists, sampled re-performance, and tracking of corrections per item |
| Shadow tools appear | Make the approved path easier than the unapproved one |
