import Link from 'next/link';
import ContactForm from './ContactForm';
import CountUp from './CountUp';
import { WhatsAppIcon, WHATSAPP_URL } from './WhatsAppFloat';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Agencia Bir Nuñez',
  alternateName: 'ABN',
  url: 'https://bir.com.py',
  email: 'anthony@bir.com.py',
  description:
    'Consultoría en transformación institucional. Educación, tecnología y desarrollo institucional en Latinoamérica.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lambaré',
    addressCountry: 'PY',
  },
  foundingDate: '2024',
  knowsLanguage: ['es', 'en'],
};

export default function ABNLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — dark background */}
      <section className="hero-dark px-6 md:px-12 pt-20 pb-28 md:pt-32 md:pb-40">
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl fade-in">
            <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
              Para colegios, seminarios e instituciones en Latinoamérica
            </p>
            <div className="w-12 h-px bg-[#C7A54A]/50 mb-8" />
            <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-tight mb-6">
              <span className="hero-word">Estructura</span>
              <span className="hero-word">donde</span>
              <span className="hero-word">otros</span>
              <span className="hero-word">improvisan</span>
            </h1>
            <p className="font-sans font-light text-lg md:text-2xl text-background/60 leading-relaxed max-w-2xl mb-10">
              Consultoría institucional con tecnología propia.
              Diseñamos sistemas para que la institución marque el estándar
              y la tecnología lo ejecute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-sans inline-flex items-center justify-center gap-2 bg-background text-foreground px-6 py-3 rounded-sm font-medium hover:bg-white"
              >
                <WhatsAppIcon />
                Escribinos por WhatsApp
              </a>
              <Link
                href="/nosotros"
                className="btn-outline font-sans inline-flex items-center justify-center gap-2 text-sm font-medium border-2 border-[#F5F3EE]/30 text-background px-6 py-3 rounded-sm hover:bg-background hover:text-foreground"
              >
                Conocer el equipo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Stats */}
      <section className="hero-shadow relative px-6 md:px-12 py-14 md:py-16 bg-white border-y border-[#1A1A1A]/10 overflow-hidden">
        <div className="proof-background" aria-hidden="true" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center relative">
            <div className="proof-card">
              <p className="font-sans font-bold text-3xl md:text-4xl text-foreground"><CountUp value="3" /></p>
              <p className="font-sans text-sm text-foreground/60 mt-1">Sistemas propios en producción</p>
            </div>
            <div className="proof-card">
              <p className="font-sans font-bold text-3xl md:text-4xl text-foreground"><CountUp value="4" /></p>
              <p className="font-sans text-sm text-foreground/60 mt-1">Países con instituciones activas</p>
            </div>
            <div className="proof-card">
              <p className="font-sans font-bold text-3xl md:text-4xl text-foreground"><CountUp value="20+" /></p>
              <p className="font-sans text-sm text-foreground/60 mt-1">Años de experiencia institucional</p>
            </div>
            <div className="proof-card">
              <p className="font-sans font-bold text-3xl md:text-4xl text-accent"><CountUp value="100%" /></p>
              <p className="font-sans text-sm text-foreground/60 mt-1">Construido y operado internamente</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Teaser Cards — Links to subpages */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/servicios" className="group card-hover bg-white p-8 rounded-sm border border-[#1A1A1A]/10">
              <div className="w-12 h-12 bg-foreground rounded-sm flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-xl mb-2">Servicios</h3>
              <p className="font-sans text-sm text-foreground/60 mb-4">
                Plataforma AULA, diagnóstico institucional, implementación y acompañamiento integral.
              </p>
              <span className="font-sans text-sm font-medium text-accent group-hover:underline inline-flex items-center gap-1">
                Ver servicios
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>

            <Link href="/casos" className="group card-hover bg-white p-8 rounded-sm border border-[#1A1A1A]/10">
              <div className="w-12 h-12 bg-foreground rounded-sm flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-xl mb-2">Casos Reales</h3>
              <p className="font-sans text-sm text-foreground/60 mb-4">
                AENA Admin, IBA Paraguay e IPUPY Tesorería — sistemas en producción que usamos y ofrecemos.
              </p>
              <span className="font-sans text-sm font-medium text-accent group-hover:underline inline-flex items-center gap-1">
                Ver casos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>

            <Link href="/nosotros" className="group card-hover bg-white p-8 rounded-sm border border-[#1A1A1A]/10">
              <div className="w-12 h-12 bg-foreground rounded-sm flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-xl mb-2">Nosotros</h3>
              <p className="font-sans text-sm text-foreground/60 mb-4">
                Junta directiva con experiencia corporativa, misionera y pedagógica.
              </p>
              <span className="font-sans text-sm font-medium text-accent group-hover:underline inline-flex items-center gap-1">
                Conocer el equipo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Motor Teaser — AULA */}
      <section className="dark-section px-6 md:px-12 py-20 md:py-28 bg-foreground text-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
              Plataforma AULA
            </p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl leading-tight mb-6">
              Un motor. Tu contexto.<br />
              <span className="text-accent">Inteligencia institucional.</span>
            </h2>
            <p className="font-sans text-background/70 leading-relaxed mb-4">
              AULA es un motor de planificación académica asistido por IA cuya
              calidad depende de una variable: el contexto institucional. ABN construye
              ese contexto. El motor sin contexto es genérico. El motor con tu contexto
              produce resultados que suenan a tu institución.
            </p>
            <p className="font-sans text-background/50 text-sm leading-relaxed mb-8">
              Operando en Paraguay. Expandiendo a Brasil, Argentina y Ecuador
              a través de la red IBA.
            </p>
            <Link
              href="/aula"
              className="font-sans text-sm font-medium text-accent hover:underline inline-flex items-center gap-2"
            >
              Conocer la plataforma AULA
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 md:px-12 py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="font-sans text-sm tracking-widest text-accent mb-6 uppercase">
                Nuestra Filosofía
              </p>
              <h2 className="font-serif font-bold text-3xl md:text-4xl leading-tight mb-6">
                Sistemas que controlan la IA — no al revés
              </h2>
              <p className="font-sans text-foreground/70 leading-relaxed max-w-xl">
                La IA es una herramienta poderosa, pero sin estructura institucional
                produce resultados aleatorios. Traemos metodologías de corporaciones
                globales (Heinz, Kontron, Thermo Fisher) al contexto de colegios,
                seminarios e instituciones en Latinoamérica — diseñando sistemas
                donde la institución define el estándar y la tecnología lo ejecuta
                a escala.
              </p>
            </div>
            <div className="space-y-6 scroll-reveal-right">
              <div className="border-l-2 border-[#C7A54A] pl-6">
                <h3 className="font-sans font-semibold text-xl mb-2">La institución manda, la IA obedece</h3>
                <p className="font-sans text-sm text-foreground/60">
                  Vos definís el estándar de aprendizaje. La IA genera los materiales dentro de ese marco.
                </p>
              </div>
              <div className="border-l-2 border-[#C7A54A] pl-6">
                <h3 className="font-sans font-semibold text-xl mb-2">Estructura, no dependencia</h3>
                <p className="font-sans text-sm text-foreground/60">
                  Sistemas que funcionan cuando los consultores se van y cuando la IA cambia.
                </p>
              </div>
              <div className="border-l-2 border-[#C7A54A] pl-6">
                <h3 className="font-sans font-semibold text-xl mb-2">Contexto local, plataforma regional</h3>
                <p className="font-sans text-sm text-foreground/60">
                  Cada institución es única. AULA se adapta al contexto de cada país y cada realidad educativa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section px-6 md:px-12 py-16 bg-light-gray border-y border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-4">
            ¿Necesitás transformar tu institución?
          </h2>
          <p className="font-sans text-foreground/70 mb-6 max-w-2xl mx-auto">
            Si ya sabés que Excel, WhatsApp y decisiones improvisadas no
            alcanzan, conversemos. Te ayudamos a ordenar primero y escalar
            después.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-sans inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-sm font-medium hover:bg-foreground/90"
            >
              <WhatsAppIcon />
              Escribinos por WhatsApp
            </a>
            <a
              href="#contacto"
              className="btn-outline font-sans inline-flex items-center justify-center gap-2 text-sm font-medium border-2 border-[#1A1A1A] px-8 py-4 rounded-sm hover:bg-foreground hover:text-background"
            >
              Enviar mensaje
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="px-6 md:px-12 py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="font-sans text-sm tracking-widest text-accent mb-6 uppercase">
                Contacto
              </p>
              <h2 className="font-serif font-bold text-3xl md:text-4xl leading-tight mb-6 line-accent">
                Conversemos sobre tu institución
              </h2>
              <p className="font-sans text-foreground/70 leading-relaxed mt-4">
                Cada proyecto comienza con una conversación. Contanos sobre
                tu institución y los desafíos que enfrentás. Respondemos
                normalmente dentro de 48 horas hábiles.
              </p>
              <div className="mt-8 font-sans text-sm text-foreground/60">
                <p>Lambaré, Paraguay</p>
                <p className="mt-1">anthony@bir.com.py</p>
              </div>
            </div>

            <div className="form-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
