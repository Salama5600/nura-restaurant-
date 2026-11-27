import {
  BranchInfo,
  CurrencyCode,
  DemoStatMetric,
  GalleryItem,
  MenuItem,
  SiteConfig,
  TeamMember,
  TestimonialSample,
} from '../types';

/**
 * ============================================================================
 * NŪRA TEMPLATE CONFIGURATION — EDIT HERE TO CUSTOMIZE YOUR RESTAURANT
 * ============================================================================
 * Replace the sample brand, currency rates, social URLs, branches, menu items,
 * and team/testimonial copy below with your verified business information.
 */
export const SITE_CONFIG: SiteConfig = {
  brandName: {en: 'NŪRA', ar: 'نُورا'},
  defaultCurrency: 'USD',
  serviceHoursSummary: {
    en: 'Daily Service · 1:00 PM – 12:30 AM (varies by branch)',
    ar: 'خدمة يومية · ١:٠٠ ظهراً – ١٢:٣٠ صباحاً (تختلف حسب الفرع)',
  },
  socialLinks: [
    {
      id: 'instagram',
      label: {en: 'Instagram (Sample Profile)', ar: 'إنستغرام (حساب تجريبي)'},
      handle: '@nura.dining.demo',
      url: 'https://instagram.com',
    },
    {
      id: 'x',
      label: {en: 'X / Updates (Sample Profile)', ar: 'إكس (حساب تجريبي)'},
      handle: '@nura_dining_demo',
      url: 'https://x.com',
    },
  ],
};

export const CURRENCY_CONFIG: Record<
  CurrencyCode,
  {symbolEn: string; symbolAr: string; rateFromUsd: number}
> = {
  USD: {symbolEn: '$', symbolAr: '$', rateFromUsd: 1},
  SAR: {symbolEn: 'SAR ', symbolAr: 'ر.س ', rateFromUsd: 3.75},
  AED: {symbolEn: 'AED ', symbolAr: 'د.إ ', rateFromUsd: 3.67},
  QAR: {symbolEn: 'QAR ', symbolAr: 'ر.ق ', rateFromUsd: 3.64},
};

export const formatPrice = (
  priceUsd: number,
  currency: CurrencyCode,
  lang: 'en' | 'ar',
): string => {
  const cfg = CURRENCY_CONFIG[currency];
  const converted = Math.round(priceUsd * cfg.rateFromUsd);
  const symbol = lang === 'ar' ? cfg.symbolAr : cfg.symbolEn;
  if (currency === 'USD') {
    return `$${converted}`;
  }
  return lang === 'ar' ? `${converted} ${symbol.trim()}` : `${symbol}${converted}`;
};

/**
 * Optimized local WebP photography assets (16:9 hero/interior, 4:3 dishes).
 * Replace files in /src/assets/images/ with your own photography if desired.
 */
export const IMAGES = {
  heroSalmon: '/src/assets/images/hero-signature-salmon.webp',
  aboutInterior: '/src/assets/images/about-dining-interior.webp',
  truffleRisotto: '/src/assets/images/dish-truffle-risotto.webp',
  beefTenderloin: '/src/assets/images/dish-beef-tenderloin.webp',
  pistachioDessert: '/src/assets/images/dish-pistachio-dessert.webp',
  mezzeStarter: '/src/assets/images/dish-charred-aubergine-labneh.webp',
  scallopCrudo: '/src/assets/images/dish-hokkaido-scallop.webp',
  lambFreekeh: '/src/assets/images/dish-braised-lamb-freekeh.webp',
  gulfHammour: '/src/assets/images/dish-gulf-hammour.webp',
  dateMillefeuille: '/src/assets/images/dish-date-millefeuille.webp',
  pomegranateElixir: '/src/assets/images/dish-pomegranate-elixir.webp',
  arabicCoffee: '/src/assets/images/dish-arabic-coffee.webp',
};

/**
 * Sample homepage milestones — strictly demonstration numbers for template preview.
 */
