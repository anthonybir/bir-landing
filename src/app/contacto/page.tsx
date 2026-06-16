import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import { WHATSAPP_URL } from '../WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Contacto | ABN · Agencia Bir Núñez',
  description:
    'Iniciá la conversación de diagnóstico. Respuesta habitual en 48 horas hábiles, por formulario, email o WhatsApp.',
};

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-32 pt-24 md:px-8">
      <p className="label-caps settle mb-6">Contacto</p>
      <h1 className="display display-hero settle settle-2 max-w-3xl">
        Empecemos por el diagnóstico.
      </h1>
      <p className="settle settle-3 mt-8 max-w-xl font-sans text-base leading-relaxed text-gray-600">
        Contanos qué necesita orden en tu institución. Una conversación inicial
        no compromete a nada y suele ahorrar meses de decisiones a ciegas.
      </p>

      <div className="mt-16 grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <ContactForm />

        <aside className="space-y-10 md:pt-2" aria-label="Otras vías de contacto">
          <div>
            <p className="label-caps mb-3">Directo</p>
            <p className="font-sans text-base">
              <a href="mailto:anthony@bir.com.py" className="link-quiet">
                anthony@bir.com.py
              </a>
            </p>
            <p className="mt-3 font-sans text-base">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet"
              >
                WhatsApp +595 991 402 548
              </a>
            </p>
          </div>

          <div>
            <p className="label-caps mb-3">Qué esperar</p>
            <ul className="space-y-3 font-sans text-base leading-relaxed text-gray-600">
              <li>Respuesta dentro de 48 horas hábiles.</li>
              <li>Primera conversación sin costo ni compromiso.</li>
              <li>Si no somos la mejor opción, te lo decimos.</li>
            </ul>
          </div>

          <div>
            <p className="label-caps mb-3">Ubicación</p>
            <p className="font-sans text-base text-gray-600">
              Lambaré, Paraguay · trabajamos en todo el país y la región.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
