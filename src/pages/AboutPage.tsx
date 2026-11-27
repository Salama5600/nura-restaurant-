import React from 'react';
import {ArrowRight, Calendar} from 'lucide-react';
import {useApp} from '../context/AppContext';
import {IMAGES, TEAM_MEMBERS} from '../data/restaurantData';

export const AboutPage: React.FC = () => {
  const {lang, navigate, t} = useApp();

  const philosophyPillars = [
    {
      title: t('aboutPage.pillar1Title'),
      desc: t('aboutPage.pillar1Desc'),
    },
    {
      title: t('aboutPage.pillar2Title'),
      desc: t('aboutPage.pillar2Desc'),
    },
    {
      title: t('aboutPage.pillar3Title'),
      desc: t('aboutPage.pillar3Desc'),
    },
  ];

  return (
    <div className="pt-24 lg:pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Story Intro Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-3 text-gold text-xs font-semibold tracking-wide">
              <span className="w-7 h-px bg-gold" aria-hidden="true" />
              <span>{t('aboutPage.eyebrow')}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-olive leading-tight">
              {t('aboutPage.title')}
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              {t('aboutPage.lead')}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => navigate('reservation')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-bright hover:bg-gold text-olive-deep text-sm font-semibold transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>{t('actions.reserve')}</span>
              </button>
              <button
                type="button"
                onClick={() => navigate('menu')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-olive hover:bg-olive-soft text-cream text-sm font-medium transition-colors cursor-pointer"
              >
                <span>{t('actions.exploreMenu')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden bg-sand shadow-sm aspect-[16/10]">
            <img
              src={IMAGES.aboutInterior}
              alt={
                lang === 'en'
                  ? 'NŪRA restaurant interior dining room'
                  : 'تصميم صالة الطعام الداخلية في مطعم نُورا'
              }
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Three Editorial Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophyPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="bg-white rounded-2xl p-7 border border-olive/8 space-y-3"
            >
              <h2 className="font-serif text-2xl font-semibold text-olive">
                {pillar.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed">{pillar.desc}</p>
            </article>
          ))}
        </section>

        {/* Culinary Leadership */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gold tracking-wide">
                {t('aboutPage.teamEyebrow')}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-olive">
                {t('aboutPage.teamTitle')}
              </h2>
            </div>
            <p className="text-xs text-muted">{t('aboutPage.teamNote')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <article
                key={member.id}
                className="bg-sand/65 rounded-2xl p-6 border border-olive/10 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-olive text-gold-bright font-serif text-lg font-semibold flex items-center justify-center shrink-0">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-olive">
                      {member.name[lang]}
                    </h3>
                    <p className="text-xs text-gold font-medium">
                      {member.role[lang]}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {member.bio[lang]}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
