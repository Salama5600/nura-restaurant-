# Branches & Contact Information

Branch locations, concierge phone numbers, WhatsApp numbers, email addresses, opening hours, and map links are centralized in the `BRANCHES` array inside `src/data/restaurantData.ts`.

---

## 1. Where Branches Appear

Editing `BRANCHES` automatically updates:
- **Contact Page** (`src/pages/ContactPage.tsx`): Branch selector tabs, address, opening hours, phone (`tel:`), email (`mailto:`), arrival/valet notes, coordinates label, and `"Open in Google Maps"` button.
- **Reservation Page** (`src/pages/ReservationPage.tsx`): Branch dropdown (`#res-branch`), Reservation Summary sidebar, concierge phone/hours helper card, and the target WhatsApp number (`branch.whatsapp`).
- **Footer** (`src/components/Footer.tsx`): Branch list (`city`, `district`, `phone`) plus the first branch's phone and email icons (`BRANCHES[0]`).

---

## 2. Editing Branch Details

Open `src/data/restaurantData.ts` and update each entry in `BRANCHES`:

```ts
{
  id: 'riyadh',
  city: {en: 'Riyadh', ar: 'الرياض'},
  district: {en: 'Al Olaya District', ar: 'حي العليا'},
  address: {
    en: 'Your full English street address',
    ar: 'عنوان الفرع الكامل بالعربية',
  },
  phone: '+966 11 555 0100',
  whatsapp: '966505550100', // Digits only with country code (no +, spaces, or dashes)
  email: 'reservations@yourdomain.com',
  hours: {
    en: 'Daily · 1:00 PM – 12:30 AM',
    ar: 'يومياً · ١:٠٠ ظهراً – ١٢:٣٠ صباحاً',
  },
  valetNote: {
    en: 'Complimentary valet at main entrance.',
    ar: 'خدمة صف سيارات مجانية عند المدخل الرئيسي.',
  },
  coordinates: '24.7136° N, 46.6753° E',
  mapUrl: 'https://maps.google.com/?q=YOUR_LAT,YOUR_LNG',
  mapNote: {
    en: 'Valet parking available beside the main entrance.',
    ar: 'تتوفر خدمة صف السيارات بجانب المدخل الرئيسي.',
  },
}
```

---

## 3. Adding or Removing a Branch

- **Add a branch**: Append a new `BranchInfo` object with a unique `id` to `BRANCHES`.
- **Single-location restaurant**: Keep only 1 branch object in `BRANCHES`. The Contact page, Footer, and Reservation form will automatically show that single location.

---

## 4. Social Media Handles & Service Hours Summary

At the top of `src/data/restaurantData.ts`, update `SITE_CONFIG`:
- `serviceHoursSummary`: Shown beneath the brand tagline in `Footer.tsx`.
- `socialLinks`: Displayed in `ContactPage.tsx` and linked from the Instagram icon in `Footer.tsx`.
