# Path B — Extract from codebase

Use this when the user picks codebase extraction, or when starting in an existing repo that clearly has meaningful code and documentation already.

The goal is not to produce perfect context — it's to produce **confident drafts of what's inferrable**, cheaply, so the user only has to confirm rather than author from scratch.

## What to scan (in order, stop when you have enough signal)

1. **`README.md`** — densest source of business intent. Product name, tagline, audience, positioning, key features are usually here. Treat its technical sections as **claims to verify, not facts** — a stale README is the most common reason this path is needed at all.
2. **Top-level folder structure** — hints at scope and domain (`landing-page/`, `dashboard/`, `billing/`, `public/`, etc.), and is the skeleton of the module map.
3. **Marketing or landing code** — if `/marketing/`, `/site/`, `/landing/`, `/apps/web/` exists, scan for hero text, pricing, CTAs.
4. **Environment/config** — `.env.example`, config files, and `package.json` dependencies reveal which providers are actually wired (Stripe, Supabase, Clerk, Postgres, etc.). Cross-check against what the README claims; the delta is usually the most valuable thing you'll find.
5. **Entry points and CI** — middleware/proxy/router files, public API routes, and `.github/workflows/` show how requests enter the system and which checks guard it.
6. **Recent commits** — `git log --oneline -30` shows recent focus, and migrations or cutovers name what recently changed.
7. **Open issues/PRs** — if `.github/` has relevant folders, or `gh issue list` / `gh pr list` is available, titles reveal backlog and priorities.

**Do not deep-read every file.** You're harvesting signal, not building completeness. Stop as soon as you have enough to draft.

## What to infer, and where it lands

Check `references/routing.md` within this skill to see a list of possible files and its contents.

**`product/architecture.md` is this path's highest-value output.** It's the one file only a codebase scan can draft — the quick 5W2H path can't produce it, and gradual gap-filling never surfaces it, because nobody thinks to ask "how is this system put together?" until a plan has already gone wrong. Draft it here: runtime surfaces, module map, external services with the tier limit that actually constrains each one, the one or two request paths that carry the product's value, and any trap you can see (a public path with no session, a client that bypasses row-level security, a build-less artifact whose version is user-visible).

Write it by **pointing at code, not copying it**. If one file states something plainly — a rules engine, a pricing table, a schema — link to that file. Only write out what spans modules or vendors, or what you could only learn by reading five files and inferring. That discipline is what keeps the file one page and keeps it true; a copied schema is stale within a sprint.

**Deliberately skip** files with no codebase signal: `business/revenue-model.md` (unless pricing is explicit in README), `business/strategy.md` (requires human intent), `brand/assets.md`, `brand/channels.md` (requires deeper scan — save for later).

## Batch-confirm with the user

Do not silently write 8 files. Present inferences grouped, let the user confirm in one pass:

1. **Summarize findings in plain language.** For each planned file, one-line: what you inferred + the source.

   Example:

   > Based on the repo scan, here's what I'd write. Confirm and I'll create the files:
   >
   > - **`brand/vision.md`** — "A feedback widget for SaaS product teams." _(from README hero line 3)_
   > - **`product/architecture.md`** — Next.js app on Vercel serving 3 surfaces + an embeddable widget; Clerk for auth, Postgres for data, Stripe wired but unreleased. _(from folder structure, middleware, and package.json — note the README still says auth is Supabase)_
   > - **`product/integrations.md`** — Hubspot, Slack, Google Drive. _(from user onboarding and admin area)_
   > - **`brand/voice.md`** — "Technical, friendly, no marketing fluff." _(inferred from README tone)_
   > - …
   >
   > Yes to all? Or want to adjust any?

2. **Wait for confirmation.** If the user tweaks any, incorporate their correction before writing.

3. **Write all files** in one go. Don't wait for approval.

## Quality rules

- **Low signal → don't guess.** If the codebase has nothing about pricing, leave `revenue-model.md` empty and move on. Fabrication erodes trust faster than an empty file.
- **Surface contradictions instead of silently picking a side.** When the README, the config, and the dependencies disagree about what the system uses, say so in the batch-confirm — the user is the only one who knows which is current, and the disagreement itself is usually worth recording.
- **Preserve the user's own language.** If the README says "customers," don't silently rename to "users." If it says "ship fast," don't rephrase to "rapid iteration."
- **Always cite evidence in the body** for inferred content. Evidence notes are what lets the user catch misreads quickly.
- **Write with confidence.** The evidence notes in each file body are the trust mechanism.

## Closing

Use the same close-out as Path A (see `references/onboarding-quick.md` — "Closing the onboarding"). Cover all three points:

1. **Summarize what was created** and which files were left empty (gaps visible = easier to fill later).
2. **Explain what's automatic from here** — context files will be read and updated during normal work; the user corrects by talking, not by editing files.
3. **Return to the original task** (if any).

If the user asks why you didn't draft a specific file (e.g., `revenue-model.md`), explain: _"I couldn't find pricing signals in the repo. If you want, I can ask you directly, or we can fill it later."_
