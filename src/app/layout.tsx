import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import WhatsAppFloat from "./WhatsAppFloat";
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
  title: "ABN · Orden institucional convertido en software",
  description: "ABN ordena instituciones y convierte ese criterio en software con IA gobernada. Diagnóstico, sistemas en producción y acompañamiento para colegios, iglesias y redes de formación en Paraguay.",
  openGraph: {
    title: "ABN · Orden institucional convertido en software",
    description: "Ordenamos la operación, construimos el sistema y usamos IA gobernada donde devuelve tiempo sin ceder control.",
    url: "https://bir.com.py",
    siteName: "Agencia Bir Núñez",
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
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${instrumentSans.variable} ${geistMono.variable} ${satoshi.variable}`}
    >
      <body className="antialiased">
        <div className="flex min-h-screen flex-col text-foreground">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
