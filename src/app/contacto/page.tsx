import { pageMetadata } from '../page-metadata';
import ContactForm from './ContactForm';
import { WHATSAPP_URL } from '../WhatsAppFloat';

export const metadata = pageMetadata('Contacto para sistemas de gestión e IA', 'Cuéntanos qué necesita tu organización. Contacta con Anthony Bir y ABN en Lambaré, Paraguay, para conversar sobre procesos, sistemas de gestión e IA.', '/contacto', 'ABN');

export default function ContactoPage() {
  return (
    <section className="page-container page-intro">
      <p className="label-caps mb-6">Contacto</p>
      <h1 className="display display-hero max-w-3xl">
        Cuéntame qué necesitas resolver.
      </h1>
      <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-gray-600">
        Cuéntame qué está pasando en tu organización y dónde necesitas ayuda.
        No hace falta que tengas una solución definida. A partir de ahí podemos
        ver si ABN puede ayudar y por dónde empezar.
      </p>

      <div className="mt-16 grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <ContactForm />

        <aside className="space-y-10 md:pt-2" aria-label="Otras vías de contacto">
          <div>
            <p className="label-caps mb-3">También puedes escribirme</p>
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
                WhatsApp +595 994 790 348
              </a>
            </p>
          </div>

          <div>
            <p className="label-caps mb-3">Qué esperar</p>
            <ul className="space-y-3 font-sans text-base leading-relaxed text-gray-600">
              <li>Revisamos qué necesita tu organización.</li>
              <li>Acordamos el alcance antes de empezar.</li>
              <li>Si ABN no es la mejor opción, te lo diremos.</li>
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
