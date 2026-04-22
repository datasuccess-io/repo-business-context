# Path B — Extract from codebase

Use this when the user picks codebase extraction, or when starting in an existing repo that clearly has meaningful code and documentation already.

The goal is not to produce perfect context — it's to produce **confident drafts of what's inferrable**, cheaply, so the user only has to confirm rather than author from scratch.

---

## What to scan (in order, stop when you have enough signal)

1. **`README.md`** — densest source of business intent. Product name, tagline, audience, positioning, key features are usually here.
2. **`package.json` / `pyproject.toml` / `Cargo.toml` / similar** — name, description, keywords, homepage, license.
3. **Top-level folder structure** — hints at scope and domain (`api/`, `dashboard/`, `billing/`, `marketing-site/`, etc.).
4. **Marketing or landing code** — if `/marketing/`, `/site/`, `/landing/`, `/apps/web/` exists, scan for hero text, pricing, CTAs.
5. **Environment/config** — `.env.example`, config files reveal providers (Stripe, Supabase, Clerk, Postgres, etc.).
6. **Recent commits** — `git log --oneline -30` shows recent focus.
7. **Open issues/PRs** — if `.github/` has relevant folders, or `gh issue list` / `gh pr list` is available, titles reveal backlog and priorities.

**Do not deep-read every file.** You're harvesting signal, not building completeness. Stop as soon as you have enough to draft.

---

## What to infer, and where it lands

From the sources above, draft into these files as `status: draft`. Include evidence notes for each inference so the user can audit.

| File | Likely signals |
|---|---|
| `business/vision.md` | README hero, tagline, "about" section |
| `business/value-prop.md` | README benefits / features list, marketing copy |
| `business/personas.md` | Audience language ("for developers", "for small teams"). Flag as low-confidence if thin. |
| `product/features.md` | App routes, folder names in `src/features/` or `app/`, README features list |
| `product/integrations.md` | Dependencies + env vars (Stripe, Auth0, Clerk, Supabase, etc.) |
| `tech/architecture.md` | Frameworks detected, top-level folder structure, main entrypoints |
| `tech/providers.md` | Env vars + named SDK deps |
| `tech/conventions.md` | `tsconfig`, `eslint`, `prettier`, code style seen in files |
| `brand/voice.md` | README tone (terse, warm, technical, playful) |
| `product/roadmap.md` | Recent commits + open issue/PR titles — labeled as "recent focus" |

**Deliberately skip** files with no codebase signal: `business/revenue-model.md` (unless pricing is explicit in README), `business/strategy.md` (requires human intent), `brand/assets.md`, `brand/channels.md`, `tech/data-model.md` (requires deeper scan — save for later).

---

## Batch-confirm with the user

Do not silently write 8 files. Present inferences grouped, let the user confirm in one pass:

1. **Summarize findings in plain language.** For each planned file, one-line: what you inferred + the source.

   Example:
   > Based on the repo scan, here's what I'd draft. Each saves as `draft` pending your confirmation:
   >
   > - **`business/vision.md`** — "A feedback widget for SaaS product teams." *(from README hero line 3)*
   > - **`product/integrations.md`** — Stripe, Supabase, Resend. *(from package.json + `.env.example`)*
   > - **`brand/voice.md`** — "Technical, friendly, no marketing fluff." *(inferred from README tone)*
   > - **`tech/providers.md`** — Vercel (deploy), Supabase (db+auth), Resend (email), Stripe (billing).
   > - **`tech/architecture.md`** — Next.js app router, TypeScript, server actions, Postgres.
   > - …
   >
   > Yes to all? Or want to adjust any?

2. **Wait for confirmation.** If the user tweaks any, incorporate their correction before writing.

3. **Write all files as `status: draft`** with evidence notes in the body (e.g., *"inferred from `README.md` line 5 and `package.json` description; please verify."*).

---

## Quality rules

- **Low signal → don't guess.** If the codebase has nothing about pricing, leave `revenue-model.md` empty and move on. Fabrication erodes trust faster than an empty file.
- **Preserve the user's own language.** If the README says "customers," don't silently rename to "users." If it says "ship fast," don't rephrase to "rapid iteration."
- **Always cite evidence in the body** for inferred content. Makes audit easy; makes the draft status credible.
- **Never mark anything `active`.** Even high-confidence inferences stay `draft` until the user explicitly promotes.

---

## Closing

Same close-out as Path A:

1. Summarize what you drafted and which files are still empty (so the user knows where the gaps are).
2. Return to the user's original task (if any).
3. Operate as context-aware from now on, using the drafts while flagging them as unconfirmed.

If the user asks why you didn't draft a specific file (e.g., `revenue-model.md`), explain: *"I couldn't find pricing signals in the codebase. If you want, I can ask you directly, or we can fill it later."*
