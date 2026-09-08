# ABN search audit · 8 September 2026

## Outcome and scope

Anthony selected **ABN services and AI systems in Paraguay** as the search priority.
The personal homepage remains Anthony's profile; `/servicios` is the commercial
entry point, supported by `/ia-gobernada`, `/casos` and `/nosotros`.

The site has a strong technical baseline. The practical issues were conflicting
canonical signals, generic service titles, two pages without incoming internal
links, and incomplete separation of agency and author identities. These are fixed
in the local candidate. Ranking and traffic changes are **Not Proven**.

## Findings and implemented changes

| Priority | Evidence before | Local change |
| --- | --- | --- |
| High | All 14 sitemap URLs and canonicals used the apex host, while production redirected to `www` | One `SITE_URL` and URL helper now align metadata, robots, sitemap and structured data with the production host |
| High | `/servicios` had the title `Servicios | Anthony Bir`; its heading did not identify the service | Title, heading and introduction now describe management systems and AI for organisations in Paraguay, branded ABN |
| High | No incoming page links to `/ia-gobernada` or `/nosotros` in the full site crawl | Contextual links from services connect the AI explanation, team and case studies; AI links back to implementation and evidence |
| Medium | Blog author lacked a profile URL; publisher still used ABN with Anthony's personal favicon | Linked visible byline and author/profile identity; personal publisher retained separately from ABN |
| Medium | No organisation definition for the team or provider relationship for the service | Organisation data on the team page and Service data with the same ABN provider identity; only confirmed name, founder and location |
| Medium | Contact metadata and visible copy promised a 48-hour reply and a free conversation | Removed these promises, following the positioning rule against unconfirmed response times and offers |
| Low | Several page titles were only `Aula`, `Casos`, or `Blog` | Descriptive titles with one appropriate brand suffix, consistent social metadata |

