import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedNumber from '../AnimatedNumber';

export const metadata: Metadata = {
  title: 'Casos',
  description:
    'AENA, IPU Paraguay e IBA: tres instituciones reales, tres transformaciones medibles. Sistemas operados por la misma agencia que los diseñó.',
  alternates: {
    canonical: '/casos',
  },
};

const cases = [
  {
    inst: 'AENA',
    sector: 'Educación · Asociación Educativa Nuevas Alturas',
    antes:
      'En 2020, papel y lápiz, riesgo de cierre por COVID y una morosidad institucional del 70%.',
    ahora:
      'Planificación anual y semanal de inicial a bachillerato, libreta digital, portal de padres y coordinación académica asistida por IA sobre el estándar MEC. ~300 alumnos. En producción desde 2024.',
    kpi: {
      lead: '70% → ',
      count: { from: 70, to: 2.9, decimals: 1, suffix: '%' },
      label: 'Morosidad en tres años',
    },
    img: {
      src: '/screenshots/aena-centro-coordinacion-public.png',
      alt: 'Centro de Coordinación de AENA Admin con prioridades directivas y seguimiento docente semanal',
      width: 1280,
      height: 960,
      className:
        'aspect-[4/3] w-full rounded-[calc(var(--radius-lg)-0.25rem)] object-cover object-top',
    },
  },
  {
    inst: 'IPU PY',
    sector: 'Tesorería · Iglesia Pentecostal Unida del Paraguay',
    antes:
      'Tesorería fragmentada: cada congregación con su planilla, sin consolidación ni trazabilidad.',
    ahora:
      'Contabilidad institucional por partida doble, auditable, con reportes por sede y cierre mensual de un día. ~30 iglesias. En producción desde 2024.',
    kpi: { num: '1 día', label: 'Cierre mensual consolidado' },
    img: {
      src: '/screenshots/ipupy-dashboard.png',
      alt: 'Panel de tesorería de IPU Paraguay',
      width: 2846,
      height: 1822,
    },
  },
  {
    inst: 'IBA',
    sector: 'Editorial · Instituto Bíblico Apostólico',
    antes:
      'Enseñanza pastoral artesanal: cada docente con su material, sin estándar común.',
    ahora:
      'Marco curricular y editorial bajo un solo estándar. La primera institución desplegada en Aula, el motor de planificación académica con IA de ABN. El mismo marco se enseña hoy en vivo: diplomado «Métodos de estudiar la Biblia con uso responsable de IA».',
    kpi: { num: '1 estándar', label: 'Marco curricular y editorial único' },
    img: {
      src: '/screenshots/editorial-biblioteca.png',
      alt: 'Biblioteca editorial institucional bajo un solo estándar en Aula',
      width: 1440,
      height: 1240,
    },
  },
] as const;

export default function CasosPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 md:px-8">
        <p className="label-caps settle mb-6">Casos</p>
        <h1 className="display display-hero settle settle-2 max-w-3xl">
          Tres rescates, no tres productos.
        </h1>
        <p className="settle settle-3 mt-8 max-w-xl font-sans text-base leading-relaxed text-gray-600">
          Esta página no muestra demos aspiracionales. Muestra instituciones que
          ABN opera o acompaña, con el arco completo: cómo llegaron y dónde
          están hoy.
        </p>
      </section>

      {/* Cases */}
      <section className="mx-auto max-w-6xl space-y-24 px-4 pb-24 md:px-8">
        {cases.map((c) => (
          <article key={c.inst} aria-label={c.inst}>
            <div className="border-t border-gray-200 pt-10">
              <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
                <div>
                  <h2 className="font-sans text-base font-semibold text-gray-900">{c.inst}</h2>
                  <p className="label-caps mt-2">{c.sector}</p>

                  <dl className="mt-10 space-y-8">
                    <div>
                      <dt className="label-caps mb-2">Antes</dt>
                      <dd className="font-sans text-base leading-relaxed text-gray-600">
                        {c.antes}
                      </dd>
                    </div>
                    <div>
                      <dt className="label-caps mb-2">Ahora</dt>
                      <dd className="font-sans text-base leading-relaxed text-gray-900">
                        {c.ahora}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-10">
                    <p className="display display-num">
                      {'count' in c.kpi ? (
                        <>
                          {c.kpi.lead}
                          <AnimatedNumber
                            from={c.kpi.count.from}
                            to={c.kpi.count.to}
                            decimals={c.kpi.count.decimals}
                            suffix={c.kpi.count.suffix}
                          />
                        </>
                      ) : (
                        c.kpi.num
                      )}
                    </p>
                    <p className="label-caps mt-2">{c.kpi.label}</p>
                  </div>
                </div>

                <div className="shot self-start">
                  <div className="shot-chrome" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="shot-body">
                    <Image
                      src={c.img.src}
                      alt={c.img.alt}
                      width={c.img.width}
                      height={c.img.height}
                      className={
                        'className' in c.img
                          ? c.img.className
                          : 'h-auto w-full rounded-[calc(var(--radius-lg)-0.25rem)]'
                      }
                      sizes="(min-width: 768px) 45vw, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Plataforma — Aula, ABN-owned platform behind the three cases.
          The one dark surface on this page, placed mid-scroll. */}
      <section className="teal-band brand-texture mb-24" aria-label="Plataforma">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
          <div className="max-w-lg">
            <p className="label-caps mb-3">Plataforma</p>
            <p className="font-sans text-base leading-relaxed text-brand-cream-muted">
              Los tres casos corren sobre{' '}
              <Link href="/aula" className="link-quiet">
                Aula
              </Link>
              , el motor de planificación académica con IA de ABN. Una sola
              plataforma, propiedad de la agencia, desplegada por institución.
            </p>
          </div>
          <p className="display shrink-0 text-[2.5rem] leading-none">Aula</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-32 md:px-8">
        <div className="flex flex-col items-start gap-6 border-t border-gray-200 pt-12">
          <p className="max-w-xl font-sans text-base text-gray-600">
            El caso 04 puede ser tu institución. El primer paso es un
            diagnóstico, no un contrato.
          </p>
          <Link href="/contacto" className="btn-primary">
            Agendar un diagnóstico
          </Link>
        </div>
      </section>
    </>
  );
}
