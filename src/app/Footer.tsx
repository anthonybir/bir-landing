import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="h-px bg-gradient-to-r from-transparent via-[#C7A54A]/40 to-transparent" />
      <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <Image src="/logos/abn-frame-lockup-dark.svg" alt="Agencia Bir Nuñez" width={200} height={50} className="h-10 w-auto mb-3" />
            <p className="font-sans text-sm text-background/40">
              Consultoría en Transformación Institucional
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="font-sans text-xs tracking-widest text-accent uppercase mb-3">Secciones</p>
              <nav className="font-sans text-sm space-y-2">
                <Link href="/servicios" className="block text-background/50 hover:text-background transition-colors">Servicios</Link>
                <Link href="/casos" className="block text-background/50 hover:text-background transition-colors">Casos</Link>
                <Link href="/nosotros" className="block text-background/50 hover:text-background transition-colors">Nosotros</Link>
                <Link href="/#contacto" className="block text-background/50 hover:text-background transition-colors">Contacto</Link>
              </nav>
            </div>
            <div>
              <p className="font-sans text-xs tracking-widest text-accent uppercase mb-3">Contacto</p>
              <div className="font-sans text-sm space-y-2 text-background/50">
                <p>Lambaré, Paraguay</p>
                <p>anthony@bir.com.py</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px bg-background/10 mb-6" />
        <p className="font-sans text-xs text-background/30">
          © {new Date().getFullYear()} Agencia Bir Nuñez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