export const DEMO_STATS: DemoStatMetric[] = [
  {id: 'years', value: '10+', labelKey: 'about.metricYearsLabel'},
  {id: 'guests', value: '50k+', labelKey: 'about.metricGuestsLabel'},
  {id: 'rating', value: '4.8', hasStar: true, labelKey: 'about.metricRatingLabel'},
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'truffle-risotto',
    name: {en: 'Truffle Mushroom Risotto', ar: 'ريزوتو الفطر والكمأة السوداء'},
    description: {
      en: 'Aged Acquerello rice simmered in roasted porcini stock, shaved black truffle, wild chanterelles, and herb oil.',
      ar: 'أرز أكويريلو المعتّق المطهو بمرق البورشيني المحمّص مع شرائح الكمأة السوداء والفطر البري وزيت الأعشاب.',
    },
    category: 'mains',
    priceUsd: 32,
    image: IMAGES.truffleRisotto,
    featured: true,
    signature: true,
    vegetarian: true,
    glutenFree: true,
  },
  {
    id: 'grilled-salmon',
    name: {en: 'Grilled Salmon', ar: 'سلمون مشوي بالتويل المقرمش'},
    description: {
      en: 'Citrus-glazed Atlantic salmon over toasted pearl fregola, charred leek coulis, and crisp saffron lattice tuile.',
      ar: 'فيليه سلمون أطلسي بتتبيلة الحمضيات فوق الفريغولا المحمصة وصلصة الأعشاب مع رقائق الزعفران المقرمشة.',
    },
    category: 'grills',
    priceUsd: 38,
    image: IMAGES.heroSalmon,
    featured: true,
    signature: true,
  },
  {
    id: 'beef-tenderloin',
    name: {en: 'Beef Tenderloin', ar: 'تندرلوين اللحم الفاخر'},
    description: {
      en: 'Charcoal-seared prime tenderloin, slow-reduced date & black pepper jus, blistered heirloom cherry tomatoes.',
      ar: 'فيليه لحم بقري مشوي على الفحم مع خلاصة التمر والفلفل الأسود وطماطم الكرز المشوية.',
    },
    category: 'grills',
    priceUsd: 45,
    image: IMAGES.beefTenderloin,
    featured: true,
    signature: true,
    glutenFree: true,
  },
  {
    id: 'pistachio-dessert',
    name: {en: 'Pistachio Dessert', ar: 'حلوى الفستق والهيل'},
    description: {
      en: 'Velvety roasted Damascus pistachio mousse, green cardamom praline, rose petal crunch, and edible gold leaf.',
      ar: 'موس الفستق الشامي المحمّص بنكهة الهيل الأخضر مع البرالين المقرمش ولمسة من بتلات الورد.',
    },
    category: 'desserts',
    priceUsd: 18,
    image: IMAGES.pistachioDessert,
    featured: true,
    signature: true,
    vegetarian: true,
  },
  {
    id: 'charred-aubergine-labneh',
    name: {en: 'Charred Aubergine & Labneh', ar: 'باذنجان مشوي مع لبنة مدخنة'},
    description: {
      en: 'Wood-roasted baby eggplant over whipped sheep milk labneh, pomegranate jewels, toasted pine nuts, and zaatar oil.',
      ar: 'باذنجان صغير مشوي على الحطب فوق لبنة غنم مخفوقة مع حبات الرمان والصنوبر المحمّص وزيت الزعتر.',
    },
    category: 'starters',
    priceUsd: 19,
    image: IMAGES.mezzeStarter,
    signature: true,
    vegetarian: true,
    glutenFree: true,
  },
  {
    id: 'saffron-scallop-crudo',
    name: {en: 'Hokkaido Scallop & Preserved Lime', ar: 'اسكالوب بالزعفران والليمون المعتّق'},
    description: {
      en: 'Seared and raw Hokkaido scallops dressed with warm saffron emulsion, pickled green chili, and sea fennel.',
      ar: 'اسكالوب طازج مع مستحلب الزعفران الدافئ والفلفل الأخضر المخلل وشمر البحر.',
    },
    category: 'starters',
    priceUsd: 24,
    image: IMAGES.scallopCrudo,
    glutenFree: true,
  },
  {
    id: 'smoked-freekeh-lamb',
    name: {en: 'Slow-Braised Lamb Shank & Freekeh', ar: 'موزة غنم مطهوة ببطء مع الفريكة'},
    description: {
      en: 'Eight-hour spiced lamb shank over smoky green wheat freekeh, crispy shallots, and yogurt tahini glaze.',
      ar: 'موزة غنم مطهوة ببطء لثماني ساعات مع الفريكة الخضراء المدخنة والبصل المقرمش وصلصة الطحينة.',
    },
    category: 'mains',
    priceUsd: 42,
    image: IMAGES.lambFreekeh,
    signature: true,
  },
  {
    id: 'gulf-hammour-hearth',
    name: {en: 'Hearth-Roasted Gulf Hammour', ar: 'هامور خليجي مشوي على الحطب'},
    description: {
      en: 'Line-caught hammour fillet roasted crisp with charred baby fennel bulb, dill herb butter, and tamarind reduction.',
      ar: 'فيليه هامور طازج مشوي على الحطب مع الشمر المشوي وزبدة الشبت وخلاصة التمر الهندي.',
    },
    category: 'grills',
    priceUsd: 40,
    image: IMAGES.gulfHammour,
    glutenFree: true,
  },
  {
    id: 'date-caramel-millefeuille',
    name: {en: 'Khalas Date Mille-Feuille', ar: 'ميل فوي تمر الخلاص والكراميل'},
    description: {
      en: 'Caramelized puff pastry layered with whipped mascarpone cream, warm Khalas date caramel, and flaky sea salt.',
      ar: 'رقائق البف باستري المكرملة مع كريمة الماسكاربوني وصلصة تمر الخلاص الدافئة وملح البحر.',
    },
    category: 'desserts',
    priceUsd: 17,
    image: IMAGES.dateMillefeuille,
    vegetarian: true,
  },
  {
    id: 'cardamom-pomegranate-spritz',
    name: {en: 'Smoked Pomegranate & Cardamom Elixir', ar: 'إكسير الرمان المدخن والهيل'},
    description: {
      en: 'Cold-pressed ruby pomegranate, crushed green cardamom pod, sparkling botanical tonic, zero-proof.',
      ar: 'رمان أحمر معصور على البارد مع الهيل الأخضر المطحون والمياه الفوارة النباتية (خالي من الكحول).',
    },
    category: 'beverages',
    priceUsd: 12,
    image: IMAGES.pomegranateElixir,
    vegetarian: true,
    glutenFree: true,
  },
  {
    id: 'saudi-kahwa-service',
    name: {en: 'Single-Origin Arabic Coffee Ritual', ar: 'قهوة عربية مختصة بالتمر'},
    description: {
      en: 'Lightly roasted Khawlani beans infused with saffron threads and cardamom, served tableside with stuffed dates.',
      ar: 'بن خولاني محمّص بخفة ومنكّه بالزعفران والهيل، يُقدّم على الطاولة مع التمر المحشو.',
    },
    category: 'beverages',
    priceUsd: 14,
    image: IMAGES.arabicCoffee,
    vegetarian: true,
    glutenFree: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-interior',
    title: {en: 'Main Evening Dining Room', ar: 'صالة الطعام الرئيسية مساءً'},
    caption: {
      en: 'Indoor olive trees, hand-blown amber glass pendants, and curved linen seating overlooking the skyline.',
      ar: 'أشجار الزيتون الداخلية والمصابيح العنبرية الدافئة وإطلالة بانورامية على أفق المدينة.',
    },
    category: 'atmosphere',
    image: IMAGES.aboutInterior,
    aspect: 'landscape',
  },
  {
    id: 'g-salmon',
    title: {en: 'Signature Glazed Salmon', ar: 'سلمون مشوي بتقديم الشيف'},
    caption: {
      en: 'Plated on matte stoneware with crisp saffron tuile and garden microgreens.',
      ar: 'يُقدّم على خزف حجري داكن مع رقاقة الزعفران المقرمشة والأعشاب الطازجة.',
    },
    category: 'culinary',
    image: IMAGES.heroSalmon,
    aspect: 'landscape',
  },
  {
    id: 'g-risotto',
    title: {en: 'Black Truffle & Chanterelle Risotto', ar: 'ريزوتو الكمأة السوداء والفطر'},
    caption: {
      en: 'Served tableside in warm travertine light for lunch and dinner seatings.',
      ar: 'تحضير يومي طازج على طاولات الحجر الجيري الدافئ لوجبتي الغداء والعشاء.',
    },
    category: 'culinary',
    image: IMAGES.truffleRisotto,
    aspect: 'landscape',
  },
  {
    id: 'g-tenderloin',
    title: {en: 'Charcoal-Seared Beef Tenderloin', ar: 'تندرلوين مشوي على الفحم'},
    caption: {
      en: 'Finished with glossy reduction and blistered heirloom cherry tomatoes.',
      ar: 'مطهو بدقة مع صلصة الاختزال اللامعة وطماطم الكرز المشوية.',
    },
    category: 'culinary',
    image: IMAGES.beefTenderloin,
    aspect: 'landscape',
  },
  {
    id: 'g-lamb',
    title: {en: 'Slow-Braised Lamb & Freekeh', ar: 'موزة الغنم والفريكة المدخنة'},
    caption: {
      en: 'Eight-hour braised lamb shank finished with crispy shallots and tahini glaze.',
      ar: 'موزة غنم مطهوة ببطء مع الفريكة المدخنة والبصل المقرمش وصلصة الطحينة.',
    },
    category: 'culinary',
    image: IMAGES.lambFreekeh,
    aspect: 'landscape',
  },
  {
    id: 'g-hammour',
    title: {en: 'Hearth-Roasted Gulf Hammour', ar: 'هامور خليجي مشوي على الحطب'},
    caption: {
      en: 'Coastal catch served with charred fennel bulb and herb butter emulsion.',
      ar: 'سمك الهامور الطازج مع الشمر المشوي وزبدة الأعشاب والتمر الهندي.',
    },
    category: 'culinary',
    image: IMAGES.gulfHammour,
    aspect: 'landscape',
  },
  {
    id: 'g-pistachio',
    title: {en: 'Pistachio & Cardamom Entremet', ar: 'حلوى الفستق والهيل الفاخرة'},
    caption: {
      en: 'Artisanal patisserie layered with roasted Damascus pistachio and delicate gold leaf.',
      ar: 'تشكيلة حلويات فاخرة من الفستق الشامي المحمّص ولمسات الذهب الصالح للأكل.',
    },
    category: 'details',
    image: IMAGES.pistachioDessert,
    aspect: 'landscape',
  },
  {
    id: 'g-mezze',
    title: {en: 'Charred Aubergine & Whipped Labneh', ar: 'مقبلات الباذنجان المشوي واللبنة'},
    caption: {
      en: 'Modern Levantine small plate adorned with ruby pomegranate and pine nuts.',
      ar: 'طبق مقبلات شامي معاصر مزيّن بحبات الرمان والصنوبر المحمّص.',
    },
    category: 'details',
    image: IMAGES.mezzeStarter,
    aspect: 'landscape',
  },
  {
    id: 'g-coffee',
    title: {en: 'Arabic Coffee & Dates Service', ar: 'طقوس القهوة العربية والتمر'},
    caption: {
      en: 'Brushed brass dallah service poured tableside with pistachio-stuffed dates.',
      ar: 'خدمة القهوة العربية بالزعفران والهيل من الدلة النحاسية مع التمر المحشو.',
    },
    category: 'details',
    image: IMAGES.arabicCoffee,
    aspect: 'landscape',
  },
];

