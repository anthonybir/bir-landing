import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bir.com.py'),
  title: "ABN | Agencia Bir Nuñez - Consultoría en Transformación Institucional",
  description: "Consultoría institucional en Paraguay. Sistemas donde la institución define el estándar y la tecnología lo ejecuta — educación, tecnología, y desarrollo institucional.",
  keywords: ["consultoría", "transformación institucional", "Paraguay", "educación", "gobernanza", "tecnología"],
  authors: [{ name: "Agencia Bir Nuñez" }],
  openGraph: {
    title: "ABN | Consultoría en Transformación Institucional",
    description: "Estructura donde otros improvisan",
    url: "https://bir.com.py",
    siteName: "Agencia Bir Nuñez",
    locale: "es_PY",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "ABN - Consultoría en Transformación Institucional" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABN | Consultoría en Transformación Institucional",
    description: "Estructura donde otros improvisan",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${instrumentSans.variable} ${cormorantGaramond.variable} ${jetbrainsMono.variable} antialiased`}>
        <div className="min-h-screen bg-background text-foreground page-enter">
          <NavBar />
          <main>{children}</main>
          <WhatsAppFloat />
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
