# Gallery & Lightbox Management

The Gallery page (`src/pages/GalleryPage.tsx`) renders a filterable photo grid from `GALLERY_ITEMS` in `src/data/restaurantData.ts` along with a keyboard-accessible Lightbox modal.

---

## 1. Gallery Data Structure

Each entry in `GALLERY_ITEMS` (`src/data/restaurantData.ts`) uses the `GalleryItem` interface:

```ts
{
  id: 'g-interior',
  title: {en: 'Main Evening Dining Room', ar: 'صالة الطعام الرئيسية مساءً'},
  caption: {
    en: 'Indoor olive trees, hand-blown amber glass pendants...',
    ar: 'أشجار الزيتون الداخلية والمصابيح العنبرية الدافئة...',
  },
  category: 'atmosphere', // 'atmosphere' | 'culinary' | 'details'
  image: IMAGES.aboutInterior,
  aspect: 'landscape',
}
```

---

## 2. Adding or Replacing Gallery Images

1. Place your optimized image file (`.webp` or `.jpg`, recommended `4:3` or `16:10` landscape ratio, `960px`–`1440px` wide) inside `src/assets/images/`.
2. Add the path to `IMAGES` in `src/data/restaurantData.ts`.
3. Add or update the corresponding item in `GALLERY_ITEMS` with localized `title`, `caption`, `category`, and `image`.

---

## 3. Gallery Categories

`src/pages/GalleryPage.tsx` currently filters across:
- `'all'` (`All Frames` / `كل الصور`)
- `'atmosphere'` (`Dining Room` / `صالة الطعام`)
- `'culinary'` (`Culinary Creations` / `إبداعات الطهي`)
- `'details'` (`Artisanal Details` / `تفاصيل الضيافة`)

To rename a filter tab, edit `gallery.filter.*` keys in `src/data/translations.ts`.

---

## 4. Lightbox Interaction Details

Clicking any gallery card opens the full-screen Lightbox dialog:
- **Mouse / Touch**: Close via the `X` button or clicking the dark backdrop; step forward/backward via Previous/Next buttons.
- **Keyboard**: `Escape` closes the Lightbox; `ArrowRight` / `ArrowLeft` navigate between visible filtered frames (automatically direction-aware in RTL Arabic mode).
- **Counter**: Displays `current / total` (for example `1 / 9`) using `tabular-nums`.
