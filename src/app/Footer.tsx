import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="h-px bg-gradient-to-r from-transparent via-[#0F6E56]/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="max-w-md">
            <Image
              src="/logos/abn-lockup-horizontal-white.svg"
              alt="Agencia Bir Nuñez"
              width={200}
              height={50}
              className="mb-4 h-10 w-auto"
            />
            <p className="font-sans text-2xl leading-tight text-background md:text-3xl">
              Consultoría en transformación institucional para organizaciones que no
              pueden operar a punta de improvisación.
            </p>
          </div>
          <div className="flex gap-12 md:justify-end">
            <div>
              <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-accent">
                Secciones
              </p>
              <nav className="space-y-2 font-sans text-sm">
                <Link href="/aula" className="block text-background/58 transition-colors hover:text-background">Plataforma AULA</Link>
                <Link href="/servicios" className="block text-background/58 transition-colors hover:text-background">Servicios</Link>
                <Link href="/casos" className="block text-background/58 transition-colors hover:text-background">Casos</Link>
                <Link href="/nosotros" className="block text-background/58 transition-colors hover:text-background">Nosotros</Link>
                <Link href="/#contacto" className="block text-background/58 transition-colors hover:text-background">Contacto</Link>
              </nav>
            </div>
            <div>
              <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-accent">
                Contacto
              </p>
              <div className="space-y-2 font-sans text-sm text-background/58">
                <p>Lambaré, Paraguay</p>
                <p>anthony@bir.com.py</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 mt-10 h-px bg-background/10" />
        <p className="font-sans text-xs text-background/30">
          © {new Date().getFullYear()} Agencia Bir Nuñez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