/**
 * Demonstration Gulf branches — replace sample addresses, phones, WhatsApp
 * numbers, emails, and Google Maps links with your real venue information.
 */
export const BRANCHES: BranchInfo[] = [
  {
    id: 'riyadh',
    city: {en: 'Riyadh', ar: 'الرياض'},
    district: {
      en: 'Al Olaya District (Demo Branch)',
      ar: 'حي العليا (فرع تجريبي)',
    },
    address: {
      en: 'Demo Address: Al Olaya Boulevard, Riyadh, Saudi Arabia (replace with your street address)',
      ar: 'عنوان تجريبي: طريق العليا، الرياض، المملكة العربية السعودية (يُستبدل بعنوانكم)',
    },
    phone: '+966 11 000 0140',
    whatsapp: '966500000140',
    email: 'riyadh@nura-demo.example',
    hours: {
      en: 'Daily · 1:00 PM – 12:30 AM',
      ar: 'يومياً · ١:٠٠ ظهراً – ١٢:٣٠ صباحاً',
    },
    valetNote: {
      en: 'Sample arrival note: Complimentary valet service · Private dining rooms for up to 18 guests.',
      ar: 'ملاحظة وصول تجريبية: خدمة صف سيارات مجانية · غرف ضيافة خاصة حتى ١٨ ضيفاً.',
    },
    coordinates: 'Riyadh City Reference (Demo)',
    mapUrl: 'https://maps.google.com/?q=Riyadh+Saudi+Arabia',
    mapNote: {
      en: 'Demo city map link — update with your verified Google Maps pin before launch.',
      ar: 'رابط خريطة تجريبي للمدينة — حدّثه برابط موقع مطعمكم الفعلي قبل النشر.',
    },
  },
  {
    id: 'dubai',
    city: {en: 'Dubai', ar: 'دبي'},
    district: {
      en: 'DIFC Quarter (Demo Branch)',
      ar: 'مركز دبي المالي (فرع تجريبي)',
    },
    address: {
      en: 'Demo Address: Financial Centre Promenade, DIFC, Dubai, UAE (replace with your unit)',
      ar: 'عنوان تجريبي: ممر المركز المالي، دبي، الإمارات العربية المتحدة (يُستبدل بعنوانكم)',
    },
    phone: '+971 4 000 0192',
    whatsapp: '971500000192',
    email: 'dubai@nura-demo.example',
    hours: {
      en: 'Daily · 12:30 PM – 1:00 AM',
      ar: 'يومياً · ١٢:٣٠ ظهراً – ١:٠٠ صباحاً',
    },
    valetNote: {
      en: 'Sample arrival note: Valet drop-off at main podium · Seasonal terrace seating available.',
      ar: 'ملاحظة وصول تجريبية: خدمة صف سيارات عند المدخل الرئيسي · جلسات شرفة موسمية.',
    },
    coordinates: 'Dubai City Reference (Demo)',
    mapUrl: 'https://maps.google.com/?q=Dubai+United+Arab+Emirates',
    mapNote: {
      en: 'Demo city map link — update with your verified Google Maps pin before launch.',
      ar: 'رابط خريطة تجريبي للمدينة — حدّثه برابط موقع مطعمكم الفعلي قبل النشر.',
    },
  },
  {
    id: 'doha',
    city: {en: 'Doha', ar: 'الدوحة'},
    district: {
      en: 'Msheireb Quarter (Demo Branch)',
      ar: 'حي مشيرب (فرع تجريبي)',
    },
    address: {
      en: 'Demo Address: Msheireb Courtyard, Doha, Qatar (replace with your street address)',
      ar: 'عنوان تجريبي: ساحة مشيرب، الدوحة، قطر (يُستبدل بعنوانكم)',
    },
    phone: '+974 4400 0188',
    whatsapp: '974500000188',
    email: 'doha@nura-demo.example',
    hours: {
      en: 'Daily · 1:00 PM – 12:00 AM',
      ar: 'يومياً · ١:٠٠ ظهراً – ١٢:٠٠ منتصف الليل',
    },
    valetNote: {
      en: 'Sample arrival note: Underground valet parking · Step-free garden entrance.',
      ar: 'ملاحظة وصول تجريبية: مواقف سفلية مع خدمة الصف · مدخل حديقة ميسّر.',
    },
    coordinates: 'Doha City Reference (Demo)',
    mapUrl: 'https://maps.google.com/?q=Doha+Qatar',
    mapNote: {
      en: 'Demo city map link — update with your verified Google Maps pin before launch.',
      ar: 'رابط خريطة تجريبي للمدينة — حدّثه برابط موقع مطعمكم الفعلي قبل النشر.',
    },
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'chef-tariq',
    name: {en: 'Chef Tariq Al-Harbi (Sample)', ar: 'الشيف طارق الحربي (نموذج)'},
    role: {en: 'Executive Culinary Director', ar: 'المدير التنفيذي للمطبخ'},
    bio: {
      en: 'Sample bio: Oversees seasonal open-hearth menus rooted in Levantine and Gulf coastal produce.',
      ar: 'نبذة نموذجية: يشرف على القوائم الموسمية المعتمدة على المكونات الشامية والخليجية الساحلية.',
    },
    initials: 'TH',
  },
  {
    id: 'chef-elena',
    name: {en: 'Chef Elena Moreau (Sample)', ar: 'الشيف إيلينا مورو (نموذج)'},
    role: {en: 'Head of Pastry & Botanicals', ar: 'رئيسة قسم الحلويات والمخبوزات'},
    bio: {
      en: 'Sample bio: Crafts light, architectural entremets infused with green cardamom, pistachio, and honey.',
      ar: 'نبذة نموذجية: متخصصة في ابتكار الحلويات المتوازنة بنكهات الهيل الأخضر والفستق والعسل.',
    },
    initials: 'EM',
  },
  {
    id: 'director-noura',
    name: {en: 'Nadia Al-Qasimi (Sample)', ar: 'نادية القاسمي (نموذج)'},
    role: {en: 'Director of Guest Experience', ar: 'مديرة تجربة الضيوف'},
    bio: {
      en: 'Sample bio: Curates tableside coffee rituals, private dining celebrations, and evening hospitality.',
      ar: 'نبذة نموذجية: تشرف على طقوس القهوة العربية وحفلات العشاء الخاصة ومعايير الضيافة.',
    },
    initials: 'NQ',
  },
];

