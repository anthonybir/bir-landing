import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ABN · Agencia Bir Núñez | Consultoría y sistemas para instituciones',
  description:
    'Agencia de servicios en Paraguay: diagnóstico, implementación y acompañamiento para instituciones educativas, eclesiásticas y organizaciones de escala humana.',
};

const metrics = [
  {
    num: '70% → 2,9%',
    label: 'Morosidad recuperada',
    detail: 'AENA, en tres años de dirección directa.',
  },
  {
    num: '3',
    label: 'Sistemas en producción',
    detail: 'Escolar, financiero y editorial, operando hoy.',
  },
  {
    num: '~30',
    label: 'Iglesias administradas',
    detail: 'Tesorería por partida doble, cierre mensual en un día.',
  },
] as const;

const services = [
  {
    num: '01',
    title: 'Diagnóstico institucional',
    desc: 'Auditamos operación, criterio y puntos de fricción para establecer qué necesita orden, qué necesita sistema y qué conviene dejar para después.',
    plazo: '2 a 4 semanas',
  },
  {
    num: '02',
    title: 'Implementación por frente',
    desc: 'Entramos sobre una prioridad concreta, con alcance definido y entregables claros, sin romper la operación diaria.',
    plazo: '3 a 6 meses',
  },
  {
    num: '03',
    title: 'Acompañamiento integral',
    desc: 'Coordinamos educación, tecnología y desarrollo institucional bajo una misma dirección. Un solo equipo responsable del avance.',
    plazo: 'Continuo',
  },
] as const;

const cases = [
  {
    inst: 'AENA',
    sector: 'Educación',
    line: 'De papel y lápiz a planificación completa con portal de padres. ~300 alumnos, morosidad del 70% al 2,9%.',
  },
  {
    inst: 'IPUPY',
    sector: 'Tesorería',
    line: 'De tesorería fragmentada a contabilidad auditable por partida doble para ~30 iglesias.',
  },
  {
    inst: 'IBA',
    sector: 'Editorial',
    line: 'De enseñanza artesanal a un marco curricular y editorial bajo un solo estándar, primer tenant de AULA.',
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero (Mu zone) */}
      <section className="mx-auto max-w-6xl px-4 pb-24 pt-24 md:px-8 md:pt-32">
        <p className="label-caps settle mb-6">Agencia Bir Núñez · Lambaré, Paraguay</p>
        <h1 className="display display-hero settle settle-2 max-w-3xl">
          Estructura donde otros improvisan.
        </h1>
        <p className="settle settle-3 mt-8 max-w-xl font-sans text-base leading-relaxed text-gray-600">
          ABN es una agencia de servicios para instituciones de escala humana.
          Consultoría, sistemas y acompañamiento bajo una sola dirección.
          Construimos primero adentro. El cliente recibe lo que ya sobrevivió en
          producción.
        </p>
        <div className="settle settle-4 mt-12 flex flex-wrap items-center gap-6">
          <Link href="/contacto" className="btn-primary">
            Agendar un diagnóstico
          </Link>
          <Link href="/servicios" className="link-quiet font-sans text-base">
            Ver servicios
          </Link>
        </div>
      </section>

      {/* Proof (numbers carry the page) */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Resultados">
        <div className="grid gap-12 border-t border-gray-200 pt-12 md:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="display display-num">{m.num}</p>
              <p className="label-caps mt-3">{m.label}</p>
              <p className="mt-2 font-sans text-base text-gray-600">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services (Kūkan separation, no dividers) */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Servicios">
        <p className="label-caps mb-10">Cómo trabajamos</p>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.num} className="card card-lift p-6">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs text-gray-500">{s.num}</span>
                <span className="label-caps">{s.plazo}</span>
              </div>
              <h2 className="mt-6 font-sans text-base font-semibold text-gray-900">
                {s.title}
              </h2>
              <p className="mt-3 font-sans text-base leading-relaxed text-gray-600">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10">
          <Link href="/servicios" className="link-quiet font-sans text-base">
            Tres modos, un solo sistema. Verlos en detalle
          </Link>
        </p>
      </section>

      {/* Cases */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Casos">
        <p className="label-caps mb-10">Sistemas en producción</p>
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.inst}>
              <div className="flex items-baseline gap-3">
                <h2 className="font-sans text-base font-semibold text-gray-900">{c.inst}</h2>
                <span className="label-caps">{c.sector}</span>
              </div>
              <p className="mt-3 font-sans text-base leading-relaxed text-gray-600">{c.line}</p>
            </div>
          ))}
        </div>
        <p className="mt-10">
          <Link href="/casos" className="link-quiet font-sans text-base">
            Ver los tres casos completos
          </Link>
        </p>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-32 md:px-8">
        <div className="card p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-lg">
              <h2 className="display text-[1.777rem]">
                ¿Tu institución necesita orden?
              </h2>
              <p className="mt-3 font-sans text-base text-gray-600">
                Una conversación de diagnóstico no te compromete a nada.
                Respondemos dentro de 48 horas hábiles.
              </p>
            </div>
            <Link href="/contacto" className="btn-primary shrink-0">
              Iniciar conversación
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
