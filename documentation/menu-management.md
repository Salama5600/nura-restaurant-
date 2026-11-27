# Menu Management

All menu items, categories, dietary attributes, and dish photography are stored in `src/data/restaurantData.ts` inside the `MENU_ITEMS` array.

---

## 1. Structure of a Menu Item

Each entry in `MENU_ITEMS` follows the `MenuItem` interface defined in `src/types/index.ts`:

```ts
{
  id: 'truffle-risotto',
  name: {en: 'Truffle Mushroom Risotto', ar: 'ريزوتو الفطر والكمأة السوداء'},
  description: {
    en: 'Aged Acquerello rice simmered in roasted porcini stock...',
    ar: 'أرز أكويريلو المعتّق المطهو بمرق البورشيني المحمّص...',
  },
  category: 'mains',       // 'starters' | 'mains' | 'grills' | 'desserts' | 'beverages'
  priceUsd: 32,            // Base numeric price in USD
  image: IMAGES.truffleRisotto,
  featured: true,          // Optional: displays in Homepage Signature Dishes (first 4)
  signature: true,         // Optional: enables "Chef's Signature" dietary filter
  vegetarian: true,        // Optional: enables "Vegetarian" dietary filter
  glutenFree: true,        // Optional: enables "Gluten-Free" dietary filter
}
```

---

## 2. Adding a New Dish

1. Save a `4:3` dish photograph (recommended `960×717` `.webp` or `.jpg`) inside `src/assets/images/`, e.g., `src/assets/images/dish-lamb-kebab.webp`.
2. Add it to the `IMAGES` object in `src/data/restaurantData.ts`:
   ```ts
   lambKebab: '/src/assets/images/dish-lamb-kebab.webp',
   ```
3. Append a new `MenuItem` object to `MENU_ITEMS` with a unique `id`, bilingual `name` and `description`, valid `category`, `priceUsd`, and `image: IMAGES.lambKebab`.

---

## 3. Editing or Removing Dishes

- **Edit**: Modify `name`, `description`, `priceUsd`, or dietary booleans directly in `MENU_ITEMS`.
- **Remove**: Delete the item object from `MENU_ITEMS`.
- **Homepage Signature Dishes**: `src/pages/HomePage.tsx` automatically shows the first 4 items where `featured: true` (`MENU_ITEMS.filter((item) => item.featured).slice(0, 4)`).

---

## 4. Categories & Filtering Behavior

`src/pages/MenuPage.tsx` supports:
- **Categories**: `'all' | 'starters' | 'mains' | 'grills' | 'desserts' | 'beverages'`
- **Dietary Filters**: `'all' | 'signature' | 'vegetarian' | 'gluten-free'`
- **Live Search**: Matches substrings in both `name.en`/`description.en` and `name.ar`/`description.ar`.

If you add a new category key:
1. Add it to `MenuCategory` in `src/types/index.ts`.
2. Add it to the `CATEGORIES` array in `src/pages/MenuPage.tsx`.
3. Add `'menu.category.<yourKey>'` to both `en` and `ar` in `src/data/translations.ts`.

---

## 5. Image Fallback Behavior

If a menu item omits `image` or its image fails to load (`onError`), `src/components/DishCard.tsx` renders a styled sand-and-cream fallback frame displaying the dish title and a utensil icon rather than a broken image icon.
