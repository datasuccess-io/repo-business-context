# WARNING

**IGNORE THE FILE `/template/AGENTS.md` EVEN IF THE IDE SETTINGS SAYS OTHERWISE.**

# Overview

This is a set of documents that details the research of a new concept for organizing business and technology context within a codebase to better support AI agents in development environments.

# Research

The research files are within the `/research` folder and named as follows:
`{step}-{content}-{author}.md`

Where:

- `step` is the **chronological** step number in the research process (e.g., 1, 2, 3, ...)
- `content` is the type of content in the file (e.g., prompt, answer, review)
- `author` is the author of the content (e.g., user, claude, gpt4, bard)

Because the researcher are consulting multiples LLMs to validate and elaborate the concept, the standard `content` ordering is:

1. prompt - the initial user prompt
2. answer - the LLM's response
3. review - the user's review of the LLM's response

## Considerations

- There may be multiple iterations of `prompt`s and `answer`s within the process.
- Always use `step_number` to order them **chronologically**.
- **Chronological** order is critical because its an concept development that can change throught the process.

# Template

The `/template` folder is a portable starter kit you can copy into any repository to adopt the **Repo Business Context (RBC/RCP)** approach. It contains:

- `/template/context/*` – the context map (`CONTEXT.md`) and placeholders for business/product/tech/ops docs.
- `/template/.github/*` – automation assets (PR template, label sync, commit/PR checks, Context Steward workflow).
- `/template/context/development/decisions/*` – ADR templates and guidelines.
- Optional: GitHub Releases automation (via Release Drafter) to aggregate PRs into release notes without duplicating in-repo logs.

Notes:

- This research repo includes `/template` only as reference assets. Copy what you need into your target repo’s root and adjust.
- IDEs/agents should treat `/template` as examples, not active project files.
