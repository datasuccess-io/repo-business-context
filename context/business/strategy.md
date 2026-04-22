---
status: active
last_updated: 2026-04-20
category: business
---

# Strategy

## The positioning opportunity

Traditional project frameworks (waterfall, agile, scrum) were built for teams — multiple people, fixed roles, coordinated handoffs. They assume planning precedes building.

The AI era broke that assumption. The solopreneur-AI pairing doesn't plan sprints — it discovers, builds, and ships, often the same day. The old frameworks create overhead without providing value for this workflow.

This creates a clear gap: the solopreneur needs _just enough_ structure to stay aligned without slowing down. Not a planning tool. Not a project manager. A thin context layer that evolves with the product.

RBC fills that gap. Positioned as the framework _for_ the AI era, not adapted from the team era.

## Differentiator

No existing AI-agent framework ships a **business context** layer. The market has technical context standards (AGENTS.md, Cursor rules, CLAUDE.md) adopted across 60k+ repos, but none of them cover pricing, personas, brand voice, or strategy.

RBC is the first to treat business context as first-class, versioned, in-repo artifacts — with a skill that handles onboarding and maintenance so it stays alive without becoming a burden.

## The repo-as-record insight

In the AI-era workflow, the repo already contains the full product history:

- Commits = the sprint record
- PRs = the retrospective
- Releases = the milestones

RBC adds the one thing missing: the business context that makes that history meaningful. You don't plan ahead — you chat, deploy, and the product documents itself. RBC keeps the _why_ aligned as the _what_ evolves.

## Claude-first, tool-agnostic fallback

Best experience through the shipped Claude skill: 3-path onboarding, routing, lazy gap-filling, status discipline. Other agents follow whatever protocol they support via standard files.

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

- **The AI era needs a new framework** — not agile adapted for one person, but something built from scratch for the chat-deploy rhythm.
- **The 5-minute onboarding is the hook.** The living-document behavior is what retains users.
- **Selective file loading is a feature**, not a constraint — prevents context rot as `/context/` grows.
- **The skill replaces agent files** — one skill, not seven per-role agent files.
