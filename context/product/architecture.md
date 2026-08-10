# Architecture

How RBC is put together. Points at files rather than restating them — read the file, not the summary.

## What this repo actually is

A **distribution repo for one Agent Skill**. There is no runtime, no build, no tests, no deploy. The product is Markdown that other people's agents read. That single fact explains most of the decisions below: correctness is editorial, not executable, so nothing catches a mistake except review.

## Surfaces

| Surface                                            | Role                                                                                                          |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `skills/repo-business-context/`                    | **The product.** Source of truth, and the only thing consumers install.                                       |
| `README.md`                                        | The pitch and the install instructions. The public front door.                                                |
| `context/`                                         | Dogfooding. RBC's own business context, and the live example the README points people at.                     |
| `.agents/skills/repo-business-context/`            | Local install of the skill, so this repo's own agents run RBC. Gitignored — a **copy**, never the source.     |
| `.github/ISSUE_TEMPLATE/feedback.md`               | The only feedback channel.                                                                                    |

## The loading budget is the architecture

The skill is designed around what an agent pays for on every task:

- **`SKILL.md` frontmatter `description`** — always in context, in every installed repo, whether or not the skill fires. It is the activation surface: the model decides from this text alone whether to load anything.
- **`SKILL.md` body** — loaded only once the skill fires.
- **`references/*.md`** — loaded only when the body sends the agent there.

Everything else follows from that. Selective loading (1–3 files per task) exists because attention degrades with input size; the routing table in [`references/routing.md`](../../skills/repo-business-context/references/routing.md) is what makes selective loading possible. This is also why the trigger pointer offered during bootstrap must stay a *pointer* — anything copied into `CLAUDE.md`/`AGENTS.md` is paid on every task forever.

## Distribution path

`npx skills add issouza/repo-business-context` → the `skills` CLI reads `skills/repo-business-context/SKILL.md` from GitHub `main` → writes it into the consumer's `.agents/skills/` (or `~/.agents/skills/` with `-g`) and records a content hash in their own `skills-lock.json`.

Two consequences worth holding on to:

- **`main` is the release channel.** Anything merged is live for anyone who runs `npx skills update`. Git tags (`v1.0.0`, `v1.1.0`, `v1.1.1`) and `metadata.version` in the SKILL.md frontmatter are the human-readable markers; neither gates distribution.
- **`skills-lock.json` at this repo's root is a local artifact**, gitignored like `.agents`. It describes *this* machine's install, not what ships.

## Traps

- **Editing `.agents/skills/` ships nothing.** It's gitignored. The two copies drift silently and the mistake is invisible in `git status`. `CLAUDE.md` states the rule; there is no check enforcing it.
- **The public README duplicates skill content** — the `/context` folder tree and the trigger-pointer snippet both exist in `README.md` *and* in `SKILL.md`'s bootstrap block. These have drifted before. Any change to either must be made in both.
- **`allowed-tools` pre-approves, it does not restrict.** The `./context/**` globs in the [`SKILL.md`](../../skills/repo-business-context/SKILL.md) frontmatter mean context writes run without prompting; they don't fence the skill in. So the two writes the skill makes outside `/context/` — the trigger pointer and the architecture pointer, both into `CLAUDE.md`/`AGENTS.md` — aren't blocked, they're just the only bootstrap actions that will prompt the user. Verified against Claude Code docs 2026-07-19; other host tools may enforce differently, and this is the assumption most likely to be wrong on a tool RBC claims compatibility with.
- **Changing the frontmatter `description` changes activation everywhere**, including for people who never read the diff. It is the highest-leverage and least-obviously-risky line in the repo.
