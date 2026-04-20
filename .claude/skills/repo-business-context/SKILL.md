---
name: repo-business-context
description: Use whenever working in a repo containing a /context/ folder (Repo Business Context framework), or when a user wants to set up RBC for the first time, document their project for AI agents, or start capturing business context. Teaches the agent to read, write, and maintain business, product, tech, and brand context as small focused Markdown files; to load selectively (never the whole folder); to respect status:active|draft|deprecated discipline; and to onboard the user via three paths — quick 5W2H questionnaire (~5 min), codebase extraction (existing repos), or build-gradually (default, lazy 1-2 questions during normal work). Trigger on any task involving business context — personas, ICP, pricing, roadmap, positioning, brand voice, value prop, strategy — even if the user doesn't mention RBC. Trigger on first invocation in an RBC-enabled repo to check if onboarding is needed. Trigger when code or requirement changes shift business reality and context files may need updating.
category: skill
version: 1.0.0
---

# Repo Business Context (RBC) — Operating System

You are operating in a repository that uses the **Repo Business Context** framework. The `/context/` folder holds canonical business, product, tech, and brand knowledge as small focused Markdown files. Your job: consume it selectively, keep it aligned with reality, and help the user populate it with minimal friction.

The codebase is the source of truth for **execution**. `/context/` is the source of truth for **intent** — pricing, positioning, personas, brand voice, roadmap, strategy. Things that aren't in the code but shape how the code should behave and how the product should feel.

---

## Core principles

- **Load selectively.** Never read the entire `/context/` folder. Pick the 1–3 files relevant to the current task. Loading 20 files gives you worse reasoning than loading 2 relevant ones — attention degrades with input size.
- **Status is law.** Every context file has `status: active | draft | deprecated`. Treat them accordingly (see "Status discipline" below).
- **Never invent business facts.** If the context you need isn't there, ask the user. Do not guess pricing, positioning, audience, or voice from code or assumptions.
- **The user is editor-in-chief.** You draft; the user promotes drafts to `active`.
- **Be explicit.** In any substantive response, state which `/context/` files you read. This lets the user verify and catch drift early.
- **For execution tasks, prefer observable behavior.** If `/context/` conflicts with what the code actually does, complete the immediate task based on what the code shows, flag the conflict, and propose a context update.

---

## Bootstrap — setting up RBC from scratch

Before detecting which situation you're in, check whether RBC scaffolding exists.

Look for `/context/README.md` and the four subfolders (`business/`, `product/`, `tech/`, `brand/`). If they're absent, scaffold before anything else:

1. Create `/context/` and its four subfolders (`business/`, `product/`, `tech/`, `brand/`).
2. Write `/context/README.md` from `assets/context-readme.md` (in this skill's directory).
3. Tell the user briefly: *"I've scaffolded the RBC folder structure under `/context/`. Let's set up your business context."*

Then continue to the situation detection below.

This makes the skill self-sufficient: installing the skill alone (via `~/.claude/skills/` or `.claude/skills/`) is sufficient to adopt RBC.

---

## First decision: what situation are you in?

Before any substantive task, decide which of these three situations you're in. Glob `/context/**/*.md` and glance at file sizes — you can tell quickly without reading content.

### Situation A — `/context/` is empty or nearly empty

Most of the files under `/context/business/`, `/context/product/`, `/context/brand/` are empty or missing. The user hasn't onboarded yet.

**Offer the three paths once, briefly, then wait.** Do not push — "build gradually" is a valid and recommended default.

1. **Quick onboarding (~5 min)** — 7 questions using the 5W2H method. Drafts the core files in one pass.
2. **Extract from codebase** — scan the repo for business signals and draft inferences for you to confirm. Good for existing codebases with a meaningful README and structure.
3. **Build gradually (default)** — skip the upfront flow. I'll ask 1–2 minimal questions only when I hit a context gap during normal work.

Phrase it conversationally, e.g.: *"Before I help with this — your `/context/` looks empty, so I don't have your business details yet. Want me to run the 5-minute onboarding, extract what I can from the codebase, or just keep working and fill context as we go?"*

If the user picks a path, load the matching reference file:
- Quick → `references/onboarding-quick.md`
- Codebase → `references/onboarding-codebase.md`
- Gradually (or no answer, or "just go") → `references/onboarding-gradual.md` and proceed with the original task.

### Situation B — `/context/` has content

Normal operating mode. Before acting on a business-flavored task (copy, feature design, pricing, positioning, UX, strategy), open `references/routing.md` and load the 1–3 files that match the task. State in your response which files you read.

### Situation C — reality just changed

If the current conversation or code change shifts business reality (new feature shipped, pricing updated, new provider added, audience narrowed), propose context updates. Open `references/maintenance.md` for the workflow.

These situations aren't mutually exclusive — a single task can start in B and end in C.

---

## Status discipline

Every `/context/` file has YAML frontmatter:

```yaml
---
status: draft | active | deprecated
last_updated: YYYY-MM-DD
category: brand | business | product | skill | tech
tags: tag1, tag2
---
```

**Rules:**

- `active` — canonical. Use without caveat.
- `draft` — provisional. When you act on it, flag explicitly: *"Based on [draft] `business/personas.md`, which still needs your confirmation: …"*
- `deprecated` — do not use unless the user explicitly asks.
- **You never promote `draft` → `active` on your own.** Only the user does that. When you create new content (onboarding, gap-filling), it starts as `draft`.
- When you update a file's content, bump `last_updated` to today.
- If a file becomes obsolete, set `status: deprecated` and add a pointer to the replacement.

Why this matters: AI-drafted content that silently becomes "canonical" is the fastest way to erode user trust in the framework. Drafts are cheap and honest.

---

## References — load as needed

Do not read all of these upfront. Open only the one relevant to what you're doing.

- **`references/onboarding-quick.md`** — The 5W2H 7-question script and how to route answers to multiple files. Open when the user picks quick onboarding.
- **`references/onboarding-codebase.md`** — How to mine an existing repo for business signals and batch-confirm inferences. Open when the user picks codebase extraction.
- **`references/onboarding-gradual.md`** — How to ask 1–2 minimal questions lazily during normal work. Open when the user picks gradual, or by default when context gaps appear.
- **`references/routing.md`** — Task type → which files to load. Open before any substantive business-flavored task (Situation B).
- **`references/maintenance.md`** — When and how to propose context updates; full frontmatter workflow. Open after work that shifts business reality (Situation C).
- **`assets/context-readme.md`** — Canonical `/context/README.md` template. Written verbatim during bootstrap if the file is absent.

---

## What this skill does NOT do

- **Does not force onboarding.** "Build gradually" is valid; respect it.
- **Does not block deploys or gate work.** Context updates are proposals, not blockers.
- **Does not replace human judgment on business decisions.** The skill captures decisions the user makes; it doesn't make them.
- **Does not deep-dive the codebase on every task.** Only during codebase-extraction onboarding, or when the user explicitly asks.
