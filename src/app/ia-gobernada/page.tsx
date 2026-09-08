import { PageIntro, ContactClose } from '../PageLayout';
import { pageMetadata } from '../page-metadata';
import Link from 'next/link';

export const metadata = pageMetadata('IA gobernada', 'IA integrada en tus procesos: fuentes propias, tareas definidas, permisos y revisión humana para apoyar el trabajo y las decisiones.', '/ia-gobernada');

const principles = [
  {
    title: 'El contexto de tu organización.',
    text: 'Las fuentes, los documentos y los datos pertinentes forman parte de la tarea. Una consulta de cobros necesita un periodo y unos registros concretos; un material de formación necesita sus fuentes y criterios editoriales.',
  },
  {
    title: 'Una tarea con límites.',
    text: 'Definimos qué puede consultar y producir cada función. El sistema comprueba los permisos de la persona y valida la respuesta antes de incorporarla al flujo de trabajo.',
  },
  {
    title: 'Instrucciones que se pueden revisar.',
    text: 'Las instrucciones y sus versiones permiten ajustar una función con criterio y evaluar sus resultados. La configuración depende del proceso y de la organización.',
  },
  {
    title: 'La aprobación tiene un responsable.',
    text: 'La IA puede resumir información, sugerir una categoría o preparar un borrador. Las personas autorizadas revisan las propuestas y aprueban los registros y las acciones oficiales.',
  },
] as const;

const examples = [
  {
    name: 'Consultar indicadores para decidir',
    tag: 'AENA · Gestión',
    task: 'Relacionar una pregunta con los indicadores y registros que la persona tiene permiso para consultar.',
    control: 'La respuesta se limita a los registros y al periodo consultados. El sistema contrasta la explicación con los resultados y puede rechazar consultas sin fuentes disponibles.',
  },
  {
    name: 'Clasificar movimientos contables',
    tag: 'IPU Paraguay · Tesorería',
    task: 'Sugerir una categoría a partir del movimiento y del catálogo contable autorizado.',
    control: 'Las sugerencias respetan el tipo de movimiento y el ámbito de acceso. La persona revisa la categoría antes de incorporarla al registro.',
  },
  {
    name: 'Preparar material con fuentes propias',
    tag: 'Aula · Formación',
    task: 'Usar documentos del curso, contexto institucional e instrucciones publicadas para preparar borradores.',
    control: 'Las fuentes y la configuración pertenecen a la organización y al curso. El material pasa por el flujo de revisión y aprobación correspondiente.',
  },
] as const;

export default function IaGobernadaPage() {
  return (
    <>
      <PageIntro label="IA gobernada" title="Cómo uso la IA en los sistemas.">
        <p>Uso la IA para tareas concretas: consultar información, preparar borradores o sugerir categorías. Para cada función definimos qué fuentes puede usar, qué permisos necesita y quién revisa el resultado.</p>
        <Link href="#ejemplos" className="link-quiet mt-6 inline-block">Ver ejemplos</Link>
      </PageIntro>
      <section className="page-container page-section" aria-label="Cómo se gobierna">
        <ol className="space-y-8">
          {principles.map((principle, index) => (
            <li key={principle.title} className="grid gap-3 md:grid-cols-[3rem_1fr] md:gap-8">
              <span className="label-caps">0{index + 1}</span>
              <div>
                <h2 className="font-sans text-base font-semibold">{principle.title}</h2>
                <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-gray-600">{principle.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="teal-band" aria-label="Responsabilidad">
        <div className="page-container grid gap-8 py-16 md:py-20 md:grid-cols-2">
          <h2 className="display section-title">La IA propone.<br />La persona decide.</h2>
          <p className="font-sans text-base leading-relaxed text-brand-cream">
            El sistema conserva las reglas de la operación. Una sugerencia no cambia
            una cuenta, publica un plan o envía un mensaje por sí sola. La decisión
            oficial corresponde a la persona autorizada.
          </p>
        </div>
      </section>
      <section id="ejemplos" className="page-container pt-16 md:pt-20" aria-labelledby="examples-title">
        <p className="label-caps mb-6">Ejemplos de uso</p>
        <h2 id="examples-title" className="display section-title">Qué ayuda a resolver.</h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {examples.map((example) => (
            <article key={example.name}>
              <p className="label-caps mb-4">{example.tag}</p>
              <h3 className="font-sans text-base font-semibold">{example.name}</h3>
              <p className="mt-4 font-sans text-base leading-relaxed text-gray-600">{example.task}</p>
              <p className="mt-4 font-sans text-base leading-relaxed text-gray-600">{example.control}</p>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-2xl font-sans text-base leading-relaxed text-gray-600">
          Las funciones se definen según los datos disponibles, los permisos y las
          prioridades de cada organización. Empezamos por una tarea que se pueda
          evaluar y revisar.
        </p>
      </section>
      <ContactClose title="¿En qué tarea necesitas ayuda?">Cuéntame qué tarea tienes en mente. Revisaremos qué información necesita y cómo comprobar si la IA aporta algo útil.</ContactClose>
    </>
  );
}
