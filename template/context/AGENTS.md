---
status: active
last_updated: 2026-02-09
category: documentation
tags: agents, ai, llm, readme, context, instructions
author:
  name: Igor Souza
  email: igor@datasuccess.io
  github: /issouza
  linkedin: /in/igorsansouza
---

**Repo Business Context**

This file contains instructions for AI agents on how to read, interpret, and prioritize the Repo Business Context (`/context`) files.

It defines routing strategies and safety rules for agents when consulting context documents.

Read this before using `/context` files. If you follow this protocol, you will behave like a long-term collaborator who understands the product, not just a short-lived code completer.

---

# Files metadata

Every context file starts with this same schema:

```yaml
---
status: draft | active | deprecated
last_updated: YYYY-MM-DD
category: brand | business | product | skill | tech
tags: tag1, tag2, ...
---
```

- `status` — whether the content is authoritative (`active`), in progress (`draft`), or outdated but historically useful (`deprecated`).
- `last_updated` — update whenever the content meaningfully changes.
- `category` — what kind of document this is; corresponds to root-level `context/` folders.
- `tags` — summarize the topics covered, useful for search and retrieval.

# Overall instructions

- **Keep Context Fresh**: The user expects you to help keep the context up-to-date. **Propose updates to context** whenever you perform an action that modifies the business' behavior or strategy.
- **Prioritize Active Docs**: Always check `status` and `last_updated` to prioritize the most relevant documents. If all relevant docs are `deprecated`, **warn the user** about potential staleness.
- **Code vs. Context**: The codebase is the source of truth for _execution_, but `/context` is the source of truth for _intent_.
- **Handle Conflicts**: If you find contradictions between active context and the code, **inform the user** and request guidance. Do not assume one is correct without verification.
- **Update Metadata**: When you modify `context/` content, always update `last_updated` to the current date.
- **Manage Deprecation**: Do not silently delete deprecated docs, unless explicitly asked.

---

# Standard operating procedure for agents

If the task is to **code on the repository**:

1.  Evaluate if having business context would help you perform better.
2.  If yes, use the content within the `/context` directory before you act.
3.  Deliver the code change.
4.  Check if your change should be reflected in the context; if so, propose updates.

If the task is to **discuss business strategy** or to **generate content**:

1.  Heavily rely on the content within the `/context` directory before you act.
2.  Consult `context/README.md` for a better understanding of the methodology.
3.  Ignore the codebase unless explicitly asked to reference it.
4.  Deliver the content change.
5.  Check if your change should be reflected in the codebase; if so, propose updates.

---

# Routing by task type

Here are some **examples** of common tasks and which context files you may consult:

| If the task is…                                         | ...read these files from `context/`                                                               |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Understand the overall product & business               | `business/vision.md`, `business/strategy.md`, `product/roadmap.md`                                |
| Understand who we serve                                 | `business/personas.md`, `business/value-prop.md`                                                  |
| Propose or modify a feature                             | `product/features.md`, `product/use-cases.md`, `business/vision.md`, `business/strategy.md`       |
| Change UX or write in‑app copy                          | `brand/voice.md`, `product/ux-principles.md`, `product/features.md`                               |
| Change pricing or packaging                             | `business/revenue-model.md`, `business/value-prop.md`, `business/strategy.md`                     |
| Change system architecture or introduce a new component | `tech/architecture.md`, `business/domain-model.md`, `tech/conventions.md`, `tech/decisions.md`    |
| Add or modify data structures / DB schema               | `tech/data-model.md`, `business/domain-model.md`, `tech/conventions.md`                           |
| Decide whether to use a library / tool                  | `tech/conventions.md`, `tech/providers.md`                                                        |
| Investigate operational issues or propose infra changes | `tech/providers.md`, `tech/observability.md`                                                      |
| Understand what’s currently being worked on             | `product/roadmap.md`, `product/backlog.md`                                                        |
| Plan the next build/ship cycle                          | `product/backlog.md`, `product/roadmap.md`                                                        |
| Generate marketing copy or social posts                 | `business/value-prop.md`, `business/personas.md`, `brand/voice.md`, `brand/channels.md`           |
| Configure or extend agents                              | `skills/repo-business-context/SKILL.md`                                                           |
| Audit the quality/freshness of context                  | This file (`AGENTS.md`), `tech/decisions.md`, all `status: active` docs ordered by `last_updated` |
| Keep context aligned with code (Context Steward tasks)  | `tech/decisions.md`, relevant feature/tech docs per changes                                       |

---

## 4. Safety and constraint hotspots

### 4.1. Hard constraints

Certain files contain **hard constraints** that you must respect unless explicitly instructed otherwise:

- `tech/conventions.md` — technology and pattern constraints.
- `tech/architecture.md` — architectural boundaries.
- `tech/providers.md` — allowed/bound providers and tools.
- `brand/voice.md` — brand voice and terminology constraints.

Before you:

- Introduce a new library or provider,
- Change architectural boundaries,
- Generate public‑facing content,
- **Execute a destructive action**,

...you must consult at least these files and check for contradictions.

---

## When context and code disagree

If you detect a mismatch between `/context` and the actual code:

1. **Do not silently pick one.**
   - Inform the user that a mismatch exists.
   - State which files and code paths conflict.

2. **Prefer actual, observable behavior for short‑term actions**
   - For execution (“run this query”, “fix this bug now”), sub‑optimize for correctness, but:
     - Note that context is stale.
     - Propose follow‑up updates to `/context`.
