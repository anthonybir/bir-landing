# Closing review · 2026-09-04

**Pass within the reviewed scope.** Follow-up to the full-page visual review below.

## Additional fixes

- Mobile menu now scrolls within the available viewport below the 64px header.
  At 812 × 375, its bottom previously extended to 397px; it now ends at 375px.
- Mobile menu toggle now has a 44 × 44px touch area. The mobile contact link
  exposes the current page, consistent with desktop navigation.
- Contact delivery errors include a clickable email fallback.

## Verification

- **Pass:** rebuilt preview at 812 × 375 confirms bounded, scrollable navigation;
  Escape closes the menu and restores focus to its toggle.
- **Pass:** all 13 content routes and the 404 page have one H1 and no horizontal
  overflow at 375px. No failed completed images were observed; this is not a
  complete image-loading test.
- Reviewed desktop lower sections on home, services, AI, cases, Aula, team,
  blog and English pages, plus the settled final article ending and mobile contact.
  Earlier per-page screenshots remain in the previous review evidence.
- **Pass:** `pnpm lint`, `pnpm test` (5/5), `pnpm build` (21 generated entries,
  including TypeScript), and `git diff --check`.
- **Not Proven:** live email delivery, browser delivery-error rendering and
  production deployment. No external email was sent and no deployment was made.
- Evidence: `/Users/anthonybir/.codex/visualizations/2026/09/04/01a06e10-89f8-7bc1-8f44-2a605eba7ccb/closing-review/`.

---

# Final polish pass · 2026-09-04

**Pass within the reviewed scope.** The previous full-site and home-only records below remain as history.

## Additional changes

- Footer uses the shared page container and a compact two-column link layout.
  At intermediate widths the brand sits above navigation/contact instead of
  squeezing into a narrow column. Footer links have 44px minimum touch height.
- Image enlargement labels use 14px text and 44px minimum touch height.
- Removed redundant lower-section padding on Aula, closing an excessive gap
  before its contact section.
- Aula's IBA link now opens `/casos#iba`; cases have stable named anchors.
  The existing document scroll padding owns the sticky-header offset.
- Renamed “Implementación por frente” to “Implementación por etapas”; used
  “hoja de cálculo” and “informes” consistently in edited service/case copy.
  Approximate case counts use words in prose without changing the values.
- Blog entry links use their article heading as the accessible name; date and
  reading-time rows can wrap. Article endings include “Volver a las notas”.
  Removed three repeated inline contact prompts now owned by the shared ending.
- Removed the global horizontal clipping rule and obsolete header blur so layout
  defects are visible in responsive checks and the cream header stays crisp.

## Final verification

- **Pass:** `pnpm lint`, `pnpm build` (21 generated entries and TypeScript),
  `git diff --check`. The existing NO_COLOR/FORCE_COLOR environment warning remains.
- **Pass:** all five existing contact-route regression tests. Contact logic was
  not changed by this polish pass; no external email was sent.
- **Pass:** all 13 content pages plus 404 visually reviewed at 1440px and 375px.
  No document-level horizontal overflow on the 13 content pages after removal
  of clipping. Additional footer checks at 768px and 1024px cover the intermediate
  layout. Spanish and English endings were inspected.
- **Pass:** direct IBA case navigation, article return link, footer touch target
  dimensions, and readable complete product images. Existing email-delivery and
  production-parity limitations from the second pass still apply.

Evidence folder:
`/Users/anthonybir/.codex/visualizations/2026/09/04/01a06e10-89f8-7bc1-8f44-2a605eba7ccb/final-polish/`

Each page has a `*-1440.png` and `*-375.png` capture. Additional evidence includes
`footer-375.png`, `footer-768.png`, `footer-1024.png`, `english-footer-768.png`,
`iba-direct-link-375.png`, and `responsive-checks.json`.

No commit, push or deployment performed. Unrelated local files remain untouched.

---

# Design QA · full-site second pass

Date: 2026-09-04 · Local production build · **Pass within the reviewed scope**

The selected working-table direction now applies across the public site. The
story remains leadership visibility, connected operations and governed AI.
Education and church organizations remain examples of experience, not intake limits.

## Production-facing corrections

