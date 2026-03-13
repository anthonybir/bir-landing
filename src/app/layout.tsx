import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
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
      <body className={`${dmSerif.variable} ${outfit.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
