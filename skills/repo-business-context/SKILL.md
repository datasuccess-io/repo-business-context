---
name: repo-business-context
description: Repo Business Context (RBC) helps agents manage business context within code repositories. Turn agents from code monkeys into business partners that can code. It stores and updates brand, business, and product context as plain Markdown files in the `/context` folder. Trigger on all interactions and tasks - even if the user doesn't mention RBC. Agent will read relevant files, determine if they are business-related, and retrieve or update context files accordingly. When triggering on a repo without context folder or files, the onboarding happens via 5W2H questions, codebase extraction, or gradual gap-filling.
allowed-tools: Read(./context/**) Write(./context/**) Edit(./context/**) Glob(./context/**)
license: MIT
compatibility: Designed for any skill-aware AI agent, LLM or CLI tools, including amp, antigravity, claude-code, clawdbot, codex, cursor, droid, gemini, gemini-cli, github-copilot, goose, kilo, kiro-cli, opencode, roo, trae, and windsurf.
metadata:
  author: issouza
  version: "1.2.0"
  category: skill
author:
  name: Igor Souza
  email: igor@datasuccess.io
  github: /issouza
  linkedin: /in/igorsansouza
  affiliation:
    name: DataSuccess
    url: https://www.datasuccess.io/
---

# Repo Business Context (RBC) — Operating System

You are operating in a repository that uses the **Repo Business Context (RBC)** framework. The `/context/` folder holds **canonical** brand, business, and product knowledge as small focused Markdown files. Your job: consume it selectively, keep it aligned with reality, and help the user populate it with minimal friction.

The codebase is the source of truth for **execution**. `/context/` is the source of truth for **intent** — pricing, positioning, personas, brand voice, strategy. Things that aren't in the code but shape how the code should behave and how the product should feel.

## Core principles

- **Load selectively.** Never read the entire `/context/` folder. Pick the 1–3 files relevant to the current task. Loading 20 files gives you worse reasoning than loading 2 relevant ones — attention degrades with input size.
- **Keep context current.** When reality shifts, update the relevant file and announce it. Silent drift is the failure mode.
- **Never invent business facts.** If the context you need isn't there, ask the user. Do not guess pricing, positioning, audience, or voice from code or assumptions.
- **Always announce file changes.** Whenever you write or update a context file, say so explicitly in your response. Never silently mutate context.
- **Be explicit.** In any substantive response, state which `/context/` files you read. This lets the user course-correct quickly.
- **For execution tasks, prefer observable behavior.** If `/context/` conflicts with what the code actually does, complete the immediate task based on what the code shows, flag the conflict, and update the context file.
- **Don't duplicate what the code already states plainly.** If a reader can learn it cheaply from one file — the stack, a config value, a schema, a rules table — point at that file instead of copying it here. Copied technical detail is the fastest way to make `/context/` stale and untrustworthy.
- **But do capture the picture no single file holds.** How the surfaces and modules fit together, which external service owns what and which of its limits actually constrains the design, which request paths carry no session, and the traps that already cost a production bug — none of that is recoverable from the code in reasonable time. It lives in someone's head, which makes it exactly what RBC exists to externalize. It belongs in `product/architecture.md`. The test is not "is this technical?" but **"is this cheap to learn from the code?"** — if yes, link it; if it spans modules or vendors, or exists only as tribal knowledge, write it down.
- **No task management.** Project management is assumed to be done as commits, PRs and releases. Also, each AI/agent has its way of managing short-term plans and tasks. You can use `/context/product/backlog.md` to write ideas and goals loosely, but never tasks.

## Bootstrap — setting up RBC from scratch

Before detecting which situation you're in, check whether RBC scaffolding exists.

Look for `/context/README.md` — it's the scaffold marker. If it's absent, scaffold before anything else:

1. Create `/context/` and its three subfolders (`brand/`, `business/`, and `product/`). Existing folders and files stay untouched.
2. Write `/context/README.md` with this content:

   ```markdown
   # Business Context

   This folder holds the business context for this repository — brand, business, and product knowledge as small, focused Markdown files, managed by the [Repo Business Context (RBC)](https://github.com/issouza/repo-business-context) skill. Agents read the relevant files before business-flavored work and keep them current as the product evolves.

   - `brand/` — vision, voice, channels, UX principles
   - `business/` — personas, revenue model, strategy, value proposition
   - `product/` — architecture, backlog, features, integrations, use cases

   Files are plain Markdown with no frontmatter. Empty or missing files are visible gaps, not errors.
   ```

3. Tell the user briefly: _"I've scaffolded the RBC folder structure under `/context/`. Let's set up your business context."_ (If `/context/` already had content and only the README was missing, just add it silently — no announcement needed.)

4. **Offer the trigger pointer, once.** Skill activation is model-judged and can miss — an instruction file line makes it reliable, because instruction files are always loaded. Ask: _"Want me to add a one-line pointer to your agent instruction file (`CLAUDE.md`, `AGENTS.md`, or equivalent) so business context is reliably consulted? It's the only thing RBC ever writes outside `/context/`."_ If yes, append this to the existing instruction file (create `AGENTS.md` with just this if none exists):

   ```markdown
   Business context lives in `/context/`, managed by the repo-business-context skill. Read the relevant files before writing user-facing copy, setting or changing pricing, planning a feature, choosing a provider, or making a positioning or audience call — and update them when that work changes what's true.
   ```

   Name the triggers rather than saying "business-flavored work" — a vague instruction is an ignorable one. Keep it to a pointer: never copy RBC's operating rules into the instruction file, where they are paid on every task and go stale the moment the skill updates.

   If the user declines, respect it and never re-offer.

The README matters beyond detection: git can't track empty folders, so it makes a fresh scaffold committable, and it tells humans and non-skill-aware agents what this folder is.

### The architecture pointer — a second, separate offer

When you first create `product/architecture.md` (during codebase onboarding, or on the fly during normal work), offer a pointer to it as well — **even if the user declined the pointer above, and even in a repo that was onboarded long ago.** This is a different offer with a different reason, not a re-ask.

The reason: RBC deliberately loads only 1–3 files per task, which means a map that must be consulted **before** planning can be skipped exactly when it is needed most. Every other context file is recoverable — an agent that misses `brand/voice.md` writes slightly-off copy. An agent that misses `architecture.md` plans against a system that doesn't exist.

Offer to append a short block naming the file, what it holds, when to read it, when to skip it, and that it must be kept current. Write it to fit the repo — the trigger list should name that system's actual surfaces and services. Skip cases matter as much as triggers: without them the pointer reads as "always read this," and gets ignored on the tenth trivial task.

Then continue to the situation detection below.

## Overall instructions

Here are the instructions to follow on before answering any question or doing any task:

- Identify if the task is related to business context.
- If the task is not business-related, neither read nor write RBC files, and proceed normally.
- If the task is business-related, determine if it requires reading, writing or updating context files.
- Choose 2 to 3 files based on the file intent below and the task at hand.
- Infos given by the user are always more important than the context files.
- **Decisions are assisted; updates are autonomous.** When new information contradicts existing context or other new information — a pivot, a pricing/positioning mismatch, an audience shift — surface the conflict and let the user decide the direction. Once decided, update every affected file without further approval, announcing each change. When new information is additive or clearly factual (feature shipped, user states a fact for the first time), update directly and announce it.
- Answering the user and completing the tasks is more important than managing RBC files, but keeping RBC files updated to the latest business context can't be neglected.
- If you can't find the right RBC files to work with, just proceed normally.
- If you can't complete the task without updating RBC files, do it.

## First decision: what situation are you in?

Before any substantive task, decide which of these three situations you're in. Glob `/context/**/*.md` and glance at file sizes — you can tell quickly without reading content.

> **Internal navigation only — never use the labels "Situation A", "Situation B", or "Situation C" in messages to the user.**

### Situation A — `/context/` is empty or nearly empty

Most of the files under `/context/brand/`, `/context/business/`, or `/context/product/` are empty or missing. The user hasn't onboarded yet.

**Offer the three paths once, briefly, then wait.** Do not push — "build gradually" is a valid and recommended default.

1. **Quick onboarding (~5 min)** — 7 questions using the 5W2H method. Drafts the core files in one pass.
2. **Extract from codebase** — scan the repo for business signals and draft inferences for you to confirm. Good for existing codebases with a meaningful README and structure.
3. **Build gradually (default)** — skip the upfront flow. I'll ask 1–2 minimal questions only when I hit a context gap during normal work.

Phrase it conversationally, e.g.: _"Before I help with this — your `/context/` looks empty, so I don't have your business details yet. Want me to run the 5-minute onboarding, extract what I can from the codebase, or just keep working and fill context as we go?"_

If the user picks a path, load the matching reference file:

- **Quick** → `references/onboarding-quick.md`. If the users asks for the recommended approach, this is the answer.
- **Codebase** → `references/onboarding-codebase.md`. Works well for projects already rich in content, or repos with research and other context documents in it.
- **Gradually** (or no answer, or "just go") → `references/onboarding-gradual.md` and proceed with the original task. This is the fallback/default approach.

### Situation B — `/context/` has content

Normal operating mode. Before acting on a business-flavored task (copy, feature design, pricing, positioning, UX, strategy), open `references/routing.md` and load the 1–3 files that match the task. State in your response which files you read.

### Situation C — reality just changed

If the current conversation or code change shifts business reality (new feature shipped, pricing updated, new provider added, audience narrowed), update the relevant context files. Open `references/maintenance.md` for the workflow — factual changes are applied directly and announced; contradictions are surfaced as decisions first.

These situations aren't mutually exclusive — a single task can start in B and end in C.

## Context files are living documents

`/context/` files are plain Markdown. The agent writes them, keeps them current, and announces every change. The user corrects wrong content in conversation; the agent updates immediately.

This is the same trust model as the codebase: you don't gate every AI-written line of code through a review checkpoint. You trust the output, correct what's wrong, and move on.

### Writing and updating files

- **Write with confidence.** Create or update files with the best content available from current signals. Don't hedge — write as if it's true, because you'll keep it true.
- **Always announce changes.** When you write or update a context file, say so in your response — one line: _"Updated `business/revenue-model.md` — free tier raised to 50 requests/day."_ Never silently mutate context.
- **Note your sources for inferences.** When content is inferred rather than explicitly stated, briefly note the basis: _"Set brand voice from README tone — terse and technical."_ This helps the user catch misreads fast. It's not a disclaimer; it's useful context.
- **Correct immediately.** When the user says something is wrong, update the file in the same turn. Don't ask for permission to fix what you've been told is wrong.

### When to update

Update a context file whenever the work you just did (or discussed) shifts what's true about the product. Use the table in `references/maintenance.md` for specifics.

The bar: **would a thoughtful collaborator update this note before the next session?** If yes, update it now.

### When files become obsolete

If a file's content no longer reflects reality and there's no clear replacement, delete the stale content and write what's currently true. Don't leave misleading content in place — wrong context is worse than no context.

## References — load as needed

Do not read all of these upfront. Open only the one relevant to what you're doing.

- **`references/onboarding-quick.md`** — The 5W2H 7-question script and how to route answers to multiple files. Open when the user picks quick onboarding.
- **`references/onboarding-codebase.md`** — How to mine an existing repo for business signals and batch-confirm inferences. Open when the user picks codebase extraction.
- **`references/onboarding-gradual.md`** — How to ask 1–2 minimal questions lazily during normal work. Open when the user picks gradual, or by default when context gaps appear.
- **`references/routing.md`** — Task type → which files to load. Open before any substantive business-flavored task (Situation B).
- **`references/maintenance.md`** — When and how to update context files; what triggers an update vs. what doesn't. Open after work that shifts business reality (Situation C).

## What this skill does NOT do

- **Does not force onboarding.** "Build gradually" is valid; respect it.
- **Does not block deploys or gate work.** Context maintenance happens in the flow of work, never as a gate.
- **Does not replace human judgment on business decisions.** The skill captures decisions the user makes; it doesn't make them.
- **Does not deep-dive the codebase on every task.** Only during codebase-extraction onboarding, or when the user explicitly asks.
