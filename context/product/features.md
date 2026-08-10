# Features

## Shipped

### The skill (`skills/repo-business-context/`, distributed via the `skills` CLI)

- Activation — triggers on business-context tasks in RBC-enabled repos and on first-time RBC setup requests.
- Bootstrap — scaffolds `/context/` folder structure plus a README (the scaffold marker) if absent.
- Trigger pointer — bootstrap offers to add a one-line pointer to `CLAUDE.md`/`AGENTS.md` for reliable skill activation (offered once, never re-asked). The pointer names concrete triggers rather than "business-flavored work", and stays a pointer — skill rules are never copied into the instruction file, where they'd be paid on every task.
- System map (`product/architecture.md`) — the picture no single source file holds: how surfaces and modules fit together, which external service owns what and which of its limits binds the design, which paths carry no session, and traps that already cost a production bug. The test for what belongs in `/context/` shifted from "is this technical?" to "is this cheap to learn from the code?". Drafted during codebase onboarding, kept current by observe-and-write during normal work (never by asking the user how their own system works), and carries a lower update bar than every other file — structural change *is* the truth for this one. Offered its own instruction-file pointer, separately from the trigger pointer above, because selective loading skips it precisely when planning needs it.
- Three-path onboarding chooser (quick / codebase / gradual).
- 5W2H 7-question onboarding (`references/onboarding-quick.md`).
- Codebase extraction with batch user confirmation (`references/onboarding-codebase.md`).
- Lazy gap-filling during normal work (`references/onboarding-gradual.md`, the default).
- Task-type → files routing table (`references/routing.md`).
- Two-tier context maintenance — assisted decisions, autonomous updates: contradictions are surfaced for the user to resolve, then all affected files update in one pass; factual changes update directly. Every change announced (`references/maintenance.md`).
- Cross-file consistency check — before writing an update, the agent checks routing-linked companion files and flags contradictions (e.g. pricing that doesn't fit the persona) as business decisions.
