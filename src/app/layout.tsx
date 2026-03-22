import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
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
  description: "Consultoría institucional en Latinoamérica. Sistemas donde la institución define el estándar y la tecnología lo ejecuta — educación, tecnología, y desarrollo institucional.",
  openGraph: {
    title: "ABN | Consultoría en Transformación Institucional",
    description: "Estructura donde otros improvisan",
    url: "https://bir.com.py",
    siteName: "Agencia Bir Nuñez",
    locale: "es_PY",
    type: "website",
    images: "/opengraph-image",
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
      </body>
    </html>
  );
}
