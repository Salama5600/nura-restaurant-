import {
  BranchInfo,
  CurrencyCode,
  GalleryItem,
  MenuItem,
  TeamMember,
  TestimonialSample,
} from '../types';

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

export const IMAGES = {
  heroSalmon: '/src/assets/images/hero_signature_salmon_1795812824846.jpg',
  aboutInterior: '/src/assets/images/about_dining_interior_1795812825701.jpg',
  truffleRisotto: '/src/assets/images/dish_truffle_risotto_1795812825693.jpg',
  beefTenderloin: '/src/assets/images/dish_beef_tenderloin_1795812826626.jpg',
  pistachioDessert: '/src/assets/images/dish_pistachio_dessert_1795812827052.jpg',
  mezzeStarter: '/src/assets/images/dish_mezze_starter_1795812827169.jpg',
};

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
      en: 'Hand-dived scallops dressed with warm saffron emulsion, pickled green chili, and sea fennel.',
      ar: 'اسكالوب طازج مع مستحلب الزعفران الدافئ والفلفل الأخضر المخلل وشمر البحر.',
    },
    category: 'starters',
    priceUsd: 24,
    glutenFree: true,
  },
  {
    id: 'smoked-freekeh-lamb',
    name: {en: 'Slow-Braised Lamb Shank & Freekeh', ar: 'موزة غنم مطهوة ببطء مع الفريكة'},
    description: {
      en: 'Eight-hour spiced lamb shoulder over smoky green wheat freekeh, crispy shallots, and yogurt tahini glaze.',
      ar: 'كتف غنم مطهو ببطء لثماني ساعات مع الفريكة الخضراء المدخنة والبصل المقرمش وصلصة الطحينة.',
    },
    category: 'mains',
    priceUsd: 42,
    signature: true,
  },
  {
    id: 'gulf-hammour-hearth',
    name: {en: 'Hearth-Roasted Gulf Hammour', ar: 'هامور خليجي مشوي على الحطب'},
    description: {
      en: 'Line-caught hammour fillet baked in clay salt crust with fennel bulb, dill butter, and tamarind reduction.',
      ar: 'فيليه هامور طازج مشوي بالفرن مع الشمر وزبدة الشبت وخلاصة التمر الهندي.',
    },
    category: 'grills',
    priceUsd: 40,
    glutenFree: true,
  },
  {
    id: 'date-caramel-millefeuille',
    name: {en: 'Khalas Date Mille-Feuille', ar: 'ميل فوي تمر الخلاص والكراميل'},
    description: {
      en: 'Caramelized puff pastry layered with mascarpone cream, warm Khalas date reduction, and sea salt.',
      ar: 'رقائق البف باستري المكرملة مع كريمة الماسكاربوني وصلصة تمر الخلاص الدافئة وملح البحر.',
    },
    category: 'desserts',
    priceUsd: 17,
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
];

