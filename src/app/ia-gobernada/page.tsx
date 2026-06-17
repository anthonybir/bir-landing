import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IA gobernada | ABN · Agencia Bir Núñez',
  description:
    'Cómo ABN usa inteligencia artificial dentro de instituciones reales: la IA propone, la persona decide. Prompts versionados, contexto anclado en la fuente, permisos a nivel de datos y verificación automática.',
};

const principles = [
  {
    num: '01',
    title: 'La IA propone; la persona decide.',
    line: 'Ninguna sugerencia se vuelve oficial sin aprobación humana explícita. La herramienta acelera el trabajo; la decisión sigue siendo de la persona responsable.',
  },
  {
    num: '02',
    title: 'Cada sugerencia, con su nivel de confianza.',
    line: 'La IA no entrega certezas. Cada propuesta llega con un puntaje de confianza, para saber cuánto pesarla y cuándo mirar con más cuidado.',
  },
  {
    num: '03',
    title: 'Prompts gobernados y versionados.',
    line: 'Cada comportamiento de la IA está definido por una instrucción escrita, revisada, versionada y publicada, como una política institucional. Ningún ajuste manual queda sin registro.',
  },
  {
    num: '04',
    title: 'Contexto anclado en la fuente.',
    line: 'La IA parte del currículo oficial o de los datos de la institución, no de un chat improvisado. Se etiqueta qué se generó con asistencia y qué no. Transparencia, no caja negra.',
  },
  {
    num: '05',
    title: 'Verificación automática de calidad y seguridad.',
    line: 'Lo que genera la IA pasa por controles de calidad, alineación y seguridad antes de usarse. Si no los supera, se reintenta con reglas más estrictas o se descarta.',
  },
  {
    num: '06',
    title: 'Permisos a nivel de los datos.',
    line: 'El acceso está controlado en la base de datos misma: cada persona ve solo lo que su rol permite. No depende de la pantalla.',
  },
] as const;

const proof = [
  { num: '+120', label: 'Prompts publicados', detail: 'Cada función de IA es una instrucción con versión y estado.' },
  { num: '+140', label: 'Materiales trazables', detail: 'Biblioteca editorial catalogada por área, grado y semana.' },
] as const;

const systems = [
  {
    name: 'Calificación con evidencia',
    tag: 'AENA · Libro de notas',
    rows: [
      {
        k: 'Qué hace',
        v: 'Sugiere un nivel a partir de una foto del trabajo del estudiante sobre un indicador. No decide la nota oficial.',
      },
      { k: 'Proveedor', v: 'Claude (Anthropic) por defecto; OpenAI seleccionable y sujeto a evaluación.' },
      {
        k: 'Revisión humana',
        v: 'El docente acepta, ajusta o rechaza; la nota oficial nunca la escribe la IA.',
      },
      {
        k: 'Controles',
        v: 'Evaluación con casos dorados; rechaza evidencia fuera de alcance; marca la baja confianza.',
      },
      { k: 'Retención', v: 'Las imágenes se eliminan 180 días después del cierre del libro de notas.' },
    ],
  },
  {
    name: 'Planificación',
    tag: 'AENA · Aula',
    rows: [
      { k: 'Qué hace', v: 'Genera y explica borradores de planificación semanal y anual.' },
      { k: 'Proveedor', v: 'Claude (Anthropic) por defecto; OpenAI seleccionable y evaluado.' },
      {
        k: 'Revisión humana',
        v: 'Docente o coordinación revisa, edita y publica; la IA no oficializa planes.',
      },
      {
        k: 'Controles',
        v: 'Evaluaciones con datasets dorados y rúbrica; control de fidelidad al plan anual.',
      },
      {
        k: 'Retención',
        v: 'Los planes guardados son registros durables; las vistas previas vencen a los pocos días.',
      },
    ],
  },
  {
    name: 'Editorial Aula',
    tag: 'AENA · Recursos',
    rows: [
      { k: 'Qué hace', v: 'Genera y renderiza recursos y materiales docentes: guías, fichas y evaluaciones.' },
      {
        k: 'Proveedor',
        v: 'Claude (Anthropic) para el contenido; archivos con Anthropic Skills y OpenAI de respaldo; un juez de calidad automático.',
      },
      {
        k: 'Revisión humana',
        v: 'El docente revisa antes de usar o guardar; la publicación oficial exige aprobación.',
      },
      {
        k: 'Controles',
        v: 'Validación estructurada, control de calidad de salida y matriz de formatos compatibles.',
      },
      {
        k: 'Retención',
        v: 'Recursos y versiones quedan en la biblioteca; las vistas previas vencen en 7 días.',
      },
    ],
  },
  {
    name: 'Borrador a familias',
    tag: 'AENA · Comunicación',
    rows: [
      {
        k: 'Qué hace',
        v: 'Prepara un borrador de mensaje a una familia sobre asistencia, rendimiento o conducta. No envía nada.',
      },
      { k: 'Proveedor', v: 'Claude (Anthropic) por defecto; OpenAI seleccionable y evaluado.' },
      {
        k: 'Revisión humana',
        v: 'El personal revisa y edita; la familia recibe el mensaje solo tras envío humano.',
      },
      {
        k: 'Controles',
        v: 'Tono institucional en español, cero invenciones; la lectura financiera exige permiso.',
      },
      { k: 'Retención', v: 'El borrador no se guarda solo; queda solo si el personal lo copia o envía.' },
    ],
  },
  {
    name: 'Tesorería',
    tag: 'IPUPY · Contabilidad',
    rows: [
      {
        k: 'Qué hace',
        v: 'Lee informes desde fotos, sugiere categorías contables, asiste la conciliación y explica anomalías.',
      },
      {
        k: 'Revisión humana',
        v: 'Cada sugerencia la confirma un tesorero; la IA no aplica cambios por su cuenta.',
      },
      {
        k: 'Controles',
        v: 'Cada sugerencia trae su nivel de confianza; instrucciones versionadas; panel de ejecuciones y errores.',
      },
      { k: 'Acceso', v: 'Controlado en la base de datos: cada persona ve solo lo de su rol.' },
    ],
  },
] as const;

