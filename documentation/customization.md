# Customization Overview

NŪRA centralizes business data and UI copy so you can customize the entire website without rewriting layout components.

---

## Where to Edit Content

| What You Want to Change | File to Edit | Symbol / Section |
| :--- | :--- | :--- |
| Brand name, service hours summary, social handles | `src/data/restaurantData.ts` | `SITE_CONFIG` |
| Currency rates & formatting | `src/data/restaurantData.ts` | `CURRENCY_CONFIG`, `formatPrice` |
| Image paths | `src/data/restaurantData.ts` | `IMAGES` |
| Homepage milestone metrics (`10+`, `50k+`, `4.8`) | `src/data/restaurantData.ts` | `DEMO_STATS` |
| Menu dishes, descriptions, prices, categories | `src/data/restaurantData.ts` | `MENU_ITEMS` |
| Gallery photos, titles, captions | `src/data/restaurantData.ts` | `GALLERY_ITEMS` |
| Branches, addresses, phones, WhatsApp numbers, maps | `src/data/restaurantData.ts` | `BRANCHES` |
| Chef & leadership profiles (About page) | `src/data/restaurantData.ts` | `TEAM_MEMBERS` |
| Guest reflection quotes (Homepage) | `src/data/restaurantData.ts` | `SAMPLE_TESTIMONIALS` |
| UI headings, buttons, form labels, errors (EN & AR) | `src/data/translations.ts` | `translations.en`, `translations.ar` |
| Color tokens & font families | `src/index.css` | `@theme { ... }` |
| Google Fonts links, `<title>`, `<meta>` tags | `index.html` | `<head>` |
| SVG Lotus emblem & Laurel wreath | `src/components/BrandMark.tsx` | `BrandEmblem`, `LaurelWreath` |
| Browser tab `<title>` per page & default state | `src/context/AppContext.tsx` | `pageTitles`, `getInitialLang`, `getInitialCurrency` |
| App name & description metadata | `metadata.json` | `name`, `description` |

---

## Replacing Sample / Demo Content Checklist

Before publishing for a real restaurant, replace all demonstration entries:
1. Update `SITE_CONFIG.socialLinks` and `serviceHoursSummary` in `src/data/restaurantData.ts`.
2. Replace all three demonstration `BRANCHES` entries (addresses, phone numbers, `whatsapp` numbers, `@nura-demo.example` emails, `mapUrl`).
3. Update `MENU_ITEMS` prices and descriptions, and remove `"Sample"` labels from `TEAM_MEMBERS` and `SAMPLE_TESTIMONIALS` once replaced with real verified content.
4. Update `DEMO_STATS` in `src/data/restaurantData.ts` and the `about.sampleMetricsNote` / `testimonials.sampleLabel` strings in `src/data/translations.ts`.
5. Update `index.html` meta tags (`<title>`, `og:title`, `og:description`) and `pageTitles` in `src/context/AppContext.tsx`.
