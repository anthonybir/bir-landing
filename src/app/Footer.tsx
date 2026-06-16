'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WHATSAPP_URL } from './WhatsAppFloat';

const es = {
  blurb:
    'Agencia de servicios para instituciones: consultoría, sistemas y acompañamiento bajo una sola dirección.',
  site: 'Sitio',
  contact: 'Contacto',
  whatsapp: 'WhatsApp',
  location: 'Lambaré, Paraguay',
  links: [
    { href: '/servicios', label: 'Servicios' },
    { href: '/casos', label: 'Casos' },
    { href: '/blog', label: 'Blog' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ],
  langSwitch: { href: '/en', label: 'English · Relocation services' },
};

const en = {
  blurb:
    'A services agency for human-scale institutions: consulting, systems and relocation support under one direction.',
  site: 'Site',
  contact: 'Contact',
  whatsapp: 'WhatsApp',
  location: 'Lambaré, Paraguay',
  links: [
    { href: '/en', label: 'Relocation services' },
    { href: '/casos', label: 'Casos (ES)' },
    { href: '/nosotros', label: 'Nosotros (ES)' },
  ],
  langSwitch: { href: '/', label: 'Español · Sitio principal' },
};

export default function Footer() {
  const pathname = usePathname();
  const t = pathname.startsWith('/en') ? en : es;

  return (
    <footer className="footer-band">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_auto_auto] md:gap-24">
          <div className="max-w-sm">
            <Image
              src="/logos/abn-lockup-horizontal-white.svg"
              alt="ABN, Agencia Bir Núñez"
              width={190}
              height={30}
            />
            <p className="mt-6 font-sans text-base leading-relaxed text-brand-cream-muted">
              {t.blurb}
            </p>
          </div>

          <nav aria-label={t.site}>
            <p className="label-caps mb-4">{t.site}</p>
            <ul className="space-y-3 font-sans text-base">
              {t.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href={t.langSwitch.href} className="text-brand-cream-muted">
                  {t.langSwitch.label}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="label-caps mb-4">{t.contact}</p>
            <ul className="space-y-3 font-sans text-base">
              <li>
                <a href="mailto:anthony@bir.com.py">anthony@bir.com.py</a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {t.whatsapp}
                </a>
              </li>
              <li className="text-brand-cream-muted">{t.location}</li>
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-white/10 pt-6 font-sans text-xs uppercase tracking-[0.1em] text-brand-cream-muted">
          © {new Date().getFullYear()} Agencia Bir Núñez EAS · bir.com.py
        </p>
      </div>
    </footer>
  );
}
