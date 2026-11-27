# NŪRA Restaurant Template — Buyer Documentation

Welcome to the documentation for the **NŪRA Restaurant Website Template**. These guides explain how to install, customize, localize, and deploy the project using its existing React, TypeScript, Vite, and Tailwind CSS v4 codebase.

---

## Documentation Guides

1. **[Installation & Local Setup](./installation.md)** — Requirements, `npm install`, local dev server, TypeScript checks, and production build.
2. **[Customization Overview](./customization.md)** — Map of every editable data file, component, and asset directory.
3. **[Branding, Colors & Typography](./branding-and-colors.md)** — Updating the restaurant name, SVG logo mark, Tailwind `@theme` color palette, and English/Arabic fonts.
4. **[Menu Management](./menu-management.md)** — Adding, editing, and removing dishes, categories, dietary flags, and food photography.
5. **[Branches & Contact Information](./branches-and-contact.md)** — Replacing demonstration Gulf branches, phone numbers, emails, hours, and Google Maps links.
6. **[Language & RTL Configuration](./language-and-rtl.md)** — Editing English and Arabic translation dictionaries, default language, and RTL/LTR layout behavior.
7. **[Currency Settings](./currency-settings.md)** — Understanding static currency conversion (`USD`, `SAR`, `AED`, `QAR`), changing rates, and setting the default currency.
8. **[Reservations & WhatsApp Handoff](./reservation-and-whatsapp.md)** — How reservation validation works, changing WhatsApp branch numbers, and modifying booking message templates.
9. **[Gallery & Lightbox Management](./gallery-management.md)** — Updating gallery images, captions, categories, and lightbox behavior.
10. **[Deployment Guide](./deployment.md)** — Hosting the static `dist/` build on Vercel, Netlify, GitHub Pages, or shared hosting.
11. **[Troubleshooting](./troubleshooting.md)** — Resolving common dependency, image path, routing, and RTL/font issues.

---

## Key Architecture Notes

- **No Backend or Database**: All pages run in the browser and compile to static HTML/CSS/JS assets in `dist/`.
- **Hash-Based Navigation**: Views switch cleanly using URL hashes (`#`, `#menu`, `#about`, `#gallery`, `#reservation`, `#contact`) managed by `src/context/AppContext.tsx`.
- **Two Main Content Files**: Most day-to-day updates require editing only `src/data/restaurantData.ts` and `src/data/translations.ts`.
