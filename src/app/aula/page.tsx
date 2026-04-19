import type { Metadata } from 'next';
import Link from 'next/link';
import AulaScreenMock from '../AulaScreenMock';
import FeatureTabs from './FeatureTabs';
import { ArrowR, ArrowUR } from '../Arrows';
import { WHATSAPP_URL } from '../WhatsAppFloat';

export const metadata: Metadata = {
  title: 'AULA | Plataforma de Planificación Académica con IA — ABN',
  description:
    'AULA: motor de planificación académica con IA + contexto institucional. Para colegios, seminarios e instituciones educativas en Latinoamérica.',
};

const formula = [
  {
    n: '01',
    tag: 'Diagnóstico',
    t: 'ABN documenta la institución',
    d: 'Marco pedagógico, currículo, evaluación, lenguaje y operación real se convierten en un contexto usable.',
  },
  {
    n: '02',
    tag: 'Integración',
    t: 'Ese contexto entra al motor',
    d: 'AULA deja de responder como herramienta genérica y empieza a producir bajo el criterio de la institución.',
  },
  {
    n: '03',
    tag: 'Operación',
    t: 'El equipo genera con estándar',
    d: 'Docentes y coordinadores trabajan con materiales más consistentes, menos corrección y menos improvisación.',
  },
] as const;

const proof = [
  { n: 'AENA', d: 'Colegio K-12 usando AULA dentro de su operación académica.' },
  { n: 'IBA', d: 'Seminario teológico extendiendo el modelo a varios países.' },
  { n: 'DOCX+PDF', d: 'Salidas listas para revisión y uso real dentro del equipo.' },
  { n: '100%', d: 'Construido y operado por la misma estructura institucional.' },
] as const;

