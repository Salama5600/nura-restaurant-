# NŪRA Restaurant — Bilingual Fine Dining Website Template

NŪRA is a responsive, bilingual (English and Arabic) website template designed for contemporary Middle Eastern and international restaurants. Built with React, TypeScript, Vite, and Tailwind CSS v4, it compiles into a static `dist/` bundle that can be hosted on any static hosting provider without a backend server or database.

---

## 1. Main Features Implemented

- **Six Complete Views (Hash Navigation)**: Home (`#`), Menu (`#menu`), About (`#about`), Gallery (`#gallery`), Reservation (`#reservation`), and Contact (`#contact`).
- **Full EN / AR Localization & RTL / LTR Switching**: Persistent language switcher in the site header (`localStorage` key `nura_lang`) that automatically updates `html[lang]` and `html[dir]` (`ltr` for English, `rtl` for Arabic).
- **Interactive Menu Filtering & Search**: Filter dishes by category (`All Dishes`, `Starters`, `Mains`, `Grills & Seafood`, `Desserts`, `Beverages`), dietary style (`Chef's Signature`, `Vegetarian`, `Gluten-Free`), and live bilingual keyword search, with an empty state and filter reset action.
- **Configurable Display Currency**: Switch menu and signature dish prices across `USD`, `SAR`, `AED`, and `QAR` (`localStorage` key `nura_currency`) using configurable static conversion rates defined in `src/data/restaurantData.ts`.
- **Gallery & Accessible Lightbox**: Filter photographs by `Dining Room`, `Culinary Creations`, or `Artisanal Details`, and inspect any image full screen with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`).
- **WhatsApp Reservation Builder**: Validates required guest fields (name, phone number, branch, guests, date, seating time, optional email and dietary notes), renders a live Reservation Summary, and formats a localized WhatsApp message with an explicit external-handoff notice and copy-to-clipboard button.
- **Multi-Branch Contact Directory**: Interactive city selector (`Riyadh`, `Dubai`, `Doha` demonstration branches) displaying branch addresses, opening hours, concierge phone/email links, arrival notes, and external Google Maps links.
- **Story Video Preview Modal**: Interactive evening service preview modal launched from the Hero section's `"Watch Video"` action.

---

## 2. Technology Stack

- **UI Library**: React 19 (`react`, `react-dom`)
- **Language**: TypeScript
- **Build Tool**: Vite 8 (`vite`, `@vitejs/plugin-react`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`, `@theme` tokens in `src/index.css`)
- **Icons**: Lucide React (`lucide-react`) + custom inline SVG emblems (`src/components/BrandMark.tsx`)
- **Typography**: Google Fonts (`Cormorant Garamond`, `DM Sans`, `IBM Plex Sans Arabic`) loaded in `index.html`

> **Note on `package.json` dependencies**: The project starter `package.json` also lists `@google/genai`, `express`, `dotenv`, `motion`, and `tsx` from the workspace base environment. None of those packages are imported by the NŪRA frontend application, which runs purely client-side and builds into static files in `dist/`.

---

## 3. Included Website Pages

| Route / Hash | Component File | Main Content |
| :--- | :--- | :--- |
| `#` (Default) | `src/pages/HomePage.tsx` | Hero banner, 4 hospitality pillars, About split with sample milestone metrics, 4 Signature Dishes, Reserve CTA card, Dining Rhythm, and sample guest reflections |
| `#menu` | `src/pages/MenuPage.tsx` | Category tabs, dietary filters, bilingual search input, currency switcher, and 11 dish cards (`DishCard`) |
| `#about` | `src/pages/AboutPage.tsx` | Brand story, interior showcase, 3 culinary philosophy pillars, and sample culinary team profiles |
| `#gallery` | `src/pages/GalleryPage.tsx` | Filterable 9-photo grid and keyboard-accessible Lightbox modal |
| `#reservation` | `src/pages/ReservationPage.tsx` | Validated booking form, live Reservation Summary sidebar, and WhatsApp message handoff |
| `#contact` | `src/pages/ContactPage.tsx` | Interactive Gulf branch tabs, opening hours, phone/email links, demo map preview, and social handles |

---

## 4. Actual Project Folder Structure

```text
├── CREDITS.md
├── CREDITS.txt
├── LICENSE.txt
├── README.md
├── documentation/
│   ├── index.md
│   ├── installation.md
│   ├── customization.md
│   ├── branding-and-colors.md
│   ├── menu-management.md
│   ├── branches-and-contact.md
│   ├── language-and-rtl.md
│   ├── currency-settings.md
│   ├── reservation-and-whatsapp.md
│   ├── gallery-management.md
│   ├── deployment.md
│   └── troubleshooting.md
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── assets/
    │   └── images/                # 12 optimized local .webp photographs
    ├── components/
    │   ├── BrandMark.tsx          # Custom SVG lotus emblem & laurel wreath
    │   ├── DishCard.tsx           # Reusable menu card with fallback container
    │   ├── Footer.tsx             # Site footer, branch summary, currency toggle
    │   ├── Header.tsx             # Sticky navigation bar, EN/AR toggle, mobile drawer
    │   └── VideoPreviewModal.tsx  # Evening service showcase modal
    ├── context/
    │   └── AppContext.tsx         # Language, RTL/LTR, currency, and hash routing state
    ├── data/
    │   ├── restaurantData.ts      # Centralized config, images, menu, gallery, branches, team
    │   └── translations.ts        # English and Arabic UI translation dictionaries
    ├── pages/
    │   ├── AboutPage.tsx
    │   ├── ContactPage.tsx
    │   ├── GalleryPage.tsx
    │   ├── HomePage.tsx
    │   ├── MenuPage.tsx
    │   └── ReservationPage.tsx
    └── types/
        └── index.ts               # TypeScript interfaces for menu, branches, config, forms
```

