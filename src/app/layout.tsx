import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Instrument_Sans, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
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
    template: '%s | ABN · Agencia Bir Núñez',
    default: 'ABN · Te construimos el sistema',
  },
  description: "Tu institución no tiene un sistema. ABN lo construye: administración educativa, financiera y legal, bajo una sola dirección.",
  openGraph: {
    title: "ABN · Te construimos el sistema",
    description: "Educación, finanzas y derecho. Una sola dirección.",
    url: "https://bir.com.py",
    siteName: "Agencia Bir Núñez",
    locale: "es_PY",
    type: "website",
    images: "/opengraph-image",
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ABN · Agencia Bir Núñez',
  url: 'https://bir.com.py',
  logo: 'https://bir.com.py/icon.svg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lambaré',
    addressCountry: 'PY',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'anthony@bir.com.py',
  },
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
      className={`${instrumentSans.variable} ${geistMono.variable} ${satoshi.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="flex min-h-[100dvh] flex-col text-foreground">
          <a href="#contenido" className="skip-link">
            Ir al contenido
          </a>
          <NavBar />
          <main id="contenido" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
