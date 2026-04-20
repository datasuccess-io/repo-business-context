---
status: active
last_updated: 2026-04-20
category: documentation
tags: readme, rbc, context, onboarding, skill
license: MIT
author:
  name: Igor Souza
  email: igor@datasuccess.io
  github: /issouza
  linkedin: /in/igorsansouza
---

# Repo Business Context (RBC)

> Small, AI-readable business context inside your repo — so agents stop guessing what you're building and who for.

---

## 1. What RBC is

RBC is a convention for storing **business, product, and operational knowledge** as small, structured Markdown files in `/context/`, alongside the code.

- **AI-first** — YAML frontmatter, stable file paths, selective loading. Agents consume only the files they need per task.
- **Claude-first** — a shipped skill (`.claude/skills/repo-business-context/SKILL.md`) handles onboarding, routing, and keeping context fresh.
- **Living** — context grows as you build. Never a one-off spec, never a consultant deliverable.

RBC is not a runtime, a library, or an ops framework. It's a lightweight context layer for repos where AI agents are real collaborators.

---

## 2. Why RBC exists

The industry has converged on a standard for **technical** agent context: `AGENTS.md`, Cursor rules, `CLAUDE.md`. None of these cover **business** context — pricing, positioning, personas, brand voice, roadmap.

Without RBC, every AI chat starts with:

> "Here's my ICP… our pricing is… our brand voice is… what we don't ship is…"

With RBC, you say:

> "Create a pricing page."

…and the agent reads `business/revenue-model.md` + `brand/voice.md` before writing a single line.

RBC covers the gap between "what the code does" and "why it exists, for whom, and how it should feel."

---

## 3. Who it's for

- **Solopreneurs building with AI agents** — the developer is also the founder.
- **Small teams (1–3)** working primarily in one repo.
- **AI-heavy workflows** where agents write a material share of code, copy, and decisions.

Not for: large orgs on Jira/Confluence/multi-repo setups, or throwaway prototypes.

---

## 4. How it works

Two concepts, cleanly separated:

| Piece | Role |
|---|---|
| `/context/` | Knowledge base. Small focused Markdown files. User content. |
| `.claude/skills/repo-business-context/SKILL.md` | Operating system. Claude's onboarding, routing, and maintenance logic. |

No runtime. No database. No custom tooling.

---

## 5. Why small files outperform a single monolith

The obvious alternative is one big `context.md`. It seems simpler. It isn't.

**Context rot is measurable.** Research on 18 frontier models found every one degrades as input grows — well before the context window fills. The mechanism: transformer attention concentrates at the start and end of context. Middle sections get significantly less attention regardless of importance. A 500-line business context file means your pricing and your architecture are present (and diluting each other) even when you're writing a commit message.

**RBC's routing is manual RAG without the infrastructure.** Every RAG system solves the same problem: don't load everything — load what's relevant. RBC does this with a deterministic routing table (task type → 1–3 files) instead of a vector search pipeline. For a single repo with a human in the loop, structured routing is more reliable than semantic search and requires zero infrastructure.

**Small files age gracefully.** When pricing changes, you update `revenue-model.md` — a clean, attributable diff. In a monolith, that same change is noise in a 500-line document. Per-file `last_updated` + `status` frontmatter gives meaningful freshness signals. A single `last_updated` on a monolith covers everything and therefore means nothing.

The "more files = more maintenance" intuition is the wrong frame. The skill handles update proposals. What you get instead: sharper AI reasoning, readable diffs, and per-concept freshness tracking.

---

## 6. The 5-minute onboarding

On first invocation in an RBC-enabled repo, the skill offers three paths:

### Path A — Quick (~5 min)

7 questions using the **5W2H** method:

> **What** · **Why** · **Who** · **Where** · **When** · **How** · **How much**

