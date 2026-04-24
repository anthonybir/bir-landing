'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const NAV_ITEMS = [
  { href: '/aula', label: 'AULA' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/casos', label: 'Casos' },
  { href: '/nosotros', label: 'Nosotros' },
] as const;

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/88 backdrop-blur-xl">
      <div className="scroll-progress" />
      <nav className="font-sans px-5 md:px-10 py-3.5 md:py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/logos/abn-lockup-horizontal-teal.svg"
              alt="Agencia Bir Nuñez"
              width={300}
              height={88}
              priority
              className="hidden md:block h-14 w-auto transition-opacity duration-200 hover:opacity-80"
            />
            <Image
              src="/logos/abn-mark-teal.svg"
              alt="ABN"
              width={40}
              height={34}
              priority
              className="md:hidden h-7 w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center gap-5">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hidden md:block text-[0.82rem] font-medium tracking-[0.03em] transition-colors ${
                pathname === href
                  ? 'text-foreground'
                  : 'text-foreground/75 hover:text-foreground'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#contacto"
            className="hidden md:block rounded-full bg-foreground px-4 py-2 text-[0.78rem] font-medium tracking-[0.03em] text-background transition-colors hover:bg-foreground/90"
          >
            Hablemos
          </Link>
        </div>
      </nav>
      <div className="mx-auto max-w-7xl px-5 pb-3 md:hidden">
        <div className="mobile-nav-strip flex gap-2 overflow-x-auto pb-1">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`mobile-nav-chip ${
                pathname === href ? 'border-transparent bg-foreground/[0.08] text-foreground' : ''
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#contacto"
            className="mobile-nav-chip mobile-nav-chip-cta bg-foreground text-background border-foreground"
          >
            Hablemos
          </Link>
        </div>
      </div>
    </header>
  );
}
