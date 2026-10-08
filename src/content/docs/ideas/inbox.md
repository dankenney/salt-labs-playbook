---
title: Ideas inbox
description: Curated ideas from our reading — ranked for practice relevance, linked to sources, and mapped to the playbooks they changed.
reviewed: 2026-10-07
owner: AI lead
tags: [ideas, evals, agents, extraction, mcp]
status: stable
reviewEveryMonths: 1
sidebar:
  order: 1
---

This is where new ideas land before they become playbook content. Each idea says **where it came from**, **what it changes in practice**, its **status**, and the **caveats**. Ideas are curated, not endorsed; sources are public posts and repositories.

**Batch 2026-10 — from the team's X reading list (Aug–Oct 2026).** About 200 saved posts were screened; most were general AI news and were skipped. The ideas below are the ones with a concrete use in sustainability practice.

| Status | Meaning |
|---|---|
| **Folded in** | Already reflected in a playbook or library page (linked) |
| **Backlog** | Worth piloting; not yet in the playbook |
| **Watching** | Promising but early; revisit next quarter |

## Summary

| # | Idea | Status | Changed |
|---|---|---|---|
| 1 | Cheap decision models with calibrated confidence for triage | Backlog | [Agent pattern 5](/prompts/agent-patterns/#pattern-5--cheap-decision-model-as-a-router) |
| 2 | A real eval harness for every AI proposal | Folded in | [Evals](/prompts/evals/), [P-11](/playbooks/assurance-readiness/#controls-over-ai-assisted-steps-assurers-will-ask) |
| 3 | Agent-native systems: MCP read tools, propose-only writes, events | Folded in | [Connectors & MCP](/prompts/connectors-mcp/) |
| 4 | Codify the job: turn repeated AI judgements into tested rules | Folded in | [Agent pattern 4](/prompts/agent-patterns/#pattern-4--codify-the-job), [P-03](/playbooks/supplier-data-extraction/#8-learn) |
| 5 | PDF and utility-bill extraction with page and bounding-box lineage | Folded in | [P-03](/playbooks/supplier-data-extraction/), [Tools](/tools/landscape/#document-extraction) |
| 6 | Model business events as linked objects, not just ledger rows | Watching | [Prompt G-2](/prompts/ghg-and-factors/) |
| 7 | A "trap" benchmark for AI that answers questions about data | Folded in | [Evals: trap questions](/prompts/evals/#trap-questions) |
| 8 | Validate iXBRL with Arelle; track the revised-ESRS draft taxonomy | Folded in | [P-05](/playbooks/esrs-gap-analysis/), [Tools](/tools/landscape/#xbrl-validation) |
| 9 | Agent-powered security scanning as a standing control | Backlog | [Red-team lessons](/reference-build/red-team-lessons/) |
| 10 | AI change control: held-out validation, "what we tried" log, pushback tests | Folded in | [Evals: change control](/prompts/evals/#change-control), [Tool approval](/quality-risk/tool-approval-documentation/) |
| 11 | Methodology copilot with contextual retrieval and paragraph citations | Folded in | [Agent pattern 2](/prompts/agent-patterns/#pattern-2--retrieve--answer--cite-or-abstain) |
| 12 | Deterministic demo videos rendered from HTML | Backlog | — |
| 13 | Trace every AI run like a ledger entry; mine traces for failures | Folded in | [Agent pattern 6](/prompts/agent-patterns/#pattern-6--trace-everything) |

---

### 1. Cheap decision models with calibrated confidence for triage
**Source:** posts by [@simonw](https://x.com/i/status/2102175146740232238), [@sydneyrunkle](https://x.com/sydneyrunkle/status/2102519191157068024); write-up: [simonwillison.net, Sep 2026](https://simonwillison.net/2026/Sep/21/jev/).
**Idea:** small "decision" models return typed answers (yes/no, a choice among options, a score) with probabilities at very low cost. Use them to route high-volume items — spend lines, supplier submissions — and send anything below a calibrated threshold to a person or a stronger model.
**In practice:** generate candidate categories transparently first, then ask the model to choose; log every probability with the reviewer's decision.
**Caveats:** new services; third-party APIs are a data-processing decision; vendors note weakness on numbers and dates. Evaluate on your own golden set (idea 2). Open-weight local alternatives may be safer for client data.

### 2. A real eval harness for every AI proposal
**Source:** posts by [@lennysan](https://x.com/i/status/2102464854594662480) and [@HamelHusain](https://x.com/HamelHusain/status/2089438973714440196); resource: [ai-evals-course/evals-skills](https://github.com/ai-evals-course/evals-skills) (Apache-2.0).
**Idea:** agent skills for error discovery, writing code-based evals and LLM judges, and validating judges against human labels.
**In practice:** turn reviewer decisions into versioned golden sets; score pass/fail per failure mode; put the scorecard in the evidence pack as validation evidence for AI-assisted steps — the kind of thing an assurer may ask for under ISSA 5000 or ISAE 3410 when AI touches reported information.
**Caveats:** dev tooling, not runtime; golden sets must be synthetic or anonymised.

### 3. Agent-native systems: MCP read tools, propose-only writes, events
**Source:** posts by [@nbaschez](https://x.com/nbaschez/status/2106437805413195895) and [@trq212](https://x.com/trq212/status/2089844723691479333); resource: [MCP Events documentation](https://developers.openai.com/plugins/build/mcp-events).
**Idea:** expose a reporting system to AI assistants through read tools and propose-only writes, with events that wake an agent when something happens.
**In practice:** see the example tool set and rules on [Connectors & MCP](/prompts/connectors-mcp/): no approve tool, segregation of duties enforced by the server.
**Caveats:** requires real authentication first; event specifications are still evolving.

### 4. Codify the job: turn repeated AI judgements into tested rules
**Source:** posts by [@_aj](https://x.com/_aj/status/2102061534956662818) and [@garrytan](https://x.com/i/status/2107129959550685660); resources: [AgentRun guide](https://agentrun.ai/docs/guide), [Operator's Guide to AI write-up](https://operatorsguidetoai.substack.com/p/how-we-built-an-agent-harness-that).
**Idea:** move explicit rules into code and reserve models for narrow judgements, with an "uncertain → escalate" path. The write-up reports a large cost reduction on a compliance-alert workload (the authors' own figures).
**In practice:** when reviewers approve the same correction repeatedly, propose a deterministic rule with a test; approve it through maker-checker; keep a versioned rule register. The deterministic share of the workflow grows each cycle — a strong assurance story.
**Caveats:** adopt the pattern, not necessarily the library; rules learned on synthetic data must be re-learned on real data.

### 5. PDF and utility-bill extraction with page and bounding-box lineage
**Source:** post by [@undefinedKi](https://x.com/undefinedKi/status/2086859139771220318) ("none of the five made their assistant smarter; all five made what it reads better"); resources: [OpenDataLoader PDF](https://github.com/opendataloader-project/opendataloader-pdf), [opendataloader-bench](https://github.com/opendataloader-project/opendataloader-bench), [docling-graph billing example](https://github.com/docling-project/docling-graph/blob/main/docs/usage/examples/billing-document.md).
**Idea:** parse layout well, then extract fields with document hash + page + bounding box, so a reviewer can click from tCO2e to the highlighted number on the bill.
**In practice:** now the backbone of [P-03](/playbooks/supplier-data-extraction/).
**Caveats:** layout benchmarks don't measure invoice-field accuracy ([one study](https://arxiv.org/html/2510.15727v1) found large differences in field accuracy between extractors); build a field-level eval set. Check parser licences.

### 6. Model business events as linked objects, not just ledger rows
**Source:** post by [@eya0](https://x.com/eya0/status/2097801524579864803) (vendor-authored article).
**Idea:** a flat ledger is "a list of conclusions". Linking objects (purchase order → shipment → freight legs → carrier invoice → spend line) lets "why did this move?" be answered by walking links, not guessing.
**In practice:** add balance-style invariants (bill kWh = meter totals; allocation shares sum to 100%; every spend line classified or excluded with a reason) and use bridge tables for variance explanations ([prompt G-2](/prompts/ghg-and-factors/)).
**Caveats:** architecture change; pilot on one slice (for example inbound freight).

### 7. A "trap" benchmark for AI that answers questions about data
**Source:** post by [@isidoremiller](https://x.com/isidoremiller/status/2087921963985453316); resource: [Hex DataBench write-up](https://hex.tech/blog/databench-agentic-analytics-benchmark/).
**Idea:** models do noticeably worse on tasks where a plausible easy answer is wrong, and rarely say a question can't be answered honestly.
**In practice:** sustainability trap questions are listed in [Evals](/prompts/evals/#trap-questions). Run every candidate assistant against them before use.
**Caveats:** keep your benchmark private so it doesn't leak into training data.

### 8. Validate iXBRL with Arelle; track the revised-ESRS draft taxonomy
**Source:** adjacent research (no direct post); resources: [EFRAG ESRS XBRL taxonomy consultation](https://www.efrag.org/en/projects/esrs-xbrl-taxonomy/exposure-draft-consultation), [Arelle](https://arelle.org/).
**Idea:** EFRAG published a draft XBRL taxonomy for the revised ESRS on 17 Sep 2026 (consultation open to 11 Nov 2026). Validate tagged outputs with an independent processor and label them "validated against draft taxonomy" until final.
**Caveats:** draft taxonomy; mandatory ESRS digital tagging timing is not yet settled.

### 9. Agent-powered security scanning as a standing control
**Source:** posts by [@DavidOndrej1](https://x.com/DavidOndrej1/status/2087862257279459422) and [@rauchg](https://x.com/rauchg/status/2086965425968148806); resource: [vercel-labs/deepsec](https://github.com/vercel-labs/deepsec) (Apache-2.0).
**Idea:** make red-teaming of internal tools repeatable by scanning on every change.
**Caveats:** sends code to a model provider — approval needed; set cost limits.

### 10. AI change control: held-out validation, "what we tried" log, pushback tests
**Source:** posts by [@akshay_pachaar](https://x.com/akshay_pachaar/status/2094069402471944652) and [@omarsar0](https://x.com/omarsar0/status/2088292067994951928) (research papers linked in the posts).
**Idea:** accept a prompt or rule change only if it improves a held-out set; keep an append-only log of attempts; test whether AI judgements hold under pushback.
**In practice:** folded into [Evals](/prompts/evals/#change-control) and the [tool approval dossier](/quality-risk/tool-approval-documentation/).
**Caveats:** research results, not products.

### 11. Methodology copilot with contextual retrieval and paragraph citations
**Source:** post by [@undefinedKi](https://x.com/undefinedKi/status/2086859139771220318).
**Idea:** context headers on each indexed chunk, query rewriting, and reusing existing access controls at query time.
**In practice:** [Agent pattern 2](/prompts/agent-patterns/#pattern-2--retrieve--answer--cite-or-abstain): answers must cite or abstain, evaluated with unanswerable questions.

### 12. Deterministic demo videos rendered from HTML
**Source:** post by [@deedydas](https://x.com/deedydas/status/2104957026199900220); resource: [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) (Apache-2.0).
**Idea:** render explainer videos from HTML compositions so they can be regenerated when numbers change; add a "critic" step that checks narration against on-screen numbers.
**Caveats:** render locally; avoid AI avatars for audit-minded audiences.

### 13. Trace every AI run like a ledger entry; mine traces for failures
**Source:** posts by [@hwchase17](https://x.com/hwchase17/status/2088342687808438352) and [@samhogan](https://x.com/samhogan/status/2089952339386151076); resources: [LangSmith observability concepts](https://docs.langchain.com/langsmith/observability-concepts), [context-labs/HALO](https://github.com/context-labs/HALO).
**Idea:** store full traces (inputs, evidence, model, probabilities, human decision) and periodically mine them for failure patterns.
**Caveats:** many tracing tools are SaaS by default — self-host or keep local; check licences.

## Honourable mentions

- **DESIGN.md for brand-consistent agent output** — [Vercel post](https://x.com/vercel/status/2094539714984550471), [write-up](https://vercel.com/blog/how-our-agents-build-on-brand-pages-with-design-md). One markdown file of design rules keeps agent-built pages on-brand. (This site's theme rules live in `MAINTAINING.md` for the same reason.)
- **visual-explainer** — [repo](https://github.com/nicobailon/visual-explainer) (MIT): HTML diagrams and slides from plans; useful for audit-committee explainers.
- **ApprenticeBench** — [post](https://x.com/NeoCognition/status/2098147185657565391): agents doing realistic accounting work, at higher cost than people. Useful framing for business cases.
- **deepagents** — [repo](https://github.com/langchain-ai/deepagents) (MIT): open-source agent harness if workflows outgrow single calls.
- **Caution from the feed:** AI-written tests may not help; keep golden test cases human-authored.

## Submit an idea

Copy this into the team channel or open a pull request (see [How to contribute](/maintaining/how-to-contribute/)):

```markdown title="Idea template"
**Idea:** one sentence
**Source:** link(s) — post, repo, paper (public only)
**Practice use:** which playbook or task it improves, and how
**Evidence:** what the source actually shows (quote or figure, with link)
**Caveats:** data, licence, maturity, cost
**Suggested status:** Backlog / Watching
```
