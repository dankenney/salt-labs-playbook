---
title: Hallucination controls
description: The practical controls that stop fabricated facts, numbers and citations reaching a deliverable.
reviewed: 2026-10-07
owner: AI lead
tags: [quality, governance]
status: stable
sidebar:
  order: 1
---

Language models produce fluent text whether or not it is true. In professional work the risk is not obvious nonsense; it is **plausible, specific and wrong**: a paragraph number that does not exist, a factor that is "about right", a regulation date from last year. Controls must assume this will happen.

:::note[Firm policy first]
These are general practices. Your firm's AI, quality and data policies take precedence.
:::

## The seven controls

| # | Control | How to apply |
|---|---|---|
| 1 | **Ground in provided sources** | Give the model the documents; instruct it to use only them and to say "NOT IN SOURCES" otherwise ([house rules](/prompts/#the-house-rules-block)) |
| 2 | **Cite or abstain** | Every factual claim carries a document + page/paragraph reference; claims without one are deleted. See [Citation discipline](/quality-risk/citation-discipline/) |
| 3 | **AI never does the math of record** | Numbers come from calculation tools; text binds to them. See [Numeric tie-out rules](/quality-risk/numeric-tie-out-rules/) |
| 4 | **Structured outputs** | Ask for tables or JSON with required fields, so missing evidence is visible and checkable by script |
| 5 | **Deterministic checks after the model** | Validate units, ranges, IDs, dates and cross-references in code |
| 6 | **Human review with a checklist** | Reviewers know the typical failure modes (below) and sample-check citations |
| 7 | **Measure** | Golden sets and trap questions for each workflow. See [Evals](/prompts/evals/) |

## Typical failure modes to look for

- [ ] Citations to pages or paragraphs that do not contain the quoted text
- [ ] Out-of-date regulatory facts (dates, thresholds) stated confidently
- [ ] Numbers that are rounded, re-computed or "harmonised" across sources
- [ ] Units silently converted (MWh ↔ kWh, short ↔ metric tons, HHV ↔ LHV)
- [ ] Averages or benchmarks that come from nowhere
- [ ] Over-confident summaries that drop qualifications ("may", "subject to")
- [ ] Conflicting sources merged into one answer instead of flagged
- [ ] Position changes when challenged without new evidence

## Reviewer quick check (2 minutes per page)

1. Pick three citations at random and open them. Do they say what the text claims?
2. Pick three numbers. Do they tie to the calculation output?
3. Search for words like "approximately", "typically", "industry average". Is there a source?
4. Is anything marked NOT IN SOURCES or TO CONFIRM still unresolved?

If any check fails, review the whole output, not just the failing item.
