---
status: draft
last_updated: 2026-04-19
category: tech
---

# Data Model

## File as the unit

A "context file" is a single Markdown document under `/context/` with YAML frontmatter and focused content.

## Frontmatter schema

```yaml
---
status: draft | active | deprecated
last_updated: YYYY-MM-DD
category: brand | business | product | skill | tech
---
```

- **status** — `draft` for AI-generated or unconfirmed; `active` when human-promoted; `deprecated` for historical.
- **last_updated** — ISO date. Bumped whenever content meaningfully changes.
- **category** — matches the containing folder. Never changes.
- **tags** — free-form labels for retrieval. Add when topics genuinely shift; don't churn.

## Folder structure

- `/context/business/` — intent files (vision, personas, strategy, value-prop, revenue-model, domain-model).
- `/context/product/` — product files (roadmap, features, use-cases, integrations, backlog).
- `/context/tech/` — technical files (architecture, data-model, conventions, providers, observability).
- `/context/brand/` — brand files (voice, assets, ux-principles, channels).
- `/context/skills/repo-business-context/` — the skill (SKILL.md + references/).

## Constraints

- Markdown body only — no HTML, no MDX, no custom syntax.
- Plain YAML frontmatter — no JSON blocks.
- One concept per file — narrow focus over sprawling content.
- Files are human-readable first, agent-readable second. Both must work.
