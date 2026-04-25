import type { Metadata } from 'next';
import Link from 'next/link';
import CaseSelector from './CaseSelector';
import { ArrowUR } from '../Arrows';
import { WHATSAPP_URL } from '../WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Casos | ABN — Agencia Bir Nuñez',
  description:
    'AENA Admin, IBA Paraguay y IPUPY Tesorería — sistemas en producción para instituciones educativas y eclesiásticas en Paraguay y Latinoamérica.',
};

const proof = [
  {
    n: '3',
    d: 'frentes institucionales distintos: escolar, teológico y financiero.',
  },
  {
    n: '100%',
    d: 'diseñados alrededor de procesos que ABN ya opera y audita internamente.',
  },
  {
    n: '1 lógica',
    d: 'la institución fija el estándar; el sistema lo vuelve ejecutable.',
  },
] as const;

export default function CasosPage() {
  return (
    <>
      {/* ── Editorial hero ───────────────────────── */}
      <section className="px-6 pt-10 pb-6 md:px-12 md:pt-14 md:pb-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 grid items-start gap-8 md:grid-cols-[80px_1fr]">
            <span className="issue-marker">CASES</span>
            <span className="eyebrow">
              <span className="dot" />
              Prueba en producción
            </span>
          </div>

          <h1 className="editorial-display my-4 text-[clamp(2.5rem,11vw,10.75rem)] md:my-8">
            Sistemas reales.
            <br />
            <span className="serif-it">Operados</span> por la
            <br />
            misma agencia.
          </h1>

          <div className="rule-ink grid items-start gap-10 pt-8 md:grid-cols-2">
            <p className="max-w-[32rem] font-display text-lg font-medium leading-snug tracking-tight text-foreground md:text-xl">
              Esta página no muestra demos aspiracionales. Muestra plataformas que ABN diseña para
              su propia operación y para organizaciones con exigencias reales.
            </p>
            <p className="max-w-[30rem] text-[0.95rem] text-foreground/72">
              Tres frentes distintos — escolar, teológico y financiero — que comparten la misma
              lógica: la institución fija el estándar, el sistema lo vuelve ejecutable.
            </p>
          </div>
        </div>
      </section>

      {/* ── Proof metrics ────────────────────────── */}
      <section aria-label="Indicadores transversales" className="mt-16 border-y border-[hsl(20_12%_10%/0.1)] px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-6 md:grid-cols-3">
            {proof.map((p) => (
              <div key={p.n} className="border-t-2 border-foreground pt-5">
                <div className="editorial-display text-[clamp(3rem,6vw,5.75rem)]">{p.n}</div>
                <p className="mt-3 max-w-[18rem] text-sm text-foreground/66">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case selector ────────────────────────── */}
      <section aria-label="Selector de casos" className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <CaseSelector />
        </div>
      </section>

      {/* ── Proof plate CTA (final) ──────────────── */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="proof-plate">
            <div className="flex flex-wrap items-start justify-between gap-8">
              <div>
                <span className="pill pill--on-dark">
                  <span className="dot" />
                  Tu institución
                </span>
                <h2
                  className="editorial-display mt-5 max-w-[40rem] text-[clamp(2rem,4vw,3.5rem)]"
                  style={{ color: 'var(--gray-50)' }}
                >
                  ¿Querés ser el{' '}
                  <span className="serif-it" style={{ color: 'var(--signal)' }}>
                    caso 04?
                  </span>
                </h2>
                <p className="mt-5 max-w-[32rem] text-[0.95rem] leading-relaxed text-background/72">
                  Si lo que hacés no se sostiene sin vos encima, esa es la conversación por la que
                  entrás.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-3 font-sans text-sm font-semibold text-foreground transition hover:-translate-y-px hover:bg-signal-light"
                >
                  WhatsApp
                  <ArrowUR />
                </a>
                <a
                  href="mailto:anthony@bir.com.py"
                  className="inline-flex items-center gap-2 rounded-full border border-background/30 px-5 py-3 font-sans text-sm font-medium text-background transition hover:-translate-y-px hover:border-background"
                >
                  Conversemos por email
                  <ArrowUR />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