| Surface | Gap found | Implemented correction |
| --- | --- | --- |
| Shared layout | White inner pages, mint buttons, dark textured footer and decorative frames diverged from the selected home | Cream surface, teal actions, upright display type, consistent introductions and contact closes; cream footer everywhere |
| Home | Entrance effects briefly concealed content | Immediate content and static proof numbers; selected conceptual working-table image retained |
| Services | Legacy rehabilitation framing and repetitive cards | Three readable stages: diagnosis, implementation and ongoing support; organizational data, permissions and decisions are explicit |
| Cases | Large empty vertical gaps, small sticky screenshots, claim that all cases used one platform | Compact before/after account, outcome attribution, wide original images; AENA, IPU Paraguay and Aula explicitly separated |
| Aula | An AENA module screenshot represented the separate Aula platform | Actual Aula planning screenshot, academic sources, teacher review and IBA-specific context |
| Team | Card-heavy roles and an internal engineering label presented as an institution | Flat discipline/name/experience hierarchy and an account of directing and building systems |
| Governed AI | Inconsistent presentation | Shared visual system, readable task boundaries and distinct AENA/IPU/Aula examples |
| Blog + four articles | Weak reading hierarchy, overlarge portrait leads, no image enlargement and stale temporal claims | Editorial index, article summaries, constrained complete images, full-size links, publication-date context and clarification of the historical AENA Aula module |
| Contact | Browser/server email validation differed; raw network errors, no request deadline or repeat-submit guard | Shared trimmed schema, Spanish errors, synchronous submission lock, disabled pending fields, success focus, bounded requests and unchanged-retry IDs |
| Contact API | No reply address, unbounded JSON body, provider details logged | Reply-to, 32 KiB request cap, 10-second provider timeout, Resend idempotency header and status-only provider logging |
| English relocation | Spanish mobile controls, Spanish WhatsApp text, false translation alternates, overly certain timing | English navigation/prefill/social image, own canonical, conditional requirements and authority-controlled approval |
| Navigation + 404 | Missing Escape/focus handling; skip target not focusable; excessive error-page height | Menu closes and returns focus, current-page state, focusable main landmark, shorter 404 with working recovery |
| Metadata + WebMCP | Inner pages inherited home social copy; public route list incomplete | Page-specific OG/Twitter copy, article metadata, Aula/relocation discovery; shared leadership positioning |

Shared composition is owned by `PageLayout.tsx` and `ProductFigure.tsx`. Shared
public positioning is in `site-information.ts`; contact validation is in
`src/lib/contact.ts`. Unused hero, count-up and reveal components were removed.
No database, authentication or infrastructure layer was added.

## Coverage and evidence

All 13 content routes plus 404 were opened and visually reviewed at desktop
1440×900 and mobile 375×812: home, services, governed AI, cases, Aula, team,
blog, contact, English relocation and all four published articles.

Additional 1024×900 captures cover home, cases, blog, contact and relocation.
The tablet pass found and fixed wrapped-label field alignment. The keyboard pass
found and fixed main-landmark focus. Final checks were repeated after these fixes.

Screenshot root:
`/Users/anthonybir/.codex/visualizations/2026/09/04/01a06e10-89f8-7bc1-8f44-2a605eba7ccb/second-pass/`

- `before-casos-desktop.png` and `after-casos-desktop.png`: same-width before/after comparison, inspected together.
- `after-home-desktop.png`, `after-home-mobile.png`: retained selected art direction.
- `after-aula-desktop.png`: corrected source image and product story.
- `after-blog-desktop.png`, `after-planes-reading-desktop.png`: editorial index and reading measure.
- `after-contact-tablet.png`, `after-contact-errors-mobile.png`: aligned fields, visible outlines and validation.
- `after-en-contact-mobile.png`: English close, contact links and footer.
- `after-404-desktop.png`, `after-404-mobile.png`: recovery surface.
- `og-es.png`, `og-en.png`: rendered 1200×630 social images, inspected directly.
- `route-checks.json`: 13 rendered-page metadata checks and 41 internal destinations, no failures.

Viewport screenshots are the visual evidence. The browser's full-page stitching
was unreliable, so stitched captures were excluded. Each page's top was reviewed;
lower sections and interactions were sampled across layout types. This is not an
exhaustive screenshot of every scroll position or a full accessibility certification.

## Verification

