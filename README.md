# Repo Business Context (RBC)

> Stop re-explaining your business to AI. Onboard in 5 minutes; context grows as you ship.

---

## The problem

Every AI coding tool has solved *technical* context — `AGENTS.md`, Cursor rules, `CLAUDE.md`. None of them cover **business** context: who you're building for, your pricing, your brand voice, what's in scope and what isn't.

So every new session starts with:

> "Here's my ICP... our pricing is... our brand voice is... and by the way, we never build X..."

RBC fixes that. It puts business context directly in your repo — small, structured, AI-readable Markdown files — so your agent can just *know*.

---

## How it works

One Claude skill does everything:

- **Bootstraps** `/context/` on first run — folder structure + README, no copying required
- **Onboards** via a 7-question 5W2H flow (~5 min), codebase extraction, or gradual build-as-you-go (the default)
- **Routes** each task to the 1–3 relevant context files — never the whole folder
- **Proposes updates** when work shifts what's true about the product

Your context lives in small, focused Markdown files:

```
/context
├── business/   # vision, personas, strategy, pricing, value prop
├── product/    # roadmap, features, use cases, backlog
├── tech/       # architecture, conventions, providers
└── brand/      # voice, channels, UX principles
```

Every file has `status: draft | active | deprecated` frontmatter. AI drafts freely; you promote to `active`. You're always the editor-in-chief.

---

## Install

**User-level** — works across all your repos instantly:

```bash
cp -r .claude/skills/repo-business-context ~/.claude/skills/
```

**Project-level** — scoped to one repo:

```bash
cp -r .claude/skills/repo-business-context /your-repo/.claude/skills/
```

Then open any repo in Claude Code. The skill activates automatically and sets everything up.

---

## The journey to skill-only

RBC started as a research project — two cycles of structured conversations with Claude, Gemini, and GPT, exploring whether in-repo business context could genuinely improve AI-assisted development for solopreneurs.

Early versions shipped a full template folder with CI workflows, AGENTS.md files, PR templates, commitlint configs, and GitHub Actions. Each layer was well-intentioned. Each one added friction. Each one risked conflicting with an existing repo setup.

The final version is the simplest possible form: **one Claude skill, no files to copy, zero conflicts with your existing setup.** The skill bootstraps `/context/` on first run and keeps it alive from there. Nothing else.

This is the version worth shipping.

---

## Full documentation

The complete guide — onboarding paths, file structure, frontmatter schema, how context stays alive — lives inside the framework itself:

→ [`context/README.md`](context/README.md)

---

## License

[MIT](LICENSE.txt) — free to use, modify, and distribute.
