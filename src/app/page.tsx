import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './ContactForm';
import CountUp from './CountUp';
import { WhatsAppIcon, WHATSAPP_URL } from './WhatsAppFloat';
import CTABanner from './CTABanner';

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

const proofMetrics = [
  { value: '3', label: 'Sistemas propios en producción' },
  { value: '4', label: 'Países con instituciones activas' },
  { value: '20+', label: 'Años de experiencia institucional acumulada' },
  { value: '100%', label: 'Construido y operado internamente' },
] as const;

const pathways = [
  {
    href: '/servicios',
    kicker: 'Cómo trabajamos',
    title: 'Servicios',
    copy:
      'Diagnóstico, implementación por frente y acompañamiento institucional sin fragmentar criterio ni ejecución.',
  },
  {
    href: '/casos',
    kicker: 'Prueba en producción',
    title: 'Casos',
    copy:
      'AENA, IBA e IPUPY muestran el tipo de sistemas que ABN diseña, opera y sostiene en su propia realidad.',
  },
  {
    href: '/nosotros',
    kicker: 'Quién sostiene el estándar',
    title: 'Nosotros',
    copy:
      'Experiencia corporativa, formación pedagógica y décadas de trabajo institucional reunidas en una misma dirección.',
  },
] as const;

const operatingModel = [
  {
    number: '01',
    title: 'Leemos la institución',
    copy:
      'Mapeamos criterio pedagógico, operación, cuellos de botella y responsabilidades reales antes de hablar de herramientas.',
  },
  {
    number: '02',
    title: 'Traducimos ese criterio en sistema',
    copy:
      'Diseñamos reglas, flujos y productos donde la institución fija el estándar y la tecnología lo ejecuta sin improvisar.',
  },
  {
    number: '03',
    title: 'Probamos en producción',
    copy:
      'Los sistemas que ofrecemos viven primero en nuestra propia operación, con retroalimentación constante y ajuste fino.',
  },
] as const;

