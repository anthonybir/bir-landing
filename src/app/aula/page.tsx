import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '../CTABanner';

export const metadata: Metadata = {
  title: 'AULA | Plataforma de Planificación Académica con IA — ABN',
  description: 'AULA: motor de planificación académica con IA + contexto institucional. Para colegios, seminarios e instituciones educativas en Latinoamérica.',
};

export default function AulaPage() {
  return (
    <>
      {/* Hero */}
      <section className="dark-section px-6 md:px-12 pt-24 pb-20 md:pt-32 md:pb-28 bg-foreground text-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl fade-in">
            <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
              Plataforma AULA
            </p>
            <div className="w-12 h-px bg-[#C7A54A]/50 mb-8" />
            <h1 className="font-serif font-bold text-4xl md:text-6xl leading-[1.05] tracking-tight mb-6">
              Motor + Contexto = Inteligencia Institucional
            </h1>
            <p className="font-sans font-light text-lg md:text-xl text-background/60 leading-relaxed max-w-2xl mb-4">
              AULA es un motor genérico de planificación académica asistido por IA.
              Su calidad depende de una variable: el contexto institucional.
            </p>
            <p className="font-sans font-light text-lg md:text-xl text-background/40 leading-relaxed max-w-2xl mb-10">
              ABN construye ese contexto. El motor sin contexto es commodity.
              El motor con tu contexto es inteligencia institucional.
            </p>
            <a
              href="/#contacto"
              className="btn-primary font-sans inline-flex items-center justify-center gap-2 bg-background text-foreground px-6 py-3 rounded-sm font-medium hover:bg-white"
            >
              Hablemos de tu institución
            </a>
          </div>
        </div>
      </section>

      {/* The Formula */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
              La fórmula
            </p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl line-accent">
              Cómo funciona AULA
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover bg-white p-8 rounded-sm border border-[#1A1A1A]/10">
              <p className="font-sans font-bold text-4xl text-accent/20 leading-none mb-4">01</p>
              <h3 className="font-sans font-semibold text-xl mb-2">ABN documenta tu institución</h3>
              <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                Llegamos a tu institución, auditamos cómo trabajás, documentamos tu
                marco pedagógico, tu currículo, tus rúbricas, tu cultura local.
                Todo eso se convierte en tu contexto institucional.
              </p>
            </div>

            <div className="card-hover bg-white p-8 rounded-sm border-2 border-[#C7A54A]/40 relative">
              <span className="absolute -top-3 right-6 bg-accent text-foreground font-sans text-xs font-medium px-3 py-1 rounded-sm">El diferenciador</span>
              <p className="font-sans font-bold text-4xl text-accent/20 leading-none mb-4">02</p>
              <h3 className="font-sans font-semibold text-xl mb-2">Cargamos tu contexto en AULA</h3>
              <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                Tu contexto institucional alimenta el motor. Desde ese momento,
                cada docente genera planificaciones alineadas a TU visión
                — no a una plantilla genérica.
              </p>
            </div>

            <div className="card-hover bg-white p-8 rounded-sm border border-[#1A1A1A]/10">
              <p className="font-sans font-bold text-4xl text-accent/20 leading-none mb-4">03</p>
              <h3 className="font-sans font-semibold text-xl mb-2">Tus docentes generan con calidad</h3>
              <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                Un docente nuevo produce planificaciones de calidad comparable
                a un docente experimentado, en la mitad del tiempo.
                El coordinador revisa menos. La calidad sube.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Markets */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
              Donde opera AULA
            </p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl line-accent">
              Dos mundos, un motor
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-hover bg-background p-8 rounded-sm border border-[#1A1A1A]/10">
              <h3 className="font-sans font-semibold text-xl mb-2">Seminarios teológicos</h3>
              <p className="font-sans text-sm text-accent mb-4">IBA Paraguay y futuros proyectos internacionales</p>
              <p className="font-sans text-foreground/70 leading-relaxed mb-4">
                Sílabos teológicos, planificación de cursos de exégesis,
                doctrina y ministerio práctico. Calificaciones ponderadas,
                asistencia, y paquetes de cumplimiento para sede central.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Ex\u00e9gesis', 'Doctrina', 'Ministerio pr\u00e1ctico', 'GATS/UPCI'].map((tag) => (
                  <span key={tag} className="font-sans text-xs px-3 py-1 bg-foreground/5 rounded-sm text-foreground/50">{tag}</span>
                ))}
              </div>
            </div>

            <div className="card-hover bg-background p-8 rounded-sm border border-[#1A1A1A]/10">
              <h3 className="font-sans font-semibold text-xl mb-2">Colegios K-12</h3>
              <p className="font-sans text-sm text-accent mb-4">Alineados al MEC Paraguay</p>
              <p className="font-sans text-foreground/70 leading-relaxed mb-4">
                Planificaciones semanales y anuales, materiales didácticos,
                evaluaciones, comunicación a padres. Todo alineado a las
                capacidades MEC por materia y grado.
              </p>
              <div className="flex flex-wrap gap-2">
                {['MEC Paraguay', 'K-12', 'Planificaci\u00f3n semanal', 'Materiales'].map((tag) => (
                  <span key={tag} className="font-sans text-xs px-3 py-1 bg-foreground/5 rounded-sm text-foreground/50">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Context Includes */}
      <section className="dark-section px-6 md:px-12 py-20 md:py-28 bg-foreground text-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="font-sans text-sm tracking-widest text-accent mb-6 uppercase">
                El contexto institucional
              </p>
              <h2 className="font-serif font-bold text-3xl md:text-4xl leading-tight mb-6">
                Qué construye ABN para tu institución
              </h2>
              <p className="font-sans text-background/70 leading-relaxed">
                El contexto institucional es el conocimiento profundo de cómo opera
                tu institución: qué valora, cómo evalúa, qué lenguaje usa, qué
                normativas cumple. Sin ese contexto, la IA produce resultados
                genéricos. Con él, produce resultados que tu coordinador aprueba
                sin edición.
              </p>
            </div>
            <div className="space-y-5">
              {[
                { title: 'Marco pedag\u00f3gico', desc: 'Filosof\u00eda educativa, principios no negociables, estructura de clase' },
                { title: 'Pack curricular', desc: 'Capacidades MEC, competencias teol\u00f3gicas, o programa propio' },
                { title: 'Evaluaci\u00f3n', desc: 'Escalas, r\u00fabricas, herramientas, frecuencia, pol\u00edticas' },
                { title: 'Estilos de ense\u00f1anza', desc: 'Paso a paso, pr\u00e1ctico, reflexivo, creativo — o uno propio' },
                { title: 'Integraci\u00f3n cultural', desc: 'Contexto local, idiomas, recursos comunitarios' },
                { title: 'Banco de recursos', desc: 'Proyectos, actividades, patrones pedag\u00f3gicos curados' },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-[#C7A54A] pl-6">
                  <h3 className="font-sans font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="font-sans text-xs text-background/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
            Resultados
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-12">
            Probado en producción
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6">
              <p className="font-sans font-bold text-3xl text-foreground">AENA</p>
              <p className="font-sans text-sm text-foreground/60 mt-1">Colegio K-12 en producción desde 2024</p>
            </div>
            <div className="p-6">
              <p className="font-sans font-bold text-3xl text-foreground">IBA</p>
              <p className="font-sans text-sm text-foreground/60 mt-1">Seminario teológico — 4 países</p>
            </div>
            <div className="p-6">
              <p className="font-sans font-bold text-3xl text-foreground">IPUPY</p>
              <p className="font-sans text-sm text-foreground/60 mt-1">Tesorería eclesiástica en producción</p>
            </div>
            <div className="p-6">
              <p className="font-sans font-bold text-3xl text-accent">100%</p>
              <p className="font-sans text-sm text-foreground/60 mt-1">Construido y operado internamente</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
