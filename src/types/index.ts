export type Language = 'en' | 'ar';

export type PageRoute =
  | 'home'
  | 'menu'
  | 'about'
  | 'gallery'
  | 'reservation'
  | 'contact';

export type CurrencyCode = 'USD' | 'SAR' | 'AED' | 'QAR';

export type MenuCategory =
  | 'all'
  | 'starters'
  | 'mains'
  | 'grills'
  | 'desserts'
  | 'beverages';

export type DietaryFilter = 'all' | 'signature' | 'vegetarian' | 'gluten-free';

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface MenuItem {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  category: Exclude<MenuCategory, 'all'>;
  priceUsd: number;
  image?: string;
  featured?: boolean;
  signature?: boolean;
  vegetarian?: boolean;
  glutenFree?: boolean;
  prepNote?: LocalizedText;
}

export interface GalleryItem {
  id: string;
  title: LocalizedText;
  caption: LocalizedText;
  category: 'atmosphere' | 'culinary' | 'details';
  image: string;
  aspect: 'landscape' | 'portrait';
}

export interface BranchInfo {
  id: string;
  city: LocalizedText;
  district: LocalizedText;
  address: LocalizedText;
  phone: string;
  whatsapp: string;
  email: string;
  hours: LocalizedText;
  valetNote: LocalizedText;
  coordinates: string;
  mapUrl: string;
}

export interface TeamMember {
  id: string;
  name: LocalizedText;
  role: LocalizedText;
  bio: LocalizedText;
  initials: string;
}

export interface TestimonialSample {
  id: string;
  author: LocalizedText;
  city: LocalizedText;
  quote: LocalizedText;
  visitContext: LocalizedText;
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  email: string;
  branchId: string;
  guests: number;
  date: string;
  time: string;
  notes: string;
}
