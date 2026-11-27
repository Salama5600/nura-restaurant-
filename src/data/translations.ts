import {Language} from '../types';

export type TranslationDictionary = Record<string, string>;

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    'brand.name': 'NŪRA',
    'brand.subtitle': 'Restaurant',

    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.reservation': 'Reservation',
    'nav.contact': 'Contact',

    'actions.reserve': 'Reserve a Table',
    'actions.bookTable': 'Book a Table',
    'actions.exploreMenu': 'Explore Our Menu',
    'actions.watchVideo': 'Watch Video',
    'actions.ourStory': 'Our Story',
    'actions.viewFullMenu': 'View Full Menu',
    'actions.resetFilters': 'Reset Filters',
    'actions.close': 'Close',
    'actions.previous': 'Previous',
    'actions.next': 'Next',
    'actions.copyMessage': 'Copy Message',
    'actions.copied': 'Copied',
    'actions.continueWhatsapp': 'Continue to WhatsApp',
    'actions.openMaps': 'Open in Google Maps',
    'actions.menuToggle': 'Toggle navigation menu',

    'hero.eyebrow': 'A Modern Dining Experience',
    'hero.titleLine1': 'Exceptional Taste,',
    'hero.titleLine2': 'Unforgettable Moments',
    'hero.description':
      'Discover a unique culinary journey where modern flavors meet timeless elegance.',

    'pillars.fineDining': 'Fine Dining Experience',
    'pillars.ingredients': 'Premium Ingredients',
    'pillars.chefs': 'World-Class Chefs',
    'pillars.locations': 'Multiple Locations',

    'about.eyebrow': 'About NŪRA',
    'about.title': 'More Than a Restaurant',
    'about.description':
      'At NŪRA, we believe dining is an experience. Our kitchen blends contemporary techniques with authentic flavors to create memorable moments.',
    'about.metricYearsLabel': 'Years of Excellence',
    'about.metricGuestsLabel': 'Happy Guests',
    'about.metricRatingLabel': 'Guest Rating',
    'about.sampleMetricsNote': 'Sample template highlights — replace with your venue milestones.',

    'signatures.title': 'Our Signature Dishes',
    'signatures.ctaEyebrow': 'Reserve Your Table',
    'signatures.ctaTitle': 'An Unforgettable Dining Experience Awaits',
    'signatures.ctaDescription': 'Book your table now and let us take care of the rest.',

    'experience.eyebrow': 'The NŪRA Rhythm',
    'experience.title': 'Crafted From Fire, Saffron & Quiet Hospitality',
    'experience.body':
      'Every evening service begins before dusk: slow-roasted spices, open-flame charcoal grills, and warm olive wood tables arranged for unhurried conversation across our Gulf dining rooms.',
    'experience.point1Title': 'Open-Flame Kitchen',
    'experience.point1Desc':
      'Seasonal Gulf seafood and dry-aged cuts finished over aromatic citrus wood and charcoal.',
    'experience.point2Title': 'Artisanal Pastry & Coffee',
    'experience.point2Desc':
      'Cardamom entremets, roasted Damascus pistachio desserts, and single-origin Arabic coffee service.',

    'testimonials.eyebrow': 'Guest Reflections',
    'testimonials.title': 'Words From the Table',
    'testimonials.sampleLabel': 'Sample Content — Replaceable Template Copy',

    'menu.eyebrow': 'Culinary Selection',
    'menu.title': 'Seasonal Menu',
    'menu.description':
      'Refined Middle Eastern heritage paired with contemporary international technique. Prices update instantly across currencies.',
    'menu.searchPlaceholder': 'Search dishes or ingredients...',
    'menu.currencyLabel': 'Currency',
    'menu.category.all': 'All Dishes',
    'menu.category.starters': 'Starters',
    'menu.category.mains': 'Mains',
    'menu.category.grills': 'Grills & Seafood',
    'menu.category.desserts': 'Desserts',
    'menu.category.beverages': 'Beverages',
    'menu.dietary.all': 'All Styles',
    'menu.dietary.signature': "Chef's Signature",
    'menu.dietary.vegetarian': 'Vegetarian',
    'menu.dietary.glutenFree': 'Gluten-Free',
    'menu.emptyTitle': 'No dishes match this selection',
    'menu.emptyDescription':
      'Try clearing your search term or switching back to all menu categories.',
    'menu.dishReserve': 'Reserve for this dish',
    'menu.itemsShown': 'dishes shown',

    'aboutPage.eyebrow': 'Brand Story & Philosophy',
    'aboutPage.title': 'Where Contemporary Craft Meets Warm Regional Hospitality',
    'aboutPage.lead':
      'Born from a desire to elevate everyday gathering into quiet ritual, NŪRA brings together architectural calm, open-hearth cooking, and refined Gulf hospitality.',
    'aboutPage.pillar1Title': '01. Heritage Reimagined',
    'aboutPage.pillar1Desc':
      'We honor timeless Levant and Gulf pantry staples—preserved lemon, smoked labneh, saffron, and wild thyme—through clean modern plating.',
    'aboutPage.pillar2Title': '02. Provenance & Precision',
    'aboutPage.pillar2Desc':
      'Each morning our culinary team sources coastal catch, organic orchard greens, and artisan grains from trusted regional growers.',
    'aboutPage.pillar3Title': '03. Considered Atmosphere',
    'aboutPage.pillar3Desc':
      'Warm travertine, sculpted olive trees, and amber lighting shape a dining room designed for lingering dinners and private celebrations.',
    'aboutPage.teamEyebrow': 'Culinary Leadership',
    'aboutPage.teamTitle': 'The Team Behind the Kitchen',
    'aboutPage.teamNote': 'Sample team profiles — customize with your chefs and culinary directors.',

    'gallery.eyebrow': 'Visual Archive',
    'gallery.title': 'Atmosphere & Culinary Craft',
    'gallery.description':
      'Explore the dining room, plated signature courses, and tactile details across our venues. Select any photograph to inspect full screen.',
    'gallery.filter.all': 'All Frames',
    'gallery.filter.atmosphere': 'Dining Room',
    'gallery.filter.culinary': 'Culinary Creations',
    'gallery.filter.details': 'Artisanal Details',
    'gallery.lightboxHint': 'Use arrow keys to navigate or Escape to close',

    'reservation.eyebrow': 'Table Reservations',
    'reservation.title': 'Reserve Your Table',
    'reservation.description':
      'Complete your dining preferences below to prepare an instant WhatsApp reservation request directly with your chosen branch.',
    'reservation.instructionsTitle': 'How Reservations Work',
    'reservation.instructionsBody':
      'This static preview prepares a formatted WhatsApp message containing your exact booking details—no account or online deposit required.',
    'reservation.summaryTitle': 'Reservation Summary',
    'reservation.handoffTitle': 'Ready to Send via WhatsApp',
    'reservation.handoffNotice':
      'Notice: Clicking "Continue to WhatsApp" will leave the NŪRA website and open WhatsApp with your reservation message pre-filled.',
    'reservation.editDetails': 'Edit Details',

    'form.fullName': 'Full Name',
    'form.fullNamePlaceholder': 'e.g., Layla Al-Mansoor',
    'form.phone': 'Phone Number',
    'form.phonePlaceholder': '+966 5X XXX XXXX',
    'form.email': 'Email Address (Optional)',
    'form.emailPlaceholder': 'guest@example.com',
    'form.branch': 'Select Branch',
    'form.guests': 'Number of Guests',
    'form.guestSingular': 'Guest',
    'form.guestPlural': 'Guests',
    'form.date': 'Preferred Date',
    'form.time': 'Seating Time',
    'form.notes': 'Occasion or Dietary Notes',
    'form.notesPlaceholder': 'Window table, anniversary celebration, allergies...',
    'form.submit': 'Prepare WhatsApp Reservation',
    'form.errorRequired': 'Please fill in this required field.',
    'form.errorPhone': 'Please enter a valid phone number (at least 8 digits).',
    'form.errorDate': 'Please choose today or a future date.',
    'form.errorEmail': 'Please enter a valid email address.',

    'contact.eyebrow': 'Branches & Inquiries',
    'contact.title': 'Visit NŪRA Across the Gulf',
    'contact.description':
      'Select a city to view branch hours, valet arrival notes, direct concierge numbers, and map directions.',
    'contact.addressLabel': 'Address',
    'contact.hoursLabel': 'Opening Hours',
    'contact.phoneLabel': 'Direct Concierge',
    'contact.emailLabel': 'Email',
    'contact.valetLabel': 'Arrival & Seating',
    'contact.mapEyebrow': 'Location Preview',
    'contact.socialTitle': 'Follow & Connect',

    'video.title': 'Inside the NŪRA Evening Service',
    'video.subtitle':
      'A glimpse into our open kitchen, seasonal plating philosophy, and evening ambiance across Riyadh, Dubai, and Doha.',
    'video.chapter1': '17:30 · Hearth Preparation & Spice Roasting',
    'video.chapter2': '19:00 · Golden Hour Dining Room Arrival',
    'video.chapter3': '21:00 · Signature Plating & Tableside Service',

    'footer.tagline':
      'Contemporary Middle Eastern & international fine dining shaped by warm architectural calm and seasonal craft.',
    'footer.navigation': 'Navigation',
    'footer.branches': 'Gulf Branches',
    'footer.hours': 'Daily Service: 1:00 PM – 12:30 AM',
    'footer.currency': 'Display Currency',
    'footer.copyright': '© 2026 NŪRA Restaurant Template. Sample demonstration content.',
  },
  ar: {
    'brand.name': 'نُورا',
    'brand.subtitle': 'مطعم',

    'nav.home': 'الرئيسية',
    'nav.menu': 'القائمة',
    'nav.about': 'قصتنا',
    'nav.gallery': 'المعرض',
    'nav.reservation': 'الحجز',
    'nav.contact': 'تواصل معنا',

    'actions.reserve': 'احجز طاولة',
    'actions.bookTable': 'احجز طاولتك',
    'actions.exploreMenu': 'استكشف القائمة',
    'actions.watchVideo': 'شاهد القصة',
    'actions.ourStory': 'تعرف على قصتنا',
    'actions.viewFullMenu': 'عرض القائمة الكاملة',
    'actions.resetFilters': 'إعادة ضبط التصفية',
    'actions.close': 'إغلاق',
    'actions.previous': 'السابق',
    'actions.next': 'التالي',
    'actions.copyMessage': 'نسخ الرسالة',
    'actions.copied': 'تم النسخ',
    'actions.continueWhatsapp': 'المتابعة إلى واتساب',
    'actions.openMaps': 'فتح في خرائط جوجل',
    'actions.menuToggle': 'تبديل قائمة التنقل',

    'hero.eyebrow': 'تجربة ضيافة عصرية راقية',
    'hero.titleLine1': 'مذاق استثنائي،',
    'hero.titleLine2': 'ولحظات لا تُنسى',
    'hero.description':
      'اكتشف رحلة طهي متفرّدة تلتقي فيها النكهات العصرية مع أناقة الضيافة الأصيلة.',

    'pillars.fineDining': 'تجربة طعام فاخرة',
    'pillars.ingredients': 'مكونات مختارة بعناية',
    'pillars.chefs': 'طهاة عالميون',
    'pillars.locations': 'فروع متعددة في الخليج',

    'about.eyebrow': 'عن نُورا',
    'about.title': 'أكثر من مجرّد مطعم',
    'about.description':
      'في نُورا نؤمن بأن تناول الطعام تجربة متكاملة؛ يمزج مطبخنا بين التقنيات الحديثة والنكهات الأصيلة لصناعة لحظات تبقى في الذاكرة.',
    'about.metricYearsLabel': 'سنوات من التميّز',
    'about.metricGuestsLabel': 'ضيف سعيد',
    'about.metricRatingLabel': 'تقييم الضيوف',
    'about.sampleMetricsNote': 'أرقام نموذجية قابلة للتعديل حسب بيانات مطعمكم.',

    'signatures.title': 'أطباقنا المميزة',
    'signatures.ctaEyebrow': 'احجز طاولتك',
    'signatures.ctaTitle': 'تجربة عشاء لا تُنسى بانتظارك',
    'signatures.ctaDescription': 'احجز طاولتك الآن ودعنا نعتني بكافة التفاصيل.',

    'experience.eyebrow': 'روح نُورا',
    'experience.title': 'نكهات النار والزعفران ودفء الضيافة',
    'experience.body':
      'تبدأ كل أمسية قبل الغروب بتحميص التوابل الطازجة، وإشعال مواقد الفحم العطرية، وترتيب طاولات خشب الزيتون لاستقبال ضيوفنا في أجواء هادئة.',
    'experience.point1Title': 'مطبخ اللهب المفتوح',
    'experience.point1Desc':
      'مأكولات بحرية خليجية طازجة وقطعيات مختارة تُطهى على حطب الحمضيات والفحم الهادئ.',
    'experience.point2Title': 'حلويات مختصة وقهوة عربية',
    'experience.point2Desc':
      'حلويات الفستق والهيل المحضّرة يومياً مع خدمة القهوة العربية المختصة.',

    'testimonials.eyebrow': 'انطباعات الضيوف',
    'testimonials.title': 'أصداء من حول الطاولة',
    'testimonials.sampleLabel': 'محتوى تجريبي — قابل للاستبدال بنصوصكم',

    'menu.eyebrow': 'مختارات المطبخ',
    'menu.title': 'القائمة الموسمية',
    'menu.description':
      'إرث المطبخ الشرق أوسطي بلمسة عالمية معاصرة. تتحدّث الأسعار مباشرةً حسب العملة المختارة.',
    'menu.searchPlaceholder': 'ابحث عن طبق أو مكون...',
    'menu.currencyLabel': 'العملة',
    'menu.category.all': 'جميع الأطباق',
    'menu.category.starters': 'المقبلات',
    'menu.category.mains': 'الأطباق الرئيسية',
    'menu.category.grills': 'المشاوي والبحريات',
    'menu.category.desserts': 'الحلويات',
    'menu.category.beverages': 'المشروبات',
    'menu.dietary.all': 'كل الأصناف',
    'menu.dietary.signature': 'اختيار الشيف',
    'menu.dietary.vegetarian': 'نباتي',
    'menu.dietary.glutenFree': 'خالي من الغلوتين',
    'menu.emptyTitle': 'لا توجد أطباق مطابقة لاختيارك',
    'menu.emptyDescription':
      'جرّب مسح كلمة البحث أو العودة إلى عرض جميع أقسام القائمة.',
    'menu.dishReserve': 'احجز لتجربة هذا الطبق',
    'menu.itemsShown': 'أطباق معروضة',

    'aboutPage.eyebrow': 'القصة والفلسفة',
    'aboutPage.title': 'حيث يلتقي الإتقان المعاصر بدفء الضيافة الخليجية',
    'aboutPage.lead':
      'انطلقت نُورا برؤية تحوّل لحظات الاجتماع حول المائدة إلى طقس يومي هادئ يجمع بين العمارة الدافئة والطهي المتقن.',
    'aboutPage.pillar1Title': '٠١. إرث برؤية معاصرة',
    'aboutPage.pillar1Desc':
      'نحتفي بمكونات المطبخ الشامي والخليجي الأصيلة من اللبنة المدخنة والزعفران والليمون المجفف بأسلوب تقديم حديث.',
    'aboutPage.pillar2Title': '٠٢. جودة المصدر والدقة',
    'aboutPage.pillar2Desc':
      'يختار فريقنا كل صباح أجود الأسماك الساحلية والأعشاب الموسمية والحبوب من منتجين موثوقين في المنطقة.',
    'aboutPage.pillar3Title': '٠٣. أجواء مدروسة للسكينة',
    'aboutPage.pillar3Desc':
      'تتناغم أحجار الترافرتين وأشجار الزيتون والإضاءة الدافئة لخلق مساحة مثالية لأمسيات هادئة ومناسبات خاصة.',
    'aboutPage.teamEyebrow': 'قيادة المطبخ',
    'aboutPage.teamTitle': 'الفريق خلف الأطباق',
    'aboutPage.teamNote': 'نبذ تعريفية تجريبية — يمكنكم استبدالها بأسماء فريق الطهاة لديكم.',

    'gallery.eyebrow': 'الأرشيف البصري',
    'gallery.title': 'الأجواء وفنون التقديم',
    'gallery.description':
      'تصفّح لقطات من صالة الطعام والأطباق المميزة والتفاصيل المعمارية. اضغط على أي صورة للمعاينة الكاملة.',
    'gallery.filter.all': 'كل الصور',
    'gallery.filter.atmosphere': 'صالة الطعام',
    'gallery.filter.culinary': 'إبداعات الطهي',
    'gallery.filter.details': 'تفاصيل الضيافة',
    'gallery.lightboxHint': 'استخدم الأسهم للتنقل أو مفتاح Escape للإغلاق',

    'reservation.eyebrow': 'حجوزات الطاولات',
    'reservation.title': 'احجز طاولتك',
    'reservation.description':
      'أكمل بيانات الحجز التالية لتجهيز رسالة واتساب منسّقة وإرسالها مباشرةً إلى الفرع الذي تختاره.',
    'reservation.instructionsTitle': 'آلية تأكيد الحجز',
    'reservation.instructionsBody':
      'يقوم هذا القالب الساكن بتجهيز رسالة واتساب تتضمن كافة تفاصيل حجزك بشكل فوري دون الحاجة لحساب أو دفع مسبق.',
    'reservation.summaryTitle': 'ملخص الحجز',
    'reservation.handoffTitle': 'رسالتك جاهزة للإرسال عبر واتساب',
    'reservation.handoffNotice':
      'تنبيه: بالضغط على "المتابعة إلى واتساب" ستغادر موقع نُورا للانتقال إلى تطبيق واتساب مع نص الحجز الجاهز.',
    'reservation.editDetails': 'تعديل البيانات',

    'form.fullName': 'الاسم الكامل',
    'form.fullNamePlaceholder': 'مثال: ليلى المنصور',
    'form.phone': 'رقم الجوال',
    'form.phonePlaceholder': '+966 5X XXX XXXX',
    'form.email': 'البريد الإلكتروني (اختياري)',
    'form.emailPlaceholder': 'guest@example.com',
    'form.branch': 'اختر الفرع',
    'form.guests': 'عدد الضيوف',
    'form.guestSingular': 'ضيف',
    'form.guestPlural': 'ضيوف',
    'form.date': 'التاريخ المفضل',
    'form.time': 'وقت الجلوس',
    'form.notes': 'مناسبة خاصة أو ملاحظات غذائية',
    'form.notesPlaceholder': 'طاولة بجانب النافذة، احتفال خاص، حساسية من مكونات...',
    'form.submit': 'تجهيز الحجز عبر واتساب',
    'form.errorRequired': 'يرجى تعبئة هذا الحقل المطلوب.',
    'form.errorPhone': 'يرجى إدخال رقم هاتف صحيح (٨ أرقام على الأقل).',
    'form.errorDate': 'يرجى اختيار تاريخ اليوم أو تاريخ قادم.',
    'form.errorEmail': 'يرجى إدخال بريد إلكتروني صحيح.',

    'contact.eyebrow': 'الفروع والتواصل',
    'contact.title': 'تفضّل بزيارة نُورا',
    'contact.description':
      'اختر المدينة لاستعراض ساعات العمل، خدمة صف السيارات، أرقام الاستقبال المباشرة، والموقع على الخريطة.',
    'contact.addressLabel': 'العنوان',
    'contact.hoursLabel': 'ساعات العمل',
    'contact.phoneLabel': 'هاتف الاستقبال',
    'contact.emailLabel': 'البريد الإلكتروني',
    'contact.valetLabel': 'الوصول والضيافة',
    'contact.mapEyebrow': 'معاينة الموقع',
    'contact.socialTitle': 'تواصل وتابعنا',

    'video.title': 'في كواليس خدمة المساء لدى نُورا',
    'video.subtitle':
      'لمحة عن مطبخنا المفتوح، فلسفة تقديم الأطباق الموسمية، وأمسيات الضيافة في الرياض ودبي والدوحة.',
    'video.chapter1': '١٧:٣٠ · تجهيز الموقد وتحميص البهارات',
    'video.chapter2': '١٩:٠٠ · استقبال الضيوف مع إضاءة الغروب',
    'video.chapter3': '٢١:٠٠ · اللمسات النهائية للأطباق المميزة',

    'footer.tagline':
      'مطعم عصري للمأكولات الشرق أوسطية والعالمية، يجمع بين هدوء التصميم وحرفية المطبخ الموسمي.',
    'footer.navigation': 'الصفحات',
    'footer.branches': 'فروعنا في الخليج',
    'footer.hours': 'خدمة يومية: ١:٠٠ ظهراً – ١٢:٣٠ صباحاً',
    'footer.currency': 'عملة العرض',
    'footer.copyright': '© ٢٠٢٦ قالب مطعم نُورا. نصوص وصور عرض قابلة للتخصيص.',
  },
};
