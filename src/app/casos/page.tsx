import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedNumber from '../AnimatedNumber';
import Reveal from '../Reveal';

export const metadata: Metadata = {
  title: 'Casos',
  description:
    'Cómo llegaron AENA, IPU Paraguay e IBA, qué cambió y qué sistemas usan hoy.',
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
      src: '/screenshots/aena-centro-coordinacion.png',
      alt: 'Centro de Coordinación de AENA Admin: ciclo anual de promoción, alerta temprana y coordinación académica',
      width: 2880,
      height: 1556,
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
      alt: 'Control operativo de la red en la tesorería de IPU Paraguay: informes pendientes, resultados del período y cierre de mes',
      width: 2880,
      height: 1624,
    },
  },
  {
    inst: 'IBA',
    sector: 'Editorial · Instituto Bíblico Apostólico',
    antes:
      'Formación pastoral sin estándar común: cada docente con su propio material.',
    ahora:
      'Marco curricular y editorial bajo un solo estándar. La primera institución desplegada en Aula, el motor de planificación académica con IA de ABN. El mismo marco se enseña hoy en vivo: diplomado «Métodos de estudiar la Biblia con uso responsable de IA».',
    kpi: { num: '1 estándar', label: 'Marco curricular y editorial único' },
    img: {
      src: '/screenshots/aula-planificacion-docente.png',
      alt: 'Planificación docente en Aula: mesa del docente bíblico con fuentes, ritmo de clase y aprobación',
      width: 2880,
      height: 1624,
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
          Tres instituciones, antes y ahora.
        </h1>
        <p className="settle settle-3 mt-8 max-w-xl font-sans text-base leading-relaxed text-gray-600">
          AENA, IPU Paraguay e IBA llegaron con problemas distintos. Acá
          mostramos qué encontramos, qué cambió y cómo trabajan hoy.
        </p>
      </section>

      {/* Cases */}
      <section className="mx-auto max-w-6xl space-y-24 px-4 pb-24 md:px-8">
        {cases.map((c) => (
          <article key={c.inst} aria-label={c.inst}>
            <div className="border-t border-gray-200 pt-10">
              <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
                {/* Steps. Each holds a share of the viewport so the sticky
                    frame on the right has distance to travel. */}
                <div>
                  <Reveal>
                    <h2 className="font-sans text-base font-semibold text-gray-900">{c.inst}</h2>
                    <p className="label-caps mt-2">{c.sector}</p>
                  </Reveal>

                  <dl className="mt-10">
                    <Reveal className="md:min-h-[36vh]">
                      <dt className="label-caps mb-2">Antes</dt>
                      <dd className="max-w-md font-sans text-base leading-relaxed text-gray-600">
                        {c.antes}
                      </dd>
                    </Reveal>
                    <Reveal className="mt-8 md:mt-0 md:min-h-[36vh]">
                      <dt className="label-caps mb-2">Ahora</dt>
                      <dd className="max-w-md font-sans text-base leading-relaxed text-gray-900">
                        {c.ahora}
                      </dd>
                    </Reveal>
                  </dl>

                  <Reveal className="mt-10 md:mt-0">
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
                  </Reveal>
                </div>

                {/* The frame holds while the steps pass. Sticky sits on the
                    Reveal itself so no animated ancestor gets in the way. */}
                <Reveal className="self-start md:sticky md:top-24">
                  <div className="shot">
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
                        className="h-auto w-full rounded-[calc(var(--radius-lg)-0.25rem)]"
                        sizes="(min-width: 768px) 45vw, 100vw"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Plataforma — Aula, ABN-owned platform behind the three cases.
          The one dark surface on this page, placed mid-scroll. */}
      <section className="teal-band brand-texture band-rise mb-24" aria-label="Plataforma">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
          <div className="max-w-lg">
            <p className="label-caps mb-3">Plataforma</p>
            <p className="font-sans text-base leading-relaxed text-brand-cream-muted">
              Los tres casos usan{' '}
              <Link href="/aula" className="link-quiet">
                Aula
              </Link>
              , la plataforma de ABN. Cada institución tiene su propio despliegue
              y conserva sus reglas.
            </p>
          </div>
          <p className="display shrink-0 text-[2.5rem] leading-none">Aula</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-32 md:px-8">
        <Reveal className="flex flex-col items-start gap-6 border-t border-gray-200 pt-12">
          <p className="max-w-xl font-sans text-base text-gray-600">
            Si tu institución está en una situación parecida, empezamos con un
            diagnóstico. No hace falta firmar un contrato para eso.
          </p>
          <Link href="/contacto" className="btn-primary">
            Agendar un diagnóstico
          </Link>
        </Reveal>
      </section>
    </>
  );
}
