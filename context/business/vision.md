---
status: draft
last_updated: 2026-04-19
category: business
tags: vision, mission, positioning, problem
---

# Vision

## What this is

Repo Business Context (RBC) — a lightweight framework for storing business, product, and operational knowledge as small, AI-readable Markdown files inside a code repository, alongside a Claude skill that routes, onboards, and maintains the files as the project evolves.

## Problem it solves

Every major AI coding standard today (`AGENTS.md`, Cursor rules, `CLAUDE.md`) covers **technical** context — build commands, code style, conventions. None covers **business** context — pricing, positioning, personas, brand voice, strategy. Solopreneurs building with AI agents re-explain their ICP, pricing, and tone on every chat; agents operate with partial context and drift away from business intent.

## Mission

Make business context as accessible to AI agents as code is. One place, small structured files, living alongside the product. Onboarding in 5 minutes; context grows through normal work.

## Positioning

- **Business context for AI-assisted development** — the gap between "what the code does" and "why it exists and for whom."
- **Claude-first, tool-agnostic** — best experience through the shipped skill; works with any agent that respects `AGENTS.md`.
- **Not a runtime, not a library** — a convention for Markdown files plus a skill that operates on them.

## Boundaries

- For single-repo products, not enterprise multi-repo workflows.
- For solopreneurs and very small teams, not orgs with Jira/Confluence/Notion stacks.
- For AI-heavy workflows where agents are real collaborators, not optional helpers.