- **Pass — `pnpm lint`.** Final run has no lint errors or warnings.
- **Pass — `pnpm test`.** Five isolated contact-route tests: normalized/escaped mail, reply address and repeat key; invalid input; honeypot and body cap; provider rejection/timeout; rate limiting. Resend is mocked, with no real credentials or email transmission.
- **Pass — `pnpm build`.** Final optimized build and TypeScript check, 21 generated entries. Existing NO_COLOR/FORCE_COLOR environment warning remains.
- **Pass — `git diff --check`.** No whitespace errors.
- **Pass — rendered metadata and links.** One h1 per content page, correct canonical, OG/Twitter content and image alt attributes. All 41 local destinations return successfully, including document downloads and image originals. Both social images, robots and sitemap return 200; missing route returns 404 with noindex.
- **Pass — browser interactions.** Spanish/English menu state; Escape and returned focus; skip-to-main focus; 404 return-home; AI examples and English contact anchors; empty-form errors and first-field focus; Other organization selection. Case image opens in a new tab at 2880×1556.
- **Pass — WebMCP public read.** Actual browser tool returns shared description, proven-sector examples, governed-AI approach and all nine public navigation destinations. It does not submit contact messages.
- **Pass — inspected browser console.** No error entries in the exercised session.

## Limits and release status

- **Not Proven:** external email delivery, provider-side deduplication and the full browser success/timeout path. The route tests mock the provider; the browser test only submits invalid input.
- **Not Proven:** distributed abuse protection. Rate limiting remains best-effort per server instance; no database is introduced for this Tier D site.
- **Not Proven:** exact production revision parity, current activation of every referenced product feature, or a fresh audit of historical case outcomes. Existing published outcomes retain attribution; no new metrics were invented.
- **N/A:** production promotion. No commit, push or deployment was requested or performed. Unrelated `CLAUDE.md` edits and `ABN-Ops-Arquitectura-2026-07-29.md` were preserved.

The earlier home-only QA record follows for provenance. Its references to older
inner-page styles and previous checks are historical; this section is current.

---

# First-pass record · home and positioning

Date: 2026-09-04

**final result: passed**

No actionable P0/P1/P2 findings remain in the reviewed views. This is acceptance
of the selected art direction with the founder's corrected story, not a claim of
pixel-identical reproduction of an image-generated mock.

## Visual truth and capture conditions

Selected option 2:
`/Users/anthonybir/.codex/generated_images/01a06e10-89f8-7bc1-8f44-2a605eba7ccb/exec-e41afece-a9b9-407c-9468-d1b49c4ac049.png`

Revised target incorporating the founder's positioning feedback:
`/Users/anthonybir/.codex/generated_images/01a06e10-89f8-7bc1-8f44-2a605eba7ccb/exec-9e3cc182-24e3-4e9a-bcc6-07520f9608e1.png`

The revised source is 1536×1024 pixels and has no known CSS viewport or device
scale. It is a compact full-page art-direction mock. Actual content includes the
existing site navigation/footer and fuller case attribution. Thus page height and
text density differ intentionally; do not treat those differences as pixel drift.

Implementation: `http://127.0.0.1:3002/`, local production build via
`NODE_ENV=production pnpm start --hostname 127.0.0.1 --port 3002`.

Capture root:
`/Users/anthonybir/.codex/visualizations/2026/09/04/01a06e10-89f8-7bc1-8f44-2a605eba7ccb/`

- `08-home-desktop-final.png`: 1440×900 pixels/CSS px, devicePixelRatio 1, top.
- `09-home-proof-desktop.png`: 1440×900, scrollY 900, proof and start of close.
- `15-home-footer-final.png`: 1440×900, page bottom, corrected footer.
- `11-home-mobile.png`: 375×812 pixels/CSS px, top.
- `16-home-proof-mobile.png`: 375×812, scrollY 1624, stacked case evidence.
- `13-home-tablet.png`: 1024×900 pixels/CSS px, top.
- `12-contact-validation-mobile.png`: 375×812, invalid form and other organization selected.
- `17-ai-desktop.png`, `18-ai-examples-desktop.png`: 1440×900, AI intro and examples.
- `19-opengraph.png`: generated production Open Graph image, 1200×630.

The source and implementation were supplied together in paired image inputs,
first the source and desktop hero, then the source, proof and corrected footer.
These are paired comparisons, not a fabricated side-by-side composite. The three
desktop captures cover the complete page with overlap. Source scale is treated as
an art-direction reference; implementation captures are 1:1 CSS pixels, not @2x.
Focused comparisons used readable hero, proof and footer captures.

