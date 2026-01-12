Repo Business Context — Agent Protocol

Purpose

- Operate with full business and technical intent sourced from /template/context.
- Keep the context and the code in sync. When code changes behavior, update the context.

Scope assumptions

- Single repository, solo founder or very small team where the developer is also the founder.
- Web applications only. External management tools are optional mirrors; the repo is canonical.

Golden rules

- Before acting, read template/context/CONTEXT.md, then template/context/README.md, then only the specific files relevant to the task.
- Respect YAML front‑matter. Prefer docs with status: active. Do not rely on deprecated docs.
- If your change alters behavior, data, copy, providers, or workflows, propose a doc update in the same change and bump last_updated to today.
- Do not invent business decisions or add libraries/providers that contradict the context. Propose changes to context first.

Front‑matter standard

- ## All context files use a minimal header:
  context_type: business|product|tech|development|operations|brand|agent|cycle|decision
  status: draft|active|deprecated
  last_updated: YYYY-MM-DD
  ***
- When editing, update last_updated. If uncertain, set status: draft and call it out in notes.

Pre‑computation checklist

- Identify task type and map to files via template/context/CONTEXT.md.
- List the exact files you will read and why.
- Summarize the relevant constraints (stack, data entities, personas, voice, pricing) before generating code or content.

Post‑computation checklist

- If code or content diverges from the documented reality, prepare a minimal diff for the impacted files and update last_updated.
- For larger shifts (schema, provider, pricing), add or amend an ADR under context decisions if present.

Routing quick map (see CONTEXT.md for full map)

- Feature work: product/features.md, product/flows.md (if present), tech/domain-model.md
- Data changes: tech/data-model.md
- Stack or conventions: tech/architecture.md, development/conventions.md
- Providers/infra/CI: operations/providers.md, operations/workflows.md
- Copy/tone/UI text: brand/voice.md, product/ux-patterns.md
- Current focus: cycles/active.md

Cycles over sprints

- Treat cycles/active.md as the single focus document. After deployment, add a short retrospective entry and reset active.md.

Agent tools and roles

- If available, use agent tools (e.g., MCP servers or runner scripts) to read/search files and open change proposals.
- A specialized Context Steward agent may run periodically to detect code–doc drift and propose updates.

Lightweight enforcement (optional)

- Honor a PR checklist that asks whether relevant context files were reviewed/updated.
- Optional CI may lint front‑matter or warn when src/ changes without context updates; warnings should not block fast solo iteration.

Failure modes to avoid

- Writing code that adds dependencies/providers not present in context.
- Generating copy that violates brand voice or positioning.
- Changing schema without updating tech/data-model.md.
