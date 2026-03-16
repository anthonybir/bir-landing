'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const SECTIONS = ['divisiones', 'casos', 'equipo', 'contacto'] as const;

const LABELS: Record<string, string> = {
  divisiones: 'Divisiones',
  casos: 'Casos',
  equipo: 'Equipo',
  contacto: 'Hablemos',
};

export default function NavBar() {
  const [active, setActive] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-lg border-b border-[#1A1A1A]/5">
      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[#C7A54A] transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <nav className="font-sans px-6 md:px-12 py-5 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Image src="/logos/abn-frame-lockup-light.svg" alt="Agencia Bir Nuñez" width={300} height={88} priority className="hidden md:block h-20 w-auto hover:opacity-80 transition-opacity duration-200" />
          <Image src="/logos/abn-frame-light.svg" alt="ABN" width={40} height={34} priority className="md:hidden h-9 w-auto" />
        </div>
        <div className="flex items-center gap-6">
          {SECTIONS.filter((s) => s !== 'contacto').map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm font-medium transition-colors hidden md:block ${
                active === id ? 'text-accent' : 'hover:text-accent'
              }`}
            >
              {LABELS[id]}
            </a>
          ))}
          <a
            href="#contacto"
            className={`text-sm font-medium px-4 py-2 rounded-sm transition-colors hidden md:block ${
              active === 'contacto'
                ? 'bg-[#C7A54A] text-background'
                : 'bg-foreground text-background hover:bg-foreground/90'
            }`}
          >
            Hablemos
          </a>
        </div>
      </nav>
      <div className="md:hidden px-6 md:px-12 pb-4 max-w-7xl mx-auto">
        <div className="mobile-nav-strip flex gap-2 overflow-x-auto pb-1">
          {SECTIONS.filter((s) => s !== 'contacto').map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`mobile-nav-chip ${
                active === id ? 'border-[#C7A54A]/40 bg-[#C7A54A]/10 text-[#9A7B30]' : ''
              }`}
            >
              {LABELS[id]}
            </a>
          ))}
          <a
            href="#contacto"
            className={`mobile-nav-chip mobile-nav-chip-cta ${
              active === 'contacto'
                ? 'bg-[#C7A54A] text-background border-[#C7A54A]'
                : 'bg-foreground text-background border-[#1A1A1A]'
            }`}
          >
            Hablemos
          </a>
        </div>
      </div>
    </header>
  );
}