Two capture attempts were rejected as tooling artifacts: `06-redesign-desktop.png`
has broken full-page stitching, and `14-home-complete-final.png` was clipped at
1440×1317 despite requesting a 2400px-high viewport. Neither was used to pass QA.

## Comparison history

1. **P2 — inherited visual styles differed from option 2.** The initial desktop
   capture (`07-redesign-hero-desktop.png`) showed a bright rounded CTA, nearly
   white ground and misaligned content/header widths. The initial full capture
   also exposed the old textured footer, confirmed in its normal viewport.
   Fixed: warm cream home background, dark teal low-radius CTA, aligned home
   containers, cream footer, original teal logo. Verified in `08`, `09`, `15`.
2. **P1 — low-contrast footer links after changing the surface.** `10-home-footer-desktop.png`
   showed inherited cream link text on cream. Fixed `.home-footer a` foreground.
   Post-fix `15-home-footer-final.png` shows dark links; computed foreground
   rgb(29,24,22) on rgb(247,244,239). No low-contrast links remain in that view.
3. **Final comparison.** Revised target and final hero/proof/footer supplied in
   the same comparison inputs. No additional visual fixes identified. Mobile and
   tablet captures show readable type, visible image, usable actions and no
   horizontal document overflow.

## Required fidelity surfaces

- **Fonts/typography — Pass.** Actual Instrument Serif, upright weight 400, and
  local Satoshi, with fonts loaded. Hero hierarchy and two sentence groups match
  the direction. Natural mobile wrapping preserves the entire headline. No
  synthetic bold, text truncation or image-rendered text.
- **Spacing/layout — Pass.** Flat split desktop hero, open two-column method,
  solid proof band and cream ending. At 375px the image follows the CTA in normal
  flow; it is visible in the first viewport. Checked widths 1440, 1024, 768 and 375.
  The original navigation and full footer are intentionally retained, making the
  page longer than the compact revised mock.
- **Colours/tokens — Pass.** Warm cream #f7f4ef, brand teal #0F3B3E and one gold
  outcome on teal. Footer foreground corrected and rechecked. No textured home
  band or floating tiles. Other routes retain their established surface treatment.
- **Image quality — Pass.** Separately generated conceptual photograph matching
  the chosen working-table direction; 1536×1024 WebP, 204,506 bytes. Sharp at the
  reviewed sizes. Appropriate crop, no invented software UI, real brand SVGs.
  Caption explicitly identifies conceptual imagery. The source asset remains
  outside the repository; only the optimized WebP is shipped by this diff.
- **Copy/content — Pass.** Leadership visibility, Excel/process transition and
  task-specific governed AI are explicit. Education/churches are case examples.
  Mock instruction leakage about “eligible markets” was removed. Public outcome
  attribution is preserved; no new customer metrics invented. es-ES in edited copy.

## Interaction and implementation checks

- Pass: mobile menu opens/closes; header return-home and home contact CTA navigate.
- Pass: empty contact submission shows Spanish field errors and focuses name;
  no message sent. “Otra organización” can be selected; optional field contract retained.
- Pass: AI examples anchor navigates to the actual section.
- Pass: browser error logs returned an empty array for exercised home/contact/AI flows.
- Pass: WebMCP tools register in the browser. An isolated source harness checks
  public result, shared description, proven sectors, navigation allowlist and cleanup.
  This is not a Chrome protocol conformance certification.
- Pass: generated HTML checks for title/description/Open Graph consistency,
  contact choice, removed old hero asset and stale AI catalogue, retained case values.
- Pass: `pnpm lint`, final `pnpm build` (20 generated pages), `git diff --check`.
  Build output includes the existing NO_COLOR/FORCE_COLOR environment warning.
- Pass: existing reduced-motion override remains in CSS; no new scroll animation
  added. Browser motion emulation and a full accessibility audit: Not Proven.

## Boundaries and handoff

- Email delivery: Not Proven; no external test email was sent.
- Public case outcome re-audit, every project feature's live activation, and exact
  production revision parity: Not Proven. Source review is not deployment proof.
- No deployment, commit or push performed. Existing unrelated files preserved.
- Implementation checklist complete for this scope; no remaining P0/P1/P2 items.
