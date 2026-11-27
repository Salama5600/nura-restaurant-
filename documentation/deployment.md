# Deployment Guide

NŪRA compiles into a static website inside `dist/` with no runtime server or database requirement.

---

## 1. Pre-Deployment Verification

Run these commands locally before deploying:

```bash
npm install
npm run lint
npm run build
```

Confirm that `dist/index.html` and `dist/src/assets/images/*.webp` are generated cleanly. Note that `vite.config.ts` includes a `copy-unbundled-src-assets` plugin that copies `src/assets` into `dist/src/assets` during `vite build` so all root-relative `/src/assets/images/...` paths resolve in production.

---

## 2. Deploying to Vercel

1. Push your customized project to a GitHub, GitLab, or Bitbucket repository.
2. Import the repository in Vercel.
3. Verify the build settings:
   - **Framework Preset**: `Vite`
   - **Install Command**: `npm install`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy. No environment variables are required for the static website.

---

## 3. Deploying to Netlify

1. Connect your repository in Netlify (or drag-and-drop the `dist/` folder for manual upload).
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

---

## 4. Deploying to GitHub Pages or Subpath Hosting

By default, image references in `src/data/restaurantData.ts` use root-relative paths (`/src/assets/images/...`), which assume the website is hosted at the root of a domain (`https://example.com/`).

If you deploy into a **subpath** (such as `https://username.github.io/nura-restaurant/`):
1. Set `base: '/nura-restaurant/'` in `vite.config.ts`.
2. Prefix the paths in `IMAGES` (`src/data/restaurantData.ts`) or switch them to relative/imported URLs so they resolve under your repository subpath.

---

## 5. Traditional Shared Hosting (cPanel / Apache / Nginx)

1. Run `npm run build` locally.
2. Upload the **contents** of `dist/` (not the `dist` folder itself) into `public_html/` or your server web root.
3. Because routing uses URL hashes (`#menu`, `#about`, `#gallery`, `#reservation`, `#contact`), no special server rewrite rules are required.
