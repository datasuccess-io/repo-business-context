# Repo Business Context (RBC)

Stop re-explaining your business to AI. Onboard in 5 minutes; context grows as you ship.

## A new era of building

Waterfall required a team. Agile required sprints, ceremonies, and dedicated roles. Neither anticipated what's possible with AI today.

A solopreneur can now sit down in the evening, chat with an AI, and ship something real before dinner. Developers ship without designers. Designers build without developers. Business people launch products without writing a line of code. The skill barrier collapsed — AI filled the gaps.

The new rhythm: **chat → deploy**. Often multiple times a day. No sprint planning. No design handoffs. No stand-ups.

Old frameworks were overhead designed to _coordinate a team_. You're not coordinating a team — you're directing an AI. That's a different problem, and it only needs a different (much lighter) solution.

The challenge that remains: when you move this fast, it's easy to drift. What started as a "task manager" quietly becomes a "workflow platform" after thirty feature conversations. Your AI doesn't know the original intent — and neither do you anymore.

### The repo is your project management system

Commits are the sprint. PRs are the retrospective. Releases are the milestones. RBC adds the one layer the repo was missing: the _business_ context that gives all of it direction.

### Coding is no longer the bottleneck — business clarity is

AI writes the code. What it can't do on its own is know who you're building for, what problem actually matters, or where the product should stop growing. Give it that context and it stops being a developer and becomes a business partner: it can advise on trade-offs, flag features that don't fit your ICP, write copy that sounds like you, and push back when scope creeps.

### The repo is the hub for far more than code

With modern MCPs, agents, skills, and AI-powered IDEs, the same repo that ships your product can now generate your social posts, write your sales pitch, brief a customer service agent, or produce your media kit — all coherent, all on-brand, because they're all drawing from the same business context. RBC is what makes that possible.

## The missing layer

Every AI coding tool has solved _technical_ context — `AGENTS.md`, Cursor rules, `CLAUDE.md`. None of them cover **business** context: who you're building for, your pricing, your brand voice, what's in scope and what isn't.

So every new session starts with:

> "Here's my ICP... our pricing is... our brand voice is... and by the way, we never build X..."

RBC fixes that. It puts business context directly in your repo — small, structured, AI-readable Markdown files — so your agent can just _know_.

## How it works

Two concepts, cleanly separated:

| Piece                     | Role                                                          |
| ------------------------- | ------------------------------------------------------------- |
| Folder `/context` in repo | Knowledge base. Small focused Markdown files. User content.   |
| AI agent Skill            | Operating system. Onboarding, routing, and maintenance logic. |

One skill does everything:

- **Bootstraps** `/context/` on first run — folder structure + README, no copying required
- **Onboards** via a 7-question 5W2H flow (~5 min), codebase extraction, or gradual build-as-you-go (the default)
- **Routes** each task to the 1–3 relevant context files — never the whole folder
- **Proposes updates** when work shifts what's true about the product

Your context lives in small, focused Markdown files:

```
/context
├── brand/      # assets, channels, ux-principles, vision, voice
├── business/   # domain-model, personas, revenue-model, strategy, value-prop
└── product/    # backlog, features, integrations, use-cases, ui-principles
```

> [!NOTE]
> The skill activates automatically on the first business-context task.

### Structured like code, not like a wiki.

The obvious alternative is one big `context.md` — simpler on the surface, worse in practice. Loading your entire business context on every task degrades AI reasoning: models lose focus as input grows, attending well to the start and end of context but poorly to the middle. RBC routes each task to 1–3 relevant files. Same principle as RAG, zero infrastructure. The result: sharper responses, readable diffs, and per-concept freshness tracking that a monolith can't provide.

## Install

Choose one of the following methods to install the RBC skill.

> [!IMPORTANT]
> We recommend install using `skills` CLI, within repo-level scope.

### CLI

**Repo-level:** travels with the repo when cloned or shared. Good for teams.

```bash
npx skills add issouza/repo-business-context
```

**User-level:** install once, available in every repo you open.

```bash
npx skills add -g issouza/repo-business-context
```

> [!TIP]
> You can update your skill using `npx skills update repo-business-context`.

### Manual

1. [Download the ZIP](https://github.com/issouza/repo-business-context/archive/refs/heads/main.zip) and extract it.
2. Inside the extracted folder, open `skills/` and copy the `repo-business-context/` folder into your target path:

| Scope      | Cross-client        | Claude Code only    |
| ---------- | ------------------- | ------------------- |
| User-level | `~/.agents/skills/` | `~/.claude/skills/` |
| Repo-level | `.agents/skills/`   | `.claude/skills/`   |

Once installed, open your repo in any supported AI tool.

## Going deeper

Everything above is enough to get started. If you want to understand the framework in full — onboarding paths, file structure rationale, how the agent keeps context current across sessions — it's all in [`context/README.md`](context/README.md).

> [!TIP]
> This repo itself is built with RBC. Browse [`/context`](context/) to see it working in a real project.

## The journey to skill-only

RBC started as a research project — two cycles of structured conversations with Claude, Gemini, and GPT, exploring whether in-repo business context could genuinely improve AI-assisted development for solopreneurs.

Early versions shipped a full template folder with CI workflows, AGENTS.md files, PR templates, commitlint configs, and GitHub Actions. Each layer was well-intentioned. Each one added friction. Each one risked conflicting with an existing repo setup.

The final version is the simplest possible form: **one skill, no files to copy, zero conflicts with your existing setup.** The skill bootstraps `/context/` on first run and keeps it alive from there. Nothing else.

This is the version worth shipping.

Two more decisions that followed the same logic: context files carry no frontmatter — plain Markdown, nothing to maintain. And the agent doesn't propose updates and wait for approval — it updates context autonomously as the product evolves, announcing each change so nothing is invisible.

## License

[MIT](LICENSE.txt) — Free to use, modify, and distribute. Feel free to keep mention this original repo in your project's README.
