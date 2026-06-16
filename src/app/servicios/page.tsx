import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios | ABN · Agencia Bir Núñez',
  description:
    'Diagnóstico institucional, implementación por frente y acompañamiento integral. Tres modos de trabajo que funcionan como un solo sistema.',
};

const modes = [
  {
    num: '01',
    title: 'Diagnóstico institucional',
    when: 'Cuando el problema todavía no está bien definido',
    plazo: '2 a 4 semanas',
    desc: 'Auditamos operación, criterio y puntos de fricción para establecer qué necesita orden, qué necesita sistema y qué conviene dejar para después.',
    bullets: [
      'Diagnóstico operativo y pedagógico',
      'Priorización de riesgos y cuellos de botella',
      'Hoja de ruta inicial con responsables',
    ],
  },
  {
    num: '02',
    title: 'Implementación por frente',
    when: 'Cuando ya hay una prioridad clara',
    plazo: '3 a 6 meses',
    desc: 'Entramos sobre un frente concreto, con alcance definido, entregables claros y una lógica de implementación que no rompe la operación diaria.',
    bullets: [
      'Proyecto por área o por problema',
      'Sistema, criterio y capacitación en el mismo frente',
      'Ejecución escalonada con responsables visibles',
    ],
  },
  {
    num: '03',
    title: 'Acompañamiento integral',
    when: 'Cuando varias áreas necesitan avanzar juntas',
    plazo: 'Continuo',
    desc: 'Coordinamos educación, tecnología y desarrollo institucional bajo una misma dirección para evitar proveedores sueltos y decisiones contradictorias.',
    bullets: [
      'Dirección transversal del proyecto',
      'Ajuste continuo según operación real',
      'Un solo equipo responsable del avance',
    ],
  },
] as const;

const sectors = [
  {
    title: 'Educación',
    desc: 'Colegios y centros de formación: planificación, libreta digital, comunicación con familias y gestión de cobros.',
  },
  {
    title: 'Organizaciones eclesiásticas',
    desc: 'Tesorería por partida doble, reportes por sede y cierres mensuales auditables para redes de iglesias.',
  },
  {
    title: 'Instituciones y pymes',
    desc: 'Procesos administrativos, financieros y editoriales que hoy dependen de planillas sueltas y memoria personal.',
  },
] as const;

const notForUs = [
  'Organizaciones que quieren solo una licencia de software, sin conversar del criterio detrás.',
  'Proyectos que esperan una integración «llave en mano» sin involucrar a la dirección.',
  'Instituciones que buscan que la agencia decida qué enseñar, cómo gobernar o qué priorizar.',
] as const;

export default function ServiciosPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 md:px-8">
        <p className="label-caps settle mb-6">Servicios</p>
        <h1 className="display display-hero settle settle-2 max-w-3xl">
          Diagnóstico, implementación, acompañamiento.
        </h1>
        <p className="settle settle-3 mt-8 max-w-xl font-sans text-base leading-relaxed text-gray-600">
          Tres modos que funcionan como un solo sistema. ABN no reparte
          responsabilidades entre integradores, consultores y «el que maneja el
          Excel». Entramos completos, salimos completos.
        </p>
      </section>

      {/* The three modes */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Modos de trabajo">
        <div className="space-y-6">
          {modes.map((m) => (
            <article key={m.num} className="card p-6 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
                <div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-gray-500">{m.num}</span>
                    <span className="label-caps">{m.plazo}</span>
                  </div>
                  <h2 className="display mt-4 text-[1.777rem]">{m.title}</h2>
                  <p className="mt-2 font-sans text-base font-medium text-gray-600">{m.when}</p>
                </div>
                <div>
                  <p className="font-sans text-base leading-relaxed text-gray-600">{m.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex gap-3 font-sans text-base text-gray-900">
                        <span className="mt-2.5 h-1 w-4 shrink-0 bg-gray-300" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Sectores">
        <p className="label-caps mb-10">Dónde trabajamos</p>
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
          {sectors.map((s) => (
            <div key={s.title}>
              <h2 className="font-sans text-base font-semibold text-gray-900">{s.title}</h2>
              <p className="mt-3 font-sans text-base leading-relaxed text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Honest filter */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Cuándo no somos la mejor opción">
        <div className="max-w-2xl border-t border-gray-200 pt-12">
          <p className="label-caps mb-6">No somos para</p>
          <ul className="space-y-4">
            {notForUs.map((n) => (
              <li key={n} className="font-sans text-base leading-relaxed text-gray-600">
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-32 md:px-8">
        <div className="flex flex-col items-start gap-6">
          <p className="max-w-xl font-sans text-base text-gray-600">
            Si no sabés por cuál de los tres modos empezar, esa es exactamente
            la conversación de diagnóstico.
          </p>
          <Link href="/contacto" className="btn-primary">
            Agendar un diagnóstico
          </Link>
        </div>
      </section>
    </>
  );
}