export const SAMPLE_TESTIMONIALS: TestimonialSample[] = [
  {
    id: 't1',
    author: {en: 'Sample Guest — Faisal R.', ar: 'نموذج ضيف — فيصل ر.'},
    city: {en: 'Riyadh Demo Branch', ar: 'فرع الرياض التجريبي'},
    visitContext: {en: 'Sample Review · Anniversary', ar: 'مراجعة نموذجية · مناسبة خاصة'},
    quote: {
      en: 'The charred aubergine starter and truffle risotto struck an effortless balance between comfort and restraint. Warm, attentive pacing throughout the evening.',
      ar: 'توازن رائع بين نكهات الباذنجان المشوي وريزوتو الكمأة، مع خدمة هادئة واهتمام بأدق التفاصيل طوال الأمسية.',
    },
  },
  {
    id: 't2',
    author: {en: 'Sample Guest — Mariam K.', ar: 'نموذج ضيفة — مريم ك.'},
    city: {en: 'Dubai Demo Branch', ar: 'فرع دبي التجريبي'},
    visitContext: {en: 'Sample Review · Business Lunch', ar: 'مراجعة نموذجية · غداء عمل'},
    quote: {
      en: 'Calm acoustics, generous table spacing, and the grilled salmon arrived crisp and perfectly seasoned. An ideal setting for unhurried conversation.',
      ar: 'أجواء هادئة ومسافات مريحة بين الطاولات، والسلمون المشوي وصل بدرجة نضج مثالية. مكان راقٍ للقاءات العمل الهادئة.',
    },
  },
  {
    id: 't3',
    author: {en: 'Sample Guest — Omar S.', ar: 'نموذج ضيف — عمر س.'},
    city: {en: 'Doha Demo Branch', ar: 'فرع الدوحة التجريبي'},
    visitContext: {en: 'Sample Review · Family Dinner', ar: 'مراجعة نموذجية · عشاء عائلي'},
    quote: {
      en: 'From the first pour of saffron Arabic coffee to the pistachio dessert, every detail felt thoughtful rather than rushed.',
      ar: 'من فنجان القهوة العربية بالزعفران حتى حلوى الفستق، كل تفصيل في التجربة كان مدروساً بعناية وذوق رفيع.',
    },
  },
];
