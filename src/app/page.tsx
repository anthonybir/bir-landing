import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ABN · Orden institucional convertido en software',
  description:
    'ABN ordena instituciones y convierte ese criterio en software con IA gobernada. Diagnóstico, sistemas en producción y acompañamiento para colegios, iglesias y redes de formación en Paraguay.',
};

const metrics = [
  {
    num: '70% → 2,9%',
    label: 'Morosidad recuperada',
    detail: 'AENA, en tres años de dirección directa.',
  },
  {
    num: '~30',
    label: 'Iglesias administradas',
    detail: 'Tesorería por partida doble, cierre mensual de un día.',
  },
  {
    num: '3',
    label: 'Sistemas en producción',
    detail: 'Escolar, financiero y editorial, operando hoy.',
  },
] as const;

const loop = [
  { num: '01', step: 'Diagnóstico', line: 'Dónde se rompe la operación.' },
  { num: '02', step: 'Criterio', line: 'Qué reglas sostienen a la institución.' },
  { num: '03', step: 'Sistema', line: 'Roles, datos, reportes, flujos y permisos.' },
  {
    num: '04',
    step: 'IA gobernada',
    line: 'Asistentes dentro del flujo, con trazabilidad y revisión humana.',
  },
  { num: '05', step: 'Acompañamiento', line: 'Ajustes según la operación real.' },
] as const;

const caseLogoClassName = 'h-16 w-16 object-contain object-left';

const cases = [
  {
    inst: 'AENA',
    sector: 'Educación',
    logo: {
      src: '/logos/aena-badge.png',
      alt: 'Logotipo oficial de AENA',
      className: caseLogoClassName,
    },
    antes: 'Papel y lápiz, riesgo de cierre y morosidad del 70%.',
    sistema:
      'Aula: planificación anual y diaria, libreta digital y portal de padres, alineado al MEC.',
    ia: 'Planificación docente y materiales, con aprobación humana obligatoria.',
    resultado: 'Morosidad 70% → 2,9% en tres años. ~300 alumnos.',
  },
  {
    inst: 'IPUPY',
    sector: 'Tesorería',
    logo: {
      src: '/logos/ipupy-mark.png',
      alt: 'Logotipo oficial de IPUPY',
      className: caseLogoClassName,
    },
    antes: 'Tesorería fragmentada: cada congregación con su planilla, sin consolidación.',
    sistema: 'Contabilidad institucional por partida doble, auditable, con reportes por sede.',
    ia: 'Lectura de informes, categorización y conciliación; el tesorero confirma.',
    resultado: '~30 iglesias. Cierre mensual de un día.',
  },
  {
    inst: 'IBA',
    sector: 'Formación pastoral',
    logo: {
      src: '/logos/iba-mark.png',
      alt: 'Logotipo oficial de IBA',
      className: caseLogoClassName,
    },
    antes: 'Enseñanza pastoral artesanal: cada docente con su material, sin estándar.',
    sistema:
      'Aula (primer tenant), sobre fuentes curriculares GATS: marco y editorial bajo un solo estándar.',
    ia: 'Planificación y materiales con uso responsable de IA.',
    resultado:
      'Un solo estándar. Diplomado «Métodos de estudiar la Biblia con uso responsable de IA».',
  },
] as const;

const negations = [
  { no: 'No empezamos con pantallas.', si: 'Empezamos con criterio.' },
  {
    no: 'No usamos IA como reemplazo.',
    si: 'La usamos como asistente trazable, con revisión humana.',
  },
  { no: 'No vendemos licencias sueltas.', si: 'Acompañamos operación real.' },
  { no: 'No prometemos transformación genérica.', si: 'Mostramos sistemas en producción.' },
] as const;

