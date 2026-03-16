import Image from 'next/image';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import CountUp from './CountUp';

const WHATSAPP_NUMBER = '595991402548';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me interesa conocer más sobre los servicios de ABN.')}`;

const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Agencia Bir Nuñez',
  alternateName: 'ABN',
  url: 'https://bir.com.py',
  email: 'anthony@bir.com.py',
  description:
    'Agencia familiar en transformación institucional. Educación, tecnología, derecho de niñez, y gestión financiera en Paraguay.',
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
    <div className="min-h-screen bg-background text-foreground page-enter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <NavBar />

      <main>
      {/* Hero — dark background */}
      <section className="hero-dark px-6 md:px-12 pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl fade-in">
            <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
              Para colegios, ONGs e iglesias en Paraguay
            </p>
            <div className="w-12 h-px bg-[#C7A54A]/50 mb-8" />
            <h1 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-tight mb-6">
              <span className="hero-word">Estructura</span>
              <span className="hero-word">donde</span>
              <span className="hero-word">otros</span>
              <span className="hero-word">improvisan</span>
            </h1>
            <p className="font-sans font-light text-lg md:text-xl text-background/60 leading-relaxed max-w-2xl mb-10">
              Agencia familiar con cuatro divisiones especializadas.
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
              <a
                href="#divisiones"
                className="btn-outline font-sans inline-flex items-center justify-center gap-2 text-sm font-medium border-2 border-[#F5F3EE]/30 text-background px-6 py-3 rounded-sm hover:bg-background hover:text-foreground"
              >
                Conocer divisiones
              </a>
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
              <p className="font-sans font-bold text-3xl md:text-4xl text-foreground"><CountUp value="2" /></p>
              <p className="font-sans text-sm text-foreground/60 mt-1">Sistemas propios en producción</p>
            </div>
            <div className="proof-card">
              <p className="font-sans font-bold text-3xl md:text-4xl text-foreground"><CountUp value="20+" /></p>
              <p className="font-sans text-sm text-foreground/60 mt-1">Años de experiencia institucional</p>
            </div>
            <div className="proof-card">
              <p className="font-sans font-bold text-3xl md:text-4xl text-foreground"><CountUp value="4" /></p>
              <p className="font-sans text-sm text-foreground/60 mt-1">Divisiones bajo un mismo equipo</p>
            </div>
            <div className="proof-card">
              <p className="font-sans font-bold text-3xl md:text-4xl text-accent"><CountUp value="100%" /></p>
              <p className="font-sans text-sm text-foreground/60 mt-1">Construido y operado internamente</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* AI Motor — Editorial AENA */}
      <section className="dark-section px-6 md:px-12 py-24 md:py-32 bg-foreground text-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Copy */}
            <div className="scroll-reveal-left">
              <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
                Nuestro Motor de IA
              </p>
              <h2 className="font-sans font-bold text-3xl md:text-4xl leading-tight mb-6">
                Tus docentes ya usan IA.<br />
                <span className="text-accent">¿Quién define el estándar?</span>
              </h2>
              <p className="font-sans text-background/70 leading-relaxed mb-8">
                Hoy cada docente genera sus planes con ChatGPT de forma improvisada
                — sin criterio institucional, sin alineación al MEC, sin coherencia
                entre grados. Editorial AENA invierte esa lógica: la institución
                define el estándar de aprendizaje, y la IA lo personaliza para cada
                aula. Capacidades MEC, contexto local de tu colegio, planes anuales
                y semanales — todo generado bajo una línea institucional consistente.
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <span className="font-sans font-bold text-4xl text-accent/20 leading-none shrink-0 mt-0.5">01</span>
                  <div>
                    <p className="font-sans font-medium text-sm">La institución configura su estándar</p>
                    <p className="font-sans text-xs text-background/50">Capacidades MEC + contexto local + filosofía pedagógica del colegio</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-sans font-bold text-4xl text-accent/20 leading-none shrink-0 mt-0.5">02</span>
                  <div>
                    <p className="font-sans font-medium text-sm">La IA genera planes y 6 materiales por semana</p>
                    <p className="font-sans text-xs text-background/50">Texto base, ficha, evaluación, comunicado, guía, y rúbrica — alineados al estándar</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-sans font-bold text-4xl text-accent/20 leading-none shrink-0 mt-0.5">03</span>
                  <div>
                    <p className="font-sans font-medium text-sm">El docente revisa, ajusta, imprime</p>
                    <p className="font-sans text-xs text-background/50">DOCX y PDF listos — el docente aporta su criterio, no su fin de semana</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Texto base', 'Ficha de trabajo', 'Evaluación', 'Comunicación a padres', 'Guía de cuaderno', 'Rúbrica'].map((tag) => (
                  <span
                    key={tag}
                    className="capability-tag font-sans text-xs px-3 py-1.5 bg-background/10 rounded-sm text-background/70 border border-[#F5F3EE]/10 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshot */}
            <div className="scroll-reveal-right">
              <div className="rounded-lg overflow-hidden shadow-2xl border border-[#F5F3EE]/10">
                <div className="browser-chrome">
                  <div className="dot" /><div className="dot" /><div className="dot" />
                </div>
                <Image
                  src="/screenshots/editorial-aena.png"
                  alt="Editorial AENA — Hub de generación de materiales educativos con IA"
                  width={2814}
                  height={1808}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <p className="font-sans text-xs text-background/30 mt-4 text-center">
                Editorial AENA — Planes y materiales generados bajo estándar institucional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions / Services */}
      <section id="divisiones" className="px-6 md:px-12 py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="mb-16">
            <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
              Nuestras Divisiones
            </p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl line-accent">Cuatro áreas, una familia</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technology Division */}
            <div className="card-hover bg-foreground text-background p-8 md:p-10 rounded-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-background rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest text-accent uppercase">División</p>
                  <h3 className="font-sans font-semibold text-2xl">Sistemas & Tecnología</h3>
                </div>
              </div>
              <p className="font-sans text-sm text-background/60 mb-4">Director: Anthony Bir</p>
              <p className="font-sans text-background/70 leading-relaxed mb-6">
                Aplicaciones a medida para organizaciones que superaron Excel
                pero no necesitan software empresarial. Nuestro motor de IA
                genera planes y materiales bajo el criterio que define la institución.
              </p>
              <ul className="font-sans text-sm space-y-2 text-background/60">
                <li>• Sistemas de gestión escolar</li>
                <li>• Motor de IA con estándar institucional</li>
                <li>• Plataformas de tesorería</li>
                <li>• Dashboards administrativos</li>
              </ul>
            </div>

            {/* Education Division */}
            <div className="card-hover bg-background p-8 md:p-10 rounded-sm border border-[#1A1A1A]/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-foreground rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest text-accent uppercase">División</p>
                  <h3 className="font-sans font-semibold text-2xl">Transformación Educativa</h3>
                </div>
              </div>
              <p className="font-sans text-sm text-foreground/60 mb-4">Directora: Diana Nuñez de Bir</p>
              <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                Rediseño curricular, marcos de evaluación accesibles, y la línea
                pedagógica que alimenta nuestro motor de IA — para que cada
                docente trabaje dentro de un criterio coherente definido por la institución.
              </p>
              <ul className="font-sans text-sm space-y-2 text-foreground/60">
                <li>• Diagnóstico institucional</li>
                <li>• Línea pedagógica institucional</li>
                <li>• Diseño de rúbricas y evaluación</li>
                <li>• Cumplimiento MEC Paraguay</li>
              </ul>
            </div>

            {/* Legal Division */}
            <div className="card-hover bg-background p-8 md:p-10 rounded-sm border border-[#1A1A1A]/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-foreground rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest text-accent uppercase">División</p>
                  <h3 className="font-sans font-semibold text-2xl">Derecho de Niñez</h3>
                </div>
              </div>
              <p className="font-sans text-sm text-foreground/60 mb-4">Directora: Danae Bir Nuñez</p>
              <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                Asesoría legal especializada en protección de niñez y adolescencia,
                protocolos institucionales, y cumplimiento normativo.
              </p>
              <ul className="font-sans text-sm space-y-2 text-foreground/60">
                <li>• Asesoría CODENI</li>
                <li>• Protocolos institucionales</li>
                <li>• Relación familia-escuela</li>
                <li>• Cumplimiento normativo</li>
              </ul>
            </div>

            {/* Financial Division */}
            <div className="card-hover bg-background p-8 md:p-10 rounded-sm border border-[#1A1A1A]/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-foreground rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest text-accent uppercase">División</p>
                  <h3 className="font-sans font-semibold text-2xl">Gestión Financiera</h3>
                </div>
              </div>
              <p className="font-sans text-sm text-foreground/60 mb-4">Directora: Stephanie Bir</p>
              <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                Tesorería para ONGs, sistemas contables, y auditoría para
                instituciones educativas y organizaciones sin fines de lucro.
              </p>
              <ul className="font-sans text-sm space-y-2 text-foreground/60">
                <li>• Tesorería ONG</li>
                <li>• Sistemas contables</li>
                <li>• Auditoría educativa</li>
                <li>• Rendición de cuentas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Cases / Social Proof */}
      <section id="casos" className="px-6 md:px-12 py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="mb-16">
            <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
              Casos Reales
            </p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl line-accent">Sistemas que construimos y usamos</h2>
          </div>

          <div className="space-y-20">
            {/* AENA Case */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="scroll-reveal-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 stat-card rounded-sm flex items-center justify-center">
                    <span className="text-background font-sans font-semibold text-xl">A</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-xl">AENA Admin</h3>
                    <p className="font-sans text-sm text-foreground/60">Sistema de Gestión Escolar</p>
                  </div>
                </div>
                <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                  Plataforma integral para administración escolar: matrículas,
                  calificaciones, asistencia, gestión docente, y reportes al MEC
                  — con un motor de IA que genera materiales bajo el estándar institucional, no al criterio individual de cada docente.
                </p>
                <ul className="font-sans text-sm space-y-2 text-foreground/60">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    En producción desde 2024
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Generación de materiales semanales con IA
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Alineado al programa oficial del MEC Paraguay
                  </li>
                </ul>
                <a href="#contacto" className="link-arrow font-sans text-sm font-medium text-accent mt-6 hover:underline">
                  Consultá sobre AENA Admin
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>
              </div>
              <div className="scroll-reveal-right rounded-lg overflow-hidden shadow-xl border border-[#1A1A1A]/10">
                <div className="browser-chrome">
                  <div className="dot" /><div className="dot" /><div className="dot" />
                </div>
                <Image
                  src="/screenshots/aena-dashboard.png"
                  alt="AENA Admin — Dashboard con asistencia por grado"
                  width={2842}
                  height={1794}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* IPUPY Case */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 stat-card rounded-sm flex items-center justify-center">
                    <span className="text-background font-sans font-semibold text-xl">I</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-xl">IPUPY Tesorería</h3>
                    <p className="font-sans text-sm text-foreground/60">Sistema de Gestión Financiera</p>
                  </div>
                </div>
                <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                  Plataforma de tesorería para organización eclesiástica:
                  control de ingresos/egresos, reportes financieros,
                  gestión de múltiples congregaciones, y auditoría transparente.
                </p>
                <ul className="font-sans text-sm space-y-2 text-foreground/60">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    En producción desde 2024
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Rendición de cuentas multi-nivel
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Gobernanza eclesiástica transparente
                  </li>
                </ul>
                <a href="#contacto" className="link-arrow font-sans text-sm font-medium text-accent mt-6 hover:underline">
                  Consultá sobre IPUPY
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>
              </div>
              <div className="scroll-reveal-left rounded-lg overflow-hidden shadow-xl border border-[#1A1A1A]/10 md:order-1">
                <div className="browser-chrome">
                  <div className="dot" /><div className="dot" /><div className="dot" />
                </div>
                <Image
                  src="/screenshots/ipupy-dashboard.png"
                  alt="IPUPY Tesorería — Dashboard financiero con ingresos y métricas"
                  width={2846}
                  height={1822}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Packages */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="mb-16">
            <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
              Formas de trabajo
            </p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl line-accent">Cómo empezamos y cómo escalamos</h2>
            <p className="font-sans text-foreground/70 leading-relaxed max-w-3xl mt-6">
              No vendemos una caja cerrada. Empezamos con un diagnóstico claro,
              definimos una hoja de ruta y ejecutamos por fases según el nivel
              de madurez de tu institución.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Institutional Package */}
            <div className="card-hover engagement-card bg-background p-8 rounded-sm border border-[#1A1A1A]/10">
              <p className="engagement-step">01</p>
              <h3 className="font-sans font-semibold text-xl mb-2">Diagnóstico Institucional</h3>
              <p className="font-sans text-sm text-accent mb-4">Para colegios, ONGs e iglesias que necesitan ordenar primero</p>
              <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                Auditamos operación, estructura y puntos de riesgo para definir
                qué conviene resolver ahora, qué puede esperar y qué sistema
                hace falta construir.
              </p>
              <ul className="font-sans text-sm space-y-2 text-foreground/60">
                <li>• Diagnóstico operativo e institucional</li>
                <li>• Priorización de riesgos y cuellos de botella</li>
                <li>• Recomendación por división</li>
                <li>• Hoja de ruta inicial</li>
              </ul>
            </div>

            {/* ONG Package — Recommended */}
            <div className="card-hover engagement-card bg-background p-8 rounded-sm border-2 border-[#C7A54A]/40 relative">
              <span className="engagement-badge">Más común</span>
              <p className="engagement-step">02</p>
              <h3 className="font-sans font-semibold text-xl mb-2">Implementación por Frente</h3>
              <p className="font-sans text-sm text-accent mb-4">Para instituciones que ya saben qué problema quieren resolver</p>
              <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                Ejecutamos una división o combinamos varias: educación,
                tecnología, derecho de la niñez o gestión financiera, con un
                alcance definido y responsables claros.
              </p>
              <ul className="font-sans text-sm space-y-2 text-foreground/60">
                <li>• Proyecto por división o por problema</li>
                <li>• Alcance, entregables y responsables definidos</li>
                <li>• Implementación escalonada</li>
                <li>• Capacitación del equipo interno</li>
              </ul>
            </div>

            {/* Consulting */}
            <div className="card-hover engagement-card bg-background p-8 rounded-sm border border-[#1A1A1A]/10">
              <p className="engagement-step">03</p>
              <h3 className="font-sans font-semibold text-xl mb-2">Acompañamiento Integral</h3>
              <p className="font-sans text-sm text-accent mb-4">Para instituciones que necesitan ejecución continua y coordinación central</p>
              <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                Coordinamos varias divisiones sobre una misma hoja de ruta para
                que la institución avance sin fragmentarse entre proveedores,
                planillas y decisiones aisladas.
              </p>
              <ul className="font-sans text-sm space-y-2 text-foreground/60">
                <li>• Dirección transversal del proyecto</li>
                <li>• Varias divisiones trabajando sobre la misma prioridad</li>
                <li>• Seguimiento y ajustes continuos</li>
                <li>• Un solo equipo responsable del avance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="dark-section px-6 md:px-12 py-24 md:py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="font-sans text-sm tracking-widest text-accent mb-6 uppercase">
                Nuestra Filosofía
              </p>
              <h2 className="font-sans font-bold text-3xl md:text-4xl leading-tight mb-6">
                Sistemas que controlan la IA — no al revés
              </h2>
              <p className="font-sans text-background/70 leading-relaxed">
                La IA es una herramienta poderosa, pero sin estructura institucional
                produce resultados aleatorios. Traemos metodologías de corporaciones
                globales (Heinz, Thermo Fisher) al contexto de escuelas, iglesias
                y ONGs en Paraguay — diseñando sistemas donde la institución define
                el estándar y la tecnología lo ejecuta a escala.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-[#C7A54A] pl-6">
                <h3 className="font-sans font-semibold text-xl mb-2">La institución manda, la IA obedece</h3>
                <p className="font-sans text-sm text-background/60">
                  Vos definís el estándar de aprendizaje. La IA genera los materiales dentro de ese marco.
                </p>
              </div>
              <div className="border-l-2 border-[#C7A54A] pl-6">
                <h3 className="font-sans font-semibold text-xl mb-2">Estructura, no dependencia</h3>
                <p className="font-sans text-sm text-background/60">
                  Sistemas que funcionan cuando los consultores se van y cuando la IA cambia.
                </p>
              </div>
              <div className="border-l-2 border-[#C7A54A] pl-6">
                <h3 className="font-sans font-semibold text-xl mb-2">Contexto paraguayo, escala global</h3>
                <p className="font-sans text-sm text-background/60">
                  20+ años diseñando para la realidad local con herramientas de clase mundial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Team */}
      <section id="equipo" className="px-6 md:px-12 py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="mb-16">
            <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
              Quiénes Somos
            </p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl line-accent">Una agencia familiar</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-16">
            <div className="font-sans text-foreground/70 leading-relaxed space-y-4">
              <p>
                ABN nace de la convergencia de trayectorias: experiencia corporativa
                internacional, dos décadas de servicio pastoral y educativo en Paraguay,
                y la visión compartida de una familia comprometida con el desarrollo
                institucional.
              </p>
              <p>
                Trabajamos con instituciones que entienden que la excelencia operativa
                y los valores humanos no son opuestos, sino complementarios.
              </p>
            </div>
            <div className="font-sans text-foreground/70 leading-relaxed space-y-4">
              <p>
                Cada sistema que ofrecemos lo usamos nosotros primero. AENA Admin
                gestiona nuestra propia institución educativa — incluyendo el motor
                de IA que genera planes y materiales bajo nuestro criterio
                institucional, no el de ChatGPT. IPUPY Tesorería administra
                las finanzas de nuestra organización eclesiástica.
              </p>
              <p className="text-foreground font-medium">
                Creemos que la IA funciona cuando la institución le pone los límites.
                Lo probamos en nuestra propia realidad todos los días.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-foreground rounded-sm flex items-center justify-center mx-auto mb-4 team-avatar">
                <span className="text-background font-sans font-semibold text-2xl">AB</span>
              </div>
              <h3 className="font-sans font-semibold text-lg">Anthony Bir</h3>
              <p className="font-sans text-sm text-foreground/60">Director General & Sistemas</p>
              <p className="font-sans text-xs text-foreground/40 mt-1">Ex-Heinz, Thermo Fisher. Arquitecto de AENA Admin e IPUPY.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-foreground rounded-sm flex items-center justify-center mx-auto mb-4 team-avatar">
                <span className="text-background font-sans font-semibold text-2xl">DN</span>
              </div>
              <h3 className="font-sans font-semibold text-lg">Diana Nuñez de Bir</h3>
              <p className="font-sans text-sm text-foreground/60">Directora de Educación</p>
              <p className="font-sans text-xs text-foreground/40 mt-1">20+ años en educación. Diseña la línea pedagógica institucional.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-foreground rounded-sm flex items-center justify-center mx-auto mb-4 team-avatar">
                <span className="text-background font-sans font-semibold text-2xl">DB</span>
              </div>
              <h3 className="font-sans font-semibold text-lg">Danae Bir Nuñez</h3>
              <p className="font-sans text-sm text-foreground/60">Directora Legal</p>
              <p className="font-sans text-xs text-foreground/40 mt-1">Especialista en derecho de niñez y protocolos institucionales.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-foreground rounded-sm flex items-center justify-center mx-auto mb-4 team-avatar">
                <span className="text-background font-sans font-semibold text-2xl">SB</span>
              </div>
              <h3 className="font-sans font-semibold text-lg">Stephanie Bir</h3>
              <p className="font-sans text-sm text-foreground/60">Directora Financiera</p>
              <p className="font-sans text-xs text-foreground/40 mt-1">Gestión financiera y auditoría para ONGs e instituciones educativas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section px-6 md:px-12 py-16 bg-light-gray border-y border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-sans font-semibold text-2xl md:text-3xl mb-4">
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
              <h2 className="font-sans font-bold text-3xl md:text-4xl leading-tight mb-6 line-accent">
                Conversemos sobre tu institución
              </h2>
              <p className="font-sans text-foreground/70 leading-relaxed mt-12">
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

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </a>

      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C7A54A]/40 to-transparent" />
        <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <Image src="/logos/abn-frame-lockup-dark.svg" alt="Agencia Bir Nuñez" width={160} height={40} className="h-8 w-auto mb-3" />
              <p className="font-sans text-sm text-background/40">
                Consultoría en Transformación Institucional
              </p>
            </div>
            <div className="flex gap-12">
              <div>
                <p className="font-sans text-xs tracking-widest text-accent uppercase mb-3">Secciones</p>
                <nav className="font-sans text-sm space-y-2">
                  <a href="#divisiones" className="block text-background/50 hover:text-background transition-colors">Divisiones</a>
                  <a href="#casos" className="block text-background/50 hover:text-background transition-colors">Casos</a>
                  <a href="#equipo" className="block text-background/50 hover:text-background transition-colors">Equipo</a>
                  <a href="#contacto" className="block text-background/50 hover:text-background transition-colors">Contacto</a>
                </nav>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest text-accent uppercase mb-3">Contacto</p>
                <div className="font-sans text-sm space-y-2 text-background/50">
                  <p>Lambaré, Paraguay</p>
                  <p>anthony@bir.com.py</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px bg-background/10 mb-6" />
          <p className="font-sans text-xs text-background/30">
            © {new Date().getFullYear()} Agencia Bir Nuñez. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
