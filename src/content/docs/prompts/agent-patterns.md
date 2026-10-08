---
title: Agent workflow patterns
description: Six reusable patterns for multi-step AI workflows in sustainability work — with the control points that keep them reviewable.
reviewed: 2026-10-07
owner: AI lead
tags: [agents, prompts, quality]
status: stable
sidebar:
  order: 4
---

An "agent" here means a workflow where a model takes several steps — reading, calling tools, checking its own output — before a person reviews the result. The patterns below are tool-agnostic. Implement them in whatever your firm has approved.

## Pattern 1 — Extract → validate → review → load

The workhorse for documents and supplier data.

```text
[Documents] → parse (layout, tables, page + bbox)
            → extract fields (model, with provenance)
            → validate (deterministic rules in code)
            → exception queue (model proposes fixes)
            → human review (maker ≠ checker)
            → load to system of record (with provenance)
```

**Control points:** provenance-or-reject at extraction; rules in code, not prompts; maker-checker enforced by the system; sample re-performance of auto-passed items. Used in [P-03](/playbooks/supplier-data-extraction/).

## Pattern 2 — Retrieve → answer → cite or abstain

For questions about standards, regulations, methodologies and client documents.

- Index documents in chunks, and prefix each chunk with a one-line context header ("ESRS E1, disclosure requirement on GHG emissions, paragraph …"). Contextual chunk headers are a well-documented way to reduce retrieval failures.
- Answers must quote and cite the paragraph and document version, or say "not found in the indexed sources".
- Reuse existing access controls at query time — a user should only retrieve what they can already open.
- Evaluate with a question set that includes unanswerable questions. See [Evals](/prompts/evals/).

## Pattern 3 — Draft → bind → tie-out

For narrative that contains numbers.

- The model drafts with **binding tokens** (`{{metric:S1_total}}`) instead of digits (see prompt [D-1](/prompts/disclosure/)).
- The publishing step replaces tokens from the calculation output and **fails on any unbound number**.
- A tie-out report lists every number in every output and its source. See [Numeric tie-out rules](/quality-risk/numeric-tie-out-rules/).

## Pattern 4 — Codify the job

Move repeated AI judgements into tested, versioned rules.

1. Log every AI proposal and the reviewer's decision.
2. When the same kind of correction is approved repeatedly (for example "supplier X reports MWh in the kWh column"), draft a **deterministic rule** with a test case.
3. The rule goes through the same maker-checker approval and lives in a versioned rule register.
4. Over successive cycles, the share of items needing AI or human judgement falls, and the auditable, deterministic share rises.

This mirrors a pattern discussed in practitioner write-ups on agent harnesses: put explicit rules in code and reserve models for narrow judgements, with an explicit "uncertain → escalate" path (see the [Ideas inbox](/ideas/inbox/#4-codify-the-job-turn-repeated-ai-judgements-into-tested-rules)).

## Pattern 5 — Cheap decision model as a router

For high-volume triage (spend classification, "is this record plausible?"), a small model that returns **typed answers with probabilities** (yes/no, choice among given options, score) can route items: above a calibrated threshold → proceed; below → a person or a stronger model.

- Generate candidates transparently first (keyword or rules), then ask the model to choose among them.
- Calibrate the threshold on a labelled set; re-check calibration periodically.
- The model routes; it never computes figures. Treat third-party APIs as a data-processing decision for your firm.

## Pattern 6 — Trace everything

Every AI step writes a trace: inputs (or their hashes), retrieved evidence, model and version, output, probabilities, and the human decision. Keep traces locally or in an approved store, and keep a hash of the trace with the evidence pack. Traces feed error analysis (what fails most?) and give assurers the full chain for AI-assisted values.

## Choosing a pattern

| Task | Pattern |
|---|---|
| Bills, invoices, questionnaires | 1 (+ 4 over time) |
| "What does the standard say about…?" | 2 |
| Report narrative, CDP text | 3 |
| Spend classification, DQ triage | 5 → 4 |
| Anything that touches reported numbers | 6, always |
