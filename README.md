# BIR Landing

Personal site for Anthony Bir at [bir.com.py](https://bir.com.py).

The home presents a short introduction, career timeline and contact links.
`/historia` expands the confirmed career path and connects it to Anthony's current
work and ABN.
ABN is an affiliation with its existing service pages; it is not the home identity.
`docs/positioning-strategy.md` is the messaging SSOT.

## Tech Stack

- **Framework:** Next.js 16
- **UI:** React 19
- **Styling:** Tailwind CSS v4
- **Email:** Resend API
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## Design system

The founder-approved Anthony Bir identity supersedes the previous cream/teal
visual theme. ABSD still provides spacing, accessibility and verification guidance.
The supplied September 8 brand board defines the visual direction; it is not used
as a flattened page image.

- **Palette:** white `#ffffff`, ink navy `#1b2936`, secondary text `#52616e` and
  pale gray `#fafbfc`. Shared tokens live in `src/app/globals.css`. Legacy teal/cream
  class aliases resolve to the new palette so existing service routes stay coherent.
- **Identity:** `BrandMark.tsx` owns the scalable AB vector redraw. The browser
  signet repeats its geometry with slightly heavier strokes for small sizes.
  Use a spaced Satoshi wordmark; keep descriptors out of the navigation.
- **Typography:** upright Instrument Serif for editorial headings; Satoshi for
  reading, controls and identity. Letter spacing belongs to short labels and the
  wordmark, not paragraphs. Controls are flat and square.
- **Home:** identity and personal introduction side by side, followed by the
  captioned conceptual desk photograph, confirmed career timeline and contact.
  On mobile these stack in reading order. No system inventory or release statistics.
- **Shared routes:** `PageIntro`, `ContactClose` and `ProductFigure` retain their
  content contracts. The footer is pale gray; existing dark bands use navy.
- **Proof remains readable:** `ProductFigure` preserves complete source images and
  links to the original. Do not add synthetic browser chrome or recolor evidence.
- **Information is visible immediately:** no entrance animation hides content;
  respect reduced motion. Keep Spanish copy on the main site and English on `/en`.

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
