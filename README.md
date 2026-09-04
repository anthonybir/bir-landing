# BIR Landing

Public marketing site for [bir.com.py](https://bir.com.py).

ABN builds operational systems that help leaders understand their organization,
make informed decisions and follow up. Governed AI works inside those systems
with institutional context, defined tasks and human review. Education and church
organizations are proven examples, not eligibility limits.
`docs/positioning-strategy.md` is the messaging SSOT.

## Tech Stack

- **Framework:** Next.js 16
- **UI:** React 19
- **Styling:** Tailwind CSS v4
- **Email:** Resend API
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## Design system

ABSD v7.2. Shared tokens live in `src/app/globals.css`. The selected visual
language uses warm cream, upright Instrument Serif, Satoshi and deep teal across
all pages. `PageIntro`, `ContactClose` and `ProductFigure` own repeated compositions.

**One dark surface on a long page, followed by cream.** The footer is cream on
all routes. Short and functional pages do not need a dark band.

**Proof remains readable.** `ProductFigure` preserves complete source images and
links to the original in a new tab. Cases identify distinct systems; historical
articles retain their publication context. Do not add synthetic browser chrome.

**Information is visible immediately.** Numbers remain static. Content does not
wait for entrance animations or intersection observers.

**Gold is reserved for a result on teal.** `.num-signal` is scoped to `.teal-band`
because the signal colour is unsuitable for small text on cream.

The home follows the selected working-table direction: upright Instrument Serif,
flat conceptual photography and a solid teal proof band. The hero splits at 900px;
smaller screens keep the photograph below the copy, visible in normal flow. No
rotated product screenshot or decorative progression grid on the home. Actual
product screenshots remain on the case pages. The generated photo is identified
as conceptual; it does not depict a customer location.

## Features

- Multi-page marketing site, Spanish-first (es-ES), with an English relocation
  page at `/en`
- Blog rendered from Markdown in `content/blog/`
- Contact form with shared validation, bounded provider requests, reply address,
  and a stable Resend idempotency key for unchanged retries
- Best-effort per-instance rate limiting (5 requests/15 min per IP)
- XSS protection
- Honeypot spam prevention

## Development

```bash
pnpm install
pnpm dev
```

## Verification

```bash
pnpm lint
pnpm test
pnpm build
```

The contact tests isolate the route and mock Resend. They do not prove external
email delivery or distributed rate limiting. Visual evidence and limitations are
recorded in `design-qa.md`.

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
