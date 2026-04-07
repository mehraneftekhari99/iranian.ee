'use strict';

let currentLang = 'en';

const translations = {
  en: {
    tagline:        'A non-partisan, civic-oriented digital infrastructure serving Iranian citizens and communities around the world.',
    mission_label:  'Mission',
    mission_text:   'To serve as a neutral, accessible, and technology-driven point of contact for Iranian civil matters internationally — fostering connections between individuals, organisations, and resources.',
    functions_title: 'Core Functions',
    fn1_title:      'Civil Support Hub',
    fn1_desc:       'A primary digital point of contact for handling Iranian civil affairs and inquiries outside of Iran.',
    fn2_title:      'Non-Partisan Service',
    fn2_desc:       'Operating independently of political affiliations, focusing solely on public service, accessibility, and trust.',
    fn3_title:      'Digital Service Delivery',
    fn3_desc:       'Secure, user-friendly online platforms for documentation, assistance, and information access.',
    fn4_title:      'Community & NGO Connectivity',
    fn4_desc:       'Connecting NGOs, charities, and individuals to enable more efficient support across the Iranian diaspora.',
    fn_badge:       'Projects to be announced',
    vision_label:   'Vision',
    vision_text:    'To establish a <strong>trusted, modern, and fully digital civic infrastructure</strong> that empowers Iranians worldwide through transparency, accessibility, and collaboration.',
    social_label:   'Stay Informed',
    social_title:   'Follow our progress',
    social_text:    'We are building something meaningful. Follow us on X to stay up to date on our projects, announcements, and progress as we develop this platform.',
    social_cta:     'Follow @Azadbarg',
    footer:         'an Azadbarg Technology OÜ project · Tallinn, 2026'
  },

  fa: {
    tagline:        'یک زیرساخت دیجیتال غیرسیاسی و مدنی در خدمت شهروندان و جوامع ایرانی در سراسر جهان.',
    mission_label:  'مأموریت',
    mission_text:   'خدمت به‌عنوان یک نقطه تماس خنثی، در دسترس و مبتنی بر فناوری برای امور مدنی ایرانیان در سطح بین‌الملل — با تقویت پیوندها میان افراد، سازمان‌ها و منابع.',
    functions_title: 'وظایف اصلی',
    fn1_title:      'مرکز پشتیبانی مدنی',
    fn1_desc:       'یک نقطه تماس دیجیتال اصلی برای رسیدگی به امور مدنی و استعلامات ایرانیان خارج از ایران.',
    fn2_title:      'خدمات غیرجانب‌دار',
    fn2_desc:       'فعالیت مستقل از گرایش‌های سیاسی، با تمرکز صرف بر خدمت عمومی، دسترس‌پذیری و اعتماد.',
    fn3_title:      'ارائه خدمات دیجیتال',
    fn3_desc:       'پلتفرم‌های آنلاین امن و کاربرپسند برای مستندسازی، کمک و دسترسی به اطلاعات.',
    fn4_title:      'ارتباط با جامعه و سازمان‌های مردم‌نهاد',
    fn4_desc:       'ایجاد ارتباط میان سازمان‌های مردم‌نهاد، خیریه‌ها و افراد برای پشتیبانی کارآمدتر از ایرانیان مقیم خارج.',
    fn_badge:       'پروژه‌ها به زودی اعلام می‌شوند',
    vision_label:   'چشم‌انداز',
    vision_text:    'ایجاد یک <strong>زیرساخت مدنی دیجیتال کامل، مدرن و قابل اعتماد</strong> که با شفافیت، دسترس‌پذیری و همکاری، ایرانیان سراسر جهان را توانمند می‌سازد.',
    social_label:   'به‌روز بمانید',
    social_title:   'پیشرفت ما را دنبال کنید',
    social_text:    'ما در حال ساختن چیزی ارزشمند هستیم. برای آگاهی از پروژه‌ها، اطلاعیه‌ها و پیشرفت‌های ما در X ما را دنبال کنید.',
    social_cta:     'دنبال کردن @Azadbarg',
    footer:         'یک پروژه از Azadbarg Technology OÜ · تالین، ۲۰۲۶'
  },

  ku: {
    tagline:        'بنەمایەکی دیجیتاڵی نابەکارگیر و هاوکاری بۆ خزمەتگوزارییکردن بە هاوڵاتیانی ئێرانی و کۆمەڵگاکانیان لەسەرانسەری جیهان.',
    mission_label:  'ئەرک',
    mission_text:   'خزمەتگوزارییکردن وەکو پەیوەندییەکی نیترال، بەدەستگەی و تەکنەلۆجییانە بۆ کاروباری مەدەنی ئێرانیان لە ئاستی نێودەوڵەتیدا — بە پەرەپێدانی پەیوەندییەکان لەنێوان تاکەکان، ڕێکخراوەکان و سەرچاوەکانیان.',
    functions_title: 'کارەکانی سەرەکی',
    fn1_title:      'ناوەندی پشتیوانی مەدەنی',
    fn1_desc:       'پەیوەندییەکی دیجیتاڵی سەرەکی بۆ چارەسەرکردنی کاروباری مەدەنی و پرسیارەکانی ئێرانیانی دەرەوەی ئێران.',
    fn2_title:      'خزمەتگوزارییەکی نابەکارگیر',
    fn2_desc:       'کارکردن بە سەربەخۆی لە پەیوەندییە سیاسییەکان، تەنها تەرکیز لەسەر خزمەتگوزارییەکی گشتی، دەستگەییکردن و باوەڕپێکراوی.',
    fn3_title:      'گەیاندنی خزمەتگوزارییەکی دیجیتاڵ',
    fn3_desc:       'پلاتفۆرمی ئۆنلاینی پارێزراو و بەئاسانی بەکارهێنراو بۆ بەلگەنامەکردن، یارمەتیدان و دەستگەییکردن بە زانیاری.',
    fn4_title:      'پەیوەندی کۆمەڵگا و ڕێکخراوەکانی نادۆڵەتی',
    fn4_desc:       'پەیوەندیدانی ڕێکخراوەکانی نادۆڵەتی، خێرخوازەکان و تاکەکان بۆ پشتیوانییەکی کارآمدتر لەگەڵ ئێرانییانی دیاسپۆرا.',
    fn_badge:       'پرۆژەکان بە زووی ڕادەگەیەندرێن',
    vision_label:   'دیدی داهاتوو',
    vision_text:    'دامەزراندنی <strong>بنەمایەکی مەدەنی دیجیتاڵی تەواو، مۆدێرن و متمانەپێکراو</strong> کە ئێرانیانی سەرانسەری جیهان بە ڕێی ڕوونی، دەستگەیی و هاوکاری بەهێز دەکات.',
    social_label:   'ئاگادار بە',
    social_title:   'پێشکەوتنمان شوێن بکەوە',
    social_text:    'ئێمە شتێکی واتادار بنیاد دەنێین. شوێن بکەوە لە X بۆ ئاگاداربوون لە پرۆژەکانمان، ڕاگەیاندنەکان و پێشکەوتنەکانمان.',
    social_cta:     'شوێنکەوتن @Azadbarg',
    footer:         'پرۆژەیەک لە Azadbarg Technology OÜ · تاڵین، ٢٠٢٦'
  },

  ar: {
    tagline:        'بنية تحتية رقمية مدنية وغير حزبية تخدم المواطنين الإيرانيين والمجتمعات الإيرانية حول العالم.',
    mission_label:  'المهمة',
    mission_text:   'العمل كنقطة اتصال محايدة وسهلة الوصول وقائمة على التكنولوجيا للشؤون المدنية الإيرانية على الصعيد الدولي — وتعزيز الروابط بين الأفراد والمنظمات والموارد.',
    functions_title: 'الوظائف الأساسية',
    fn1_title:      'مركز الدعم المدني',
    fn1_desc:       'نقطة اتصال رقمية رئيسية للتعامل مع الشؤون المدنية الإيرانية والاستفسارات خارج إيران.',
    fn2_title:      'خدمة غير حزبية',
    fn2_desc:       'العمل باستقلالية عن الانتماءات السياسية، مع التركيز فقط على الخدمة العامة وسهولة الوصول والثقة.',
    fn3_title:      'تقديم الخدمات الرقمية',
    fn3_desc:       'منصات إلكترونية آمنة وسهلة الاستخدام للتوثيق والمساعدة والوصول إلى المعلومات.',
    fn4_title:      'ربط المجتمع والمنظمات غير الحكومية',
    fn4_desc:       'ربط المنظمات غير الحكومية والجمعيات الخيرية والأفراد لتمكين دعم أكثر كفاءة عبر الشتات الإيراني.',
    fn_badge:       'المشاريع ستُعلن قريباً',
    vision_label:   'الرؤية',
    vision_text:    'إرساء <strong>بنية تحتية مدنية رقمية كاملة وحديثة وموثوقة</strong> تُمكّن الإيرانيين في جميع أنحاء العالم من خلال الشفافية وسهولة الوصول والتعاون.',
    social_label:   'ابقَ على اطلاع',
    social_title:   'تابع تقدمنا',
    social_text:    'نحن نبني شيئاً ذا معنى. تابعنا على X للبقاء على اطلاع بمشاريعنا وإعلاناتنا وتقدمنا في تطوير هذه المنصة.',
    social_cta:     'تابع @Azadbarg',
    footer:         'مشروع Azadbarg Technology OÜ · تالين، 2026'
  },

  tr: {
    tagline:        'Dünya genelindeki İran vatandaşlarına ve topluluklarına hizmet eden, partizan olmayan, sivil odaklı dijital altyapı.',
    mission_label:  'Misyon',
    mission_text:   'İran\'ın uluslararası sivil meselelerinde tarafsız, erişilebilir ve teknoloji odaklı bir iletişim noktası olarak hizmet etmek — bireyler, kuruluşlar ve kaynaklar arasındaki bağlantıları güçlendirerek.',
    functions_title: 'Temel İşlevler',
    fn1_title:      'Sivil Destek Merkezi',
    fn1_desc:       'İran dışındaki İranlı sivil meseleleri ve sorgulamaları için birincil dijital iletişim noktası.',
    fn2_title:      'Partizan Olmayan Hizmet',
    fn2_desc:       'Siyasi bağlantılardan bağımsız olarak yalnızca kamu hizmeti, erişilebilirlik ve güvene odaklanarak faaliyet göstermek.',
    fn3_title:      'Dijital Hizmet Sunumu',
    fn3_desc:       'Belgeleme, yardım ve bilgiye erişim için güvenli, kullanıcı dostu çevrimiçi platformlar.',
    fn4_title:      'Topluluk ve STK Bağlantısı',
    fn4_desc:       'STK\'ları, yardım kuruluşlarını ve bireyleri bağlayarak İran diasporası genelinde daha verimli destek sağlamak.',
    fn_badge:       'Projeler yakında duyurulacak',
    vision_label:   'Vizyon',
    vision_text:    'Şeffaflık, erişilebilirlik ve işbirliği yoluyla dünya genelindeki İranlıları güçlendiren, <strong>güvenilir, modern ve tam dijital bir sivil altyapı</strong> oluşturmak.',
    social_label:   'Güncel Kalın',
    social_title:   'İlerlememizi takip edin',
    social_text:    'Anlamlı bir şey inşa ediyoruz. Projelerimiz, duyurularımız ve bu platformu geliştirmedeki ilerlememiz hakkında güncel kalmak için X\'te bizi takip edin.',
    social_cta:     '@Azadbarg\'ı takip et',
    footer:         'Azadbarg Technology OÜ projesi · Tallinn, 2026'
  }
};

function switchLanguage(lang) {
  if (!translations[lang]) return;
  const t = translations[lang];
  const isRTL = ['fa', 'ku', 'ar'].includes(lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  currentLang = lang;
}