[Google recommends aligning redirects and canonical signals](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls),
[descriptive titles](https://developers.google.com/search/docs/appearance/title-link),
and [crawlable internal links with useful anchor text](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).
These are implementation priorities, not measured ranking losses.

## Technical evidence

| Check | Status | Evidence and limits |
| --- | --- | --- |
| Sitemap routes | Pass | All 14 live pages return HTTP 200; local candidate has 14 unique canonical entries |
| Canonicals / Open Graph | Pass locally | Generated HTML agrees on host and path for every page; root URL with or without `/` is treated as equivalent |
| Titles / descriptions / H1 | Pass | 14 unique titles, descriptions present, one H1 on each page |
| Image alternatives | Pass | No missing alt attributes in the 14-page live crawl |
| Internal links | Pass locally | Every sitemap route now has an incoming page link; 27 linked local images/downloads returned 200 on production |
| Unknown URL | Pass | Live nonexistent route returns HTTP 404 |
| Structured data | Pass locally | JSON parsed from generated HTML; consistent Person, ProfilePage, WebSite, Organisation, Service and BlogPosting identities |
| Google rich-result eligibility | Not Proven | Google Rich Results Test / Search Console inspection not run; Service markup is semantic data, not a promised Google rich-result feature |
| Indexing / queries / leads | Not Proven | No authenticated Search Console or organic-conversion dataset was available in this task; a search-engine result sample is not an indexing or rank report |
| Responsive presentation | Pass | Services, AI, team, contact and a blog article checked at 1440, 1024 and 375 px with no horizontal overflow |
| Regression checks | Pass | `pnpm lint`, `pnpm test` (10 tests), `pnpm build` (22 generated pages), `git diff --check` |

One live mobile Lighthouse 13.4.1 run on `/servicios` at 19:50 UTC, before edits:
**performance 98, accessibility 100, best practices 100, SEO 100**. LCP 2.2 s,
CLS 0, total blocking time 20 ms. This is a simulated lab run, not field Core Web
Vitals or a ranking score. No performance rewrite was warranted by that result.

Reproduction command:

```sh
CHROME_PATH='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' pnpm dlx lighthouse https://www.bir.com.py/servicios --chrome-flags='--headless --disable-gpu' --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=/tmp/bir-seo-lighthouse-before.json --quiet
```

Evidence is in `output/seo/{crawl-before,crawl-after,lighthouse-baseline}.json`
and `output/playwright/seo-*.png`. Browser checks used a local production build
at `http://127.0.0.1:3018`. Local Vercel Analytics script 404 and the environment's
NO_COLOR/FORCE_COLOR build warning remain tooling limits, not newly introduced
application errors. External email delivery was not tested.

## Search topics to validate

These are **editorial priorities based on the actual offer**, not search-volume
estimates. Search volume, difficulty, current position and opportunity scores
based on traffic are unknown for all rows. Validate them with Search Console
and a keyword dataset before commissioning a large content programme.

| Search topic | Intent | Priority | Best destination / format |
| --- | --- | --- | --- |
| sistemas de gestión Paraguay | Commercial | High | `/servicios` |
| sistemas de gestión a medida Paraguay | Commercial | High | `/servicios` |
| inteligencia artificial para organizaciones Paraguay | Commercial | High | `/ia-gobernada` |
| implementación de IA Paraguay | Commercial | High | `/ia-gobernada` and implementation stages |
| consultoría de sistemas de gestión Paraguay | Commercial | High | Existing diagnostic section on `/servicios` |
| automatización de procesos administrativos Paraguay | Commercial | Medium | Explain specific supported processes; avoid universal automation claims |
| cómo pasar de Excel a un sistema de gestión | Informational | High | A practical guide linked to the service and cases |
| cómo incorporar IA en una organización | Informational | High | Guide using the existing examples and controls |
| IA con revisión humana | Informational | Medium | `/ia-gobernada` |
| sistemas de gestión para colegios Paraguay | Commercial | Medium | AENA case; clarify reusable scope before a dedicated landing page |
| inteligencia artificial en gestión educativa | Informational | Medium | Existing AENA notes and case |
| software de tesorería para iglesias | Commercial | Medium | IPU Paraguay case; do not present an internal system as an off-the-shelf product |
| inteligencia artificial en tesorería | Informational | Medium | Existing treasury article |
| IA para planificación docente | Informational | Medium | Existing AENA articles; distinguish that Aula module from IBA's Aula |
| ABN Agencia Bir Núñez | Navigational | High | `/nosotros` and `/servicios` |

## Observed competing pages

A current web-search sample returned [GuaranIA](https://www.guarania.com.py/) and
[SATI's AI service](https://sati.com.py/servicios/inteligencia-artificial), among
other local providers. Their own pages explicitly name AI, consulting or business
operations. ABN's previous generic service title communicated less of the offer.
The revised title and introduction address that gap.

ABN's useful distinction is its documented operating experience in education,
treasury and formation, with identifiable cases and human review. Keep that
specificity. Competitor leadership claims, customer counts and performance
promises were not independently verified and should not be copied.

Relative rank, backlink authority, keyword counts, conversion rates and competitor
technical scores: **Not Proven**. No winner can be inferred from this sample.

## Next actions

| Priority | Action | Purpose | Effort / dependency |
| --- | --- | --- | --- |
| 1 | Publish this verified candidate | Make the corrected pages available to crawlers | Production approval required |
| 2 | Inspect the property in Search Console; submit the canonical sitemap and inspect services, AI and team pages | Verify Google's selected canonicals, discovery and queries | Existing verified property access; do not create credentials or change DNS without approval |
| 3 | Review the first available query and landing-page data | Choose topics from real impressions and relevant enquiries | Depends on Google recrawling and sufficient data; no fixed ranking deadline |
| 4 | Write one practical guide on moving from spreadsheets to a management system | Answer a concrete pre-purchase question and connect it to ABN's service | Half-day editorial estimate; founder review of claims and examples |
| 5 | Write one guide on deciding where IA helps and where people must approve | Explain the offer using existing evidence | Half-day editorial estimate; link to the service and relevant cases |
| 6 | Agree how to measure qualified enquiries from organic visits | Evaluate business value rather than a Lighthouse score | Tracking requirements and privacy scope must be decided first |

Do not create near-duplicate pages for every city, add a fixed keyword-density
target, inflate publication dates, invent reviews, or mark `/en` as a translation
of the Spanish personal homepage. The English page has a separate service intent.
Its main content is explicitly `lang="en"`; changing the static root HTML language
would need a separate routing decision and is not claimed as an SEO fix here.

[Google's article guidance](https://developers.google.com/search/docs/appearance/structured-data/article)
recommends an identifiable author URL; its
[profile-page guidance](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
includes author/about-me pages. The candidate uses those relationships without
inventing external profiles. Organisation data follows
[Google's organisation guidance](https://developers.google.com/search/docs/appearance/structured-data/organization).

## Verified candidate

Base: `529b44a226525beec62e73bc8c7dd5f55c93415d`. SHA-256 of the sorted changed
source/test file names and bytes: `6495a6cf37e5416fac34e1b8667bca542b325ad406dbc0bff90989d86b78c312`.
No dependency, environment or runtime configuration changes.

## Release boundary

This SEO candidate is local and uncommitted on `codex/abn-search-foundations`.
The previously published branding release remains production revision
`529b44a226525beec62e73bc8c7dd5f55c93415d`. No SEO ranking improvement,
Search Console submission or production SEO deployment is claimed.
