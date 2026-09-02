import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../Reveal';

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Diagnóstico, implementación y dirección continua para instituciones educativas y organizaciones eclesiásticas.',
  alternates: {
    canonical: '/servicios',
  },
};

const modes = [
  {
    num: '01',
    title: 'Diagnóstico institucional',
    when: 'Cuando el problema todavía no está bien definido',
    plazo: '2 a 4 semanas',
    desc: 'Revisamos cómo trabaja la institución, dónde se frenan las decisiones y qué riesgos necesitan atención. El resultado es un orden claro para empezar.',
    bullets: [
      'Revisión operativa, financiera y pedagógica',
      'Riesgos ordenados por urgencia',
      'Primer plan de trabajo, con responsables',
    ],
  },
  {
    num: '02',
    title: 'Implementación por frente',
    when: 'Cuando ya hay una prioridad clara',
    plazo: '3 a 6 meses',
    desc: 'Tomamos un problema concreto y acordamos qué debe cambiar. Implementamos por etapas para que la institución siga trabajando. También resolvemos contratos, cumplimiento y la relación con el regulador correspondiente, incluido el MEC en educación.',
    bullets: [
      'Un problema y un alcance definidos',
      'Sistema, reglas y capacitación para el mismo equipo',
      'Trabajo por etapas, con un responsable visible',
    ],
  },
  {
    num: '03',
    title: 'Acompañamiento integral',
    when: 'Cuando varias áreas necesitan avanzar juntas',
    plazo: 'Continuo',
    desc: 'Un solo equipo coordina finanzas, derecho, tecnología y pedagogía. La institución no queda en medio de proveedores que se contradicen.',
    bullets: [
      'Una dirección para todas las áreas',
      'Ajustes según lo que ocurre en la operación',
      'Un equipo responsable del resultado',
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
] as const;

const notForUs = [
  'Organizaciones que quieren solo una licencia de software, sin conversar del criterio detrás.',
  'Proyectos que esperan una integración «llave en mano» sin involucrar a la dirección.',
  'Instituciones que buscan que la agencia decida qué enseñar, cómo gobernar o qué priorizar.',
  'Empresas que buscan desarrollo de software a medida, sin una institución que ordenar detrás.',
] as const;

export default function ServiciosPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 md:px-8">
        <p className="label-caps settle mb-6">Servicios</p>
        <h1 className="display display-hero settle settle-2 max-w-3xl">
          Ponemos tu institución en orden.
        </h1>
        <p className="settle settle-3 mt-8 max-w-xl font-sans text-base leading-relaxed text-gray-600">
          ABN no divide la responsabilidad entre consultores, proveedores y «el
          que maneja el Excel». El mismo equipo entiende el problema, hace el
          trabajo y responde por el resultado.
        </p>
      </section>

      {/* The three modes */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Modos de trabajo">
        <div className="space-y-6">
          {modes.map((m) => (
            <Reveal key={m.num}>
              <article className="card p-6 md:p-10">
                <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-gray-500">{m.num}</span>
                      <span className="label-caps">{m.plazo}</span>
                    </div>
                    <h2 className="mt-4 font-sans text-base font-semibold text-gray-900">{m.title}</h2>
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
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Sectores">
        <p className="label-caps mb-10">Dónde trabajamos</p>
        <div className="grid max-w-4xl gap-x-12 gap-y-10 md:grid-cols-2">
          {sectors.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <h2 className="font-sans text-base font-semibold text-gray-900">{s.title}</h2>
              <p className="mt-3 font-sans text-base leading-relaxed text-gray-600">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Honest filter. The one dark surface on this page: the boundary is
          the strongest thing said here, so it gets the brand band. */}
      <section
        className="teal-band brand-texture mb-24"
        aria-label="Cuándo no somos la mejor opción"
      >
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-24">
          <Reveal className="max-w-2xl">
            <p className="label-caps mb-6">No somos para</p>
            <ul className="space-y-4">
              {notForUs.map((n) => (
                <li key={n} className="font-sans text-base leading-relaxed text-brand-cream-muted">
                  {n}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-32 md:px-8">
        <Reveal className="flex flex-col items-start gap-6 border-t border-gray-200 pt-12">
          <p className="max-w-xl font-sans text-base text-gray-600">
            Si todavía no está claro por dónde empezar, el diagnóstico sirve
            para decidirlo.
          </p>
          <Link href="/contacto" className="btn-primary">
            Agendar un diagnóstico
          </Link>
        </Reveal>
      </section>
    </>
  );
}
