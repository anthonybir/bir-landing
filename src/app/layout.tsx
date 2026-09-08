import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Instrument_Serif, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WebMCPTools from "./WebMCPTools";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_TITLE } from "./site-information";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "400 700",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bir.com.py'),
  title: {
    template: '%s | Anthony Bir',
    default: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  twitter: { card: "summary_large_image", title: SITE_TITLE, description: SITE_DESCRIPTION, images: ["/opengraph-image"] },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://bir.com.py",
    siteName: "Anthony Bir",
    locale: "es_ES",
    type: "website",
    images: "/opengraph-image",
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Anthony Bir',
  url: 'https://bir.com.py',
  email: 'anthony@bir.com.py',
  description: SITE_DESCRIPTION,
  jobTitle: 'Presidente del Consejo Administrativo',
  worksFor: { '@type': 'Organization', name: 'AENA · Asociación Educativa Nuevas Alturas' },
  affiliation: [
    { '@type': 'Organization', name: 'IPU Paraguay', description: 'Tesorero' },
    { '@type': 'Organization', name: 'ABN · Agencia Bir Núñez', url: 'https://bir.com.py/servicios', description: 'Fundador' },
  ],
  address: { '@type': 'PostalAddress', addressLocality: 'Lambaré', addressCountry: 'PY' },
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${instrumentSerif.variable} ${geistMono.variable} ${satoshi.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="flex min-h-[100dvh] flex-col text-foreground">
          <NavBar />
          <main id="contenido" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <WebMCPTools />
        <Analytics />
      </body>
    </html>
  );
}
