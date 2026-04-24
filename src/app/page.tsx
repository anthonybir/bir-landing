import Link from 'next/link';
import AulaScreenMock from './AulaScreenMock';
import ContactForm from './ContactForm';
import { ArrowR, ArrowUR } from './Arrows';
import { WHATSAPP_URL } from './WhatsAppFloat';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Agencia Bir Nuñez',
  alternateName: 'ABN',
  url: 'https://bir.com.py',
  email: 'anthony@bir.com.py',
  description:
    'Consultoría en transformación institucional. Educación, tecnología y desarrollo institucional en Latinoamérica.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lambaré',
    addressCountry: 'PY',
  },
  foundingDate: '2024',
  knowsLanguage: ['es', 'en'],
};

const stats = [
  { n: '03', l: 'Sistemas propios en producción' },
  { n: '04', l: 'Países con instituciones activas' },
  { n: '20+', l: 'Años de experiencia institucional' },
  { n: '03', l: 'Sectores institucionales cubiertos' },
] as const;

const heroProofs = [
  { label: 'AULA', value: 'Planificación y gestión escolar', meta: 'AENA · producción' },
  { label: 'IPUPY', value: 'Tesorería multi-sede', meta: 'finanzas institucionales' },
  { label: 'IBA', value: 'Marco curricular unificado', meta: 'seminario y editorial' },
] as const;

const aulaSignals = [
  'Planificación anual, semanal y materiales bajo criterio institucional',
  'Revisión operativa antes de publicar resultados docentes',
  'Datos escolares y estándar pedagógico en un mismo flujo',
] as const;

const methodSteps = [
  {
    n: '01',
    tag: 'Diagnóstico',
    weeks: '2–4 semanas',
    t: 'Leemos la institución',
    d: 'Mapeamos criterio pedagógico, operación, cuellos de botella y responsabilidades reales antes de hablar de herramientas.',
  },
  {
    n: '02',
    tag: 'Implementación',
    weeks: '8–16 semanas',
    t: 'Traducimos ese criterio en sistema',
    d: 'Diseñamos reglas, flujos y productos donde la institución fija el estándar y la tecnología lo ejecuta sin improvisar.',
  },
  {
    n: '03',
    tag: 'Acompañamiento',
    weeks: 'Continuo',
    t: 'Probamos en producción',
    d: 'Los sistemas que ofrecemos viven primero en nuestra propia operación, con retroalimentación constante y ajuste fino.',
  },
] as const;

const cases = [
  {
    num: '01',
    client: 'AENA',
    title: 'Gestión escolar y AULA en producción',
    frame: 'Plataforma + operación',
    sector: 'Educación escolar',
    year: '2023 —',
    impact:
      'De planificación dispersa a una operación escolar donde currículo, evaluación y administración responden al mismo estándar.',
    proof: 'AULA ordena planificación, tesorería, editorial y comunicación desde un criterio institucional vivo.',
    image: '/screenshots/aena-dashboard.png',
    featured: true,
  },
  {
    num: '02',
    client: 'IPUPY',
    title: 'Tesorería multi-sede con gobernanza clara',
    frame: 'Finanzas institucionales',
    sector: 'Denominación religiosa',
    year: '2024 —',
    impact:
      'De cierres manuales y criterios variables a reportes trazables para sedes, responsables y administración central.',
    proof: 'Flujos financieros diseñados para rendición clara sin convertir la institución en burocracia.',
    image: '/screenshots/ipupy-dashboard.png',
    featured: false,
  },
  {
    num: '03',
    client: 'IBA',
    title: 'Marco curricular y editorial unificado',
    frame: 'Seminario + editorial',
    sector: 'Seminario teológico',
    year: '2025 —',
    impact:
      'De documentos aislados a un marco común para formación, materiales y revisión académica.',
    proof: 'Criterio curricular traducido en procesos editoriales que pueden sostenerse por el equipo.',
    image: '/screenshots/editorial-aena.png',
    featured: false,
  },
] as const;

