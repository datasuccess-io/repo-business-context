# Features

## Shipped

### The skill (`.claude/skills/repo-business-context/`)

- Activation — triggers on business-context tasks in RBC-enabled repos and on first-time RBC setup requests.
- Bootstrap — scaffolds `/context/` folder structure if absent.
- Three-path onboarding chooser (quick / codebase / gradual).
- 5W2H 7-question onboarding (`references/onboarding-quick.md`).
- Codebase extraction with batch user confirmation (`references/onboarding-codebase.md`).
- Lazy gap-filling during normal work (`references/onboarding-gradual.md`, the default).
- Task-type → files routing table (`references/routing.md`).
- Autonomous context maintenance — updates files in the flow of work, announces every change (`references/maintenance.md`).
