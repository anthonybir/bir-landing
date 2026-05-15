import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nosotros · ABN | Anthony Bir',
  description:
    'Anthony Bir es ABN. Una persona, varias instituciones: educación, pastoral, formación, consultoría y software.',
};

const portfolio = [
  {
    tag: 'Educación',
    inst: 'AENA',
    role: 'Director Institucional · Presidente del Consejo',
    line: 'Rescate 2020. ≈ 300 alumnos bajo MEAA 3.0 (sin tareas, sin exámenes, ABP). Morosidad del 70% al 2.9%.',
  },
  {
    tag: 'Pastoral',
    inst: 'Los Pentecostales de Lambaré',
    role: 'Pastor',
    line: 'Congregación pentecostal. Exégesis griega, lente progresista.',
  },
  {
    tag: 'Pastoral · nacional',
    inst: 'IPU PY',
    role: 'Tesorero Nacional',
    line: 'Tesorería de doble entrada para 30 iglesias. tesoreria.ipupy.org.py.',
  },
  {
    tag: 'Formación',
    inst: 'IBA',
    role: 'Marco curricular',
    line: 'Documentos de formación pastoral y editorial, junto a Diana.',
  },
  {
    tag: 'Consultoría',
    inst: 'ABN',
    role: 'Fundador · arquitecto',
    line: 'Agencia familiar. Diana (pedagogía), Danae (derecho), Stephanie (financiero).',
  },
  {
    tag: 'Software',
    inst: 'ABSD',
    role: 'Bir Systems Design',
    line: 'AENA_Admin, ipupy_admin, Kairós Live. Producción institucional.',
  },
] as const;

const operative = [
  'El criterio de la institución antes que la herramienta.',
  'Construyo primero adentro; el cliente recibe lo que ya sobrevivió.',
  'Sistemas que viven sin mí.',
] as const;

export default function NosotrosPage() {
  return (
    <section
      className="absd-section absd-ticks absd-fullbleed"
      style={{
        minHeight: '100dvh',
        position: 'relative',
        paddingTop: 'clamp(28px, 6vw, 56px)',
        paddingBottom: 'clamp(48px, 10vw, 96px)',
      }}
      aria-label="Sobre Anthony Bir"
    >
      {/* Top frame */}
      <header
        className="absd-frame"
        style={{
          paddingLeft: 'clamp(20px, 6vw, 96px)',
          paddingRight: 'clamp(20px, 6vw, 96px)',
          marginBottom: 'clamp(40px, 8vw, 80px)',
        }}
      >
        <span className="caps">
          <Link href="/">anthony bir</Link>
          &nbsp;/&nbsp; ABN &nbsp;/&nbsp; nosotros
        </span>
        <Link href="/" className="caps" style={{ textDecoration: 'none' }}>
          Volver a la portada
        </Link>
      </header>

      {/* Two-column body: portfolio left, text right. */}
      <div className="absd-nosotros-body">
        {/* Portfolio panel. The work is the portrait. */}
        <div className="absd-portfolio">
          {/* Header */}
          <div className="absd-portfolio-head">
            <span className="caps">Donde vive el trabajo</span>
            <span className="caps">06 / 06</span>
          </div>

          {/* Items */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {portfolio.map((p, i) => (
              <div key={p.inst} className="absd-portfolio-row">
                <span className="caps" style={{ paddingTop: 4 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 12,
                      marginBottom: 6,
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      className="caps"
                      style={{ color: 'var(--abir-cream)', fontSize: 12 }}
                    >
                      {p.inst}
                    </span>
                    <span
                      className="caps"
                      style={{ fontSize: 10, letterSpacing: '0.25em' }}
                    >
                      · {p.tag}
                    </span>
                  </div>
                  <div
                    className="voice"
                    style={{
                      fontSize: 14,
                      lineHeight: 1.4,
                      color: 'var(--abir-cream-muted)',
                      marginBottom: 4,
                    }}
                  >
                    {p.role}
                  </div>
                  <div
                    className="voice"
                    style={{ fontSize: 15, lineHeight: 1.4 }}
                  >
                    {p.line}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <div className="absd-portfolio-foot">
            <span className="caps">Lambaré, Paraguay · UTC-03</span>
          </div>
        </div>

        {/* Text column */}
        <div className="absd-text-col">
          <h1
            className="voice"
            style={{
              fontSize: 'clamp(34px, 7vw, 56px)',
              margin: 0,
              marginBottom: 32,
              maxWidth: 480,
            }}
          >
            Una persona, varias instituciones.
          </h1>
          <span className="hl" style={{ marginBottom: 32 }} aria-hidden />
          <p
            className="voice"
            style={{
              fontSize: 'clamp(18px, 5vw, 21px)',
              lineHeight: 1.45,
              color: 'var(--abir-cream-muted)',
              maxWidth: 480,
              margin: 0,
              marginBottom: 56,
              textWrap: 'pretty',
            }}
          >
            Veinte años corporativos en Heinz y Thermo Fisher: gestión de
            proyectos internacionales, migraciones JD Edwards a SAP, antes de
            volver a Paraguay. En 2020 dirigí el rescate de AENA: morosidad
            institucional{' '}
            <span style={{ color: 'var(--abir-cream)' }}>del 70% al 2.9%</span> en
            tres años. Hoy construyo sistemas que viven primero dentro de mis
            propias instituciones; cuando sobreviven ahí, llegan al cliente.
          </p>

          <div className="absd-proof-strip" aria-label="Prueba operativa">
            <span className="caps">prueba</span>
            <strong>del 70% <span>al</span> 2.9%</strong>
            <span>morosidad institucional recuperada en tres años.</span>
          </div>

          <div className="caps" style={{ marginBottom: 16 }}>
            Cómo trabajo
          </div>
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              maxWidth: 480,
              borderTop: '1px solid var(--abir-cream-whisper)',
            }}
          >
            {operative.map((line, i) => (
              <li
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '32px 1fr',
                  gap: 16,
                  padding: '14px 0',
                  borderBottom: '1px solid var(--abir-cream-whisper)',
                }}
              >
                <span className="caps">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="voice"
                  style={{ fontSize: 'clamp(16px, 4.5vw, 18px)', lineHeight: 1.4 }}
                >
                  {line}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
