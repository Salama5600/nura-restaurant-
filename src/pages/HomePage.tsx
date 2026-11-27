import React, {useState} from 'react';
import {
  ArrowRight,
  Calendar,
  ChefHat,
  Flame,
  Gem,
  MapPin,
  Play,
  Star,
  UtensilsCrossed,
} from 'lucide-react';
import {useApp} from '../context/AppContext';
import {
  IMAGES,
  MENU_ITEMS,
  SAMPLE_TESTIMONIALS,
  formatPrice,
} from '../data/restaurantData';
import {BrandEmblem, LaurelWreath} from '../components/BrandMark';
import {VideoPreviewModal} from '../components/VideoPreviewModal';

export const HomePage: React.FC = () => {
  const {lang, currency, navigate, t} = useApp();
  const [videoOpen, setVideoOpen] = useState(false);

  const signatureDishes = MENU_ITEMS.filter((item) => item.featured).slice(0, 4);

  const pillars = [
    {icon: UtensilsCrossed, label: t('pillars.fineDining')},
    {icon: Gem, label: t('pillars.ingredients')},
    {icon: ChefHat, label: t('pillars.chefs')},
    {icon: MapPin, label: t('pillars.locations')},
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-olive-deep text-cream pt-20 overflow-hidden">
        <img
          src={IMAGES.heroSalmon}
          alt={
            lang === 'en'
              ? 'Signature seared salmon plated at NŪRA dining room'
              : 'طبق السلمون المشوي المميز في مطعم نُورا'
          }
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-olive-deep/92 via-olive-deep/68 to-olive-deep/20 rtl:bg-gradient-to-l"
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-xl space-y-6">
            <div className="inline-flex items-center gap-3 text-gold-bright text-xs sm:text-sm font-medium tracking-wide">
              <span className="w-8 h-px bg-gold-bright/80" aria-hidden="true" />
              <span>{t('hero.eyebrow')}</span>
              <span className="w-8 h-px bg-gold-bright/80" aria-hidden="true" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold leading-[1.08] tracking-tight">
              <span className="block text-cream">{t('hero.titleLine1')}</span>
              <span className="block text-gold-bright mt-1">
                {t('hero.titleLine2')}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-cream/85 leading-relaxed max-w-md">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => navigate('menu')}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gold-bright hover:bg-gold text-olive-deep text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{t('actions.exploreMenu')}</span>
                <ArrowRight
                  className="w-4 h-4 rtl:rotate-180"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-medium text-cream hover:text-gold-bright transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center bg-white/5">
                  <Play className="w-3.5 h-3.5 fill-current ms-0.5 rtl:rotate-180" aria-hidden="true" />
                </span>
                <span>{t('actions.watchVideo')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Hospitality Pillars Strip */}
      <section
        aria-label={t('about.eyebrow')}
        className="bg-[#EFE9DC] border-b border-olive/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-olive/10 rtl:sm:divide-x-reverse">
            {pillars.map(({icon: Icon, label}) => (
              <div
                key={label}
                className="flex items-center justify-center gap-3 py-5 px-4 text-center"
              >
                <Icon
                  className="w-5 h-5 text-olive/75 shrink-0"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-olive leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About NŪRA Split + Laurel Metrics */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Dining Room Photo */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-sand shadow-sm min-h-[260px]">
              <img
                src={IMAGES.aboutInterior}
                alt={
                  lang === 'en'
                    ? 'NŪRA warm evening dining room with olive trees and amber pendant lights'
                    : 'صالة الطعام المسائية في نُورا مع أشجار الزيتون والإضاءة الدافئة'
                }
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Editorial Story Intro */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-5 py-2">
              <div className="inline-flex items-center gap-3 text-gold text-xs font-semibold tracking-wide">
                <span className="w-7 h-px bg-gold" aria-hidden="true" />
                <span>{t('about.eyebrow')}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-olive leading-tight">
                {t('about.title')}
              </h2>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {t('about.description')}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => navigate('about')}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-olive hover:bg-olive-soft text-cream text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>{t('actions.ourStory')}</span>
                  <ArrowRight
                    className="w-4 h-4 rtl:rotate-180"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            {/* Laurel Metrics Card */}
            <div className="lg:col-span-3 bg-sand/75 rounded-2xl p-6 border border-olive/8 flex flex-col justify-between gap-6">
              <div className="space-y-5 my-auto">
                <div className="relative flex flex-col items-center text-center py-1">
                  <LaurelWreath className="w-36 h-12 text-gold/75" />
                  <div className="-mt-10">
                    <div className="font-serif text-3xl font-semibold text-olive tabular-nums">
                      10+
                    </div>
                    <div className="text-xs text-muted mt-0.5">
                      {t('about.metricYearsLabel')}
                    </div>
                  </div>
                </div>

                <div className="h-px bg-olive/10 w-3/4 mx-auto" />

                <div className="relative flex flex-col items-center text-center py-1">
                  <LaurelWreath className="w-36 h-12 text-gold/75" />
                  <div className="-mt-10">
                    <div className="font-serif text-3xl font-semibold text-olive tabular-nums">
                      50k+
                    </div>
                    <div className="text-xs text-muted mt-0.5">
                      {t('about.metricGuestsLabel')}
                    </div>
                  </div>
                </div>

                <div className="h-px bg-olive/10 w-3/4 mx-auto" />

                <div className="relative flex flex-col items-center text-center py-1">
                  <LaurelWreath className="w-36 h-12 text-gold/75" />
                  <div className="-mt-10">
                    <div className="inline-flex items-center gap-1 font-serif text-3xl font-semibold text-olive tabular-nums">
                      <span>4.8</span>
                      <Star className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                    </div>
                    <div className="text-xs text-muted mt-0.5">
                      {t('about.metricRatingLabel')}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-muted/85 text-center leading-snug">
                {t('about.sampleMetricsNote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Signature Dishes + Reserve Your Table Block */}
      <section className="pb-16 lg:pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 8 Cols: Signature Dishes */}
            <div className="lg:col-span-8 flex flex-col justify-between gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <h2 className="font-serif text-3xl font-semibold text-olive">
                    {t('signatures.title')}
                  </h2>
                  <span
                    className="hidden sm:inline-block w-14 h-px bg-gold"
                    aria-hidden="true"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => navigate('menu')}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-olive hover:text-gold transition-colors border-b border-olive/30 pb-0.5 cursor-pointer"
                >
                  <span>{t('actions.viewFullMenu')}</span>
                  <ArrowRight
                    className="w-4 h-4 rtl:rotate-180"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {signatureDishes.map((dish) => (
                  <button
                    key={dish.id}
                    type="button"
                    onClick={() => navigate('menu')}
                    className="group text-start bg-sand/65 hover:bg-white rounded-2xl overflow-hidden border border-olive/8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-sand">
                      {dish.image && (
                        <img
                          src={dish.image}
                          alt={dish.name[lang]}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="p-3.5 space-y-1">
                      <h3 className="text-sm font-semibold text-olive truncate">
                        {dish.name[lang]}
                      </h3>
                      <p className="text-sm font-semibold text-olive/85 tabular-nums">
                        {formatPrice(dish.priceUsd, currency, lang)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right 4 Cols: Reserve CTA Card */}
            <div className="lg:col-span-4 bg-olive text-cream rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between gap-6 shadow-sm">
              <BrandEmblem
                size={112}
                className="absolute -top-4 -end-4 text-gold-bright/15 pointer-events-none"
              />
              <div className="relative space-y-3">
                <p className="text-xs font-semibold text-gold-bright tracking-wide">
                  {t('signatures.ctaEyebrow')}
                </p>
                <h2 className="font-serif text-3xl font-semibold leading-tight text-cream">
                  {t('signatures.ctaTitle')}
                </h2>
                <p className="text-sm text-cream/80 leading-relaxed">
                  {t('signatures.ctaDescription')}
                </p>
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => navigate('reservation')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-bright hover:bg-gold text-olive-deep text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>{t('actions.bookTable')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Experience Rhythm + Sample Guest Reflections */}
      <section className="py-16 lg:py-20 bg-[#ECE6D8] border-t border-olive/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Hospitality Rhythm */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-3 text-gold text-xs font-semibold tracking-wide">
                <span className="w-7 h-px bg-gold" aria-hidden="true" />
                <span>{t('experience.eyebrow')}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-olive leading-tight">
                {t('experience.title')}
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {t('experience.body')}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-cream rounded-2xl p-6 border border-olive/8 space-y-2.5">
                <Flame className="w-5 h-5 text-gold" aria-hidden="true" />
                <h3 className="font-serif text-xl font-semibold text-olive">
                  {t('experience.point1Title')}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {t('experience.point1Desc')}
                </p>
              </div>
              <div className="bg-cream rounded-2xl p-6 border border-olive/8 space-y-2.5">
                <BrandEmblem size={20} className="text-gold" />
                <h3 className="font-serif text-xl font-semibold text-olive">
                  {t('experience.point2Title')}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {t('experience.point2Desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Sample Testimonials (Transparently labeled per Blueprint) */}
          <div className="pt-12 border-t border-olive/10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gold tracking-wide">
                  {t('testimonials.eyebrow')}
                </p>
                <h2 className="font-serif text-3xl font-semibold text-olive">
                  {t('testimonials.title')}
                </h2>
              </div>
              <p className="text-xs text-muted">
                {t('testimonials.sampleLabel')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SAMPLE_TESTIMONIALS.map((item) => (
                <figure
                  key={item.id}
                  className="bg-cream rounded-2xl p-6 border border-olive/8 flex flex-col justify-between gap-5"
                >
                  <blockquote className="text-sm text-olive/90 leading-relaxed">
                    “{item.quote[lang]}”
                  </blockquote>
                  <figcaption className="pt-4 border-t border-olive/8 text-xs text-muted space-y-0.5">
                    <div className="font-semibold text-olive">
                      {item.author[lang]}
                    </div>
                    <div>
                      {item.city[lang]} · {item.visitContext[lang]}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VideoPreviewModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
};
