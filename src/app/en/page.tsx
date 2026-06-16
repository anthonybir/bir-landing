import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paraguay Residency & Relocation Services | ABN · Agencia Bir Núñez',
  description:
    'End-to-end Paraguayan temporary residency for English-speaking families: translations, notarizations, Interpol and Migraciones filings, with transparent USD pricing.',
  alternates: {
    canonical: '/en',
    languages: { es: '/', en: '/en' },
  },
};

const WHATSAPP_EN_URL = `https://wa.me/595991402548?text=${encodeURIComponent(
  "Hi Anthony, I'm interested in ABN's Paraguay residency services.",
)}`;

const scope = [
  'Review of your US-origin apostilled documents for completeness and fit for Migraciones requirements.',
  'Certified Spanish translations of all foreign-language documents through a Paraguayan certified translator.',
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
    time: '4 to 6 weeks',
    desc: 'You gather FBI background checks, vital records and apostilles at origin. We tell you exactly what to order and review everything before you ship it.',
  },
  {
    num: '02',
    title: 'Arrival & kickoff',
    time: 'Day 1',
    desc: 'You land in Paraguay. We meet, verify the document file together and schedule every appointment.',
  },
  {
    num: '03',
    title: 'In-country processing',
    time: '2 to 4 weeks',
    desc: 'Translations, notarizations, Interpol and police certificates. We go with you to each step.',
  },
  {
    num: '04',
    title: 'Filing & resolution',
    time: '6 to 10 weeks',
    desc: 'We file at Dirección General de Migraciones and follow the application until your residency is approved.',
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
    title: 'A real firm, not a fixer',
    desc: 'Agencia Bir Núñez EAS is a registered Paraguayan company with legal counsel in-house. Engagement letters, invoices and accountability in writing.',
  },
  {
    title: 'We run institutions in Paraguay',
    desc: 'Our team operates a K-12 school and the national treasury system of a 30-church organization. Navigating Paraguayan paperwork is our daily work, not a side gig.',
  },
] as const;

export default function RelocationPage() {
  return (
    <div lang="en">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-24 pt-24 md:px-8 md:pt-32">
        <p className="label-caps settle mb-6">ABN · Lambaré, Paraguay · Relocation services</p>
        <h1 className="display display-hero settle settle-2 max-w-3xl">
          Structure where others improvise.
        </h1>
        <p className="settle settle-3 mt-8 max-w-xl font-sans text-base leading-relaxed text-gray-600">
          We manage the entire Paraguayan side of your family&rsquo;s Temporary
          Residency: translations, notarizations, Interpol, police certificates
          and the Migraciones filing. You arrive to a process, not a maze.
        </p>
        <div className="settle settle-4 mt-12 flex flex-wrap items-center gap-6">
          <a href="#contact" className="btn-primary">
            Request a quote
          </a>
          <a
            href={WHATSAPP_EN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-quiet font-sans text-base"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Scope */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="What we handle">
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
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="How it works">
        <p className="label-caps mb-10">How it works</p>
        <div className="grid gap-6 md:grid-cols-4">
          {phases.map((p) => (
            <article key={p.num} className="card p-6">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs text-gray-500">{p.num}</span>
                <span className="label-caps">{p.time}</span>
              </div>
              <h2 className="mt-6 font-sans text-base font-semibold text-gray-900">{p.title}</h2>
              <p className="mt-3 font-sans text-base leading-relaxed text-gray-600">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Pricing principles */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Pricing">
        <div className="max-w-2xl border-t border-gray-200 pt-12">
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

      {/* Why ABN */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Why ABN">
        <p className="label-caps mb-10">Why ABN</p>
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
          {credibility.map((c) => (
            <div key={c.title}>
              <h2 className="font-sans text-base font-semibold text-gray-900">{c.title}</h2>
              <p className="mt-3 font-sans text-base leading-relaxed text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-32 md:px-8" aria-label="Contact">
        <div className="card p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-lg">
              <h2 className="display text-[1.777rem]">Tell us about your family.</h2>
              <p className="mt-3 font-sans text-base text-gray-600">
                Write a few lines: how many adults, how many children, your
                timeline. You&rsquo;ll have an itemized quote within 48 business
                hours.
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
