import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTABanner from '../CTABanner';

export const metadata: Metadata = {
  title: 'Casos | ABN — Agencia Bir Nuñez',
  description:
    'AENA Admin, IBA Paraguay y IPUPY Tesorería — sistemas en producción para instituciones educativas y eclesiásticas en Paraguay y Latinoamérica.',
};

const cases = [
  {
    name: 'AENA Admin',
    label: 'Gestión escolar',
    summary:
      'Plataforma integral para administración escolar y generación de materiales bajo estándar institucional.',
    points: [
      'En producción desde 2024',
      'Asistencia, calificaciones, gestión docente y reportes MEC',
      'AULA integrado a operación académica real',
    ],
    cta: 'Consultá sobre AENA Admin',
    media: (
      <div className="editorial-media bg-white">
        <div className="browser-chrome">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <Image
          src="/screenshots/aena-dashboard.png"
          alt="AENA Admin dashboard"
          width={2842}
          height={1794}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, 54vw"
        />
      </div>
    ),
  },
  {
    name: 'IBA Paraguay',
    label: 'ERP académico + expansión regional',
    summary:
      'Seminario teológico usando la misma lógica de estructura institucional para operación académica y despliegue multinacional.',
    points: [
      'ERP académico en producción desde 2026',
      'AULA en implementación para planificación teológica',
      'Red IBA: Paraguay, Brasil, Argentina y Ecuador',
    ],
    cta: 'Consultá sobre AULA para seminarios',
    media: (
      <div className="rounded-3xl bg-[linear-gradient(180deg,var(--gray-50)_0%,var(--gray-200)_100%)] p-8 md:p-10">
        <div className="flex items-start justify-between gap-6 pb-8">
          <div>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-foreground/38">
              IBA rollout
            </p>
            <h3 className="mt-3 font-display text-4xl leading-none text-foreground md:text-5xl">
              De Paraguay hacia la red IBA.
            </h3>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/42">En implementación</p>
        </div>
        <div className="grid gap-6 pt-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="font-sans text-sm leading-relaxed text-foreground/66">
              Este frente muestra cómo ABN adapta el mismo núcleo institucional a contextos
              teológicos, cumplimiento académico y una expansión regional con reglas compartidas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['Paraguay', 'Brasil', 'Argentina', 'Ecuador'].map((country) => (
              <div key={country} className="rounded-2xl bg-white/60 px-4 py-4">
                <p className="font-sans text-sm font-medium text-foreground">{country}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: 'IPUPY Tesorería',
    label: 'Gobernanza financiera',
    summary:
      'Sistema de tesorería para operación eclesiástica multi-sede con trazabilidad, rendición y control financiero claro.',
    points: [
      'En producción desde 2024',
      'Rendición de cuentas multi-nivel',
      'Gobernanza eclesiástica transparente',
    ],
    cta: 'Consultá sobre IPUPY',
    media: (
      <div className="editorial-media bg-white">
        <div className="browser-chrome">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <Image
          src="/screenshots/ipupy-dashboard.png"
          alt="IPUPY Tesorería dashboard"
          width={2846}
          height={1822}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, 54vw"
        />
      </div>
    ),
  },
] as const;

export default function CasosPage() {
  return (
    <>
      <section className="bg-background px-6 pb-12 pt-18 md:px-12 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker mb-4">Casos reales</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.02] md:text-6xl">
            Sistemas que ABN construye, usa y mantiene en producción.
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-foreground/66 md:text-lg">
            Esta página no muestra demos aspiracionales. Muestra el tipo de plataforma e
            infraestructura institucional que ABN diseña para su propia operación y para
            organizaciones con exigencias reales.
          </p>
        </div>
      </section>

      <section className="section-frame bg-background px-6 py-10 md:px-12 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="proof-metric">
            <p className="font-display text-4xl font-semibold tracking-tight text-foreground">3</p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/62">
              frentes institucionales distintos: escolar, teológico y financiero.
            </p>
          </div>
          <div className="proof-metric">
            <p className="font-display text-4xl font-semibold tracking-tight text-foreground">100%</p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/62">
              diseñados alrededor de procesos que ABN ya opera y audita internamente.
            </p>
          </div>
          <div className="proof-metric">
            <p className="font-display text-4xl font-semibold tracking-tight text-foreground">1 lógica</p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/62">
              la institución fija el estándar; el sistema lo vuelve ejecutable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-18 md:px-12 md:py-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-20 md:gap-28">
          {cases.map((item, index) => (
            <article
              key={item.name}
              className={`grid gap-10 md:gap-14 ${
                index === 1
                  ? 'md:grid-cols-[1.05fr_0.95fr] md:items-start'
                  : 'md:grid-cols-[0.88fr_1.12fr] md:items-center'
              }`}
            >
              <div className={`${index === 1 ? 'md:order-2' : ''}`}>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-foreground/38">
                  {item.label}
                </p>
                <h2 className="mt-4 font-display text-4xl leading-none tracking-tight md:text-5xl">
                  {item.name}
                </h2>
                <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-foreground/66">
                  {item.summary}
                </p>
                <ul className="mt-8 grid gap-3">
                  {item.points.map((point) => (
                    <li key={point} className="font-sans text-sm leading-relaxed text-foreground/62">
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contacto"
                  className="link-arrow mt-8 font-sans text-sm font-medium text-foreground"
                >
                  {item.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className={`${index === 1 ? 'md:order-1' : ''}`}>{item.media}</div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