export default function ABNLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero-dark min-h-[calc(100svh-4.75rem)] px-6 pb-14 pt-10 md:px-12 md:pb-18 md:pt-12">
        <div className="grid min-h-[calc(100svh-9rem)] max-w-[1600px] gap-10 md:mx-auto md:grid-cols-[minmax(0,0.95fr)_minmax(520px,0.95fr)] md:items-end">
          <div className="fade-in flex max-w-xl flex-col justify-end md:pb-8">
            <p className="section-kicker mb-5">ABN · Consultoría en transformación institucional</p>
            <Image
              src="/logos/abn-mark-white.svg"
              alt="ABN"
              width={72}
              height={62}
              priority
              className="mb-8 h-12 w-auto md:h-14"
            />
            <h1 className="font-display text-[3rem] font-bold leading-[0.98] tracking-tight sm:text-[3.8rem] md:text-[5.6rem]">
              <span className="hero-word">Estructura</span>
              <span className="hero-word">donde</span>
              <span className="hero-word">otros</span>
              <span className="hero-word">improvisan</span>
            </h1>
            <p className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-background/76 md:text-xl">
              ABN diseña sistemas para colegios, seminarios e instituciones que necesitan
              criterio estable, operación clara y tecnología obedeciendo a su estándar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 font-sans text-sm font-medium text-foreground hover:bg-white"
              >
                <WhatsAppIcon />
                Escribinos por WhatsApp
              </a>
              <Link
                href="/casos"
                className="btn-outline inline-flex items-center justify-center gap-2 rounded-full border border-[#F1EFE8]/24 px-6 py-3.5 font-sans text-sm font-medium text-background hover:bg-background hover:text-foreground"
              >
                Ver sistemas en producción
              </Link>
            </div>
          </div>

          <div className="scroll-reveal-right md:pl-6">
            <div className="editorial-media rounded-[2rem] bg-white/4">
              <div className="browser-chrome">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              <div className="relative">
                <Image
                  src="/screenshots/aena-dashboard.png"
                  alt="ABN operating system proof"
                  width={2842}
                  height={1794}
                  priority
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 100vw, 52vw"
                />
                <div className="absolute inset-x-0 bottom-0 grid gap-4 bg-gradient-to-t from-[#111111] via-[#111111]/88 to-transparent px-5 pb-5 pt-18 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pb-8">
                  <div>
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-background/46">
                      Prueba institucional
                    </p>
                    <p className="mt-3 max-w-sm font-display text-2xl leading-tight text-background md:text-3xl">
                      Sistemas reales, operados por la misma agencia que los diseña.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-5 self-end text-background/78">
                    <div>
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em]">AENA</p>
                      <p className="mt-2 font-sans text-sm leading-relaxed">
                        Gestión escolar y AULA en producción.
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em]">IPUPY</p>
                      <p className="mt-2 font-sans text-sm leading-relaxed">
                        Tesorería multi-sede con gobernanza clara.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame bg-background px-6 py-10 md:px-12 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          {proofMetrics.map((metric) => (
            <div key={metric.label} className="proof-metric">
              <p className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                <CountUp value={metric.value} />
              </p>
              <p className="mt-3 max-w-[14rem] font-sans text-sm leading-relaxed text-foreground/62">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background px-6 py-18 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {pathways.map((item) => (
              <Link key={item.href} href={item.href} className="editorial-link group">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-foreground/36">
                  {item.kicker}
                </p>
                <h2 className="font-display text-3xl leading-none tracking-tight md:text-[2.6rem]">
                  {item.title}
                </h2>
                <p className="max-w-sm font-sans text-base leading-relaxed text-foreground/65">
                  {item.copy}
                </p>
                <span className="link-arrow font-sans text-sm font-medium text-foreground">
                  Abrir sección
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section px-6 py-18 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="scroll-reveal-left max-w-xl">
            <p className="section-kicker mb-4">Flagship proof · AULA</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.04] md:text-5xl">
              El motor importa menos que el contexto que lo gobierna.
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-background/70 md:text-lg">
              AULA es la demostración más clara del método ABN: una plataforma que
              genera planificación y materiales bajo criterio institucional, no bajo
              improvisación individual.
            </p>
            <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-background/52">
              El mismo marco que ordena AULA es el que usamos para diagnosticar,
              implementar y sostener sistemas educativos y administrativos.
            </p>
            <Link
              href="/aula"
              className="link-arrow mt-8 font-sans text-sm font-medium text-background"
            >
              Conocer la plataforma AULA
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="scroll-reveal-scale">
            <div className="editorial-media rounded-[1.75rem]">
              <div className="browser-chrome">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              <Image
                src="/screenshots/editorial-aena.png"
                alt="AULA editorial planning view"
                width={2814}
                height={1808}
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 56vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div className="max-w-md">
            <p className="section-kicker mb-4">Cómo trabaja ABN</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.06] md:text-5xl">
              Menos discurso. Más estándar operativo.
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-foreground/66">
              La propuesta de ABN no es “usar IA”. Es diseñar una estructura donde la
              institución manda, el sistema la respeta y el resultado se mantiene cuando
              cambian personas, herramientas o contexto.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {operatingModel.map((item) => (
              <div key={item.number} className="scroll-reveal">
                <p className="font-mono text-sm uppercase tracking-[0.22em] text-foreground/38">
                  {item.number}
                </p>
                <h3 className="mt-4 font-display text-2xl leading-tight">{item.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-foreground/62">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <section id="contacto" className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div className="max-w-lg">
            <p className="section-kicker mb-4">Contacto</p>
            <h2 className="line-accent font-display text-4xl font-semibold leading-tight md:text-5xl">
              Conversemos sobre tu institución
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-foreground/68">
              Cada proyecto empieza con una conversación honesta sobre operación, criterio
              y prioridades. Si el problema todavía está desordenado, ahí es donde ABN suele
              entrar mejor.
            </p>
            <div className="mt-12 grid gap-7">
              <div>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-foreground/38">
                  Base
                </p>
                <p className="mt-2 font-sans text-sm text-foreground/72">Lambaré, Paraguay</p>
              </div>
              <div>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-foreground/38">
                  Contacto
                </p>
                <p className="mt-2 font-sans text-sm text-foreground/72">anthony@bir.com.py</p>
              </div>
            </div>
          </div>

          <div className="form-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