One answer can fill multiple files. The skill parses intent and routes content to the right places (`vision.md`, `personas.md`, `strategy.md`, `revenue-model.md`, `roadmap.md`, `channels.md`). Brand voice is inferred from how you write your answers and saved to `voice.md`. Everything lands as `status: draft` for you to approve.

### Path B — Extract from codebase

For existing repos. The agent scans `README.md`, `package.json`, folder names, and code for hints about product, stack, naming, and differentiators. Inferences land as `status: draft` with notes on what evidence they came from. You batch-confirm.

### Path C — Build gradually (default)

Skip upfront onboarding entirely. Start coding. When the agent hits a business-context gap during normal work ("I need your ICP to write this landing page"), it asks 1–2 questions and saves the answer.

**The onboarding is a floor, not a ceiling.** Context grows through every subsequent conversation. The "5-minute" promise is your first value — the living-document behavior is what keeps it useful.

---

## 7. File structure

```
/context
├── README.md                   # This file
│
├── business/
│   ├── vision.md               # Problem, mission, positioning
│   ├── personas.md             # Who you build for
│   ├── strategy.md             # Differentiator, in-scope / out-of-scope
│   ├── value-prop.md           # Core value pillars
│   ├── revenue-model.md        # Pricing, plans, unit economics
│   └── domain-model.md         # Business concepts and rules
│
├── product/
│   ├── roadmap.md              # Current focus, near-term plan
│   ├── features.md             # Shipped + planned features
│   ├── use-cases.md            # Key user stories
│   ├── integrations.md         # External products you depend on
│   └── backlog.md              # Candidate work
│
├── tech/
│   ├── architecture.md         # System components, data flow
│   ├── data-model.md           # Entities, schemas
│   ├── conventions.md          # Libraries, patterns, constraints
│   ├── providers.md            # SaaS, infra, credentials location
│   └── observability.md        # Logging, metrics, monitoring
│
└── brand/
    ├── voice.md                # Tone, vocabulary, do/don't
    ├── assets.md               # Logo, colors, asset links
    ├── ux-principles.md        # UX and design guidelines
    └── channels.md             # Website, email, social — per-channel nuances
```

The skill lives at `.claude/skills/repo-business-context/` — installed at user level (`~/.claude/skills/`) or project level.

Start with the files the skill drafts from your onboarding (likely 5–7 files). The rest are placeholders; add content as you need it.

---

## 8. Frontmatter schema

Every `/context/` file starts with:

```yaml
---
status: draft | active | deprecated
last_updated: YYYY-MM-DD
category: brand | business | product | skill | tech
tags: tag1, tag2
---
```

- `status` — `draft` for AI-generated or unconfirmed content. `active` when the human promotes it. `deprecated` for historical files no longer in use.
- `last_updated` — bumped on meaningful changes.
- `category` — matches the folder.
- `tags` — free-form, for search and agent retrieval.

**Only the human promotes `draft` → `active`.** Agents draft freely; the user is the editor-in-chief.

---

## 9. How to adopt RBC

Install the skill at `~/.claude/skills/repo-business-context/` (user-level, works across all your repos) or `.claude/skills/repo-business-context/` (project-level, scoped to one repo). The skill scaffolds `/context/` and writes this README automatically on first run.

---

## 10. Keeping it alive (not a burden)

RBC's #1 risk is stale files. Mitigations built into the framework:

- **The skill proposes updates** — you're not maintaining alone.
- **One answer, many files** — no ceremony, no one-to-one mapping.
- **Drafts are cheap** — AI fills them; you only approve.

Not every code change needs a context update. Refactors and bug fixes usually don't. A new feature, new pricing, new provider, or new audience does.

---

## 11. Summary

- RBC turns your repo into an AI-readable **business** knowledge layer — filling the gap that technical context standards don't cover.
- **Files** are the artifacts. **The skill** is the operating system.
- **5 minutes** is your first value. **Living** is what retains it.
- Intent in `/context/`. Execution in code. Agents keep them aligned.
