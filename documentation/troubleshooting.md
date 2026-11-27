# Troubleshooting

Common issues when installing, customizing, or deploying NŪRA and how to resolve them.

---

## 1. `npm install` Fails with `ERESOLVE` on `esbuild`

**Symptom**: `npm error Could not resolve dependency: peerOptional esbuild@"^0.27.0 || ^0.28.0" from vite@8.4.0`

**Cause**: An older `esbuild` version (`^0.25.0`) in `package.json` conflicts with Vite 8's optional peer requirement.

**Fix**: Ensure `package.json` lists `"esbuild": "^0.28.0"` (already applied in this repository). If a stale `package-lock.json` exists locally, delete `package-lock.json` and `node_modules`, then run `npm install` again.

---

## 2. Images Missing in Production (`dist/`)

**Symptom**: Images load in `npm run dev` but appear broken after deploying `dist/`.

**Checks**:
1. Confirm your image paths in `IMAGES` (`src/data/restaurantData.ts`) start with `/src/assets/images/` and match the exact filename and `.webp` extension (case-sensitive on Linux servers).
2. Confirm the `copy-unbundled-src-assets` plugin in `vite.config.ts` has not been removed—it copies `src/assets` into `dist/src/assets` on `npm run build`.
3. If hosting on a subpath (e.g., `example.com/restaurant/`), see [Deployment Guide](./deployment.md) Section 4.

---

## 3. Language or Currency Resets / Appears Stuck During Testing

**Cause**: Selected language (`nura_lang`) and currency (`nura_currency`) persist in browser `localStorage`.

**Fix**: Use the `EN | AR` switcher in the header or clear site storage in browser DevTools (`Application -> Local Storage -> Clear`).

---

## 4. WhatsApp Button Does Not Open a Chat Correctly

**Checks**:
1. Open `src/data/restaurantData.ts` and verify `branch.whatsapp` contains **only digits** with country code (for example `966500000140`), with no `+`, spaces, or dashes.
2. Confirm the visitor filled in the required reservation fields (`Full Name`, at least 8 digits in `Phone Number`, valid `Date`).

---

## 5. Arabic Font Does Not Render Offline

**Cause**: `Cormorant Garamond`, `DM Sans`, and `IBM Plex Sans Arabic` are loaded from Google Fonts in `index.html`. If tested in an environment with no internet access, the browser falls back to system fonts (`sans-serif` / `Georgia`).

**Fix**: Test with internet connectivity or self-host licensed `.woff2` font files in `public/fonts/` and declare `@font-face` rules in `src/index.css`.
