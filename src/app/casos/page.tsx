import Link from 'next/link';
import { PageIntro, ContactClose } from '../PageLayout';
import ProductFigure from '../ProductFigure';
import { pageMetadata } from '../page-metadata';

export const metadata = pageMetadata('Casos', 'AENA, IPU Paraguay e IBA: problemas de gestión, cambios concretos y sistemas construidos para cada operación.', '/casos');

const cases = [
  {
    id: 'aena',
    inst: 'AENA',
    sector: 'Educación · Asociación Educativa Nuevas Alturas',
    antes:
      'En 2020, papel y lápiz, riesgo de cierre por COVID y una morosidad institucional del 70%.',
    ahora:
      'Planificación anual y semanal de inicial a bachillerato, libreta digital, portal de padres y coordinación académica con apoyo de IA y referencias del MEC. Unos 300 alumnos. En producción desde 2024.',
    kpi: { num: '70% → 2,9%', label: 'Morosidad en tres años de dirección directa' },
    img: {
      src: '/screenshots/aena-centro-coordinacion.png',
      alt: 'Centro de Coordinación de AENA Admin: ciclo anual de promoción, alerta temprana y coordinación académica',
      width: 2880,
      height: 1556,
    },
  },
  {
    id: 'ipu-paraguay',
    inst: 'IPU Paraguay',
    sector: 'Tesorería · Iglesia Pentecostal Unida del Paraguay',
    antes:
      'Tesorería fragmentada: cada congregación con su hoja de cálculo, sin consolidación ni trazabilidad.',
    ahora:
      'Contabilidad institucional por partida doble, auditable, con informes por sede y cierre mensual de un día. Unas 30 iglesias. En producción desde 2024.',
    kpi: { num: '1 día', label: 'Cierre mensual consolidado' },
    img: {
      src: '/screenshots/ipupy-dashboard.png',
      alt: 'Control operativo de la red en la tesorería de IPU Paraguay: informes pendientes, resultados del período y cierre de mes',
      width: 2880,
      height: 1624,
    },
  },
  {
    id: 'iba',
    inst: 'IBA',
    sector: 'Editorial · Instituto Bíblico Apostólico',
    antes:
      'Formación pastoral sin estándar común: cada docente con su propio material.',
    ahora:
      'Marco curricular y editorial bajo un solo estándar. Aula organiza cursos, fuentes y preparación de materiales. Los docentes revisan el trabajo antes de su aprobación.',
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
      <PageIntro label="Casos" title="Tres organizaciones. Tres formas de ordenar el trabajo.">
        <p>Dirección escolar, tesorería y formación. Cada caso parte de una operación concreta y conserva sus propias reglas.</p>
      </PageIntro>
      <section className="page-container" aria-label="Casos de trabajo">
        {cases.map((item, index) => (
          <article className="case-study" id={item.id} key={item.id} aria-labelledby={`${item.id}-title`}>
            <div className="case-overview">
              <div>
                <p className="label-caps case-index">0{index + 1} · {item.sector}</p>
                <h2 className="case-name" id={`${item.id}-title`}>{item.inst}</h2>
                <p className="case-result"><strong>{item.kpi.num}</strong><br />{item.kpi.label}</p>
              </div>
              <dl className="case-story">
                <div><dt className="label-caps">El punto de partida</dt><dd>{item.antes}</dd></div>
                <div><dt className="label-caps">Qué cambió</dt><dd>{item.ahora}</dd></div>
              </dl>
            </div>
            <ProductFigure {...item.img} priority={index === 0} />
          </article>
        ))}
      </section>
      <section className="teal-band" aria-label="Sistemas propios">
        <div className="page-container py-16 md:py-20 grid gap-8 md:grid-cols-2">
          <h2 className="display section-title">El sistema responde a la operación.</h2>
          <div className="font-sans text-base leading-relaxed text-brand-cream">
            <p>AENA tiene su sistema de gestión escolar. IPU Paraguay, su sistema de tesorería. Aula organiza el trabajo académico y editorial de formación. Compartimos criterios de diseño y gobierno; cada sistema conserva su alcance.</p>
            <Link href="/aula" className="link-quiet mt-6 inline-block">Conocer Aula</Link>
          </div>
        </div>
      </section>
      <ContactClose title="¿Reconoces alguno de estos problemas?">Cuéntanos cómo trabaja tu organización y qué información necesitas para decidir. El diagnóstico define por dónde empezar.</ContactClose>
    </>
  );
}
