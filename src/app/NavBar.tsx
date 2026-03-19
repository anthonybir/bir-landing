'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const NAV_ITEMS = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/casos', label: 'Casos' },
  { href: '/nosotros', label: 'Nosotros' },
] as const;

export default function NavBar() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
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
          <Link href="/">
            <Image src="/logos/abn-frame-lockup-light.svg" alt="Agencia Bir Nuñez" width={300} height={88} priority className="hidden md:block h-20 w-auto hover:opacity-80 transition-opacity duration-200" />
            <Image src="/logos/abn-frame-light.svg" alt="ABN" width={40} height={34} priority className="md:hidden h-9 w-auto" />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors hidden md:block ${
                pathname === href ? 'text-accent' : 'hover:text-accent'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#contacto"
            className={`text-sm font-medium px-4 py-2 rounded-sm transition-colors hidden md:block ${
              pathname === '/' ? 'bg-foreground text-background hover:bg-foreground/90' : 'bg-foreground text-background hover:bg-foreground/90'
            }`}
          >
            Hablemos
          </Link>
        </div>
      </nav>
      <div className="md:hidden px-6 md:px-12 pb-4 max-w-7xl mx-auto">
        <div className="mobile-nav-strip flex gap-2 overflow-x-auto pb-1">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`mobile-nav-chip ${
                pathname === href ? 'border-[#C7A54A]/40 bg-[#C7A54A]/10 text-[#9A7B30]' : ''
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#contacto"
            className="mobile-nav-chip mobile-nav-chip-cta bg-foreground text-background border-[#1A1A1A]"
          >
            Hablemos
          </Link>
        </div>
      </div>
    </header>
  );
}
