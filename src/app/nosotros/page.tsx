import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nosotros | ABN · Agencia Bir Núñez',
  description:
    'ABN es una agencia familiar: dirección, pedagogía, derecho y finanzas en una sola unidad. El trabajo es el retrato.',
};

const team = [
  {
    name: 'Anthony Bir',
    area: 'Dirección · Presidente del Consejo Administrativo de AENA',
    line: 'Presidente del Consejo Administrativo de AENA y arquitecto de los sistemas que ABN pone en producción. La persona que firma es la que opera.',
  },
  {
    name: 'Diana',
    area: 'Directora Pedagógica de AENA',
    line: 'Marco curricular MEAA 3.0: sin tareas, sin exámenes, ABP, alineado al MEC. En producción desde hace seis años.',
  },
  {
    name: 'Danae',
    area: 'Derecho',
    line: 'Encuadre legal y regulatorio de cada implementación: contratos, cumplimiento y relación con el MEC.',
  },
  {
    name: 'Stephanie',
    area: 'Finanzas',
    line: 'Operación financiera y cobranzas. La recuperación de morosidad de AENA pasó por este escritorio.',
  },
] as const;

const portfolio = [
  {
    tag: 'Educación',
    inst: 'AENA',
    line: 'Rescate 2020. ~300 alumnos bajo MEAA 3.0. Morosidad del 70% al 2,9% en tres años.',
  },
  {
    tag: 'Tesorería',
    inst: 'IPUPY',
    line: 'Tesorería por partida doble para ~30 iglesias. Cierre mensual de un día.',
  },
  {
    tag: 'Editorial',
    inst: 'IBA',
    line: 'Marco curricular y editorial de formación pastoral, multipaís.',
  },
  {
    tag: 'Software',
    inst: 'ABSD',
    line: 'Anthony Bir System Designs: AENA_Admin, ipupy_admin, Kairós Live. Producción institucional.',
  },
] as const;

const principles = [
  'El criterio de la institución antes que la herramienta.',
  'Construimos primero adentro; el cliente recibe lo que ya sobrevivió.',
  'Sistemas que viven sin nosotros.',
] as const;

export default function NosotrosPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 md:px-8">
        <p className="label-caps settle mb-6">Nosotros</p>
        <h1 className="display display-hero settle settle-2 max-w-3xl">
          Una agencia familiar. Una sola dirección.
        </h1>
        <p className="settle settle-3 mt-8 max-w-xl font-sans text-base leading-relaxed text-gray-600">
          ABN no es una red de freelancers. Es una unidad. Pedagogía, derecho y
          finanzas bajo una dirección que también opera las instituciones que
          presenta como casos. No vas a encontrar una foto acá. El trabajo es el
          retrato.
        </p>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Equipo">
        <p className="label-caps mb-10">La unidad</p>
        <div className="grid gap-6 md:grid-cols-2">
          {team.map((t) => (
            <article key={t.name} className="card p-6 md:p-8">
              <h2 className="font-sans text-base font-semibold text-gray-900">{t.name}</h2>
              <p className="label-caps mt-1">{t.area}</p>
              <p className="mt-4 font-sans text-base leading-relaxed text-gray-600">{t.line}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Portfolio as portrait */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Portfolio">
        <p className="label-caps mb-10">El retrato</p>
        <div className="border-t border-gray-200">
          {portfolio.map((p) => (
            <div
              key={p.inst}
              className="grid gap-2 border-b border-gray-200 py-6 md:grid-cols-[8rem_8rem_1fr] md:gap-8"
            >
              <span className="label-caps">{p.tag}</span>
              <span className="font-sans text-base font-semibold text-gray-900">{p.inst}</span>
              <span className="font-sans text-base text-gray-600">{p.line}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Principios">
        <p className="label-caps mb-10">Cómo decidimos</p>
        <ol className="max-w-2xl space-y-6">
          {principles.map((p, i) => (
            <li key={p} className="flex gap-6">
              <span className="font-mono text-xs text-gray-500">0{i + 1}</span>
              <span className="font-sans text-base leading-relaxed text-gray-900">{p}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-32 md:px-8">
        <div className="flex flex-col items-start gap-6 border-t border-gray-200 pt-12">
          <p className="max-w-xl font-sans text-base text-gray-600">
            Si esta forma de trabajar le sirve a tu institución, hablemos.
          </p>
          <Link href="/contacto" className="btn-primary">
            Iniciar conversación
          </Link>
        </div>
      </section>
    </>
  );
}