---

## 5. Installation & Local Setup

### Requirements
- **Node.js** 20+ recommended
- **npm** (or compatible Node package manager)

### Commands
1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start the local development server** (runs on port `3000`):
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.
3. **Run TypeScript type check**:
   ```bash
   npm run lint
   ```
4. **Create a production static build** (outputs to `dist/`):
   ```bash
   npm run build
   ```
5. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 6. Quick Customization Overview

Most editable business data lives in two files:
- **`src/data/restaurantData.ts`** — `SITE_CONFIG`, `CURRENCY_CONFIG`, `IMAGES`, `DEMO_STATS`, `MENU_ITEMS`, `GALLERY_ITEMS`, `BRANCHES`, `TEAM_MEMBERS`, and `SAMPLE_TESTIMONIALS`.
- **`src/data/translations.ts`** — All English (`en`) and Arabic (`ar`) UI copy, headings, form labels, and validation messages.

### Brand Name, Logo & Colors
- **Brand name**: Edit `brand.name` in `src/data/translations.ts` and `SITE_CONFIG.brandName` in `src/data/restaurantData.ts`.
- **Logo SVG**: Replace the SVG inside `BrandEmblem` in `src/components/BrandMark.tsx` (or swap for your own logo image in `Header.tsx` and `Footer.tsx`).
- **Colors & Fonts**: Edit CSS theme tokens in `src/index.css` (`--color-olive`, `--color-cream`, `--color-sand`, `--color-gold`, `--font-serif`, `--font-sans`, `--font-arabic`) and update Google Fonts links in `index.html`.

### Menu Items, Descriptions, Prices & Images
- Edit `MENU_ITEMS` in `src/data/restaurantData.ts`. Each dish supports bilingual `name` and `description`, `category`, base `priceUsd`, `image`, and boolean flags (`featured`, `signature`, `vegetarian`, `glutenFree`).
- Store new dish photos in `src/assets/images/` and register them in `IMAGES` inside `src/data/restaurantData.ts`. Note that `vite.config.ts` automatically copies `src/assets` into `dist/src/assets` during `npm run build`.

### Branches, Contact Details & WhatsApp Reservations
- Edit `BRANCHES` in `src/data/restaurantData.ts` to replace the demonstration Riyadh, Dubai, and Doha addresses, concierge phone numbers, `whatsapp` numbers (digits only, including country code, e.g. `966500000140`), email addresses, opening hours, and `mapUrl` links.
- When a visitor submits the form on `#reservation`, `src/pages/ReservationPage.tsx` validates the fields and formats a `https://wa.me/<branch.whatsapp>?text=...` link with an explicit notice before leaving the site.

### Languages, RTL & Currencies
- Default language on first visit is English (`en`), falling back to `localStorage.getItem('nura_lang')`.
- Toggling `EN | AR` updates `<html lang="ar" dir="rtl">` or `<html lang="en" dir="ltr">`.
- Currency rates in `CURRENCY_CONFIG` (`src/data/restaurantData.ts`) convert from `priceUsd` using fixed static multipliers (`USD`, `SAR`, `AED`, `QAR`). There is no live exchange-rate API.

---

## 7. Static Hosting & Deployment

Because NŪRA builds into a standard static bundle in `dist/`, it deploys cleanly to:
- **Vercel**: Framework preset `Vite`, Build command `npm run build`, Output directory `dist`.
- **Netlify**: Build command `npm run build`, Publish directory `dist`.
- **GitHub Pages / Static Servers**: Run `npm run build` and upload the contents of `dist/` (note: if deploying under a subpath such as `/repo-name/`, configure Vite's `base` option in `vite.config.ts`).

---

## 8. Important Notes & Limitations

- **Static Template Only**: There is no backend server, database, admin panel, user login, stored reservation history, or online payment gateway.
- **WhatsApp Handoff**: Reservations are not saved on a server; they generate a pre-filled WhatsApp message for the guest to send directly to your branch number.
- **Demonstration Content**: Branch addresses, phone numbers, `@nura-demo.example` emails, `DEMO_STATS`, `TEAM_MEMBERS`, and `SAMPLE_TESTIMONIALS` are placeholder sample data that must be replaced with your verified restaurant details before going live.
- **Full Buyer Guides**: See `documentation/index.md` for step-by-step instructions.
