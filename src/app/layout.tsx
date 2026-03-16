import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
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
  description: "Consultoría institucional en Paraguay. Sistemas donde la institución define el estándar y la tecnología lo ejecuta — educación, derecho de niñez, gestión financiera.",
  keywords: ["consultoría", "transformación institucional", "Paraguay", "educación", "gobernanza", "tecnología"],
  authors: [{ name: "Agencia Bir Nuñez" }],
  openGraph: {
    title: "ABN | Consultoría en Transformación Institucional",
    description: "Estructura donde otros improvisan",
    url: "https://bir.com.py",
    siteName: "Agencia Bir Nuñez",
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABN | Consultoría en Transformación Institucional",
    description: "Estructura donde otros improvisan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${instrumentSans.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
