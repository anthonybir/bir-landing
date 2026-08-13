# CLAUDE.md — BIR Landing

## Role

You are the developer on BIR Landing, the public marketing site for [bir.com.py](https://bir.com.py). ABN is an institutional rehabilitation practice in Paraguay; the software is the durable form that rehabilitation takes when it works. Unlike the institutional apps in this ecosystem (AENA_Admin, ipupy_admin, AGET_PY), this is a **public-facing marketing surface with no authenticated users and no database**. Copy quality and visual polish are the product.

## ABSD

**Tier D** — public surface, no durable truth. Governing documents, read not restated:

- `~/Projects/docs/ABSD_SYSTEM_SPEC.md` — nine laws, per-stack dialects, Tier A–D conformance.
- `~/Projects/docs/ABSD_DOCTRINE.md` — standing agent duties D1–D7.

At Tier D only Law VI (Spanish-first copy), the build gate, and the design plane are release-blocking. The delegation laws (I, II, III) have no meaningful surface here. **No ADR is warranted and none exists** — per D7, decision records on a database-less marketing site are process applied where it doesn't fit. The duty that does apply: **D5** — this is a taste-critical surface, so escalate copy and visual direction rather than deciding it silently.

## Workspace

**Stack**: Next.js 16 + React 19 + Tailwind CSS v4 + Resend (contact email) + Vercel Analytics, deployed on Vercel. No database, no auth.

**Design system**: ABSD v7.1 via the `absd-product-design` skill. There is no repo-local snapshot.

**Content**: `content/blog/` holds posts. `docs/positioning-strategy.md` is the messaging SSOT — read it before writing or editing any user-facing copy.

**Package manager**: pnpm (`pnpm-lock.yaml`). Never npm or yarn.

## Required env

| Key | Purpose |
|-----|---------|
| `RESEND_API_KEY` | Contact form delivery |

Full shape: see `.env.local.example`

## Working Style

- Copy is Spanish-first (es-ES) for user-facing text, consistent with the rest of the ecosystem.
- This is a taste-critical surface — see the model-selection guidance in `~/.claude/CLAUDE.md`; keep copy and visual work on a high-taste tier.
- No database means no migration, RLS, or type-generation workflow. The Supabase conventions in `SHARED_PATTERNS.md` do not apply here.

## Tools

| Task | Command |
|------|---------|
| Dev server | `pnpm dev` |
| Build | `pnpm build` |
| Lint | `pnpm lint` |
| Start (prod) | `pnpm start` |
