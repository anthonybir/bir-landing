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
      `}</style>

      {/* Navigation */}
      <nav className="font-sans px-6 md:px-12 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1a3a2f] rounded-sm flex items-center justify-center">
            <span className="text-[#FAF8F5] font-serif text-lg">A</span>
          </div>
          <span className="font-medium tracking-wide text-sm">AGENCIA BIR NUÑEZ</span>
        </div>
        <a href="#contacto" className="text-sm font-medium hover:text-[#b87333] transition-colors">
          Contacto
        </a>
      </nav>

      {/* Hero */}
      <section className="hero-gradient px-6 md:px-12 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl fade-in">
            <p className="font-sans text-sm tracking-widest text-[#b87333] mb-6 uppercase">
              Consultoría en Transformación Institucional
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
              Estructura honesta para organizaciones que perduran
            </h1>
            <p className="font-sans text-lg md:text-xl text-[#1a3a2f]/70 leading-relaxed max-w-2xl mb-10">
              Diseñamos sistemas de gobernanza, educación y tecnología que funcionan 
              cuando usted no está presente. Porque la libertad institucional 
              requiere estructura, no dependencia.
            </p>
            <a 
              href="#servicios"
              className="font-sans inline-flex items-center gap-2 text-sm font-medium border-b-2 border-[#1a3a2f] pb-1 hover:border-[#b87333] hover:text-[#b87333] transition-colors"
            >
              Explorar servicios
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="px-6 md:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl line-accent">Áreas de práctica</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {/* Educational */}
            <div className="card-hover bg-[#FAF8F5] p-8 md:p-10 rounded-sm border border-[#1a3a2f]/10">
              <div className="w-12 h-12 bg-[#1a3a2f] rounded-sm flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#FAF8F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-4">Transformación Educativa</h3>
              <p className="font-sans text-[#1a3a2f]/70 leading-relaxed mb-6">
                Rediseño curricular, marcos de evaluación accesibles, y sistemas 
                administrativos que liberan a docentes para enseñar.
              </p>
              <ul className="font-sans text-sm space-y-2 text-[#1a3a2f]/60">
                <li>• Diagnóstico institucional</li>
                <li>• Diseño de rúbricas y evaluación</li>
                <li>• Capacitación docente</li>
                <li>• Sistemas de gestión escolar</li>
              </ul>
            </div>

            {/* Organizational */}
            <div className="card-hover bg-[#FAF8F5] p-8 md:p-10 rounded-sm border border-[#1a3a2f]/10">
              <div className="w-12 h-12 bg-[#1a3a2f] rounded-sm flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#FAF8F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-4">Gobernanza Organizacional</h3>
              <p className="font-sans text-[#1a3a2f]/70 leading-relaxed mb-6">
                Estructuras de gobierno para iglesias, asociaciones y organizaciones 
                que necesitan transparencia sin burocracia.
              </p>
              <ul className="font-sans text-sm space-y-2 text-[#1a3a2f]/60">
                <li>• Diseño de estatutos y reglamentos</li>
                <li>• Sistemas de rendición de cuentas</li>
                <li>• Flujos de tesorería</li>
                <li>• Cumplimiento normativo</li>
              </ul>
            </div>

            {/* Technology */}
            <div className="card-hover bg-[#FAF8F5] p-8 md:p-10 rounded-sm border border-[#1a3a2f]/10">
              <div className="w-12 h-12 bg-[#1a3a2f] rounded-sm flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#FAF8F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-4">Soluciones Tecnológicas</h3>
              <p className="font-sans text-[#1a3a2f]/70 leading-relaxed mb-6">
                Aplicaciones a medida para organizaciones que superaron las 
                planillas de Excel pero no necesitan software empresarial.
              </p>
              <ul className="font-sans text-sm space-y-2 text-[#1a3a2f]/60">
                <li>• Sistemas de gestión escolar</li>
                <li>• Plataformas de tesorería</li>
                <li>• Automatización de procesos</li>
                <li>• Integración de datos</li>
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
                Nuestra filosofía
              </p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                Soluciones empresariales para organizaciones de escala humana
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
                  Sistemas que funcionan cuando el consultor se va.
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
                  20+ años diseñando para la realidad local.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="font-sans text-sm tracking-widest text-[#b87333] mb-6 uppercase">
              Quiénes somos
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8 line-accent">
              Una consultora familiar con experiencia multinacional
            </h2>
            <div className="font-sans text-[#1a3a2f]/70 leading-relaxed space-y-4 mt-12">
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
                Conversemos sobre su organización
              </h2>
              <p className="font-sans text-[#1a3a2f]/70 leading-relaxed mt-12">
                Cada proyecto comienza con una conversación. Cuéntenos sobre 
                su institución y los desafíos que enfrenta. Responderemos 
                dentro de 48 horas hábiles.
              </p>
              <div className="mt-8 font-sans text-sm text-[#1a3a2f]/60">
                <p>Lambaré, Paraguay</p>
                <p className="mt-1">contacto@bir.com.py</p>
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
                    Gracias por contactarnos. Responderemos pronto.
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
                      placeholder="Cuéntenos brevemente sobre su organización y cómo podemos ayudar..."
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
