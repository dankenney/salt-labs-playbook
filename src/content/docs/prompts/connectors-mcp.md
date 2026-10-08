---
title: Connectors & MCP
description: Connecting AI assistants to sustainability data safely — read tools first, propose-only writes, and no approve button for the AI.
reviewed: 2026-10-07
owner: AI lead
tags: [mcp, agents, confidentiality]
status: draft
sidebar:
  order: 6
---

The Model Context Protocol (MCP) is an open protocol that lets AI assistants call tools and read resources exposed by a server. It is one way to "point your AI at" a system without copying data into chats. Whether you may use it with client data is a **firm policy decision**; check with IT security and risk first.

## Design rules

1. **Read tools first.** Start with read-only tools over a local connection.
2. **Propose-only writes.** Any write lands in a review queue as a proposal; there is no tool that approves, publishes or submits.
3. **The AI can never be the checker.** Segregation of duties is enforced by the server, not by the prompt.
4. **Least privilege.** Scope tools to one engagement and one data class; authenticate as the user; log every call.
5. **Return provenance.** Every value a tool returns carries its source reference so the assistant can cite it.

## Example tool set for an emissions system

| Tool | Type | Returns |
|---|---|---|
| `get_metric(metric_id)` | Read | Value, unit, period, snapshot ID |
| `get_lineage(calc_id)` | Read | Activity record → factor (publisher, version, row) → arithmetic steps → approvals |
| `list_pending_approvals()` | Read | Items awaiting review |
| `get_tieout_status()` | Read | Disclosures vs calculation output; mismatches |
| `search_methodology(query)` | Read | Cited paragraphs from indexed standards and policies |
| `propose_dq_correction(record_id, …)` | Propose | Creates a proposal in the review queue |
| `propose_classification(line_id, …)` | Propose | Creates a proposal in the review queue |

## Event-driven agents

Newer MCP work adds **events** so an agent can be woken when something happens (for example "a supplier submission arrived" or "a tie-out failed") instead of polling. Use cases: pre-check a submission and draft a follow-up email for a person to send; open an investigation note when a tie-out fails. Treat event specifications as evolving and keep a person in the loop for any external action.

## Other connector ideas

- Document stores (approved repositories) → extraction workflows ([P-03](/playbooks/supplier-data-extraction/))
- Regulatory sources (feeds) → horizon scanning ([P-13](/playbooks/regulatory-horizon-scanning/))
- Calculation tool exports → tie-out and evidence pack generation ([P-11](/playbooks/assurance-readiness/))
- Task trackers → creating review tasks from exception queues (create, never close)