export default function AulaPage() {
  return (
    <>
      {/* ── Editorial hero ───────────────────────── */}
      <section className="px-6 pt-10 pb-6 md:px-12 md:pt-14 md:pb-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 grid items-start gap-8 md:grid-cols-[80px_1fr]">
            <span className="issue-marker">PRODUCT</span>
            <span className="eyebrow">
              <span className="dot" />
              AULA · Sistema de gestión educativa
            </span>
          </div>

          <h1 className="editorial-display my-4 text-[clamp(2.75rem,13vw,12.25rem)] md:my-8">
            <span className="serif-it">Un motor</span>
            <br />
            gobernado por
            <br />
            la institución.
          </h1>

          <div className="rule-ink grid items-start gap-6 pt-8 md:grid-cols-[80px_1fr_1fr] md:gap-10">
            <span className="issue-marker">LEAD</span>
            <p className="max-w-[32rem] font-display text-lg font-medium leading-snug tracking-tight text-foreground md:text-xl">
              AULA no es &ldquo;IA para colegios&rdquo;. Es el{' '}
              <span className="serif-it">sistema de gestión</span> donde el criterio pedagógico se
              codifica, se audita y se ejecuta sin improvisación individual.
            </p>
            <div className="flex flex-col items-start gap-4">
              <p className="max-w-[26rem] text-sm text-foreground/72">
                En producción desde 2023 con AENA. Multi-sede desde 2024. Plataforma de escuela
                completa hoy.
              </p>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 font-sans text-sm font-medium text-background transition hover:-translate-y-px hover:bg-[color:var(--accent-darker)]"
              >
                Solicitar demo guiada
                <ArrowR />
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-[1440px] md:mt-20">
          <AulaScreenMock big />
        </div>
      </section>

      {/* ── Fórmula (3-step light band) ───────────── */}
      <section className="mt-20 border-y border-[hsl(20_12%_10%/0.1)] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <span className="eyebrow">
              <span className="dot" />
              La fórmula
            </span>
            <span className="eyebrow">En una institución real</span>
          </div>
          <h2 className="mb-16 max-w-[56rem] editorial-display text-[clamp(2.25rem,5vw,4.5rem)]">
            Cómo funciona AULA dentro de una{' '}
            <span className="serif-it">institución ya ordenada.</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {formula.map((s) => (
              <div key={s.n} className="border-t-2 border-foreground pt-6">
                <div className="mb-4 flex items-baseline justify-between">
                  <span
                    className="font-display text-4xl font-semibold tracking-tight md:text-5xl"
                    style={{ color: 'var(--accent-dark)' }}
                  >
                    {s.n}
                  </span>
                </div>
                <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground/55">
                  {s.tag}
                </div>
                <h3 className="editorial-display mb-3 text-2xl md:text-[1.6rem]">{s.t}</h3>
                <p className="text-sm leading-relaxed text-foreground/66">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features tabs ────────────────────────── */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <span className="eyebrow mb-6 inline-flex">
            <span className="dot" />
            Qué hay dentro
          </span>
          <h2 className="mb-16 max-w-[60rem] editorial-display text-[clamp(2.5rem,6vw,5.5rem)]">
            Cuatro frentes,{' '}
            <span className="serif-it">un mismo criterio.</span>
          </h2>
          <FeatureTabs />
        </div>
      </section>

      {/* ── Dónde opera — dark split ─────────────── */}
      <section className="dark-section px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <span className="eyebrow eyebrow--on-dark">
                <span className="dot" />
                Dónde opera
              </span>
              <h2 className="editorial-display mt-6 text-background text-[clamp(2.5rem,6vw,5.5rem)]">
                Dos contextos.
                <br />
                <span className="serif-it" style={{ color: 'var(--signal)' }}>
                  Un mismo principio.
                </span>
              </h2>
            </div>
            <p className="max-w-[32rem] text-base leading-relaxed text-background/72 md:text-lg">
              AULA opera hoy sobre dos realidades institucionales distintas — un colegio K-12 y
              una red de seminarios teológicos — bajo el mismo marco operativo.
            </p>
          </div>

          <div className="grid gap-0 border-t border-[hsl(0_0%_100%/0.18)] md:grid-cols-2">
            <div className="method-card">
              <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[color:var(--accent)]">
                Seminarios teológicos
              </div>
              <h3 className="editorial-display mb-4 text-2xl text-background md:text-3xl">
                <span className="serif-it" style={{ color: 'var(--signal)' }}>
                  Sílabos
                </span>{' '}
                y planificación bajo marco institucional.
              </h3>
              <p className="mb-6 text-[0.95rem] leading-relaxed text-background/72">
                Sílabos teológicos, planificación de cursos, transcriptos, asistencia y
                cumplimiento central bajo un marco institucional coherente.
              </p>
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-background/55">
                IBA Paraguay + red IBA
              </div>
            </div>
            <div className="method-card">
              <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[color:var(--accent)]">
                Colegios K-12
              </div>
              <h3 className="editorial-display mb-4 text-2xl text-background md:text-3xl">
                Planificación y materiales{' '}
                <span className="serif-it" style={{ color: 'var(--signal)' }}>
                  alineados
                </span>{' '}
                al programa.
              </h3>
              <p className="mb-6 text-[0.95rem] leading-relaxed text-background/72">
                Planificaciones, materiales, evaluaciones y comunicación alineadas al programa, al
                estilo de enseñanza y al marco institucional de cada colegio.
              </p>
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-background/55">
                MEC Paraguay + adaptación local
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof metrics ────────────────────────── */}
      <section className="px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <span className="eyebrow mb-6 inline-flex">
            <span className="dot" />
            Resultado
          </span>
          <h2 className="mb-16 max-w-[56rem] editorial-display text-[clamp(2.25rem,5vw,4.5rem)]">
            Probado en producción{' '}
            <span className="serif-it">antes</span> de llegar a cualquier demo.
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {proof.map((p) => (
              <div key={p.n} className="border-t-2 border-foreground pt-5">
                <div className="editorial-display text-[clamp(2rem,3.5vw,3.25rem)]">{p.n}</div>
                <p className="mt-3 max-w-[15rem] text-sm text-foreground/66">{p.d}</p>
              </div>
            ))}
          </div>
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
                  AULA en producción
                </span>
                <h2
                  className="editorial-display mt-5 max-w-[40rem] text-[clamp(2rem,4vw,3.5rem)]"
                  style={{ color: 'var(--gray-50)' }}
                >
                  ¿Listo para{' '}
                  <span className="serif-it" style={{ color: 'var(--signal)' }}>
                    gobernar
                  </span>{' '}
                  el motor en vez de sufrirlo?
                </h2>
                <p className="mt-5 max-w-[32rem] text-[0.95rem] leading-relaxed text-background/72">
                  Te mostramos AULA operando contra tu caso real, no contra un dataset inventado.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--signal)] px-5 py-3 font-sans text-sm font-semibold text-foreground transition hover:-translate-y-px hover:bg-[color:var(--signal-light)]"
                >
                  WhatsApp
                  <ArrowUR />
                </a>
                <Link
                  href="/#contacto"
                  className="inline-flex items-center gap-2 rounded-full border border-background/30 px-5 py-3 font-sans text-sm font-medium text-background transition hover:-translate-y-px hover:border-background"
                >
                  Pedir demo
                  <ArrowR />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
