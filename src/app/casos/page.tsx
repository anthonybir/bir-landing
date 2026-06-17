import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Casos | ABN · Agencia Bir Núñez',
  description:
    'AENA, IPUPY e IBA: tres instituciones reales, tres transformaciones medibles. Sistemas operados por la misma agencia que los diseñó.',
};

const cases = [
  {
    inst: 'AENA',
    sector: 'Educación · Asociación Educativa Nuevas Alturas',
    antes:
      'En 2020, papel y lápiz, riesgo de cierre por COVID y una morosidad institucional del 70%.',
    ahora:
      'Planificación anual y diaria de inicial a bachillerato, libreta digital, portal de padres y curriculum builder con IA por encima del estándar MEC. ~300 alumnos. En producción desde 2024.',
    kpi: { num: '70% → 2,9%', label: 'Morosidad en tres años' },
    img: {
      src: '/screenshots/aena-mec-programs.png',
      alt: 'Alineación curricular con el estándar MEC en AULA, el sistema de AENA',
      width: 1440,
      height: 1140,
    },
  },
  {
    inst: 'IPUPY',
    sector: 'Tesorería · Iglesia Pentecostal Unida del Paraguay',
    antes:
      'Tesorería fragmentada: cada congregación con su planilla, sin consolidación ni trazabilidad.',
    ahora:
      'Contabilidad institucional por partida doble, auditable, con reportes por sede y cierre mensual de un día. ~30 iglesias. En producción desde 2024.',
    kpi: { num: '1 día', label: 'Cierre mensual consolidado' },
    img: {
      src: '/screenshots/ipupy-dashboard.png',
      alt: 'Panel de tesorería de IPUPY',
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
      'Marco curricular y editorial bajo un solo estándar. Primer tenant de AULA, el motor de planificación académica con IA de ABN. El mismo marco se enseña hoy en vivo: diplomado «Métodos de estudiar la Biblia con uso responsable de IA».',
    kpi: { num: '1 estándar', label: 'Marco curricular y editorial único' },
    img: {
      src: '/screenshots/editorial-biblioteca.png',
      alt: 'Biblioteca editorial institucional bajo un solo estándar en AULA',
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
                  <h2 className="display text-[1.777rem]">{c.inst}</h2>
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
                    <p className="display display-num">{c.kpi.num}</p>
                    <p className="label-caps mt-2">{c.kpi.label}</p>
                  </div>
                </div>

                <div className="card overflow-hidden self-start p-2">
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
            </div>
          </article>
        ))}
      </section>

      {/* Plataforma — Aula, ABN-owned platform behind the three cases */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8">
        <div className="card flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-md">
            <p className="label-caps mb-3">Plataforma</p>
            <p className="font-sans text-base leading-relaxed text-gray-600">
              Los tres casos corren sobre{' '}
              <strong className="font-medium text-gray-900">Aula</strong>, el motor
              de planificación académica con IA de ABN. Una sola plataforma,
              propiedad de la agencia, desplegada por institución.
            </p>
          </div>
          <Image
            src="/logos/aula-logo.svg"
            alt="Aula, el motor de planificación académica con IA de ABN"
            width={200}
            height={61}
            className="shrink-0"
          />
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
            Conversar sobre tu institución
          </Link>
        </div>
      </section>
    </>
  );
}
