import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {ChevronLeft, ChevronRight, Expand, X} from 'lucide-react';
import {useApp} from '../context/AppContext';
import {GALLERY_ITEMS} from '../data/restaurantData';

type GalleryCategory = 'all' | 'atmosphere' | 'culinary' | 'details';

const GALLERY_FILTERS: {value: GalleryCategory; labelKey: string}[] = [
  {value: 'all', labelKey: 'gallery.filter.all'},
  {value: 'atmosphere', labelKey: 'gallery.filter.atmosphere'},
  {value: 'culinary', labelKey: 'gallery.filter.culinary'},
  {value: 'details', labelKey: 'gallery.filter.details'},
];

export const GalleryPage: React.FC = () => {
  const {lang, isRtl, t} = useApp();
  const [filter, setFilter] = useState<GalleryCategory>('all');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visibleItems = useMemo(() => {
    if (filter === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === filter);
  }, [filter]);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setActiveIndex((idx) => {
      if (idx === null || visibleItems.length === 0) return null;
      return (idx - 1 + visibleItems.length) % visibleItems.length;
    });
  }, [visibleItems.length]);

  const showNext = useCallback(() => {
    setActiveIndex((idx) => {
      if (idx === null || visibleItems.length === 0) return null;
      return (idx + 1) % visibleItems.length;
    });
  }, [visibleItems.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') {
        if (isRtl) showPrev();
        else showNext();
      }
      if (e.key === 'ArrowLeft') {
        if (isRtl) showNext();
        else showPrev();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, isRtl, closeLightbox, showPrev, showNext]);

  const activeItem =
    activeIndex !== null && visibleItems[activeIndex]
      ? visibleItems[activeIndex]
      : null;

  return (
    <div className="pt-24 lg:pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <header className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-3 text-gold text-xs font-semibold tracking-wide">
            <span className="w-7 h-px bg-gold" aria-hidden="true" />
            <span>{t('gallery.eyebrow')}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-olive">
            {t('gallery.title')}
          </h1>
          <p className="text-base text-muted leading-relaxed">
            {t('gallery.description')}
          </p>
        </header>

        {/* Category Filter */}
        <div
          role="tablist"
          aria-label="Gallery categories"
          className="flex flex-wrap items-center gap-2"
        >
          {GALLERY_FILTERS.map((tab) => {
            const active = filter === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setFilter(tab.value);
                  setActiveIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-olive text-cream'
                    : 'bg-sand/70 text-olive hover:bg-white border border-olive/10'
                }`}
              >
                {t(tab.labelKey)}
              </button>
            );
          })}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="group text-start bg-white rounded-2xl overflow-hidden border border-olive/8 shadow-[0_2px_12px_rgba(32,40,32,0.04)] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  width={960}
                  height={717}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-3 end-3 w-9 h-9 rounded-full bg-olive/80 text-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Expand className="w-4 h-4" />
                </span>
              </div>
              <div className="p-4 space-y-1">
                <h2 className="font-serif text-xl font-semibold text-olive">
                  {item.title[lang]}
                </h2>
                <p className="text-xs text-muted line-clamp-2 leading-relaxed">
                  {item.caption[lang]}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title[lang]}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="w-full max-w-4xl bg-olive text-cream rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gold-bright font-medium tabular-nums">
                  {activeIndex + 1} / {visibleItems.length}
                </span>
                <span className="text-sm font-semibold text-cream">
                  {activeItem.title[lang]}
                </span>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label={t('actions.close')}
                className="w-9 h-9 rounded-full flex items-center justify-center text-cream/80 hover:bg-white/10 hover:text-cream transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative aspect-[16/10] bg-olive-deep flex items-center justify-center">
              <img
                src={activeItem.image}
                alt={activeItem.title[lang]}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />

              {visibleItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrev}
                    aria-label={t('actions.previous')}
                    className="absolute start-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-olive/80 hover:bg-olive text-cream flex items-center justify-center border border-white/15 transition-colors cursor-pointer"
                  >
                    <ChevronLeft
                      className="w-5 h-5 rtl:rotate-180"
                      aria-hidden="true"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label={t('actions.next')}
                    className="absolute end-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-olive/80 hover:bg-olive text-cream flex items-center justify-center border border-white/15 transition-colors cursor-pointer"
                  >
                    <ChevronRight
                      className="w-5 h-5 rtl:rotate-180"
                      aria-hidden="true"
                    />
                  </button>
                </>
              )}
            </div>

            <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-olive-deep/60 border-t border-white/10">
              <p className="text-sm text-cream/85">{activeItem.caption[lang]}</p>
              <span className="text-xs text-cream/55 whitespace-nowrap">
                {t('gallery.lightboxHint')}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
