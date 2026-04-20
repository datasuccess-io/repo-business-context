---
status: draft
last_updated: 2026-04-19
category: business
---

# Domain Model

## Core concepts

**Repo Business Context (RBC)** — The framework itself. A convention for storing business/product/tech/brand knowledge as small Markdown files in `/context/`, plus a Claude skill that operates on them.

**`/context/`** — The knowledge base folder at the repo root. Contains subfolders by concern (`business/`, `product/`, `tech/`, `brand/`).

**SKILL.md** — The Claude skill at `.claude/skills/repo-business-context/SKILL.md`. The operating system for RBC — handles activation, bootstrap, onboarding, routing, and maintenance.

**Context file** — An individual Markdown file under `/context/` with YAML frontmatter (`status`, `last_updated`, `category`, `tags`) and a focused topic.

## Status workflow

- `draft` — provisional content (AI-generated or unconfirmed). Usable but flagged.
- `active` — canonical, human-promoted.
- `deprecated` — historical; do not use unless explicitly requested.

**Only the user promotes `draft` → `active`.** Agents draft freely; users are editors-in-chief.

## The three onboarding paths

- **Quick (~5 min)** — 7 questions using the 5W2H method (What, Why, Who, Where, When, How, How much). Drafts core files in one pass.
- **Codebase extraction** — scan the repo for business signals; draft inferences for batch user confirmation.
- **Build gradually (default)** — no upfront flow. Agent asks 1–2 questions lazily when it hits a context gap during normal work.

## The routing principle

Agents load 1–3 `/context/` files per task, never the entire folder. Routing logic lives in the skill's `references/routing.md`.
