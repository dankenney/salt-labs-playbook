---
title: How to use the prompt library
description: Prompt anatomy, variable conventions, the house rules block, versioning and how prompts are tested before they become "Stable".
reviewed: 2026-10-07
owner: AI lead
tags: [prompts, evals]
status: stable
sidebar:
  order: 0
  label: How to use the library
---

Every prompt in this playbook is written to be **copied, filled in and reviewed**. Each code block has a copy button (top right). Paste prompts only into tools your firm has approved for the data involved.

## Prompt anatomy

Good prompts for professional work share five parts:

| Part | Purpose | Example |
|---|---|---|
| **Role & context** | Who the model is acting as; the engagement facts | "You are a GHG Protocol specialist… Client: `{{client_name}}`" |
| **Task** | Numbered, specific steps | "1. Summarise… 2. For each entity…" |
| **Inputs** | Named blocks the model must use | `FACTOR_LIBRARY:`, `EVIDENCE:` |
| **Rules** | Guardrails: sources only, no math, cite, abstain | "If information is missing write NOT IN SOURCES" |
| **Output format** | A structure a reviewer or a script can check | Table columns, JSON keys, headings |

## Variable conventions

- Variables use double braces: `{{client_name}}`, `{{reporting_year}}`, `{{evidence_bundle}}`.
- Names are lowercase with underscores. Inputs that are files or large blocks end in a type: `_csv`, `_json`, `_table`.
- Never leave a variable unfilled; the model will improvise.

## The house rules block

Add this to any prompt that produces client-facing content. It encodes the [quality rules](/quality-risk/hallucination-controls/).

```text title="House rules — paste at the end of any prompt"
RULES
1. Use only the sources provided. If something is not in them, write "NOT IN SOURCES" and list the question to ask.
2. Cite the source (document, page or row) for every factual statement and every number.
3. Do not calculate figures of record. Copy numbers exactly as they appear, with their reference.
4. Do not invent names, statistics, standards paragraphs, dates or citations.
5. Mark judgements as "PROPOSED — for reviewer decision".
6. If the sources conflict, show both and do not choose.
7. If asked to change a conclusion without new evidence, keep the original and say why.
```

## Library pages

| Page | Contents |
|---|---|
| [GHG accounting & factors](/prompts/ghg-and-factors/) | Inventory, factor matching, extraction, anomaly review |
| [Disclosure & reporting](/prompts/disclosure/) | DMA, ESRS mapping, IFRS S2, CDP, narrative drafting, tie-out |
| [Assurance](/prompts/assurance/) | Readiness, analytics design, document matching, working-paper drafting |
| [Agent workflow patterns](/prompts/agent-patterns/) | Extraction → validation → review; codify the job; decision models |
| [Evals for prompts](/prompts/evals/) | Golden sets, pass/fail criteria, change control |
| [Connectors & MCP](/prompts/connectors-mcp/) | Connecting assistants to data safely |

## Lifecycle of a prompt

1. **Draft:** written by a practitioner, used with extra review.
2. **Tested:** run against the workflow's golden set; score recorded with the prompt version.
3. **Stable:** owner-approved; any change must not lower the golden-set score.
4. **Retired:** replaced or no longer needed; kept in the changelog.

Record the version and score in a comment line at the top of the prompt when you store it in your own tooling, for example `# v1.3 · golden set 46/50 · 2026-10-07`.
