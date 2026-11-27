# Installation & Local Setup

This guide explains how to run the NŪRA project locally and build the static production bundle.

---

## Prerequisites

- **Node.js**: Version 20 or newer (recommended)
- **npm**: Included with Node.js (npm 10+ recommended)
- A code editor such as VS Code

---

## 1. Install Dependencies

Open a terminal inside the project root directory (the folder containing `package.json`) and run:

```bash
npm install
```

> **Note on `esbuild` compatibility**: `package.json` specifies `"esbuild": "^0.28.0"` in `devDependencies` to match `vite@^8.3.0`'s optional peer dependency requirement during clean `npm install` runs on CI/Vercel.

---

## 2. Start the Local Development Server

Run:

```bash
npm run dev
```

This runs `vite --port=3000 --host=0.0.0.0`. Open your browser to:

```text
http://localhost:3000
```

Edits you make to `src/` files will reload automatically in standard local environments.

---

## 3. Available npm Scripts (`package.json`)

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `npm run dev` | `vite --port=3000 --host=0.0.0.0` | Start local development server on port 3000 |
| `npm run build` | `vite build` | Build optimized static files into `dist/` |
| `npm run preview` | `vite preview` | Serve the compiled `dist/` folder locally to verify production output |
| `npm run lint` | `tsc --noEmit` | Run TypeScript type checking across the project |
| `npm run clean` | `rm -rf dist server.js` | Remove previous build artifacts |

---

## 4. Verify Before Deploying

Always run both commands before uploading or deploying your changes:

```bash
npm run lint
npm run build
```

If both succeed with zero errors, your static output is ready inside the `dist/` directory (including `dist/src/assets/images/`).
