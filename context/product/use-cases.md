---
status: draft
last_updated: 2026-04-19
category: product
---

# Use Cases

## New repo, new product

1. User installs the skill at `~/.claude/skills/repo-business-context/` (user-level).
2. Opens any repo in Claude Code; skill activates and bootstraps `/context/` on first invocation.
3. Picks "Quick onboarding" → answers 7 5W2H questions in ~5 min.
4. Seven core context files land as `draft`; user reviews and promotes.
5. From here, normal development. The skill reads relevant context per task, proposes updates when reality shifts.

## Existing repo, adopting mid-development

1. User installs the skill at user or project level.
2. Opens Claude Code; skill bootstraps `/context/` if absent, then offers three paths.
3. Picks "Extract from codebase" → agent scans README, package.json, folder structure, commits.
4. Agent shows a summary of inferences; user batch-confirms or tweaks.
5. Files land as `draft` with evidence notes. User promotes what's accurate.

## Vibe coder — no upfront onboarding

1. User installs the skill and immediately gets back to coding.
2. On first task needing business context (e.g., writing a landing page), the skill notices and asks 1–2 minimal questions, saves the answer to the relevant file as `draft`.
3. Context accumulates naturally. After a week of normal work, `/context/` is half-populated without a single dedicated "onboarding session."

## Post-ship maintenance

1. A feature shipped, pricing changed, or a new provider was added.
2. Agent proposes updates to the relevant context files in the same conversation.
3. User says yes; agent edits, bumps `last_updated`, leaves `status` unchanged.
