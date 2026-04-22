---
status: active
last_updated: 2026-04-19
category: tech
---

# Conventions

## Writing

- **Small focused files over sprawling documents.** Each context file targets one concept.
- **User's language over corporate-speak.** If the user said "customers," keep "customers."
- **Short drafts over long speculation.** Three lines of truth beat a paragraph of guess.
- **Evidence notes for inferred content.** When AI drafts from codebase scan, cite the source.
- **Never invent business facts.** Ask instead, mark as `draft`.

## Loading

- **Selective, not exhaustive.** Load 1–3 files per task via `references/routing.md`. Never the whole `/context/`.
- **State what you read.** In substantive responses, cite the files consulted so the user can catch drift.

## Status workflow

- New AI-authored content → `status: draft`.
- User promotes `draft` → `active`. Agents never promote on their own.
- Obsolete content → `status: deprecated`, keep the file with a pointer to the replacement.

## Markdown + YAML

- Plain Markdown body; no MDX, no HTML blocks, no custom syntax.
- YAML frontmatter only (no TOML, no JSON).
- Fenced code blocks for examples; tables where they clarify.

## Git

- Conventional Commits (recommended) — `feat:`, `fix:`, `docs:`, etc. Useful for readable history and release notes even without CI enforcement.

## Out of bounds

- No runtime. No databases. No servers. No custom JS tooling.
- No build step for context files — they're read as-is.
- No automated promotion of `draft` → `active`. That's the user's call by design.
