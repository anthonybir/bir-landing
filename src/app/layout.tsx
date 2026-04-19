import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

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
    <html lang="es" className={`${instrumentSans.variable} ${instrumentSerif.variable} ${geistMono.variable} ${satoshi.variable}`}>
      <body className="antialiased">
        <div className="min-h-screen bg-background text-foreground">
          <NavBar />
          <main>{children}</main>
          <WhatsAppFloat />
          <Footer />
        </div>
      </body>
    </html>
  );
}
