import React, {useState} from 'react';
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Sparkles,
} from 'lucide-react';
import {useApp} from '../context/AppContext';
import {BRANCHES} from '../data/restaurantData';

export const ContactPage: React.FC = () => {
  const {lang, navigate, t} = useApp();
  const [selectedBranchId, setSelectedBranchId] = useState(BRANCHES[0].id);

  const activeBranch =
    BRANCHES.find((b) => b.id === selectedBranchId) ?? BRANCHES[0];

  return (
    <div className="pt-24 lg:pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <header className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-3 text-gold text-xs font-semibold tracking-wide">
            <span className="w-7 h-px bg-gold" aria-hidden="true" />
            <span>{t('contact.eyebrow')}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-olive">
            {t('contact.title')}
          </h1>
          <p className="text-base text-muted leading-relaxed">
            {t('contact.description')}
          </p>
        </header>

        {/* Branch Selector Tabs */}
        <div
          role="tablist"
          aria-label="NŪRA Gulf branches"
          className="flex flex-wrap items-center gap-2"
        >
          {BRANCHES.map((branch) => {
            const active = branch.id === activeBranch.id;
            return (
              <button
                key={branch.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedBranchId(branch.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-olive text-cream'
                    : 'bg-sand/75 text-olive hover:bg-white border border-olive/10'
                }`}
              >
                {branch.city[lang]}
              </button>
            );
          })}
        </div>

        {/* Branch Details & Interactive Location Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-olive/10 space-y-6">
            <div>
              <p className="text-xs font-semibold text-gold">
                {activeBranch.city[lang]}
              </p>
              <h2 className="font-serif text-3xl font-semibold text-olive mt-1">
                {activeBranch.district[lang]}
              </h2>
            </div>

            <dl className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-olive">
                    {t('contact.addressLabel')}
                  </dt>
                  <dd className="text-muted mt-0.5 leading-relaxed">
                    {activeBranch.address[lang]}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-olive">
                    {t('contact.hoursLabel')}
                  </dt>
                  <dd className="text-muted mt-0.5 tabular-nums">
                    {activeBranch.hours[lang]}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-olive">
                    {t('contact.phoneLabel')}
                  </dt>
                  <dd className="mt-0.5">
                    <a
                      href={`tel:${activeBranch.phone.replace(/\s+/g, '')}`}
                      dir="ltr"
                      className="text-olive hover:text-gold tabular-nums font-medium"
                    >
                      {activeBranch.phone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-olive">
                    {t('contact.emailLabel')}
                  </dt>
                  <dd className="mt-0.5">
                    <a
                      href={`mailto:${activeBranch.email}`}
                      dir="ltr"
                      className="text-olive hover:text-gold font-medium"
                    >
                      {activeBranch.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-olive/10">
                <Sparkles className="w-4 h-4 text-gold mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-olive">
                    {t('contact.valetLabel')}
                  </dt>
                  <dd className="text-muted mt-0.5 leading-relaxed">
                    {activeBranch.valetNote[lang]}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => navigate('reservation')}
                className="px-6 py-2.5 rounded-full bg-gold-bright hover:bg-gold text-olive-deep text-sm font-semibold transition-colors cursor-pointer"
              >
                {t('actions.reserve')}
              </button>
              <a
                href={activeBranch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-olive/8 hover:bg-olive/14 text-olive text-sm font-medium transition-colors"
              >
                <span>{t('actions.openMaps')}</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Architectural Map Preview Card */}
          <div className="lg:col-span-6 bg-olive text-cream rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[360px]">
            <svg
              viewBox="0 0 600 400"
              className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="nura-grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                  />
                </pattern>
              </defs>
              <rect width="600" height="400" fill="url(#nura-grid)" />
              <path
                d="M 40 310 Q 190 220 310 210 T 560 90"
                fill="none"
                stroke="#C89E68"
                strokeWidth="2.5"
                strokeDasharray="6 6"
              />
              <circle cx="310" cy="210" r="46" fill="none" stroke="#C89E68" strokeWidth="1" />
              <circle cx="310" cy="210" r="14" fill="#C89E68" />
            </svg>

            <div className="relative space-y-2">
              <p className="text-xs font-semibold text-gold-bright">
                {t('contact.mapEyebrow')}
              </p>
              <h3 className="font-serif text-3xl font-semibold">
                {activeBranch.city[lang]} · {activeBranch.district[lang]}
              </h3>
              <p className="text-xs text-cream/70 tabular-nums" dir="ltr">
                {activeBranch.coordinates}
              </p>
            </div>

            <div className="relative pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/15">
              <div className="flex items-center gap-2 text-xs text-cream/80">
                <Navigation className="w-4 h-4 text-gold-bright" aria-hidden="true" />
                <span>{activeBranch.address[lang]}</span>
              </div>
              <a
                href={activeBranch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream text-olive text-xs font-semibold hover:bg-gold-bright transition-colors whitespace-nowrap shrink-0"
              >
                <span>{t('actions.openMaps')}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
