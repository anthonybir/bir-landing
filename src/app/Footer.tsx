'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WHATSAPP_URL, WHATSAPP_EN_URL } from './WhatsAppFloat';

const es = {
  blurb:
    'Sistemas de gestión e IA gobernada para entender tu organización y decidir con claridad.',
  site: 'Sitio',
  contact: 'Contacto',
  whatsapp: 'WhatsApp',
  location: 'Lambaré, Paraguay',
  links: [
    { href: '/servicios', label: 'Servicios' },
    { href: '/ia-gobernada', label: 'IA gobernada' },
    { href: '/aula', label: 'Aula' },
    { href: '/casos', label: 'Casos' },
    { href: '/blog', label: 'Blog' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ],
  langSwitch: { href: '/en', label: 'English · Relocation services' },
};

const en = {
  blurb:
    'Paraguay residency support for English-speaking families, led from Lambaré.',
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
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/');
  const t = isEnglish ? en : es;

  return (
    <footer className="site-footer" lang={isEnglish ? "en" : "es"}>
      <div className="page-container footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src="/logos/abn-lockup-horizontal-teal.svg"
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
            <ul className="footer-links font-sans text-base">
              {t.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li className="footer-language">
                <Link href={t.langSwitch.href} className="text-brand-cream-muted">
                  {t.langSwitch.label}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="label-caps mb-4">{t.contact}</p>
            <ul className="footer-contact font-sans text-base">
              <li>
                <a href="mailto:anthony@bir.com.py">anthony@bir.com.py</a>
              </li>
              <li>
                <a href={isEnglish ? WHATSAPP_EN_URL : WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {t.whatsapp}
                </a>
              </li>
              <li className="text-brand-cream-muted">{t.location}</li>
            </ul>
          </div>
        </div>

        <p className="footer-copyright font-sans text-xs text-brand-cream-muted">
          © {new Date().getFullYear()} Agencia Bir Núñez · bir.com.py
        </p>
      </div>
    </footer>
  );
}
