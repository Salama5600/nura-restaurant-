# Currency Settings

Menu and signature dish prices can be switched by visitors between **USD**, **SAR**, **AED**, and **QAR** from the Menu page toolbar (`src/pages/MenuPage.tsx`) or the site Footer (`src/components/Footer.tsx`).

---

## 1. How Pricing Works (Static Conversion)

All dishes in `MENU_ITEMS` (`src/data/restaurantData.ts`) store a single base number: `priceUsd`.

`CURRENCY_CONFIG` and `formatPrice()` in `src/data/restaurantData.ts` convert `priceUsd` using fixed static multipliers and round to the nearest whole number (`Math.round(priceUsd * cfg.rateFromUsd)`):

```ts
export const CURRENCY_CONFIG: Record<
  CurrencyCode,
  {symbolEn: string; symbolAr: string; rateFromUsd: number}
> = {
  USD: {symbolEn: '$', symbolAr: '$', rateFromUsd: 1},
  SAR: {symbolEn: 'SAR ', symbolAr: 'ر.س ', rateFromUsd: 3.75},
  AED: {symbolEn: 'AED ', symbolAr: 'د.إ ', rateFromUsd: 3.67},
  QAR: {symbolEn: 'QAR ', symbolAr: 'ر.ق ', rateFromUsd: 3.64},
};
```

> **Important**: There is **no live exchange-rate API**. Prices are calculated client-side from `priceUsd` using the static `rateFromUsd` numbers you configure in `CURRENCY_CONFIG`.

---

## 2. Setting a Different Default Currency

To default visitors to `SAR` (or `AED` / `QAR`) on their first visit:
1. Open `src/context/AppContext.tsx` and change the fallback return in `getInitialCurrency()` (line 45) from `'USD'` to `'SAR'` (or your preferred `CurrencyCode`).
2. Optionally update `SITE_CONFIG.defaultCurrency` in `src/data/restaurantData.ts` for reference.

*(Note: Visitors who previously selected another currency will keep their saved `localStorage.getItem('nura_currency')` value until cleared.)*

---

## 3. Using Only One Local Currency (e.g., SAR Only)

If your restaurant operates in a single country and you want exact local prices instead of USD conversion:
1. Set `rateFromUsd: 1` for your chosen currency in `CURRENCY_CONFIG` and enter your exact local prices directly in `priceUsd`.
2. Update `CURRENCIES` in `src/pages/MenuPage.tsx` and `src/components/Footer.tsx` (or remove the currency switcher UI if you only display one currency).

---

## 4. Adding a New Currency (e.g., KWD or BHD)

1. Add the code to `CurrencyCode` in `src/types/index.ts`:
   ```ts
   export type CurrencyCode = 'USD' | 'SAR' | 'AED' | 'QAR' | 'KWD';
   ```
2. Add its symbols and rate to `CURRENCY_CONFIG` in `src/data/restaurantData.ts`.
3. Add the code to `['USD', 'SAR', 'AED', 'QAR', 'KWD']` inside:
   - `getInitialCurrency()` in `src/context/AppContext.tsx`
   - `CURRENCIES` in `src/pages/MenuPage.tsx`
   - `CURRENCIES` in `src/components/Footer.tsx`
