import { config } from '@/lib/config';
import { services } from '@/lib/services-data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-tight">{config.company.name}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {config.company.claim}
            </p>
            <div className="flex gap-4">
              {/* Optional Social Icons here */}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Leistungen</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <a href={`/leistungen/${service.slug}`} className="text-slate-400 hover:text-accent transition-colors">
                    {service.titel}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Kontakt</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <strong className="block text-slate-300">Adresse</strong>
                {config.company.address.street}<br />
                {config.company.address.zip} {config.company.address.city}
              </li>
              <li>
                <strong className="block text-slate-300">Telefon</strong>
                <a href={`tel:${config.company.phone}`} className="hover:text-accent transition-colors">{config.company.phone}</a>
              </li>
              <li>
                <strong className="block text-slate-300">E-Mail</strong>
                <a href={`mailto:${config.company.email}`} className="hover:text-accent transition-colors">{config.company.email}</a>
              </li>
              <li>
                <strong className="block text-slate-300">Öffnungszeiten</strong>
                <div className="whitespace-pre-line text-sm mt-1 space-y-1">
                  <div>{config.company.openingHours.weekdays}</div>
                  <div>{config.company.openingHours.saturday}</div>
                  <div className="text-accent font-medium mt-2">{config.company.openingHours.emergency}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <a href="/impressum" className="text-slate-400 hover:text-white transition-colors">Impressum</a>
              </li>
              <li>
                <a href="/datenschutz" className="text-slate-400 hover:text-white transition-colors">Datenschutz</a>
              </li>
              <li>
                <a href="/agb" className="text-slate-400 hover:text-white transition-colors">AGB</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {currentYear} {config.company.name}. Alle Rechte vorbehalten.</p>
          {config.features.cookie_consent && (
            <button className="mt-4 md:mt-0 hover:text-white transition-colors underline underline-offset-4 pointer-events-auto">
              Cookie-Einstellungen
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