const manifesto: ReadonlyArray<[string, React.ReactNode]> = [
  ['No vendemos', 'herramientas.'],
  ['Diseñamos', <span key="c" className="serif-it">criterio.</span>],
  ['Implementamos', 'estándar.'],
  ['Operamos', 'con vos.'],
];

const nextSteps = [
  'Conversación de diagnóstico (45 min)',
  'Propuesta con alcance y fases',
  'Arranque en 2–4 semanas',
] as const;

const manifestoTranslation = [
  'Reglas claras antes de automatizar',
  'Flujos auditables por el equipo',
  'Documentación viva para sostener criterio',
  'Sistemas que obedecen la operación real',
] as const;

export default function ABNLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Editorial hero ───────────────────────── */}
      <section className="px-6 pt-10 pb-6 md:px-12 md:pt-14 md:pb-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 grid items-start gap-8 md:grid-cols-[80px_1fr]">
            <span className="issue-marker">№ 001 / 26</span>
            <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-foreground">
                  Agencia Bir Nuñez / ABN
                </p>
                <span className="eyebrow mt-2">
                  <span className="dot" />
                  Consultoría en transformación institucional
                </span>
              </div>
              <p className="max-w-[21rem] text-sm leading-relaxed text-foreground/62 md:text-right">
                Sistemas institucionales para educación, iglesias y organizaciones de escala humana.
              </p>
            </div>
          </div>

          <div className="hero-grid">
            <h1 className="editorial-display my-4 text-[clamp(2.75rem,13vw,12.25rem)] md:my-8">
              Estructura
              <br />
              <span className="serif-it">donde otros</span>
              <br />
              improvisan.
            </h1>

            <aside className="hero-proof" aria-label="Sistemas ABN en producción">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="eyebrow">
                  <span className="dot" />
                  Sistemas vivos
                </span>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-foreground/42">
                  marzo 2026
                </span>
              </div>
              <div className="space-y-3">
                {heroProofs.map((proof) => (
                  <div key={proof.label} className="hero-proof__row">
                    <span className="font-mono text-[0.72rem] font-semibold text-[color:var(--accent-dark)]">
                      {proof.label}
                    </span>
                    <span className="font-display text-base font-semibold leading-tight tracking-tight">
                      {proof.value}
                    </span>
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-foreground/46">
                      {proof.meta}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-foreground/10 pt-5">
                <AulaScreenMock />
              </div>
            </aside>
          </div>

          <div className="rule-ink grid items-start gap-6 pt-8 md:grid-cols-[80px_1fr_1fr] md:gap-10">
            <span className="issue-marker">LEAD</span>
            <p className="max-w-[32rem] font-display text-lg font-medium leading-snug tracking-tight text-foreground md:text-xl">
              ABN diseña sistemas para colegios, seminarios e instituciones que necesitan criterio
              estable, operación clara y tecnología obedeciendo a su estándar.
            </p>
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-3 font-sans text-sm font-semibold text-foreground transition hover:-translate-y-px hover:bg-signal-light"
                >
                  Solicitar diagnóstico
                  <ArrowUR />
                </a>
                <Link
                  href="/casos"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-3 font-sans text-sm font-medium text-foreground transition hover:-translate-y-px hover:bg-foreground hover:text-background"
                >
                  Ver sistemas en producción
                  <ArrowR />
                </Link>
              </div>
              <span className="tick">
                WhatsApp disponible para coordinación rápida · respuesta habitual en 48h hábiles
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats band ───────────────────────────── */}
      <section aria-label="Prueba institucional" className="mt-20 border-y border-[hsl(20_12%_10%/0.1)] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <span className="eyebrow">
              <span className="dot" />
              Prueba institucional
            </span>
            <span className="eyebrow">Al cierre de marzo 2026</span>
          </div>
          <h2 className="mb-16 max-w-[52rem] font-display text-[clamp(1.5rem,3vw,2.125rem)] font-medium leading-tight tracking-tight">
            Sistemas reales, operados por la misma agencia que los diseña. Nada de demo, nada de
            prototipo indefinido.
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={`${s.n}-${s.l}`} className="border-t-2 border-foreground pt-5">
                <div className="editorial-display text-[clamp(3rem,6vw,5.75rem)]">{s.n}</div>
                <p className="mt-3 max-w-[11rem] text-sm text-foreground/66">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AULA flagship ────────────────────────── */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-center gap-16 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="eyebrow">
                <span className="dot" />
                Flagship proof · AULA
              </span>
              <h2 className="editorial-display mt-6 mb-6 text-[clamp(2.75rem,5vw,5.25rem)]">
                El motor importa menos que el contexto que lo gobierna.
              </h2>
              <p className="mb-4 max-w-[32rem] text-lg text-foreground/72">
                AULA es la demostración más clara del método ABN: una plataforma que genera
                planificación y materiales bajo criterio institucional, no bajo improvisación
                individual.
              </p>
              <p className="mb-8 max-w-[32rem] text-base text-foreground/66">
                El mismo marco que ordena AULA es el que usamos para diagnosticar, implementar y
                sostener sistemas educativos y administrativos.
              </p>
              <ul className="mb-8 grid gap-3">
                {aulaSignals.map((signal) => (
                  <li key={signal} className="proof-line">
                    {signal}
                  </li>
                ))}
              </ul>
              <Link
                href="/aula"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 font-sans text-sm font-medium text-background transition hover:-translate-y-px hover:bg-[color:var(--accent-darker)]"
              >
                Conocer la plataforma AULA
                <ArrowR />
              </Link>
            </div>
            <AulaScreenMock big />
          </div>
        </div>
      </section>

      {/* ── Method (dark) ────────────────────────── */}
      <section className="dark-section px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 flex flex-wrap items-baseline justify-between gap-6">
            <div>
              <span className="eyebrow eyebrow--on-dark">
                <span className="dot" />
                Cómo trabaja ABN
              </span>
              <h2 className="editorial-display mt-6 max-w-[68rem] text-[clamp(3rem,7vw,7rem)] text-background">
                Menos discurso.
                <br />
                Más{' '}
                <span className="serif-it" style={{ color: 'var(--signal)' }}>
                  estándar operativo.
                </span>
              </h2>
            </div>
          </div>
          <p className="mb-20 max-w-[45rem] text-lg text-background/72">
            La propuesta de ABN no es “usar IA”. Es diseñar una estructura donde la institución
            manda, el sistema la respeta y el resultado se mantiene cuando cambian personas,
            herramientas o contexto.
          </p>

          <div className="grid border-t border-[hsl(0_0%_100%/0.18)] md:grid-cols-3">
            {methodSteps.map((s) => (
              <div key={s.n} className="method-card">
                <div className="mb-6 flex items-baseline justify-between">
                  <span
                    className="font-display text-5xl font-semibold tracking-tight"
                    style={{ color: 'var(--signal)' }}
                  >
                    {s.n}
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-background/50">
                    {s.weeks}
                  </span>
                </div>
                <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[color:var(--accent)]">
                  {s.tag}
                </div>
                <h3 className="editorial-display mb-4 text-2xl text-background">{s.t}</h3>
                <p className="text-sm leading-relaxed text-background/72">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cases teaser ─────────────────────────── */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">
                <span className="dot" />
                Casos en producción
              </span>
              <h2 className="editorial-display mt-4 text-[clamp(2.75rem,6vw,5.75rem)]">
                Tres instituciones.
                <br />
                Un mismo criterio.
              </h2>
            </div>
            <Link
              href="/casos"
              className="inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-3 font-sans text-sm font-medium text-foreground transition hover:-translate-y-px hover:bg-foreground hover:text-background"
            >
              Ver todos los casos
              <ArrowR />
            </Link>
          </div>

          <div className="case-proof-grid">
            {cases.map((c) => (
              <Link
                key={c.num}
                href="/casos"
                className={c.featured ? 'case-proof case-proof--featured' : 'case-proof'}
              >
                <div
                  className="case-proof__media"
                  style={{ backgroundImage: `url(${c.image})` }}
                  aria-hidden="true"
                />
                <div className="case-proof__body">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.08em] text-foreground/44">
                        {c.num} · {c.year}
                      </span>
                      <div className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-[color:var(--accent-dark)]">
                        {c.client} / {c.frame}
                      </div>
                    </div>
                    <ArrowUR size={14} />
                  </div>
                  <h3 className="editorial-display mb-4 text-3xl leading-none md:text-4xl">
                    {c.title}
                  </h3>
                  <p className="mb-5 text-base leading-relaxed text-foreground/72">{c.impact}</p>
                  <p className="border-t border-foreground/10 pt-4 text-sm leading-relaxed text-foreground/58">
                    {c.proof}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto ────────────────────────────── */}
      <section aria-label="Manifiesto operativo" className="border-y border-[hsl(20_12%_10%/0.1)] bg-gray-100 px-6 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="eyebrow mb-12 inline-flex">
            <span className="dot" />
            Manifiesto operativo
          </h2>
          <div className="grid gap-14">
            <div className="editorial-display text-[clamp(3rem,8vw,8rem)]">
              {manifesto.map(([label, phrase], i) => (
                <div key={i} className="manifesto-row">
                  <span className="font-medium text-foreground/56">{label}</span>
                  <span>{phrase}</span>
                </div>
              ))}
            </div>
            <div className="manifesto-translation max-w-3xl">
              <span className="eyebrow">
                <span className="dot" />
                En la práctica
              </span>
              <ul className="mt-8 grid gap-0">
                {manifestoTranslation.map((item, index) => (
                  <li key={item} className="translation-row">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact teaser ───────────────────────── */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <span className="eyebrow">
                <span className="dot" />
                Diagnóstico inicial
              </span>
              <h2 className="editorial-display mt-4 mb-6 text-[clamp(2.5rem,5vw,4.5rem)]">
                Si Excel, WhatsApp y decisiones improvisadas no alcanzan, empecemos por ordenar.
              </h2>
              <p className="max-w-[32rem] text-lg text-foreground/72">
                ABN entra donde hace falta criterio, estructura y un sistema que siga funcionando
                cuando el entusiasmo inicial se vaya.
              </p>
            </div>
            <div className="rounded-2xl border border-[hsl(20_12%_10%/0.08)] bg-white p-8 shadow-sm">
              <span className="eyebrow">Próximos pasos</span>
              <ul className="my-6 list-none p-0">
                {nextSteps.map((s, i) => (
                  <li
                    key={s}
                    className="flex gap-3 border-t border-[hsl(20_12%_10%/0.06)] py-3.5 text-[0.95rem] first:border-t-0"
                  >
                    <span className="min-w-[1.5rem] font-mono text-[color:var(--accent-dark)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-3 font-sans text-sm font-semibold text-foreground transition hover:-translate-y-px hover:bg-signal-light"
                >
                  Coordinar por WhatsApp
                  <ArrowUR />
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-3 font-sans text-sm font-medium text-foreground transition hover:-translate-y-px hover:bg-foreground hover:text-background"
                >
                  Enviar solicitud
                  <ArrowR />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact form (kept inline; design teaser targets #contacto) ─── */}
      <section id="contacto" className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div className="max-w-lg">
              <span className="eyebrow mb-4 inline-flex">
                <span className="dot" />
                Solicitud de diagnóstico
              </span>
              <h2 className="line-accent font-display text-4xl font-semibold leading-tight md:text-5xl">
                Empecemos con una primera lectura.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground/68">
                Contanos qué se está desordenando, qué decisiones se repiten y qué debería seguir
                funcionando aunque cambien las personas. Respondemos con próximos pasos dentro de
                48h hábiles.
              </p>
            <div className="mt-12 grid gap-7">
              <div>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-foreground/62">
                  Base
                </p>
                <p className="mt-2 text-sm text-foreground/72">Lambaré, Paraguay</p>
              </div>
              <div>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-foreground/62">
                  Contacto
                </p>
                <p className="mt-2 text-sm text-foreground/72">anthony@bir.com.py</p>
              </div>
            </div>
          </div>

          <div className="form-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
