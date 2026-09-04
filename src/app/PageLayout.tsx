import type { ReactNode } from 'react';
import Link from 'next/link';

export function PageIntro({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return (
    <section className="page-container page-intro">
      <p className="label-caps">{label}</p>
      <h1 className="display display-hero">{title}</h1>
      {children && <div className="page-intro-copy">{children}</div>}
    </section>
  );
}

export function ContactClose({ title = 'Hablemos de tu sistema.', children }: { title?: string; children: ReactNode }) {
  return (
    <section className="page-container contact-close">
      <div>
        <h2 className="display section-title">{title}</h2>
        <p className="body-copy mt-5">{children}</p>
      </div>
      <Link href="/contacto" className="btn-primary">Hablemos de tu sistema</Link>
    </section>
  );
}
