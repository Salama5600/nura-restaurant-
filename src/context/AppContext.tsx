import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';
import {translations} from '../data/translations';
import {CurrencyCode, Language, PageRoute} from '../types';

interface AppContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isRtl: boolean;
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  currentPage: PageRoute;
  navigate: (page: PageRoute, preselectedDish?: string) => void;
  preselectedDish: string | null;
  clearPreselectedDish: () => void;
  t: (key: string) => string;
}

const VALID_PAGES: PageRoute[] = [
  'home',
  'menu',
  'about',
  'gallery',
  'reservation',
  'contact',
];

const getInitialLang = (): Language => {
  try {
    const saved = localStorage.getItem('nura_lang');
    if (saved === 'en' || saved === 'ar') return saved;
  } catch {
    // ignore storage errors
  }
  return 'en';
};

const getInitialCurrency = (): CurrencyCode => {
  try {
    const saved = localStorage.getItem('nura_currency') as CurrencyCode | null;
    if (saved && ['USD', 'SAR', 'AED', 'QAR'].includes(saved)) return saved;
  } catch {
    // ignore storage errors
  }
  return 'USD';
};

const getPageFromHash = (): PageRoute => {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.replace('#', '').toLowerCase() as PageRoute;
  return VALID_PAGES.includes(hash) ? hash : 'home';
};

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [lang, setLangState] = useState<Language>(getInitialLang);
  const [currency, setCurrencyState] = useState<CurrencyCode>(getInitialCurrency);
  const [currentPage, setCurrentPage] = useState<PageRoute>(getPageFromHash);
  const [preselectedDish, setPreselectedDish] = useState<string | null>(null);

  const applyDocumentLang = useCallback((nextLang: Language) => {
    document.documentElement.lang = nextLang;
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
  }, []);

  useEffect(() => {
    applyDocumentLang(lang);
  }, [lang, applyDocumentLang]);

  useEffect(() => {
    const pageTitles: Record<PageRoute, {en: string; ar: string}> = {
      home: {
        en: 'NŪRA Restaurant — Modern Fine Dining Experience',
        ar: 'مطعم نُورا — تجربة ضيافة عصرية راقية',
      },
      menu: {
        en: 'Seasonal Menu | NŪRA Restaurant',
        ar: 'القائمة الموسمية | مطعم نُورا',
      },
      about: {
        en: 'Our Story & Philosophy | NŪRA Restaurant',
        ar: 'قصتنا وفلسفتنا | مطعم نُورا',
      },
      gallery: {
        en: 'Gallery | NŪRA Restaurant',
        ar: 'معرض الصور | مطعم نُورا',
      },
      reservation: {
        en: 'Reserve a Table | NŪRA Restaurant',
        ar: 'حجز طاولة | مطعم نُورا',
      },
      contact: {
        en: 'Branches & Contact | NŪRA Restaurant',
        ar: 'الفروع والتواصل | مطعم نُورا',
      },
    };
    document.title = pageTitles[currentPage][lang];
  }, [currentPage, lang]);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const setLang = useCallback((nextLang: Language) => {
    setLangState(nextLang);
    try {
      localStorage.setItem('nura_lang', nextLang);
    } catch {
      // ignore storage errors
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'ar' : 'en');
  }, [lang, setLang]);

  const setCurrency = useCallback((nextCurrency: CurrencyCode) => {
    setCurrencyState(nextCurrency);
    try {
      localStorage.setItem('nura_currency', nextCurrency);
    } catch {
      // ignore storage errors
    }
  }, []);

  const navigate = useCallback((page: PageRoute, dishNote?: string) => {
    if (dishNote) {
      setPreselectedDish(dishNote);
    }
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#${page}`;
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  const clearPreselectedDish = useCallback(() => {
    setPreselectedDish(null);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[lang][key] ?? translations.en[key] ?? key;
    },
    [lang],
  );

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        isRtl: lang === 'ar',
        currency,
        setCurrency,
        currentPage,
        navigate,
        preselectedDish,
        clearPreselectedDish,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextValue => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used inside AppProvider');
  }
  return ctx;
};
