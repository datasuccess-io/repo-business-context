# Features

## Shipped

### The skill (`skills/repo-business-context/`, distributed via the `skills` CLI)

- Activation — triggers on business-context tasks in RBC-enabled repos and on first-time RBC setup requests.
- Bootstrap — scaffolds `/context/` folder structure plus a README (the scaffold marker) if absent.
- Trigger pointer — bootstrap offers to add a one-line pointer to `CLAUDE.md`/`AGENTS.md` for reliable skill activation (offered once, never re-asked).
- Three-path onboarding chooser (quick / codebase / gradual).
- 5W2H 7-question onboarding (`references/onboarding-quick.md`).
- Codebase extraction with batch user confirmation (`references/onboarding-codebase.md`).
- Lazy gap-filling during normal work (`references/onboarding-gradual.md`, the default).
- Task-type → files routing table (`references/routing.md`).
- Two-tier context maintenance — assisted decisions, autonomous updates: contradictions are surfaced for the user to resolve, then all affected files update in one pass; factual changes update directly. Every change announced (`references/maintenance.md`).
- Cross-file consistency check — before writing an update, the agent checks routing-linked companion files and flags contradictions (e.g. pricing that doesn't fit the persona) as business decisions.