const sectors = [
  'Colegios y centros educativos',
  'Iglesias, redes y tesorerías institucionales',
  'Institutos bíblicos y formación pastoral',
  'Pymes e instituciones con administración sensible',
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero (Mu zone): name the category */}
      <section className="mx-auto max-w-6xl px-4 pb-24 pt-24 md:px-8 md:pt-32">
        <p className="label-caps settle mb-6">Agencia Bir Núñez · Lambaré, Paraguay</p>
        <h1 className="display display-hero settle settle-2 max-w-3xl">
          Orden institucional convertido en software.
        </h1>
        <p className="settle settle-3 mt-8 max-w-xl font-sans text-base leading-relaxed text-gray-600">
          ABN entra en instituciones que crecieron sobre planillas, memoria personal y
          decisiones dispersas. Ordenamos el criterio, construimos el sistema y usamos IA
          gobernada donde devuelve tiempo sin ceder control.
        </p>
        <div className="settle settle-4 mt-12 flex flex-wrap items-center gap-6">
          <Link href="/contacto" className="btn-primary">
            Agendar un diagnóstico
          </Link>
          <Link href="#loop" className="link-quiet font-sans text-base">
            Cómo trabajamos
          </Link>
        </div>
      </section>

      {/* Proof: numbers carry the page */}
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
        <p className="mt-10 font-sans text-base text-gray-600">
          Cada sistema opera con IA gobernada y revisión humana.{' '}
          <Link href="/ia-gobernada" className="link-quiet">
            Ver cómo
          </Link>
        </p>
      </section>

      {/* The ABN Loop: how we work, as a method (not a service menu) */}
      <section id="loop" className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Cómo trabajamos">
        <p className="label-caps mb-10">Cómo trabajamos</p>
        <ol className="border-t border-gray-200">
          {loop.map((l) => (
            <li
              key={l.num}
              className="grid gap-1 border-b border-gray-200 py-6 md:grid-cols-[3rem_12rem_1fr] md:items-baseline md:gap-8"
            >
              <span className="font-mono text-xs text-gray-500">{l.num}</span>
              <span className="font-sans text-base font-semibold text-gray-900">{l.step}</span>
              <span className="font-sans text-base leading-relaxed text-gray-600">{l.line}</span>
            </li>
          ))}
        </ol>
        <p className="mt-10">
          <Link href="/servicios" className="link-quiet font-sans text-base">
            Tres modos de contratarnos
          </Link>
        </p>
      </section>

      {/* Cases as transformations: Antes / Sistema / IA / Resultado */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Casos">
        <p className="label-caps mb-10">Sistemas en producción</p>
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.inst}>
              <div className="mb-6 flex h-16 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.logo.src} alt={c.logo.alt} className={c.logo.className} />
              </div>
              <div className="flex items-baseline gap-3">
                <h2 className="font-sans text-base font-semibold text-gray-900">{c.inst}</h2>
                <span className="label-caps">{c.sector}</span>
              </div>
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="label-caps mb-1">Antes</dt>
                  <dd className="font-sans text-base leading-relaxed text-gray-600">{c.antes}</dd>
                </div>
                <div>
                  <dt className="label-caps mb-1">Sistema</dt>
                  <dd className="font-sans text-base leading-relaxed text-gray-600">{c.sistema}</dd>
                </div>
                <div>
                  <dt className="label-caps mb-1">IA</dt>
                  <dd className="font-sans text-base leading-relaxed text-gray-600">{c.ia}</dd>
                </div>
                <div>
                  <dt className="label-caps mb-1">Resultado</dt>
                  <dd className="font-sans text-base leading-relaxed text-gray-900">
                    {c.resultado}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
        <p className="mt-10">
          <Link href="/casos" className="link-quiet font-sans text-base">
            Ver los tres casos completos
          </Link>
        </p>
      </section>

      {/* What makes this different: negations */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Cómo nos diferenciamos">
        <p className="label-caps mb-10">Cómo nos diferenciamos</p>
        <div className="max-w-2xl space-y-5">
          {negations.map((n) => (
            <p key={n.no} className="font-sans text-base leading-relaxed">
              <span className="font-medium text-gray-900">{n.no}</span>{' '}
              <span className="text-gray-600">{n.si}</span>
            </p>
          ))}
        </div>
      </section>

      {/* Who it is for + sectors */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Para quién es">
        <p className="label-caps mb-10">Para quién es</p>
        <p className="max-w-2xl font-sans text-base leading-relaxed text-gray-600">
          Para instituciones que ya tienen misión, gente y responsabilidad, pero cuya operación
          todavía depende de planillas, WhatsApp, memoria personal o decisiones que solo una
          persona entiende.
        </p>
        <ul className="mt-8 grid max-w-2xl gap-x-12 gap-y-3 sm:grid-cols-2">
          {sectors.map((s) => (
            <li key={s} className="flex gap-3 font-sans text-base text-gray-900">
              <span className="mt-2.5 h-px w-4 shrink-0 bg-gray-300" aria-hidden />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-32 md:px-8">
        <div className="card p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-lg">
              <h2 className="display text-[1.777rem]">El primer paso no es comprar software.</h2>
              <p className="mt-3 font-sans text-base text-gray-600">
                Es entender qué parte de la institución necesita orden. Una conversación de
                diagnóstico no te compromete a nada. Respondemos dentro de 48 horas hábiles.
              </p>
            </div>
            <Link href="/contacto" className="btn-primary shrink-0">
              Agendar un diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
