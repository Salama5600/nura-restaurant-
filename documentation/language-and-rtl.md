# Language & RTL Configuration

NŪRA defaults to English (`en`, `LTR`) on a visitor's first visit and provides an `EN | AR` switcher in `src/components/Header.tsx`.

---

## 1. How Language Switching & Persistence Work

Language state is managed in `src/context/AppContext.tsx`:
- On initial load, `getInitialLang()` reads `localStorage.getItem('nura_lang')`. If no saved preference exists, it defaults to `'en'`.
- Whenever `lang` changes, `applyDocumentLang()` sets:
  - `document.documentElement.lang = 'ar'` and `document.documentElement.dir = 'rtl'` for Arabic.
  - `document.documentElement.lang = 'en'` and `document.documentElement.dir = 'ltr'` for English.
- The selected language is saved to `localStorage` under `'nura_lang'` and restored on future visits.
- `document.title` updates dynamically per route and language via the `pageTitles` map in `src/context/AppContext.tsx`.

---

## 2. Editing English & Arabic Copy

1. **Interface Strings**: Open `src/data/translations.ts` and edit matching keys inside `translations.en` and `translations.ar` (for example `hero.titleLine1`, `actions.reserve`, `form.submit`).
   - The `t(key)` helper in `AppContext.tsx` checks `translations[lang][key]`, falls back to `translations.en[key]`, and returns `key` if neither exists.
2. **Dynamic Content Items**: Items in `src/data/restaurantData.ts` (`MENU_ITEMS`, `GALLERY_ITEMS`, `BRANCHES`, `TEAM_MEMBERS`, `SAMPLE_TESTIMONIALS`, `SITE_CONFIG`) store inline `{en: '...', ar: '...'}` objects so both languages stay side by side.

---

## 3. Changing the Default Language to Arabic

If your restaurant primarily serves Arabic-speaking visitors:
1. Open `src/context/AppContext.tsx` and change the default return value of `getInitialLang()` (line 35) from `'en'` to `'ar'`.
2. Open `index.html` and change `<html lang="en" dir="ltr">` to `<html lang="ar" dir="rtl">` so the initial HTML matches before React hydrates.

---

## 4. RTL / LTR Styling Behavior

- **Logical CSS Utilities**: Components use Tailwind logical classes (`ms-*`, `pe-*`, `start-*`, `end-*`, `text-start`, `text-end`) so spacing, icons, and alignment mirror automatically in RTL.
- **Directional Icons**: Arrows (`ArrowRight`, `ChevronLeft`, `ChevronRight`, `Play`) use `rtl:rotate-180` where directional reversal makes sense, while non-directional icons (`Calendar`, `Clock`, `MapPin`, `Phone`) remain unmirrored.
- **Phone Numbers & Coordinates**: Inputs and text showing phone numbers, emails, or coordinates explicitly use `dir="ltr"` so `+966 ...` digits do not reverse in Arabic mode.
- **Arabic Typography**: `src/index.css` sets `html[lang="ar"] body` and `html[lang="ar"] .font-serif` to `IBM Plex Sans Arabic`.