export default function IaGobernadaPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 md:px-8">
        <p className="label-caps settle mb-6">IA gobernada</p>
        <h1 className="display display-hero settle settle-2 max-w-3xl">
          La IA propone. La persona decide.
        </h1>
        <p className="settle settle-3 mt-8 max-w-xl font-sans text-base leading-relaxed text-gray-600">
          En las instituciones que ABN opera, la inteligencia artificial no toma decisiones ni
          reemplaza criterio. Entra dentro del flujo, con trazabilidad y revisión humana, para
          devolver tiempo sin ceder control.
        </p>
        <p className="settle settle-4 mt-12">
          <Link href="#produccion" className="link-quiet font-sans text-base">
            Cómo se ve en producción
          </Link>
        </p>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8" aria-label="Principios">
        <p className="label-caps mb-10 border-t border-gray-200 pt-12">Seis principios, escritos en el código</p>
        <ol className="border-t border-gray-200">
          {principles.map((p) => (
            <li
              key={p.num}
              className="grid gap-1 border-b border-gray-200 py-6 md:grid-cols-[3rem_1fr] md:gap-8"
            >
              <span className="font-mono text-xs text-gray-500">{p.num}</span>
              <div>
                <h2 className="font-sans text-base font-semibold text-gray-900">{p.title}</h2>
                <p className="mt-2 max-w-2xl font-sans text-base leading-relaxed text-gray-600">
                  {p.line}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* In production */}
      <section
        id="produccion"
        className="mx-auto max-w-6xl px-4 pb-24 md:px-8"
        aria-label="En producción"
      >
        <p className="label-caps mb-10">En producción, hoy</p>
        <div className="grid gap-12 md:grid-cols-2">
          {proof.map((m) => (
            <div key={m.label}>
              <p className="display display-num">{m.num}</p>
              <p className="label-caps mt-3">{m.label}</p>
              <p className="mt-2 font-sans text-base text-gray-600">{m.detail}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-2xl font-sans text-base leading-relaxed text-gray-600">
          Cuatro asistentes en AENA y los servicios de tesorería de IPUPY. En cada uno, la IA
          prepara; la persona autorizada decide.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {systems.map((s) => (
            <article key={s.name} className="card p-6 md:p-8">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-sans text-base font-semibold text-gray-900">{s.name}</h3>
                <span className="label-caps">{s.tag}</span>
              </div>
              <dl className="mt-6 space-y-4">
                {s.rows.map((r) => (
                  <div key={r.k}>
                    <dt className="label-caps mb-1">{r.k}</dt>
                    <dd className="font-sans text-base leading-relaxed text-gray-600">{r.v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-gray-600">
          La herramienta usada se muestra en pantalla, y ningún servicio se activa sin evaluación
          previa.
        </p>
      </section>

      {/* Pull quote */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-8">
        <blockquote className="max-w-2xl border-l-2 border-accent pl-6 font-sans text-base leading-relaxed text-gray-700">
          La inteligencia artificial no nos ahorra la responsabilidad de administrar bien. La
          ordena, la documenta y la deja a la vista.
        </blockquote>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-32 md:px-8">
        <div className="flex flex-col items-start gap-6 border-t border-gray-200 pt-12">
          <p className="max-w-xl font-sans text-base text-gray-600">
            Si querés ver cómo se aplicaría esto en tu institución, el primer paso es un
            diagnóstico.
          </p>
          <Link href="/contacto" className="btn-primary">
            Agendar un diagnóstico
          </Link>
        </div>
      </section>
    </>
  );
}
