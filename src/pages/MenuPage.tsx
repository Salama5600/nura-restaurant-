import React, {useMemo, useState} from 'react';
import {RotateCcw, Search} from 'lucide-react';
import {useApp} from '../context/AppContext';
import {MENU_ITEMS} from '../data/restaurantData';
import {CurrencyCode, DietaryFilter, MenuCategory} from '../types';
import {DishCard} from '../components/DishCard';

const CATEGORIES: MenuCategory[] = [
  'all',
  'starters',
  'mains',
  'grills',
  'desserts',
  'beverages',
];

const DIETARY_OPTIONS: {value: DietaryFilter; labelKey: string}[] = [
  {value: 'all', labelKey: 'menu.dietary.all'},
  {value: 'signature', labelKey: 'menu.dietary.signature'},
  {value: 'vegetarian', labelKey: 'menu.dietary.vegetarian'},
  {value: 'gluten-free', labelKey: 'menu.dietary.glutenFree'},
];

const CURRENCIES: CurrencyCode[] = ['USD', 'SAR', 'AED', 'QAR'];

export const MenuPage: React.FC = () => {
  const {lang, currency, setCurrency, t} = useApp();
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [dietary, setDietary] = useState<DietaryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (dietary === 'signature' && !item.signature) return false;
      if (dietary === 'vegetarian' && !item.vegetarian) return false;
      if (dietary === 'gluten-free' && !item.glutenFree) return false;

      if (q.length > 0) {
        const matchEn =
          item.name.en.toLowerCase().includes(q) ||
          item.description.en.toLowerCase().includes(q);
        const matchAr =
          item.name.ar.toLowerCase().includes(q) ||
          item.description.ar.toLowerCase().includes(q);
        if (!matchEn && !matchAr) return false;
      }
      return true;
    });
  }, [selectedCategory, dietary, searchQuery]);

  const resetAll = () => {
    setSelectedCategory('all');
    setDietary('all');
    setSearchQuery('');
  };

  return (
    <div className="pt-24 lg:pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Heading */}
        <header className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-3 text-gold text-xs font-semibold tracking-wide">
            <span className="w-7 h-px bg-gold" aria-hidden="true" />
            <span>{t('menu.eyebrow')}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-olive">
            {t('menu.title')}
          </h1>
          <p className="text-base text-muted leading-relaxed">
            {t('menu.description')}
          </p>
        </header>

        {/* Controls Bar: Categories, Search, Dietary, Currency */}
        <section
          aria-label="Menu filters"
          className="bg-sand/65 rounded-2xl p-4 sm:p-5 border border-olive/10 space-y-4 sm:space-y-5 max-w-full overflow-hidden"
        >
          {/* Category Tabs */}
          <div
            role="tablist"
            aria-label="Dish categories"
            className="flex flex-wrap items-center gap-2"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-olive text-cream'
                      : 'bg-cream/80 text-olive hover:bg-white border border-olive/10'
                  }`}
                >
                  {t(`menu.category.${category}`)}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-3 border-t border-olive/10">
            {/* Search Input */}
            <div className="relative w-full lg:flex-1 lg:max-w-md">
              <Search
                className="w-4 h-4 text-muted absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('menu.searchPlaceholder')}
                aria-label={t('menu.searchPlaceholder')}
                className="w-full ps-10 pe-4 py-2.5 rounded-xl bg-white border border-olive/15 text-sm text-olive placeholder:text-muted/70 focus:border-gold focus:outline-none"
              />
            </div>

            {/* Dietary + Currency */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 w-full lg:w-auto">
              <div className="grid grid-cols-2 sm:inline-flex sm:flex-wrap items-center gap-1 p-1 rounded-xl bg-cream border border-olive/10 w-full sm:w-auto">
                {DIETARY_OPTIONS.map((opt) => {
                  const active = dietary === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setDietary(opt.value)}
                      aria-pressed={active}
                      className={`px-2.5 sm:px-3 py-2 sm:py-1.5 rounded-lg text-xs font-medium transition-colors text-center truncate cursor-pointer ${
                        active
                          ? 'bg-olive text-cream'
                          : 'text-muted hover:text-olive'
                      }`}
                    >
                      {t(opt.labelKey)}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between sm:justify-start gap-2 w-full sm:w-auto">
                <span className="text-xs font-medium text-muted shrink-0">
                  {t('menu.currencyLabel')}:
                </span>
                <div className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-cream border border-olive/10">
                  {CURRENCIES.map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setCurrency(code)}
                      aria-pressed={currency === code}
                      className={`px-2.5 py-1.5 sm:py-1 rounded-lg text-xs font-semibold tabular-nums transition-colors cursor-pointer ${
                        currency === code
                          ? 'bg-gold-bright text-olive-deep'
                          : 'text-muted hover:text-olive'
                      }`}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-muted">
          <p className="tabular-nums">
            {filteredItems.length} {t('menu.itemsShown')}
          </p>
          {(selectedCategory !== 'all' ||
            dietary !== 'all' ||
            searchQuery.trim() !== '') && (
            <button
              type="button"
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 font-medium text-olive hover:text-gold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t('actions.resetFilters')}</span>
            </button>
          )}
        </div>

        {/* Dish Grid or Empty State */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-olive/10 p-12 text-center space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-olive">
              {t('menu.emptyTitle')}
            </h2>
            <p className="text-sm text-muted max-w-md mx-auto">
              {t('menu.emptyDescription')}
            </p>
            <button
              type="button"
              onClick={resetAll}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-olive text-cream text-sm font-medium hover:bg-olive-soft transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
              <span>{t('actions.resetFilters')}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
