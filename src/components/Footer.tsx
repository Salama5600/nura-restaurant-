import React from 'react';
import {Instagram, Mail, MapPin, Phone} from 'lucide-react';
import {useApp} from '../context/AppContext';
import {BRANCHES} from '../data/restaurantData';
import {CurrencyCode, PageRoute} from '../types';
import {BrandEmblem} from './BrandMark';

const FOOTER_LINKS: {page: PageRoute; labelKey: string}[] = [
  {page: 'home', labelKey: 'nav.home'},
  {page: 'menu', labelKey: 'nav.menu'},
  {page: 'about', labelKey: 'nav.about'},
  {page: 'gallery', labelKey: 'nav.gallery'},
  {page: 'reservation', labelKey: 'nav.reservation'},
  {page: 'contact', labelKey: 'nav.contact'},
];

const CURRENCIES: CurrencyCode[] = ['USD', 'SAR', 'AED', 'QAR'];

export const Footer: React.FC = () => {
  const {navigate, lang, currency, setCurrency, t} = useApp();

  return (
    <footer className="bg-olive text-cream border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                navigate('home');
              }}
              className="inline-flex items-center gap-3 text-cream"
            >
              <BrandEmblem size={30} className="text-gold-bright" />
              <span className="font-serif text-2xl font-semibold tracking-[0.14em]">
                {t('brand.name')}
              </span>
            </a>
            <p className="text-sm text-cream/75 leading-relaxed max-w-sm">
              {t('footer.tagline')}
            </p>
            <p className="text-xs text-gold-bright font-medium">
              {t('footer.hours')}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xs font-semibold tracking-wider text-gold-bright">
              {t('footer.navigation')}
            </h2>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.map((item) => (
                <li key={item.page}>
                  <a
                    href={item.page === 'home' ? '#' : `#${item.page}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.page);
                    }}
                    className="text-cream/80 hover:text-gold-bright transition-colors"
                  >
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Gulf Branches Column */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xs font-semibold tracking-wider text-gold-bright">
              {t('footer.branches')}
            </h2>
            <ul className="space-y-3 text-sm text-cream/80">
              {BRANCHES.map((branch) => (
                <li key={branch.id} className="flex items-start gap-2.5">
                  <MapPin
                    className="w-4 h-4 text-gold-bright mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="font-medium text-cream">
                      {branch.city[lang]}
                    </span>
                    <span className="mx-1.5 text-cream/40" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-cream/70">{branch.district[lang]}</span>
                    <div className="text-xs text-cream/60 tabular-nums mt-0.5" dir="ltr">
                      {branch.phone}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Currency & Connect */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xs font-semibold tracking-wider text-gold-bright">
              {t('footer.currency')}
            </h2>
            <div
              role="group"
              aria-label={t('footer.currency')}
              className="inline-flex flex-wrap gap-1.5"
            >
              {CURRENCIES.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setCurrency(code)}
                  aria-pressed={currency === code}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-medium tabular-nums transition-colors cursor-pointer ${
                    currency === code
                      ? 'bg-gold-bright text-olive-deep'
                      : 'bg-white/10 text-cream/80 hover:bg-white/15'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${BRANCHES[0].phone.replace(/\s+/g, '')}`}
                aria-label="Call Riyadh Concierge"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-cream/80 hover:text-gold-bright hover:border-gold-bright transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${BRANCHES[0].email}`}
                aria-label="Email NŪRA Concierge"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-cream/80 hover:text-gold-bright hover:border-gold-bright transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('contact');
                }}
                aria-label="View branches and social channels"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-cream/80 hover:text-gold-bright hover:border-gold-bright transition-colors"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>{t('footer.copyright')}</p>
          <p className="tabular-nums">
            {lang === 'en' ? 'Riyadh · Dubai · Doha' : 'الرياض · دبي · الدوحة'}
          </p>
        </div>
      </div>
    </footer>
  );
};