export const BRANCHES: BranchInfo[] = [
  {
    id: 'riyadh',
    city: {en: 'Riyadh', ar: 'الرياض'},
    district: {en: 'Al Olaya — Via Riyadh Quarter', ar: 'العليا — حي فيا الرياض'},
    address: {
      en: '4120 Makkah Al Mukarramah Rd, Al Hada, Riyadh 12912, Saudi Arabia',
      ar: '٤١٢٠ طريق مكة المكرمة، الهدا، الرياض ١٢٩١٢، المملكة العربية السعودية',
    },
    phone: '+966 11 555 0140',
    whatsapp: '966505550140',
    email: 'riyadh@nura-dining.example',
    hours: {
      en: 'Daily · 1:00 PM – 12:30 AM (Fri from 1:30 PM)',
      ar: 'يومياً · ١:٠٠ ظهراً – ١٢:٣٠ صباحاً (الجمعة من ١:٣٠ ظهراً)',
    },
    valetNote: {
      en: 'Complimentary valet at North Courtyard · Private dining rooms for up to 18 guests.',
      ar: 'خدمة صف سيارات مجانية عند البوابة الشمالية · غرف ضيافة خاصة حتى ١٨ ضيفاً.',
    },
    coordinates: '24.6749° N, 46.6311° E',
    mapUrl: 'https://maps.google.com/?q=24.6749,46.6311',
  },
  {
    id: 'dubai',
    city: {en: 'Dubai', ar: 'دبي'},
    district: {en: 'DIFC — Gate Village 08', ar: 'مركز دبي المالي العالمي — قرية البوابة ٠٨'},
    address: {
      en: 'Podium Level, Gate Village 08, DIFC, Dubai, United Arab Emirates',
      ar: 'طابق البوديوم، قرية البوابة ٠٨، مركز دبي المالي العالمي، دبي، الإمارات',
    },
    phone: '+971 4 555 0192',
    whatsapp: '971505550192',
    email: 'dubai@nura-dining.example',
    hours: {
      en: 'Daily · 12:30 PM – 1:00 AM',
      ar: 'يومياً · ١٢:٣٠ ظهراً – ١:٠٠ صباحاً',
    },
    valetNote: {
      en: 'DIFC Gate Village valet · Terrace seating available October through April.',
      ar: 'خدمة صف سيارات في قرية البوابة · جلسات شرفة خارجية من أكتوبر حتى أبريل.',
    },
    coordinates: '25.2116° N, 55.2817° E',
    mapUrl: 'https://maps.google.com/?q=25.2116,55.2817',
  },
  {
    id: 'doha',
    city: {en: 'Doha', ar: 'الدوحة'},
    district: {en: 'Msheireb Downtown', ar: 'مشيرب قلب الدوحة'},
    address: {
      en: 'Sikkat Wadi Msheireb, Building 14, Doha, Qatar',
      ar: 'سكة وادي مشيرب، مبنى ١٤، الدوحة، قطر',
    },
    phone: '+974 4455 0188',
    whatsapp: '97455550188',
    email: 'doha@nura-dining.example',
    hours: {
      en: 'Daily · 1:00 PM – 12:00 AM',
      ar: 'يومياً · ١:٠٠ ظهراً – ١٢:٠٠ منتصف الليل',
    },
    valetNote: {
      en: 'Underground Msheireb valet · Wheelchair accessible garden entrance.',
      ar: 'خدمة صف سيارات سفلية في مشيرب · مدخل حديقة مهيأ بالكامل.',
    },
    coordinates: '25.2867° N, 51.5256° E',
    mapUrl: 'https://maps.google.com/?q=25.2867,51.5256',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'chef-tariq',
    name: {en: 'Chef Tariq Al-Harbi', ar: 'الشيف طارق الحربي'},
    role: {en: 'Executive Culinary Director', ar: 'المدير التنفيذي للمطبخ'},
    bio: {
      en: 'Trained across Amman, Lyon, and Riyadh, Tariq oversees seasonal hearth menus rooted in Levantine and Gulf coastal produce.',
      ar: 'يمزج الشيف طارق بخبرته بين عمّان وليون والرياض ليقود قوائم نُورا الموسمية المعتمدة على خيرات الساحل الخليجي.',
    },
    initials: 'TH',
  },
  {
    id: 'chef-elena',
    name: {en: 'Chef Elena Moreau', ar: 'الشيف إيلينا مورو'},
    role: {en: 'Head of Pastry & Botanicals', ar: 'رئيسة قسم الحلويات والمخبوزات'},
    bio: {
      en: 'Specializes in light, architectural entremets infused with green cardamom, Damascus pistachio, and wild blossom honey.',
      ar: 'متخصصة في ابتكار الحلويات المتوازنة بنكهات الهيل الأخضر والفستق الشامي وعسل الزهور البرية.',
    },
    initials: 'EM',
  },
  {
    id: 'director-noura',
    name: {en: 'Nadia Al-Qasimi', ar: 'نادية القاسمي'},
    role: {en: 'Director of Guest Experience', ar: 'مديرة تجربة الضيوف'},
    bio: {
      en: 'Curates tableside coffee rituals, private dining celebrations, and unhurried hospitality across all three Gulf venues.',
      ar: 'تشرف على طقوس القهوة العربية وحفلات العشاء الخاصة ومعايير الضيافة في فروعنا الثلاثة.',
    },
    initials: 'NQ',
  },
];

export const SAMPLE_TESTIMONIALS: TestimonialSample[] = [
  {
    id: 't1',
    author: {en: 'Sample Guest — Faisal R.', ar: 'نموذج ضيف — فيصل ر.'},
    city: {en: 'Riyadh Branch', ar: 'فرع الرياض'},
    visitContext: {en: 'Anniversary Dinner', ar: 'عشاء مناسبة خاصة'},
    quote: {
      en: 'The charred aubergine starter and truffle risotto struck an effortless balance between comfort and restraint. Warm, attentive pacing throughout the evening.',
      ar: 'توازن رائع بين نكهات الباذنجان المشوي وريزوتو الكمأة، مع خدمة هادئة واهتمام بأدق التفاصيل طوال الأمسية.',
    },
  },
  {
    id: 't2',
    author: {en: 'Sample Guest — Mariam K.', ar: 'نموذج ضيفة — مريم ك.'},
    city: {en: 'Dubai DIFC', ar: 'فرع دبي المالي'},
    visitContext: {en: 'Business Lunch', ar: 'غداء عمل'},
    quote: {
      en: 'Calm acoustics, generous table spacing, and the grilled salmon arrived crisp and perfectly seasoned. An ideal setting for unhurried conversation.',
      ar: 'أجواء هادئة ومسافات مريحة بين الطاولات، والسلمون المشوي وصل بدرجة نضج مثالية. مكان راقٍ للقاءات العمل الهادئة.',
    },
  },
  {
    id: 't3',
    author: {en: 'Sample Guest — Omar S.', ar: 'نموذج ضيف — عمر س.'},
    city: {en: 'Doha Msheireb', ar: 'فرع الدوحة مشيرب'},
    visitContext: {en: 'Family Gathering', ar: 'عشاء عائلي'},
    quote: {
      en: 'From the first pour of saffron Arabic coffee to the pistachio dessert, every detail felt thoughtful rather than rushed.',
      ar: 'من فنجان القهوة العربية بالزعفران حتى حلوى الفستق، كل تفصيل في التجربة كان مدروساً بعناية وذوق رفيع.',
    },
  },
];
