import Image from 'next/image';
import ContactForm from './ContactForm';

const WHATSAPP_NUMBER = '595991402548';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me interesa conocer más sobre los servicios de ABN.')}`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Agencia Bir Nuñez',
  alternateName: 'ABN',
  url: 'https://bir.com.py',
  email: 'anthony@bir.com.py',
  description:
    'Consultoría familiar en transformación institucional. Educación, tecnología, derecho de niñez, y gestión financiera en Paraguay.',
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#1a3a2f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation — sticky with backdrop blur */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-lg border-b border-[#1a3a2f]/5">
        <nav className="font-sans px-6 md:px-12 py-5 flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1a3a2f] rounded-sm flex items-center justify-center">
              <span className="text-[#FAF8F5] font-serif text-lg">A</span>
            </div>
            <span className="font-medium tracking-wide text-sm">AGENCIA BIR NUÑEZ</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#divisiones" className="text-sm font-medium hover:text-[#b87333] transition-colors hidden md:block">
              Divisiones
            </a>
            <a href="#casos" className="text-sm font-medium hover:text-[#b87333] transition-colors hidden md:block">
              Casos
            </a>
            <a href="#equipo" className="text-sm font-medium hover:text-[#b87333] transition-colors hidden md:block">
              Equipo
            </a>
            <a href="#contacto" className="text-sm font-medium hover:text-[#b87333] transition-colors">
              Contacto
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero-gradient px-6 md:px-12 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl fade-in">
            <p className="font-sans text-sm tracking-widest text-[#b87333] mb-4 uppercase">
              Para colegios, ONGs e iglesias en Paraguay
            </p>
            <div className="w-12 h-px bg-[#b87333]/50 mb-8" />
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
              Estructura honesta para organizaciones que perduran
            </h1>
            <p className="font-sans text-lg md:text-xl text-[#1a3a2f]/70 leading-relaxed max-w-2xl mb-10">
              Consultora familiar con experiencia corporativa internacional
              y cuatro divisiones especializadas: educación, tecnología,
              derecho de niñez, y gestión financiera. Diseñamos sistemas que
              funcionan cuando nosotros no estamos — reemplazando planillas,
              consultores que desaparecen, y procesos que dependen de una sola persona.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-sans inline-flex items-center justify-center gap-2 bg-[#1a3a2f] text-[#FAF8F5] px-6 py-3 rounded-sm font-medium hover:bg-[#1a3a2f]/90"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribinos por WhatsApp
              </a>
              <a
                href="#divisiones"
                className="btn-outline font-sans inline-flex items-center justify-center gap-2 text-sm font-medium border-2 border-[#1a3a2f] px-6 py-3 rounded-sm hover:bg-[#1a3a2f] hover:text-[#FAF8F5]"
              >
                Conocer divisiones
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Stats */}
      <section className="px-6 md:px-12 py-12 bg-white border-y border-[#1a3a2f]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[#1a3a2f]">4</p>
              <p className="font-sans text-sm text-[#1a3a2f]/60 mt-1">Divisiones especializadas</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[#1a3a2f]">2</p>
              <p className="font-sans text-sm text-[#1a3a2f]/60 mt-1">Sistemas en producción</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[#1a3a2f]">20+</p>
              <p className="font-sans text-sm text-[#1a3a2f]/60 mt-1">Años en Paraguay</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[#1a3a2f]">100%</p>
              <p className="font-sans text-sm text-[#1a3a2f]/60 mt-1">Consultoría familiar</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Motor — Editorial AENA */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-[#1a3a2f] text-[#FAF8F5] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Copy */}
            <div className="scroll-reveal">
              <p className="font-sans text-sm tracking-widest text-[#b87333] mb-4 uppercase">
                Nuestro Motor de IA
              </p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                Tu docente planifica una vez. Sale con toda la semana lista.
              </h2>
              <p className="font-sans text-[#FAF8F5]/70 leading-relaxed mb-8">
                Editorial AENA reemplaza las horas que tus docentes pasan
                cada fin de semana armando fichas, evaluaciones y comunicados.
                El sistema toma la planificación semanal y genera seis materiales
                completos, alineados al programa del MEC Paraguay, listos para
                imprimir el lunes.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#b87333]/20 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#b87333] font-serif text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-sm">La docente carga su plan semanal</p>
                    <p className="font-sans text-xs text-[#FAF8F5]/50">Objetivos, indicadores, estilo de enseñanza — lo que ya hace</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#b87333]/20 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#b87333] font-serif text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-sm">La IA genera 6 materiales en minutos</p>
                    <p className="font-sans text-xs text-[#FAF8F5]/50">Texto base, ficha, evaluación, comunicado, guía, y rúbrica</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#b87333]/20 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#b87333] font-serif text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-sm">Revisa, aprueba, imprime</p>
                    <p className="font-sans text-xs text-[#FAF8F5]/50">DOCX y PDF listos — el docente siempre tiene la última palabra</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Texto base', 'Ficha de trabajo', 'Evaluación', 'Comunicación a padres', 'Guía de cuaderno', 'Rúbrica'].map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-xs px-3 py-1.5 bg-[#FAF8F5]/10 rounded-sm text-[#FAF8F5]/70 border border-[#FAF8F5]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshot */}
            <div className="scroll-reveal">
              <div className="screenshot-frame rounded-lg overflow-hidden shadow-2xl border border-[#FAF8F5]/10">
                <Image
                  src="/screenshots/editorial-aena.png"
                  alt="Editorial AENA — Hub de generación de materiales educativos con IA"
                  width={2814}
                  height={1808}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-sans text-xs text-[#FAF8F5]/30 mt-4 text-center">
                Editorial AENA — Generador semanal de materiales educativos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions / Services */}
      <section id="divisiones" className="px-6 md:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="mb-16">
            <p className="font-sans text-sm tracking-widest text-[#b87333] mb-4 uppercase">
              Nuestras Divisiones
            </p>
            <h2 className="font-serif text-3xl md:text-4xl line-accent">Cuatro áreas, una familia</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technology Division */}
            <div className="card-hover bg-[#1a3a2f] text-[#FAF8F5] p-8 md:p-10 rounded-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#FAF8F5] rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#1a3a2f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest text-[#b87333] uppercase">División</p>
                  <h3 className="font-serif text-2xl">Sistemas & Tecnología</h3>
                </div>
              </div>
              <p className="font-sans text-sm text-[#FAF8F5]/60 mb-4">Director: Anthony Bir</p>
              <p className="font-sans text-[#FAF8F5]/70 leading-relaxed mb-6">
                Aplicaciones a medida para organizaciones que superaron Excel
                pero no necesitan software empresarial. Nuestro motor editorial
                genera materiales educativos completos con inteligencia artificial.
              </p>
              <ul className="font-sans text-sm space-y-2 text-[#FAF8F5]/60">
                <li>• Sistemas de gestión escolar</li>
                <li>• Motor editorial con IA</li>
                <li>• Plataformas de tesorería</li>
                <li>• Dashboards administrativos</li>
              </ul>
            </div>

            {/* Education Division */}
            <div className="card-hover bg-[#FAF8F5] p-8 md:p-10 rounded-sm border border-[#1a3a2f]/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1a3a2f] rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FAF8F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest text-[#b87333] uppercase">División</p>
                  <h3 className="font-serif text-2xl">Transformación Educativa</h3>
                </div>
              </div>
              <p className="font-sans text-sm text-[#1a3a2f]/60 mb-4">Directora: Diana Nuñez de Bir</p>
              <p className="font-sans text-[#1a3a2f]/70 leading-relaxed mb-6">
                Rediseño curricular, marcos de evaluación accesibles, y sistemas
                administrativos que liberan a docentes para enseñar.
              </p>
              <ul className="font-sans text-sm space-y-2 text-[#1a3a2f]/60">
                <li>• Diagnóstico institucional</li>
                <li>• Diseño de rúbricas y evaluación</li>
                <li>• Capacitación docente</li>
                <li>• Cumplimiento MEC Paraguay</li>
              </ul>
            </div>

            {/* Legal Division */}
            <div className="card-hover bg-[#FAF8F5] p-8 md:p-10 rounded-sm border border-[#1a3a2f]/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1a3a2f] rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FAF8F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest text-[#b87333] uppercase">División</p>
                  <h3 className="font-serif text-2xl">Derecho de Niñez</h3>
                </div>
              </div>
              <p className="font-sans text-sm text-[#1a3a2f]/60 mb-4">Directora: Danae Bir Nuñez</p>
              <p className="font-sans text-[#1a3a2f]/70 leading-relaxed mb-6">
                Asesoría legal especializada en protección de niñez y adolescencia,
                protocolos institucionales, y cumplimiento normativo.
              </p>
              <ul className="font-sans text-sm space-y-2 text-[#1a3a2f]/60">
                <li>• Asesoría CODENI</li>
                <li>• Protocolos institucionales</li>
                <li>• Relación familia-escuela</li>
                <li>• Cumplimiento normativo</li>
              </ul>
            </div>

            {/* Financial Division */}
            <div className="card-hover bg-[#FAF8F5] p-8 md:p-10 rounded-sm border border-[#1a3a2f]/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1a3a2f] rounded-sm flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FAF8F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest text-[#b87333] uppercase">División</p>
                  <h3 className="font-serif text-2xl">Gestión Financiera</h3>
                </div>
              </div>
              <p className="font-sans text-sm text-[#1a3a2f]/60 mb-4">Directora: Stephanie Bir</p>
              <p className="font-sans text-[#1a3a2f]/70 leading-relaxed mb-6">
                Tesorería para ONGs, sistemas contables, y auditoría para
                instituciones educativas y organizaciones sin fines de lucro.
              </p>
              <ul className="font-sans text-sm space-y-2 text-[#1a3a2f]/60">
                <li>• Tesorería ONG</li>
                <li>• Sistemas contables</li>
                <li>• Auditoría educativa</li>
                <li>• Rendición de cuentas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cases / Social Proof */}
      <section id="casos" className="px-6 md:px-12 py-20 md:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="mb-16">
            <p className="font-sans text-sm tracking-widest text-[#b87333] mb-4 uppercase">
              Casos Reales
            </p>
            <h2 className="font-serif text-3xl md:text-4xl line-accent">Sistemas que construimos y usamos</h2>
          </div>

          <div className="space-y-16">
            {/* AENA Case */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 stat-card rounded-sm flex items-center justify-center">
                    <span className="text-[#FAF8F5] font-serif text-xl">A</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl">AENA Admin</h3>
                    <p className="font-sans text-sm text-[#1a3a2f]/60">Sistema de Gestión Escolar</p>
                  </div>
                </div>
                <p className="font-sans text-[#1a3a2f]/70 leading-relaxed mb-6">
                  Plataforma integral para administración escolar: matrículas,
                  calificaciones, asistencia, gestión docente, y reportes al MEC
                  — con un motor editorial que genera materiales de clase con IA.
                </p>
                <ul className="font-sans text-sm space-y-2 text-[#1a3a2f]/60">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#b87333] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    En producción desde 2024
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#b87333] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Generación de materiales semanales con IA
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#b87333] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Alineado al programa oficial del MEC Paraguay
                  </li>
                </ul>
              </div>
              <div className="screenshot-frame rounded-lg overflow-hidden shadow-xl border border-[#1a3a2f]/10">
                <Image
                  src="/screenshots/aena-dashboard.png"
                  alt="AENA Admin — Dashboard con asistencia por grado"
                  width={2842}
                  height={1794}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* IPUPY Case */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 stat-card rounded-sm flex items-center justify-center">
                    <span className="text-[#FAF8F5] font-serif text-xl">I</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl">IPUPY Tesorería</h3>
                    <p className="font-sans text-sm text-[#1a3a2f]/60">Sistema de Gestión Financiera</p>
                  </div>
                </div>
                <p className="font-sans text-[#1a3a2f]/70 leading-relaxed mb-6">
                  Plataforma de tesorería para organización eclesiástica:
                  control de ingresos/egresos, reportes financieros,
                  gestión de múltiples congregaciones, y auditoría transparente.
                </p>
                <ul className="font-sans text-sm space-y-2 text-[#1a3a2f]/60">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#b87333] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    En producción desde 2024
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#b87333] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Rendición de cuentas multi-nivel
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#b87333] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Gobernanza eclesiástica transparente
                  </li>
                </ul>
              </div>
              <div className="screenshot-frame rounded-lg overflow-hidden shadow-xl border border-[#1a3a2f]/10 md:order-1">
                <Image
                  src="/screenshots/ipupy-dashboard.png"
                  alt="IPUPY Tesorería — Dashboard financiero con ingresos y métricas"
                  width={2846}
                  height={1822}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="mb-16">
            <p className="font-sans text-sm tracking-widest text-[#b87333] mb-4 uppercase">
              Paquetes
            </p>
            <h2 className="font-serif text-3xl md:text-4xl line-accent">Soluciones integradas</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Institutional Package */}
            <div className="card-hover bg-[#FAF8F5] p-8 rounded-sm border border-[#1a3a2f]/10">
              <h3 className="font-serif text-xl mb-2">Paquete Institucional</h3>
              <p className="font-sans text-sm text-[#b87333] mb-4">Para colegios 150-500 alumnos</p>
              <p className="font-sans text-[#1a3a2f]/70 leading-relaxed mb-6">
                Transformación completa: auditoría pedagógica, compliance legal,
                setup contable, y dashboard integrado.
              </p>
              <ul className="font-sans text-sm space-y-2 text-[#1a3a2f]/60">
                <li>• 4 divisiones trabajando en conjunto</li>
                <li>• Diagnóstico inicial completo</li>
                <li>• Implementación escalonada</li>
                <li>• Soporte continuo</li>
              </ul>
            </div>

            {/* ONG Package */}
            <div className="card-hover bg-[#FAF8F5] p-8 rounded-sm border border-[#1a3a2f]/10">
              <h3 className="font-serif text-xl mb-2">Paquete ONG</h3>
              <p className="font-sans text-sm text-[#b87333] mb-4">Para organizaciones sin fines de lucro</p>
              <p className="font-sans text-[#1a3a2f]/70 leading-relaxed mb-6">
                Estructura legal para niñez + sistema contable y reporting
                para transparencia y rendición de cuentas.
              </p>
              <ul className="font-sans text-sm space-y-2 text-[#1a3a2f]/60">
                <li>• División Legal + Financiera</li>
                <li>• Protocolos CODENI</li>
                <li>• Sistema de tesorería</li>
                <li>• Reportes de auditoría</li>
              </ul>
            </div>

            {/* Consulting */}
            <div className="card-hover bg-[#FAF8F5] p-8 rounded-sm border border-[#1a3a2f]/10">
              <h3 className="font-serif text-xl mb-2">Consultoría Puntual</h3>
              <p className="font-sans text-sm text-[#b87333] mb-4">Por división, tarifas independientes</p>
              <p className="font-sans text-[#1a3a2f]/70 leading-relaxed mb-6">
                Proyectos específicos con la división que necesites:
                auditoría, capacitación, implementación, o asesoría.
              </p>
              <ul className="font-sans text-sm space-y-2 text-[#1a3a2f]/60">
                <li>• Diagnósticos puntuales</li>
                <li>• Talleres y capacitaciones</li>
                <li>• Implementación de sistemas</li>
                <li>• Asesoría por proyecto</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-[#1a3a2f] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="font-sans text-sm tracking-widest text-[#b87333] mb-6 uppercase">
                Nuestra Filosofía
              </p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                Herramientas empresariales para organizaciones de escala humana
              </h2>
              <p className="font-sans text-[#FAF8F5]/70 leading-relaxed">
                Traemos metodologías de corporaciones globales (Heinz, Thermo Fisher)
                al contexto de escuelas, iglesias y ONGs en Paraguay. Tu institución
                merece herramientas tan sofisticadas como las de las grandes empresas,
                pero diseñadas para tu realidad: presupuestos ajustados, equipos
                pequeños, y la necesidad de que las cosas simplemente funcionen.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-[#b87333] pl-6">
                <h3 className="font-serif text-xl mb-2">Estructura, no dependencia</h3>
                <p className="font-sans text-sm text-[#FAF8F5]/60">
                  Sistemas que funcionan cuando los consultores se van.
                </p>
              </div>
              <div className="border-l-2 border-[#b87333] pl-6">
                <h3 className="font-serif text-xl mb-2">Claridad sobre complejidad</h3>
                <p className="font-sans text-sm text-[#FAF8F5]/60">
                  Procesos que cualquier miembro del equipo puede entender.
                </p>
              </div>
              <div className="border-l-2 border-[#b87333] pl-6">
                <h3 className="font-serif text-xl mb-2">Contexto paraguayo</h3>
                <p className="font-sans text-sm text-[#FAF8F5]/60">
                  20+ años viviendo y diseñando para la realidad local.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipo" className="px-6 md:px-12 py-20 md:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="mb-16">
            <p className="font-sans text-sm tracking-widest text-[#b87333] mb-4 uppercase">
              Quiénes Somos
            </p>
            <h2 className="font-serif text-3xl md:text-4xl line-accent">Una consultora familiar</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-16">
            <div className="font-sans text-[#1a3a2f]/70 leading-relaxed space-y-4">
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
            <div className="font-sans text-[#1a3a2f]/70 leading-relaxed space-y-4">
              <p>
                Cada sistema que ofrecemos lo usamos nosotros primero. AENA Admin
                gestiona nuestra propia institución educativa. IPUPY Tesorería
                administra las finanzas de nuestra organización eclesiástica.
                No vendemos software que no probamos en nuestra propia realidad.
              </p>
              <p className="text-[#1a3a2f] font-medium">
                Dos sistemas en producción. Probados internamente antes de
                ofrecerlos a otras instituciones.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a3a2f] rounded-sm flex items-center justify-center mx-auto mb-4 team-avatar">
                <span className="text-[#FAF8F5] font-serif text-2xl">AB</span>
              </div>
              <h3 className="font-serif text-lg">Anthony Bir</h3>
              <p className="font-sans text-sm text-[#1a3a2f]/60">CEO & Director de Sistemas</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a3a2f] rounded-sm flex items-center justify-center mx-auto mb-4 team-avatar">
                <span className="text-[#FAF8F5] font-serif text-2xl">DN</span>
              </div>
              <h3 className="font-serif text-lg">Diana Nuñez de Bir</h3>
              <p className="font-sans text-sm text-[#1a3a2f]/60">Directora de Educación</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a3a2f] rounded-sm flex items-center justify-center mx-auto mb-4 team-avatar">
                <span className="text-[#FAF8F5] font-serif text-2xl">DB</span>
              </div>
              <h3 className="font-serif text-lg">Danae Bir Nuñez</h3>
              <p className="font-sans text-sm text-[#1a3a2f]/60">Directora Legal</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a3a2f] rounded-sm flex items-center justify-center mx-auto mb-4 team-avatar">
                <span className="text-[#FAF8F5] font-serif text-2xl">SB</span>
              </div>
              <h3 className="font-serif text-lg">Stephanie Bir</h3>
              <p className="font-sans text-sm text-[#1a3a2f]/60">Directora Financiera</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 bg-[#b87333]/10 border-y border-[#b87333]/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            ¿Necesitás transformar tu institución?
          </h2>
          <p className="font-sans text-[#1a3a2f]/70 mb-6 max-w-2xl mx-auto">
            Conversemos sobre tu organización y cómo nuestras divisiones
            pueden trabajar juntas para resolver tus desafíos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-sans inline-flex items-center justify-center gap-2 bg-[#1a3a2f] text-[#FAF8F5] px-8 py-4 rounded-sm font-medium hover:bg-[#1a3a2f]/90"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribinos por WhatsApp
            </a>
            <a
              href="#contacto"
              className="btn-outline font-sans inline-flex items-center justify-center gap-2 text-sm font-medium border-2 border-[#1a3a2f] px-8 py-4 rounded-sm hover:bg-[#1a3a2f] hover:text-[#FAF8F5]"
            >
              Enviar mensaje
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="px-6 md:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="font-sans text-sm tracking-widest text-[#b87333] mb-6 uppercase">
                Contacto
              </p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6 line-accent">
                Conversemos sobre tu organización
              </h2>
              <p className="font-sans text-[#1a3a2f]/70 leading-relaxed mt-12">
                Cada proyecto comienza con una conversación. Contanos sobre
                tu institución y los desafíos que enfrentás. Respondemos
                dentro de 48 horas hábiles.
              </p>
              <div className="mt-8 font-sans text-sm text-[#1a3a2f]/60">
                <p>Lambaré, Paraguay</p>
                <p className="mt-1">anthony@bir.com.py</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a3a2f] text-[#FAF8F5]">
        <div className="h-px bg-gradient-to-r from-transparent via-[#b87333]/40 to-transparent" />
        <div className="px-6 md:px-12 py-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FAF8F5] rounded-sm flex items-center justify-center">
              <span className="text-[#1a3a2f] font-serif text-sm">A</span>
            </div>
            <span className="font-sans text-sm tracking-wide">Agencia Bir Nuñez</span>
          </div>
          <p className="font-sans text-sm text-[#FAF8F5]/40">
            © {new Date().getFullYear()} ABN. Lambaré, Paraguay.
          </p>
        </div>
      </footer>
    </div>
  );
}
