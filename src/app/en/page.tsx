import type { Metadata } from 'next';
import { PageIntro } from '../PageLayout';
import { WHATSAPP_EN_URL } from '../WhatsAppFloat';

export const metadata: Metadata = {
  title: {
    absolute: 'Paraguay Residency & Relocation Services | ABN · Agencia Bir Núñez',
  },
  description:
    'Paraguay temporary residency for English-speaking families, including translations, notarizations, Interpol and Migraciones filing.',
  alternates: {
    canonical: '/en',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paraguay Residency & Relocation Services | ABN',
    description: 'Local residency support for English-speaking families in Paraguay.',
    images: '/en/opengraph-image',
  },
  openGraph: {
    title: 'Paraguay Residency & Relocation Services | ABN · Agencia Bir Núñez',
    description:
      'Paraguay temporary residency for English-speaking families, including translations, notarizations, Interpol and Migraciones filing.',
    url: '/en',
    locale: 'en_US',
    type: 'website',
    images: '/en/opengraph-image',
  },
};

const scope = [
  'Review of your US-origin apostilled documents for completeness and fit for Migraciones requirements.',
  'Certified Spanish translations where required, coordinated with a Paraguayan certified translator.',
  'Notarized copies at a Paraguayan escribanía for every original submitted to Migraciones.',
  'In-country accompaniment for Interpol (Asunción) and the Paraguayan police background certificate.',
  'Preparation and filing of the sworn declarations required by Migraciones.',
  'Submission and follow-up of your Temporary Residency application until resolution.',
  'Bilingual EN/ES communication and status updates throughout the process.',
] as const;

const phases = [
  {
    num: '01',
    title: 'US-side preparation',
    time: 'Before travel',
    desc: 'You gather FBI background checks, vital records and apostilles at origin. We tell you exactly what to order and review everything before you ship it.',
  },
  {
    num: '02',
    title: 'Arrival & kickoff',
    time: 'On arrival',
    desc: 'You land in Paraguay. We meet, verify the document file together and schedule every appointment.',
  },
  {
    num: '03',
    title: 'In-country processing',
    time: 'Local appointments',
    desc: 'Translations, notarizations, Interpol and police certificates. We go with you to each step.',
  },
  {
    num: '04',
    title: 'Filing & resolution',
    time: 'Authority review',
    desc: 'We prepare the filing for Dirección Nacional de Migraciones and follow the application through its decision. Approval rests with Migraciones.',
  },
] as const;

const pricing = [
  'Itemized quotes in USD: government fees, translations, notarizations and our professional fee, each on its own line.',
  'Exchange-rate transparency: every quote is pegged to the Banco Central del Paraguay reference rate, documented on the quote itself.',
  'Milestone payments tied to real progress, not lump sums up front.',
  'State fees passed through at cost, with documentation. Estimate variances are shared with you before any commitment.',
] as const;

const credibility = [
  {
    title: 'We live here',
    desc: 'ABN is run by a US-born, fully bilingual director based in Lambaré. We have been through the same process we manage for you.',
  },
  {
    title: 'A clear written scope',
    desc: 'You receive the agreed scope, responsibilities and an itemized quote in writing. Our team coordinates the administrative and legal work.',
  },
  {
    title: 'We run institutions in Paraguay',
    desc: 'Our team operates a K-12 school and the national treasury system of a 30-church organization. We handle Paraguayan paperwork every day.',
  },
] as const;

export default function RelocationPage() {
  return (
    <div lang="en">
      <PageIntro label="ABN · Lambaré, Paraguay · Relocation services" title="Paraguay residency, handled in English.">
        <p>We coordinate the Paraguayan side of your family’s temporary residency application: documents, translations, local appointments and filing. You know what comes next and what it costs.</p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a href="#contact" className="btn-primary">Discuss your move</a>
          <a href={WHATSAPP_EN_URL} target="_blank" rel="noopener noreferrer" className="link-quiet">Chat on WhatsApp</a>
        </div>
      </PageIntro>

      {/* Scope */}
      <section className="page-container page-section" aria-label="What we handle">
        <p className="label-caps mb-10">What we handle</p>
        <ul className="grid max-w-4xl gap-x-12 gap-y-5 md:grid-cols-2">
          {scope.map((s) => (
            <li key={s} className="flex gap-3 font-sans text-base leading-relaxed text-gray-900">
              <span className="mt-2.5 h-1 w-4 shrink-0 bg-gray-300" aria-hidden />
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl font-sans text-base text-gray-600">
          US-origin items (FBI summaries, apostilles, couriers, travel) stay
          under your control and are never marked up by us. We tell you exactly
          what to order and when.
        </p>
      </section>

      {/* Process */}
      <section className="page-container page-section" aria-label="How it works">
        <p className="label-caps mb-10">How it works</p>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {phases.map((p) => (
            <article key={p.num} className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-xs text-gray-600">{p.num}</span>
                <span className="label-caps">{p.time}</span>
              </div>
              <h2 className="mt-6 font-sans text-base font-semibold text-gray-900">{p.title}</h2>
              <p className="mt-3 font-sans text-base leading-relaxed text-gray-600">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-container page-section" aria-label="Requirements and timing">
        <p className="body-copy">We confirm the document list and a working schedule after reviewing your situation. Requirements depend on the application, and processing times are set by the authorities.</p>
        <a href="https://migraciones.gov.py/residencia-temporal/" target="_blank" rel="noopener noreferrer" className="link-quiet mt-5 inline-block font-sans text-base">Official temporary residency requirements (Spanish)</a>
      </section>

      {/* Pricing principles */}
      <section className="page-container page-section" aria-label="Pricing">
        <div className="max-w-2xl">
          <p className="label-caps mb-6">How we price</p>
          <ul className="space-y-4">
            {pricing.map((p) => (
              <li key={p} className="font-sans text-base leading-relaxed text-gray-600">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why ABN. The one dark surface on this page. */}
      <section className="teal-band mb-16 md:mb-20" aria-label="Why ABN">
        <div className="page-container py-16 md:py-20">
          <p className="label-caps mb-10">Why ABN</p>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
            {credibility.map((c) => (
              <div key={c.title}>
                <h2 className="font-sans text-base font-semibold text-brand-cream">{c.title}</h2>
                <p className="mt-3 font-sans text-base leading-relaxed text-brand-cream-muted">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="page-container page-section" aria-label="Contact">
        <div className="py-4">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-lg">
              <h2 className="display section-title">Tell us about your family.</h2>
              <p className="mt-3 font-sans text-base text-gray-600">
                Write a few lines: how many adults, how many children, your
                timeline. We reply within 48 business hours to confirm the information
                needed for an itemized quote.
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-4">
              <a href="mailto:anthony@bir.com.py?subject=Paraguay%20residency%20inquiry" className="btn-primary">
                Email anthony@bir.com.py
              </a>
              <a
                href={WHATSAPP_EN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet font-sans text-base"
              >
                Or chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
