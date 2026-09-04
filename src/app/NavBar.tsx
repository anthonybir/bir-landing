'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS_ES = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/ia-gobernada', label: 'IA gobernada' },
  { href: '/casos', label: 'Casos' },
  { href: '/blog', label: 'Blog' },
  { href: '/nosotros', label: 'Nosotros' },
] as const;

const LINKS_EN = [{ href: '/', label: 'Español' }] as const;

export default function NavBar() {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const open = openPath === pathname;
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/');

  useEffect(() => {
    document.documentElement.lang = isEnglish ? 'en' : 'es';
  }, [isEnglish]);
  const links = isEnglish ? LINKS_EN : LINKS_ES;
  const ctaHref = isEnglish ? '/en#contact' : '/contacto';
  const ctaLabel = isEnglish ? 'Contact' : 'Contacto';

  return (
    <header className="site-header" lang={isEnglish ? 'en' : 'es'} onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        setOpenPath(null);
        menuButton.current?.focus();
      }
    }}>
      <a href="#contenido" className="skip-link">{isEnglish ? 'Skip to content' : 'Ir al contenido'}</a>
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8"
        aria-label={isEnglish ? 'Main navigation' : 'Principal'}
      >
        <Link href="/" aria-label={isEnglish ? 'ABN, Agencia Bir Núñez, home' : 'ABN, Agencia Bir Núñez, inicio'} onClick={() => setOpenPath(null)}>
          <Image
            src="/logos/abn-lockup-horizontal-teal.svg"
            alt="ABN, Agencia Bir Núñez"
            width={171}
            height={27}
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 lg:flex lg:gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href || pathname.startsWith(`${l.href}/`) ? 'page' : undefined}
              className={`font-sans text-base transition-colors ${
                pathname === l.href || pathname.startsWith(`${l.href}/`)
                  ? 'font-medium text-gray-900 underline decoration-gray-300 underline-offset-8'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href={ctaHref} aria-current={pathname === ctaHref ? 'page' : undefined} className="btn-secondary !h-10 !px-4">
            {ctaLabel}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md text-gray-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={isEnglish ? (open ? 'Close menu' : 'Open menu') : (open ? 'Cerrar menú' : 'Abrir menú')}
          onClick={() => setOpenPath(open ? null : pathname)}
          ref={menuButton}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-gray-200 px-4 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href || pathname.startsWith(`${l.href}/`) ? 'page' : undefined}
              className="block py-3 font-sans text-base text-gray-900"
              onClick={() => setOpenPath(null)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            aria-current={pathname === ctaHref ? 'page' : undefined}
            className="mt-3 block py-3 font-sans text-base font-medium text-gray-900"
            onClick={() => setOpenPath(null)}
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </header>
  );
}
