'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  nombre: string;
  email: string;
  organizacion: string;
  mensaje: string;
  website: string;
}

export default function ABNLanding() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    organizacion: '',
    mensaje: '',
    website: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'No se pudo enviar el mensaje.');
      }
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'No se pudo enviar el mensaje.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1a3a2f]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap');

        .font-serif { font-family: 'DM Serif Display', Georgia, serif; }
        .font-sans { font-family: 'Outfit', system-ui, sans-serif; }

        .hero-gradient {
          background: linear-gradient(180deg, #FAF8F5 0%, #f0ebe4 100%);
        }

        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(26, 58, 47, 0.08);
        }

        .input-focus:focus {
          outline: none;
          border-color: #1a3a2f;
          box-shadow: 0 0 0 3px rgba(26, 58, 47, 0.1);
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .line-accent {
          position: relative;
        }
        .line-accent::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 2px;
          background: #b87333;
        }

        .stat-card {
          background: linear-gradient(135deg, #1a3a2f 0%, #2d5a4a 100%);
        }
      `}</style>

      {/* Navigation */}
      <nav className="font-sans px-6 md:px-12 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1a3a2f] rounded-sm flex items-center justify-center">
            <span className="text-[#FAF8F5] font-serif text-lg">A</span>
          </div>
          <span className="font-medium tracking-wide text-sm">AGENCIA BIR NUÑEZ</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#equipo" className="text-sm font-medium hover:text-[#b87333] transition-colors hidden md:block">
            Equipo
          </a>
          <a href="#contacto" className="text-sm font-medium hover:text-[#b87333] transition-colors">
            Contacto
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient px-6 md:px-12 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl fade-in">
            <p className="font-sans text-sm tracking-widest text-[#b87333] mb-6 uppercase">
              Consultoría Familiar en Transformación Institucional
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
              Estructura honesta para organizaciones que perduran
            </h1>
            <p className="font-sans text-lg md:text-xl text-[#1a3a2f]/70 leading-relaxed max-w-2xl mb-10">
              Somos una consultora familiar con cuatro divisiones especializadas:
              educación, tecnología, derecho de niñez, y gestión financiera.
              Diseñamos sistemas que funcionan cuando nosotros no estamos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#divisiones"
                className="font-sans inline-flex items-center justify-center gap-2 bg-[#1a3a2f] text-[#FAF8F5] px-6 py-3 rounded-sm font-medium hover:bg-[#1a3a2f]/90 transition-colors"
              >
                Conocer divisiones
              </a>
              <a
                href="#casos"
                className="font-sans inline-flex items-center justify-center gap-2 text-sm font-medium border-2 border-[#1a3a2f] px-6 py-3 rounded-sm hover:bg-[#1a3a2f] hover:text-[#FAF8F5] transition-colors"
              >
                Ver casos reales
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
              <p className="font-serif text-3xl md:text-4xl text-[#1a3a2f]">500K+</p>
              <p className="font-sans text-sm text-[#1a3a2f]/60 mt-1">Líneas de código propias</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[#1a3a2f]">20+</p>
              <p className="font-sans text-sm text-[#1a3a2f]/60 mt-1">Años en Paraguay</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[#1a3a2f]">2</p>
              <p className="font-sans text-sm text-[#1a3a2f]/60 mt-1">Sistemas en producción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions / Services */}
      <section id="divisiones" className="px-6 md:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
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
                pero no necesitan software empresarial. Desarrollamos con AI agents
                y metodologías modernas.
              </p>
              <ul className="font-sans text-sm space-y-2 text-[#FAF8F5]/60">
                <li>• Sistemas de gestión escolar</li>
                <li>• Plataformas de tesorería</li>
                <li>• Automatización de procesos</li>
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
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-sans text-sm tracking-widest text-[#b87333] mb-4 uppercase">
              Casos Reales
            </p>
            <h2 className="font-serif text-3xl md:text-4xl line-accent">Sistemas que construimos y usamos</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AENA Case */}
            <div className="card-hover bg-white p-8 md:p-10 rounded-sm border border-[#1a3a2f]/10">
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
                Plataforma integral para administración de institución educativa:
                matrículas, calificaciones, asistencia, comunicación con padres,
                gestión docente, y reportes al MEC.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#FAF8F5] p-4 rounded-sm">
                  <p className="font-serif text-2xl text-[#1a3a2f]">284K</p>
                  <p className="font-sans text-xs text-[#1a3a2f]/60">Líneas de código</p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-sm">
                  <p className="font-serif text-2xl text-[#1a3a2f]">1,378</p>
                  <p className="font-sans text-xs text-[#1a3a2f]/60">Archivos TypeScript</p>
                </div>
              </div>
              <ul className="font-sans text-sm space-y-2 text-[#1a3a2f]/60">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#b87333]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  En producción desde 2024
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#b87333]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Next.js 15 + TypeScript + Supabase
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#b87333]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Integración con requisitos MEC Paraguay
                </li>
              </ul>
            </div>

            {/* IPUPY Case */}
            <div className="card-hover bg-white p-8 md:p-10 rounded-sm border border-[#1a3a2f]/10">
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
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#FAF8F5] p-4 rounded-sm">
                  <p className="font-serif text-2xl text-[#1a3a2f]">240K</p>
                  <p className="font-sans text-xs text-[#1a3a2f]/60">Líneas de código</p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded-sm">
                  <p className="font-serif text-2xl text-[#1a3a2f]">1,093</p>
                  <p className="font-sans text-xs text-[#1a3a2f]/60">Archivos TypeScript</p>
                </div>
              </div>
              <ul className="font-sans text-sm space-y-2 text-[#1a3a2f]/60">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#b87333]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  En producción desde 2024
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#b87333]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Rendición de cuentas multi-nivel
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#b87333]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Gobernanza eclesiástica transparente
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
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
                Las escuelas, iglesias y organizaciones comunitarias merecen
                herramientas tan sofisticadas como las de las corporaciones,
                pero diseñadas para su realidad: presupuestos ajustados,
                equipos pequeños, y la necesidad de que las cosas simplemente funcionen.
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
        <div className="max-w-7xl mx-auto">
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
                internacional (Heinz, Thermo Fisher), dos décadas de servicio pastoral
                y educativo en Paraguay, y la visión compartida de una familia
                comprometida con el desarrollo institucional.
              </p>
              <p>
                Trabajamos con instituciones que entienden que la excelencia operativa
                y los valores humanos no son opuestos, sino complementarios.
              </p>
            </div>
            <div className="font-sans text-[#1a3a2f]/70 leading-relaxed space-y-4">
              <p>
                En 2024, nuestro director de tecnología construyó —sin background técnico,
                usando AI agents— los sistemas que hoy usamos internamente. Esa experiencia
                nos demostró que las organizaciones pequeñas pueden acceder a herramientas
                de nivel empresarial sin presupuestos corporativos.
              </p>
              <p className="text-[#1a3a2f] font-medium">
                500,000+ líneas de código. Dos sistemas en producción.
                Cero desarrolladores contratados.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a3a2f] rounded-sm flex items-center justify-center mx-auto mb-4">
                <span className="text-[#FAF8F5] font-serif text-2xl">AB</span>
              </div>
              <h3 className="font-serif text-lg">Anthony Bir</h3>
              <p className="font-sans text-sm text-[#1a3a2f]/60">CEO & Director de Sistemas</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a3a2f] rounded-sm flex items-center justify-center mx-auto mb-4">
                <span className="text-[#FAF8F5] font-serif text-2xl">DN</span>
              </div>
              <h3 className="font-serif text-lg">Diana Nuñez de Bir</h3>
              <p className="font-sans text-sm text-[#1a3a2f]/60">Directora de Educación</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a3a2f] rounded-sm flex items-center justify-center mx-auto mb-4">
                <span className="text-[#FAF8F5] font-serif text-2xl">DB</span>
              </div>
              <h3 className="font-serif text-lg">Danae Bir Nuñez</h3>
              <p className="font-sans text-sm text-[#1a3a2f]/60">Directora Legal</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1a3a2f] rounded-sm flex items-center justify-center mx-auto mb-4">
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
          <a
            href="#contacto"
            className="font-sans inline-flex items-center justify-center gap-2 bg-[#1a3a2f] text-[#FAF8F5] px-8 py-4 rounded-sm font-medium hover:bg-[#1a3a2f]/90 transition-colors"
          >
            Agendar conversación
          </a>
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

            <div>
              {submitted ? (
                <div className="bg-[#FAF8F5] p-8 rounded-sm border border-[#1a3a2f]/10 text-center">
                  <div className="w-12 h-12 bg-[#1a3a2f] rounded-sm flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#FAF8F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl mb-2">Mensaje enviado</h3>
                  <p className="font-sans text-sm text-[#1a3a2f]/60">
                    Gracias por contactarnos. Respondemos pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <div>
                    <label className="font-sans text-sm font-medium block mb-2">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="font-sans w-full px-4 py-3 bg-[#FAF8F5] border border-[#1a3a2f]/20 rounded-sm input-focus transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-sm font-medium block mb-2">Correo electrónico</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="font-sans w-full px-4 py-3 bg-[#FAF8F5] border border-[#1a3a2f]/20 rounded-sm input-focus transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-sm font-medium block mb-2">Organización</label>
                    <input
                      type="text"
                      name="organizacion"
                      value={formData.organizacion}
                      onChange={handleChange}
                      className="font-sans w-full px-4 py-3 bg-[#FAF8F5] border border-[#1a3a2f]/20 rounded-sm input-focus transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-sm font-medium block mb-2">Mensaje</label>
                    <textarea
                      name="mensaje"
                      rows={4}
                      required
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="font-sans w-full px-4 py-3 bg-[#FAF8F5] border border-[#1a3a2f]/20 rounded-sm input-focus transition-all resize-none"
                      placeholder="Contanos brevemente sobre tu organización y cómo podemos ayudar..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="font-sans w-full bg-[#1a3a2f] text-[#FAF8F5] py-4 rounded-sm font-medium hover:bg-[#1a3a2f]/90 transition-colors"
                  >
                    {submitting ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                  {submitError ? (
                    <p className="font-sans text-sm text-[#b87333]">{submitError}</p>
                  ) : null}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 bg-[#1a3a2f] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
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
