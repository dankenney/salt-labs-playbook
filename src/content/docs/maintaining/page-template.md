---
title: Page template & metadata
description: The frontmatter fields every page needs, the playbook page skeleton, and the tag vocabulary.
reviewed: 2026-10-07
owner: AI lead
tags: [maintenance]
status: stable
sidebar:
  order: 2
---

## Frontmatter

```yaml title="Frontmatter (required fields first)"
---
title: "P-15 · Short, specific title"
description: One sentence that says what the reader gets.   # shown in search and cards
reviewed: 2026-10-07          # REQUIRED. Date a person last checked the whole page.
owner: Workflow owner — Topic # Role, not a personal name, on a public site
tags: [ghg-accounting, prompts]  # From src/data/tags.ts. Unknown tags fail the build.
status: draft                 # draft | stable | placeholder
reviewEveryMonths: 6          # 1 for regulatory pages, 3 for fast-moving topics
sidebar:
  order: 15
---
```

If `reviewed` is older than `reviewEveryMonths`, the page shows **review overdue** under the title.

## Playbook skeleton

```markdown title="Playbook page skeleton"
## At a glance
| | |
|---|---|
| **Outcome** | … |
| **AI does** | … |
| **AI never does** | … |
| **Time-saving estimate** | See [estimate](#time-saving-estimate) |

## When to use
## Inputs
- [ ] …
## Workflow
### Step 1 — … (duration)
## Prompts
(text code blocks with titles "Prompt N.1 — …", variables in {{double_braces}}, house rules)
## Human review checkpoints
| Checkpoint | Who | What |
## Quality and risk controls
## Output template
## Time-saving estimate
:::note[Estimate, not a measured result]
**Planning estimate:** … **Assumptions:** … Replace with measured numbers.
:::
## Related
```

## Writing style

- Plain, confident, specific. Short sentences. No hype words ("revolutionary", "10×", "seamless").
- Checklists for actions, tables for comparisons, callouts for warnings.
- Say "firm policy" rather than naming any firm's internal tools or policies.
- Date every regulatory statement.

## Callouts

```markdown title="Callout syntax"
:::note[Title]      general information
:::tip[Title]       a recommended shortcut
:::caution[Title]   a risk to watch
:::danger[Title]    a hard rule (policy, legal, independence)
```

## Tag vocabulary

Defined in `src/data/tags.ts`. Add a tag there first, with a human-readable label. Keep the list short; prefer existing tags.
