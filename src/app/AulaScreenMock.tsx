'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

type Props = {
  big?: boolean;
};

const BASE = 900;

const sidebar = [
  'Inicio',
  'Estudiantes',
  'Académico',
  'Tesorería',
  'Editorial',
  'Comunicación',
  'Ajustes',
] as const;

const kpis = [
  { l: 'Ingresado', v: 'Gs. 842M', t: '+12%' },
  { l: 'Pendiente', v: 'Gs. 64M', t: '78 cuotas' },
  { l: 'Becas', v: '42', t: 'activas' },
  { l: 'Morosidad', v: '2.1%', t: '−0.4pp' },
] as const;

// SSR-safe layout effect
const useIso = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export default function AulaScreenMock({ big = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Sync initial scale before paint so there's no flash at scale=1 on wide viewports
  useIso(() => {
    const el = ref.current;
    if (!el) return;
    setScale(el.clientWidth / BASE);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / BASE);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  const innerHeight = Math.round(900 * (big ? 8.5 / 16 : 3 / 4));

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border"
      style={{
        borderColor: 'hsl(20 12% 10% / 0.1)',
        background: 'var(--gray-50)',
        boxShadow: '0 40px 80px -40px hsl(20 12% 10% / 0.35)',
        aspectRatio: big ? '16 / 8.5' : '4 / 3',
      }}
    >
      <div
        style={{
          width: 900,
          height: innerHeight,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        {/* Topbar */}
        <div
          style={{
            height: 44,
            background: 'var(--gray-950)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: 99, background: 'var(--signal)' }} />
            <span style={{ width: 10, height: 10, borderRadius: 99, background: 'rgba(255,255,255,0.25)' }} />
            <span style={{ width: 10, height: 10, borderRadius: 99, background: 'rgba(255,255,255,0.25)' }} />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.08em',
            }}
          >
            AULA · SISTEMA DE GESTIÓN EDUCATIVA
          </span>
          <span
            style={{
              marginLeft: 'auto',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            AENA · Año Lectivo 2026
          </span>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: big ? '220px 1fr' : '180px 1fr',
            height: 'calc(100% - 44px)',
          }}
        >
          {/* Sidebar */}
          <div
            style={{
              background: 'var(--gray-100)',
              borderRight: '1px solid hsl(20 12% 10% / 0.08)',
              padding: 16,
            }}
          >
            {sidebar.map((x, i) => {
              const active = i === 3;
              return (
                <div
                  key={x}
                  style={{
                    padding: '8px 12px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    color: active ? 'var(--accent-darker)' : 'var(--gray-700)',
                    background: active ? '#fff' : 'transparent',
                    border: active ? '1px solid hsl(20 12% 10% / 0.08)' : '1px solid transparent',
                    borderRadius: 8,
                    marginBottom: 4,
                    fontWeight: active ? 600 : 500,
                  }}
                >
                  {x}
                </div>
              );
            })}
          </div>
          {/* Body */}
          <div style={{ padding: 20, overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    color: 'var(--gray-500)',
                    textTransform: 'uppercase',
                  }}
                >
                  Tesorería · Resumen
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    fontWeight: 700,
                    color: 'var(--foreground)',
                    letterSpacing: '-0.02em',
                    marginTop: 2,
                  }}
                >
                  Marzo 2026
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <span
                  style={{
                    padding: '6px 10px',
                    fontSize: 11,
                    background: '#fff',
                    border: '1px solid hsl(20 12% 10% / 0.08)',
                    borderRadius: 8,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--gray-700)',
                  }}
                >
                  30 días
                </span>
                <span
                  style={{
                    padding: '6px 10px',
                    fontSize: 11,
                    background: 'var(--gray-900)',
                    color: 'var(--gray-50)',
                    borderRadius: 8,
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  + Nuevo
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 12,
                marginBottom: 16,
              }}
            >
              {kpis.map((k) => (
                <div
                  key={k.l}
                  style={{
                    background: '#fff',
                    border: '1px solid hsl(20 12% 10% / 0.08)',
                    borderRadius: 10,
                    padding: 12,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 9,
                      color: 'var(--gray-500)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {k.l}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 18,
                      marginTop: 4,
                      letterSpacing: '-0.02em',
                      color: 'var(--foreground)',
                    }}
                  >
                    {k.v}
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--accent-dark)', marginTop: 2 }}>{k.t}</div>
                </div>
              ))}
            </div>
            {/* Chart */}
            <div
              style={{
                background: '#fff',
                border: '1px solid hsl(20 12% 10% / 0.08)',
                borderRadius: 10,
                padding: 14,
                height: big ? 180 : 120,
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--foreground)' }}>
                  Flujo mensual
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--gray-500)' }}>
                  Gs. millones
                </span>
              </div>
              <svg
                viewBox="0 0 400 120"
                style={{ width: '100%', height: 'calc(100% - 22px)' }}
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="aula-spark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="var(--accent)" stopOpacity="0.32" />
                    <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 L40,70 L80,60 L120,72 L160,45 L200,52 L240,30 L280,40 L320,22 L360,32 L400,15 L400,120 L0,120 Z"
                  fill="url(#aula-spark)"
                />
                <path
                  d="M0,80 L40,70 L80,60 L120,72 L160,45 L200,52 L240,30 L280,40 L320,22 L360,32 L400,15"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
