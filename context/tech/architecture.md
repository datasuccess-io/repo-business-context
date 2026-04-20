---
status: draft
last_updated: 2026-04-19
category: tech
tags: architecture, structure, components
---

# Architecture

## Overview

Zero runtime. RBC is a convention (file structure + frontmatter schema) plus a Claude skill. Everything lives in Git; nothing is served, deployed, or hosted.

## Components

### `/context/` folder

The knowledge base. Four primary subfolders:

- `business/` — vision, personas, strategy, value-prop, revenue-model, domain-model.
- `product/` — roadmap, features, use-cases, integrations, backlog.
- `tech/` — architecture, data-model, conventions, providers, observability.
- `brand/` — voice, assets, ux-principles, channels.

### The skill (`.claude/skills/repo-business-context/`)

- `SKILL.md` — entry point, ~120 lines, loaded when skill triggers.
- `assets/context-readme.md` — canonical README template, written verbatim during bootstrap.
- `references/` — five files loaded on-demand:
  - `onboarding-quick.md`, `onboarding-codebase.md`, `onboarding-gradual.md` (one per path).
  - `routing.md` (task → files).
  - `maintenance.md` (update workflow + status rules).

Progressive disclosure: metadata always in context, SKILL.md on trigger, references only when needed.

## Data flow

1. User invokes Claude in repo.
2. Skill activates — bootstraps `/context/` if absent, then detects situation (empty / has content / reality changed).
3. For each task: skill consults `references/routing.md` → loads 1–3 context files.
4. Agent responds using the loaded context.
5. If task shifts business reality: agent proposes context updates; user confirms; files edited with `last_updated` bumped.

## Why small focused files

This is a deliberate architectural choice, not just convention.

**Context rot is measurable.** Research on 18 frontier models found every one degrades as input grows — well before hitting the context window limit. The mechanism: transformer attention concentrates at the beginning and end of input. Middle sections receive significantly less attention regardless of content quality. A 500-line monolith `context.md` puts your pricing, architecture, personas, and brand voice in context simultaneously — and most of it becomes noise.

**The routing table is manual RAG without infrastructure.** RAG (Retrieval-Augmented Generation) solves exactly this problem: don't load everything, load what's relevant. RBC does this with a deterministic routing table (task type → 1–3 files) instead of a vector search pipeline. For a single repo with a human in the loop, structured routing is more reliable than semantic similarity search, and requires nothing beyond Git.

**Small files age predictably.** A change to `revenue-model.md` produces a clean, scoped diff. In a monolith, the same change is buried in hundreds of lines. Per-file `last_updated` + `status` gives meaningful staleness signals. A single `last_updated` on a monolith covers everything and therefore signals nothing.

## Why zero runtime

- Solopreneur audience — no infrastructure to manage.
- Versioned-with-code is the whole point — Git is the runtime.
- Markdown + YAML is universal — any context, any editor.
- Zero conflict with existing repo setup — no files written outside `/context/` and `.claude/skills/`.
