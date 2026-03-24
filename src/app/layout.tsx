import type { Metadata } from "next";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import "./globals.css";

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
      <body className="antialiased">
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
