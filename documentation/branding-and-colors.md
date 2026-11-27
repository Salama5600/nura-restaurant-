# Branding, Colors & Typography

This guide explains how to update NŪRA's brand name, logo mark, color palette, and fonts.

---

## 1. Changing the Restaurant Name

The brand name appears in the header, footer, page titles, and reservation messages:

1. Open `src/data/translations.ts` and update `brand.name` in both `en` and `ar`:
   ```ts
   'brand.name': 'YOUR BRAND',
   ```
   and under `ar`:
   ```ts
   'brand.name': 'اسم مطعمك',
   ```
2. Open `src/data/restaurantData.ts` and update `SITE_CONFIG.brandName`.
3. Open `src/context/AppContext.tsx` and update the `pageTitles` map (lines 72–97) so browser tab titles match your restaurant name.
4. Open `index.html` and update `<title>`, `<meta name="description">`, `og:title`, and `og:description`.
5. Update `footer.copyright` in `src/data/translations.ts` and the WhatsApp greeting in `src/pages/ReservationPage.tsx` (`buildWhatsappText`).

---

## 2. Changing the Logo Emblem

The logo icon is an inline SVG component (`BrandEmblem`) in `src/components/BrandMark.tsx`, used in `Header.tsx`, `Footer.tsx`, and `HomePage.tsx`.

- **Option A (Replace SVG)**: Replace the `<svg>...</svg>` inside `BrandEmblem` in `src/components/BrandMark.tsx` with your brand's SVG paths, keeping `className={className}` and `width={size}` / `height={size}` so `text-gold-bright` and sizing props continue to work.
- **Option B (Use an Image Logo)**: Place your PNG/SVG/WebP logo inside `src/assets/images/` and render an `<img>` tag inside `src/components/Header.tsx` (lines 75–81) and `src/components/Footer.tsx` (lines 36–39).

---

## 3. Customizing the Color Palette

All theme colors are defined as Tailwind CSS v4 `@theme` variables in `src/index.css`:

```css
@theme {
  --color-olive: #202820;       /* Dark headers, footer, primary dark buttons */
  --color-olive-deep: #161C16;  /* Hero overlay & deep modal surfaces */
  --color-olive-soft: #2D372D;  /* Hover state for olive buttons */
  --color-cream: #F4F0E7;       /* Main page background */
  --color-sand: #EAE3D5;        /* Secondary surface cards & metric containers */
  --color-gold: #B58B58;        /* Subtle rules, eyebrow accents, hover links */
  --color-gold-bright: #C89E68; /* Primary gold CTA buttons & active states */
  --color-muted: #62675F;       /* Secondary body copy */
  --color-ink: #202820;         /* Primary text color */
}
```

Updating any hex value here updates classes such as `bg-olive`, `bg-cream`, `text-gold`, and `bg-gold-bright` across all six pages automatically.

---

## 4. Changing Fonts

1. In `index.html`, replace the Google Fonts `<link>` tag (lines 20–23) with your preferred English and Arabic font families.
2. In `src/index.css`, update the font variables inside `@theme`:
   ```css
   --font-serif: "Cormorant Garamond", Georgia, serif;
   --font-sans: "DM Sans", -apple-system, BlinkMacSystemFont, sans-serif;
   --font-arabic: "IBM Plex Sans Arabic", "DM Sans", sans-serif;
   ```
   Notice that `html[lang="ar"] body` and `html[lang="ar"] .font-serif` in `src/index.css` automatically apply `--font-arabic` when Arabic is active.
