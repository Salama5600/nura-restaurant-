import React, {useEffect, useRef, useState} from 'react';
import {Calendar, Menu, X} from 'lucide-react';
import {useApp} from '../context/AppContext';
import {PageRoute} from '../types';
import {BrandEmblem} from './BrandMark';

const NAV_ITEMS: {page: PageRoute; labelKey: string}[] = [
  {page: 'home', labelKey: 'nav.home'},
  {page: 'menu', labelKey: 'nav.menu'},
  {page: 'about', labelKey: 'nav.about'},
  {page: 'gallery', labelKey: 'nav.gallery'},
  {page: 'reservation', labelKey: 'nav.reservation'},
  {page: 'contact', labelKey: 'nav.contact'},
];

export const Header: React.FC = () => {
  const {currentPage, navigate, lang, setLang, t} = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [mobileOpen]);

  const handleNav = (page: PageRoute) => {
    setMobileOpen(false);
    navigate(page);
  };

  const isTransparentHero = currentPage === 'home' && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        isTransparentHero
          ? 'bg-olive-deep/65 backdrop-blur-md border-b border-white/10'
          : 'bg-olive/95 backdrop-blur-md border-b border-white/10 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[76px] flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('home');
          }}
          className="inline-flex items-center gap-2.5 text-cream whitespace-nowrap shrink-0 group"
          aria-label={t('brand.name')}
        >
          <BrandEmblem
            size={28}
            className="text-gold-bright transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-serif text-2xl font-semibold tracking-[0.14em] text-cream leading-none">
            {t('brand.name')}
          </span>
        </a>

        {/* Zone 2: Clean Typography Navigation Links */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <a
                key={item.page}
                href={item.page === 'home' ? '#' : `#${item.page}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.page);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive
                    ? 'text-gold-bright'
                    : 'text-cream/85 hover:text-cream'
                }`}
              >
                {t(item.labelKey)}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-gold-bright rounded-full"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Switcher & Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            role="group"
            aria-label="Language selector"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 p-0.5"
          >
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'en'
                  ? 'bg-cream text-olive'
                  : 'text-cream/80 hover:text-cream'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('ar')}
              aria-pressed={lang === 'ar'}
              className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'ar'
                  ? 'bg-cream text-olive'
                  : 'text-cream/80 hover:text-cream'
              }`}
            >
              AR
            </button>
          </div>

          <button
            type="button"
            onClick={() => handleNav('reservation')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-bright hover:bg-gold text-olive-deep text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer"
          >
            <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t('actions.reserve')}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={t('actions.menuToggle')}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-cream hover:bg-white/10 transition-colors cursor-pointer"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-50 bg-black/50 backdrop-blur-xs">
          <div
            id="mobile-navigation-drawer"
            ref={drawerRef}
            className="bg-olive border-t border-white/10 px-6 py-6 shadow-xl"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <a
                    key={item.page}
                    href={item.page === 'home' ? '#' : `#${item.page}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.page);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center justify-between py-3 px-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-white/10 text-gold-bright'
                        : 'text-cream/90 hover:bg-white/5 hover:text-cream'
                    }`}
                  >
                    <span>{t(item.labelKey)}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-bright" />
                    )}
                  </a>
                );
              })}
            </nav>
            <div className="mt-5 pt-5 border-t border-white/10">
              <button
                type="button"
                onClick={() => handleNav('reservation')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold-bright hover:bg-gold text-olive-deep text-sm font-semibold transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{t('actions.reserve')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
