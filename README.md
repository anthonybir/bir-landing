# BIR Landing

Landing page for [bir.com.py](https://bir.com.py) - Software consulting and development services.

## Tech Stack

- **Framework:** Next.js 16
- **UI:** React 19
- **Styling:** Tailwind CSS v4
- **Email:** Resend API
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## Design system

ABSD v7.1. Tokens and component classes live in `src/app/globals.css`; there is
no repo-local snapshot of the spec. Four conventions are enforced by hand, so
check them before adding a page or a section.

**One dark surface per long page, mid-scroll.** Apply `.teal-band
.brand-texture` to exactly one section on `/`, `/servicios`, `/ia-gobernada`,
`/casos`, `/nosotros` and `/en`. Short or functional pages (`/aula`, `/blog`,
`/contacto`, 404) get none on purpose. A band must always be followed by at
least one cream section, otherwise it merges into the teal footer and the two
read as one block.

**Browser chrome means live product UI shown as proof.** Use `.shot` with its
`.shot-chrome` bar only for screenshots of software in production (`/casos`,
the `/aula` hero). Article figures in `src/app/blog/_components/Article.tsx`
keep the plain `.card` frame, because that set includes slide exports and
diagrams that never lived in a browser.

**Numbers count up only when there is distance to travel.** `AnimatedNumber`
renders its final value server-side, so crawlers and no-JS readers get the
truth, and it rewinds to the start value only when the element is still below
the fold. That keeps an already-visible number from flashing. Values like
"1 día" stay static, since 0 to 1 reads as a glitch.

**One signal gold number per view, and only on teal.** `--signal` fails text
contrast on the cream background, so `.num-signal` is scoped to `.teal-band`
in CSS. It is currently spent on one number each on `/` and `/ia-gobernada`.

The hero splits into two columns at `xl` only. At 768 and 1024 the poster type
wraps to three and four lines, so those widths keep the single-column hero.

## Features

- Multi-page marketing site, Spanish-first (es-ES), with an English relocation
  page at `/en`
- Blog rendered from Markdown in `content/blog/`
- Contact form with email integration
- Rate limiting (5 requests/15 min per IP)
- XSS protection
- Honeypot spam prevention

## Development

```bash
pnpm install
pnpm dev
```

## Environment Variables

Create `.env.local` with:

```
RESEND_API_KEY=your_resend_api_key
CONTACT_TO=recipient@example.com
CONTACT_FROM=sender@yourdomain.com
CONTACT_SUBJECT=Contact form subject
```

## License

Private
