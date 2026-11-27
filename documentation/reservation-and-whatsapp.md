# Reservations & WhatsApp Handoff

The Reservation page (`src/pages/ReservationPage.tsx`) validates dining details in the browser and prepares a formatted WhatsApp message addressed to the selected branch.

---

## 1. Important Limitation: No Database or Stored Bookings

NŪRA is a static frontend template:
- Reservations are **not** stored in a database, CMS, or admin dashboard.
- No automated SMS/email confirmations are sent.
- Submitting the form displays a formatted message preview and an explicit external-link notice informing the guest that clicking **"Continue to WhatsApp"** leaves the website to open WhatsApp (`https://wa.me/...`).

---

## 2. Configuring Branch WhatsApp Numbers

Open `src/data/restaurantData.ts` and update the `whatsapp` field on each object in `BRANCHES`:

```ts
whatsapp: '966500000140',
```

**Formatting rules**:
- Include the international country code (`966`, `971`, `974`, etc.).
- Use **digits only** — do not include `+`, spaces, parentheses, or dashes.

---

## 3. Customizing Time Slots & Guest Counts

In `src/pages/ReservationPage.tsx`:
- **Time slots**: Edit the `TIME_SLOTS` array at line 15:
  ```ts
  const TIME_SLOTS = ['13:30', '15:00', '18:30', '19:30', '20:30', '21:30', '22:30'];
  ```
- **Guest count options**: Edit the array `[1, 2, 3, 4, 5, 6, 7, 8, 10, 12]` inside the `#res-guests` `<select>` (around line 259).

---

## 4. Form Validation Rules

`validate()` in `src/pages/ReservationPage.tsx` checks:
- **Full Name**: Required (non-empty after trim).
- **Phone Number**: Required and must contain at least 8 digits.
- **Date**: Required and cannot be earlier than today (`getTodayIso()`).
- **Email**: Optional; if provided, must match a basic email format (`^[^\s@]+@[^\s@]+\.[^\s@]+$`).

Error messages come from `form.errorRequired`, `form.errorPhone`, `form.errorDate`, and `form.errorEmail` in `src/data/translations.ts`.

---

## 5. Customizing the Generated WhatsApp Message

To change the wording of the pre-filled WhatsApp message, edit `buildWhatsappText()` in `src/pages/ReservationPage.tsx` (lines 84–116), which has separate templates for `'ar'` and `'en'`.
