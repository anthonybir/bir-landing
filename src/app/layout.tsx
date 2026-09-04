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
    template: '%s | ABN · Agencia Bir Núñez',
    default: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  twitter: { card: "summary_large_image", title: SITE_TITLE, description: SITE_DESCRIPTION, images: ["/opengraph-image"] },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://bir.com.py",
    siteName: "Agencia Bir Núñez",
    locale: "es_ES",
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
  description: SITE_DESCRIPTION,
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
      className={`${instrumentSerif.variable} ${geistMono.variable} ${satoshi.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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
