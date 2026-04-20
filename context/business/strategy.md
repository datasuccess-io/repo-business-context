---
status: draft
last_updated: 2026-04-19
category: business
tags: strategy, differentiator, scope, positioning
---

# Strategy

## Differentiator

No existing AI-agent framework ships a **business context** layer. The market has technical context standards (AGENTS.md, Cursor rules, CLAUDE.md) adopted across 60k+ repos, but none of them cover pricing, personas, brand voice, or strategy. RBC is the first to treat those as first-class, versioned, in-repo artifacts — with a skill that handles onboarding and maintenance so it isn't a burden.

## Claude-first, tool-agnostic fallback

Best experience goes through the shipped Claude skill: 3-path onboarding, routing, lazy gap-filling, status discipline. Other agents (Codex, Cursor, Copilot) follow the cross-tool `AGENTS.md` protocol in the repo root.

## In scope

- Single-repo products, solopreneur to 1–3 person teams.
- Markdown + YAML frontmatter + a Claude skill. Zero runtime.
- Three onboarding paths: 5-minute quick (5W2H), codebase extraction, build-gradually (default).
- Status workflow (draft/active/deprecated) with user as editor-in-chief.

## Out of scope

- Multi-repo enterprise workflows.
- Replacing Jira, Notion, Confluence, Linear.
- Custom runtime, databases, or servers.
- Forced documentation — "build gradually" must remain a valid default.

## Key bets

- **The 5-minute onboarding is the sales hook.** The living-document behavior is what retains users.
- **Selective file loading is a feature**, not a constraint — it's what prevents context rot as `/context/` grows.
- **The skill replaces agent files**, not context files. One skill, not seven per-role agent files.
