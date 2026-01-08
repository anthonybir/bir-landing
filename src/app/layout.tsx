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
  title: "ABN | Agencia Bir Nuñez - Consultoría en Transformación Institucional",
  description: "Diseñamos sistemas de gobernanza, educación y tecnología para organizaciones que perduran. Consultoría institucional en Paraguay.",
  keywords: ["consultoría", "transformación institucional", "Paraguay", "educación", "gobernanza", "tecnología"],
  authors: [{ name: "Agencia Bir Nuñez" }],
  openGraph: {
    title: "ABN | Consultoría en Transformación Institucional",
    description: "Estructura honesta para organizaciones que perduran",
    url: "https://bir.com.py",
    siteName: "Agencia Bir Nuñez",
    locale: "es_PY",
    type: "website",
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
