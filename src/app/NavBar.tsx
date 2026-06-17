'use client';

import { useState } from 'react';
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
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const links = isEnglish ? LINKS_EN : LINKS_ES;
  const ctaHref = isEnglish ? '/en#contact' : '/contacto';
  const ctaLabel = isEnglish ? 'Contact' : 'Contacto';

  return (
    <header className="site-header">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8"
        aria-label="Principal"
      >
        <Link href="/" aria-label="ABN, Agencia Bir Núñez, inicio" onClick={() => setOpen(false)}>
          <Image
            src="/logos/abn-lockup-horizontal-teal.svg"
            alt="ABN, Agencia Bir Núñez"
            width={171}
            height={27}
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-sans text-base transition-colors ${
                pathname === l.href || pathname.startsWith(`${l.href}/`)
                  ? 'font-medium text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href={ctaHref} className="btn-secondary !h-10 !px-4 text-sm">
            {ctaLabel}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-gray-900 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
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
        <div id="mobile-menu" className="border-t border-gray-200 px-4 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 font-sans text-base text-gray-900"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            className="mt-3 block py-3 font-sans text-base font-medium text-gray-900"
            onClick={() => setOpen(false)}
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </header>
  );
}
