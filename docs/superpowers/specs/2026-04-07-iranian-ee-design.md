# iranian.ee — Website Design Spec
**Date:** 2026-04-07
**Status:** Approved

---

## Overview

A single-page, static website for the Iranian Electronic Embassy (iranian.ee), hosted on GitHub Pages. The site presents the organisation's mission, core functions, and vision, and prompts visitors to follow on X for project updates.

---

## Visual Design

### Direction
C2 Blueprint — white background, diplomatic blue (#2c5aa0) as the primary accent. Blue header band for the hero. Hairline grid (#dde4f0, 1px gaps) separating content cells in the Core Functions section.

### Typography
- **Headlines / display text:** Cormorant Garamond (600/700 weight, italic for pull quotes)
- **Body / UI text:** Outfit (300/400/500 weight)
- Both loaded from Google Fonts

### Colour Palette
| Role | Value |
|---|---|
| Primary blue | `#2c5aa0` |
| Hero background | `#2c5aa0` |
| Page background | `#ffffff` |
| Section dividers | `#eef0f4` |
| Grid gaps | `#dde4f0` |
| Subtle background (Vision) | `#f6f8fc` |
| Body text | `#111` / `#444` / `#555` |
| Muted text | `#bbb` / `#999` |

---

## Page Structure

Single HTML file (`index.html`). Sections in order:

### 1. Navigation (sticky)
- Left: `iranian.ee` wordmark in Cormorant Garamond, blue
- Right: language switcher — `EN | FA | KU | AR | TR` as a bordered pill group; active language highlighted in blue
- Clicking a language button switches all page text and flips layout direction (RTL for FA, KU, AR; LTR for EN, TR)
- White background, 1px bottom border (`#e8e8e8`), height 52px

### 2. Hero
- Full-width blue band (#2c5aa0)
- Title: "Iranian Electronic Embassy" — Cormorant Garamond 700, white, ~52px, tight line-height
- Tagline: "A non-partisan, civic-oriented digital infrastructure serving Iranian citizens and communities around the world." — Outfit 300, rgba white 80%, max-width 520px
- No redundant eyebrow/domain label (nav already shows `iranian.ee`)

### 3. Mission
- Section label: "MISSION" in small caps, blue, tracked
- Body: Mission statement in Cormorant Garamond italic 600, ~22px — treated as a pull quote
- Max-width 720px, generous padding

### 4. Core Functions
- Section title: "Core Functions" in Cormorant Garamond 700
- 2×2 grid with 1px hairline gaps (background `#dde4f0`, cells `#fff`)
- Each cell contains:
  - Number label (01–04), Outfit 500, blue, tracked
  - Function title, Cormorant Garamond 700
  - Description, Outfit 300
  - Badge: "Projects to be announced" — small caps, blue, 1px border, no fill
- Four functions: Civil Support Hub, Non-Partisan Service, Digital Service Delivery, Community & NGO Connectivity

### 5. Vision
- Light blue-grey background (`#f6f8fc`)
- Section label: "VISION"
- Body text in Outfit 300, with key phrase bolded: "trusted, modern, and fully digital civic infrastructure"
- Max-width 640px

### 6. Stay Informed (Social)
- Section label: "STAY INFORMED"
- Title: "Follow our progress" — Cormorant Garamond 700
- Body: "We are building something meaningful. Follow us on X to stay up to date on our projects, announcements, and progress as we develop this platform." — Outfit 300
- CTA button: solid blue, white text, 𝕏 icon + "Follow @Azadbarg", links to `https://x.com/Azadbarg`

### 7. Footer
- Right-aligned, subtle
- Text: "an Azadbarg Technology OÜ project · Tallinn, 2026"
- Outfit 300, `#bbb`, 10px

---

## Multilingual Support

Five languages: English (EN), Persian/Farsi (FA), Kurdish (KU), Arabic (AR), Turkish (TR).

- FA, KU, AR are **RTL** — when active, set `dir="rtl"` on `<html>` and mirror layout (nav order, text alignment, padding)
- EN, TR are **LTR**
- All text strings stored in a JS object keyed by language code
- Language switcher updates `document.documentElement.lang`, `dir`, and all text nodes in a single function call
- No page reload required — pure JS, no backend
- Default language: EN
- **Translations:** All five languages included below. User to double-check before publishing.

### Full Translation Strings

#### EN — English (LTR)
| Key | String |
|---|---|
| `tagline` | A non-partisan, civic-oriented digital infrastructure serving Iranian citizens and communities around the world. |
| `mission_label` | Mission |
| `mission_text` | To serve as a neutral, accessible, and technology-driven point of contact for Iranian civil matters internationally — fostering connections between individuals, organisations, and resources. |
| `functions_label` | Core Functions |
| `functions_title` | Core Functions |
| `fn1_title` | Civil Support Hub |
| `fn1_desc` | A primary digital point of contact for handling Iranian civil affairs and inquiries outside of Iran. |
| `fn2_title` | Non-Partisan Service |
| `fn2_desc` | Operating independently of political affiliations, focusing solely on public service, accessibility, and trust. |
| `fn3_title` | Digital Service Delivery |
| `fn3_desc` | Secure, user-friendly online platforms for documentation, assistance, and information access. |
| `fn4_title` | Community & NGO Connectivity |
| `fn4_desc` | Connecting NGOs, charities, and individuals to enable more efficient support across the Iranian diaspora. |
| `fn_badge` | Projects to be announced |
| `vision_label` | Vision |
| `vision_text` | To establish a trusted, modern, and fully digital civic infrastructure that empowers Iranians worldwide through transparency, accessibility, and collaboration. |
| `social_label` | Stay Informed |
| `social_title` | Follow our progress |
| `social_text` | We are building something meaningful. Follow us on X to stay up to date on our projects, announcements, and progress as we develop this platform. |
| `social_cta` | Follow @Azadbarg |
| `footer` | an Azadbarg Technology OÜ project · Tallinn, 2026 |

#### FA — Persian / Farsi (RTL)
| Key | String |
|---|---|
| `tagline` | یک زیرساخت دیجیتال غیرسیاسی و مدنی در خدمت شهروندان و جوامع ایرانی در سراسر جهان. |
| `mission_label` | مأموریت |
| `mission_text` | خدمت به‌عنوان یک نقطه تماس خنثی، در دسترس و مبتنی بر فناوری برای امور مدنی ایرانیان در سطح بین‌الملل — با تقویت پیوندها میان افراد، سازمان‌ها و منابع. |
| `functions_label` | وظایف اصلی |
| `functions_title` | وظایف اصلی |
| `fn1_title` | مرکز پشتیبانی مدنی |
| `fn1_desc` | یک نقطه تماس دیجیتال اصلی برای رسیدگی به امور مدنی و استعلامات ایرانیان خارج از ایران. |
| `fn2_title` | خدمات غیرجانب‌دار |
| `fn2_desc` | فعالیت مستقل از گرایش‌های سیاسی، با تمرکز صرف بر خدمت عمومی، دسترس‌پذیری و اعتماد. |
| `fn3_title` | ارائه خدمات دیجیتال |
| `fn3_desc` | پلتفرم‌های آنلاین امن و کاربرپسند برای مستندسازی، کمک و دسترسی به اطلاعات. |
| `fn4_title` | ارتباط با جامعه و سازمان‌های مردم‌نهاد |
| `fn4_desc` | ایجاد ارتباط میان سازمان‌های مردم‌نهاد، خیریه‌ها و افراد برای پشتیبانی کارآمدتر از ایرانیان مقیم خارج. |
| `fn_badge` | پروژه‌ها به زودی اعلام می‌شوند |
| `vision_label` | چشم‌انداز |
| `vision_text` | ایجاد یک زیرساخت مدنی دیجیتال کامل، مدرن و قابل اعتماد که با شفافیت، دسترس‌پذیری و همکاری، ایرانیان سراسر جهان را توانمند می‌سازد. |
| `social_label` | به‌روز بمانید |
| `social_title` | پیشرفت ما را دنبال کنید |
| `social_text` | ما در حال ساختن چیزی ارزشمند هستیم. برای آگاهی از پروژه‌ها، اطلاعیه‌ها و پیشرفت‌های ما در X ما را دنبال کنید. |
| `social_cta` | دنبال کردن @Azadbarg |
| `footer` | یک پروژه از Azadbarg Technology OÜ · تالین، ۲۰۲۶ |

#### KU — Kurdish / Sorani (RTL)
| Key | String |
|---|---|
| `tagline` | بنەمایەکی دیجیتاڵی نابەکارگیر و هاوکاری بۆ خزمەتگوزارییکردن بە هاوڵاتیانی ئێرانی و کۆمەڵگاکانیان لەسەرانسەری جیهان. |
| `mission_label` | ئەرک |
| `mission_text` | خزمەتگوزارییکردن وەکو پەیوەندییەکی نیترال، بەدەستگەی و تەکنەلۆجییانە بۆ کاروباری مەدەنی ئێرانیان لە ئاستی نێودەوڵەتیدا — بە پەرەپێدانی پەیوەندییەکان لەنێوان تاکەکان، ڕێکخراوەکان و سەرچاوەکانیان. |
| `functions_label` | کارەکانی سەرەکی |
| `functions_title` | کارەکانی سەرەکی |
| `fn1_title` | ناوەندی پشتیوانی مەدەنی |
| `fn1_desc` | پەیوەندییەکی دیجیتاڵی سەرەکی بۆ چارەسەرکردنی کاروباری مەدەنی و پرسیارەکانی ئێرانیانی دەرەوەی ئێران. |
| `fn2_title` | خزمەتگوزارییەکی نابەکارگیر |
| `fn2_desc` | کارکردن بە سەربەخۆی لە پەیوەندییە سیاسییەکان، تەنها تەرکیز لەسەر خزمەتگوزارییەکی گشتی، دەستگەییکردن و باوەڕپێکراوی. |
| `fn3_title` | گەیاندنی خزمەتگوزارییەکی دیجیتاڵ |
| `fn3_desc` | پلاتفۆرمی ئۆنلاینی پارێزراو و بەئاسانی بەکارهێنراو بۆ بەلگەنامەکردن، یارمەتیدان و دەستگەییکردن بە زانیاری. |
| `fn4_title` | پەیوەندی کۆمەڵگا و ڕێکخراوەکانی نادۆڵەتی |
| `fn4_desc` | پەیوەندیدانی ڕێکخراوەکانی نادۆڵەتی، خێرخوازەکان و تاکەکان بۆ پشتیوانییەکی کارآمدتر لەگەڵ ئێرانییانی دیاسپۆرا. |
| `fn_badge` | پرۆژەکان بە زووی ڕادەگەیەندرێن |
| `vision_label` | دیدی داهاتوو |
| `vision_text` | دامەزراندنی بنەمایەکی مەدەنی دیجیتاڵی تەواو، مۆدێرن و متمانەپێکراو کە ئێرانیانی سەرانسەری جیهان بە ڕێی ڕوونی، دەستگەیی و هاوکاری بەهێز دەکات. |
| `social_label` | ئاگادار بە |
| `social_title` | پێشکەوتنمان شوێن بکەوە |
| `social_text` | ئێمە شتێکی واتادار بنیاد دەنێین. شوێن بکەوە لە X بۆ ئاگاداربوون لە پرۆژەکانمان، ڕاگەیاندنەکان و پێشکەوتنەکانمان. |
| `social_cta` | شوێنکەوتن @Azadbarg |
| `footer` | پرۆژەیەک لە Azadbarg Technology OÜ · تاڵین، ٢٠٢٦ |

#### AR — Arabic (RTL)
| Key | String |
|---|---|
| `tagline` | بنية تحتية رقمية مدنية وغير حزبية تخدم المواطنين الإيرانيين والمجتمعات الإيرانية حول العالم. |
| `mission_label` | المهمة |
| `mission_text` | العمل كنقطة اتصال محايدة وسهلة الوصول وقائمة على التكنولوجيا للشؤون المدنية الإيرانية على الصعيد الدولي — وتعزيز الروابط بين الأفراد والمنظمات والموارد. |
| `functions_label` | الوظائف الأساسية |
| `functions_title` | الوظائف الأساسية |
| `fn1_title` | مركز الدعم المدني |
| `fn1_desc` | نقطة اتصال رقمية رئيسية للتعامل مع الشؤون المدنية الإيرانية والاستفسارات خارج إيران. |
| `fn2_title` | خدمة غير حزبية |
| `fn2_desc` | العمل باستقلالية عن الانتماءات السياسية، مع التركيز فقط على الخدمة العامة وسهولة الوصول والثقة. |
| `fn3_title` | تقديم الخدمات الرقمية |
| `fn3_desc` | منصات إلكترونية آمنة وسهلة الاستخدام للتوثيق والمساعدة والوصول إلى المعلومات. |
| `fn4_title` | ربط المجتمع والمنظمات غير الحكومية |
| `fn4_desc` | ربط المنظمات غير الحكومية والجمعيات الخيرية والأفراد لتمكين دعم أكثر كفاءة عبر الشتات الإيراني. |
| `fn_badge` | المشاريع ستُعلن قريباً |
| `vision_label` | الرؤية |
| `vision_text` | إرساء بنية تحتية مدنية رقمية كاملة وحديثة وموثوقة تُمكّن الإيرانيين في جميع أنحاء العالم من خلال الشفافية وسهولة الوصول والتعاون. |
| `social_label` | ابقَ على اطلاع |
| `social_title` | تابع تقدمنا |
| `social_text` | نحن نبني شيئاً ذا معنى. تابعنا على X للبقاء على اطلاع بمشاريعنا وإعلاناتنا وتقدمنا في تطوير هذه المنصة. |
| `social_cta` | تابع @Azadbarg |
| `footer` | مشروع Azadbarg Technology OÜ · تالين، 2026 |

#### TR — Turkish (LTR)
| Key | String |
|---|---|
| `tagline` | Dünya genelindeki İran vatandaşlarına ve topluluklarına hizmet eden, partizan olmayan, sivil odaklı dijital altyapı. |
| `mission_label` | Misyon |
| `mission_text` | İran'ın uluslararası sivil meselelerinde tarafsız, erişilebilir ve teknoloji odaklı bir iletişim noktası olarak hizmet etmek — bireyler, kuruluşlar ve kaynaklar arasındaki bağlantıları güçlendirerek. |
| `functions_label` | Temel İşlevler |
| `functions_title` | Temel İşlevler |
| `fn1_title` | Sivil Destek Merkezi |
| `fn1_desc` | İran dışındaki İranlı sivil meseleleri ve sorgulamaları için birincil dijital iletişim noktası. |
| `fn2_title` | Partizan Olmayan Hizmet |
| `fn2_desc` | Siyasi bağlantılardan bağımsız olarak yalnızca kamu hizmeti, erişilebilirlik ve güvene odaklanarak faaliyet göstermek. |
| `fn3_title` | Dijital Hizmet Sunumu |
| `fn3_desc` | Belgeleme, yardım ve bilgiye erişim için güvenli, kullanıcı dostu çevrimiçi platformlar. |
| `fn4_title` | Topluluk ve STK Bağlantısı |
| `fn4_desc` | STK'ları, yardım kuruluşlarını ve bireyleri bağlayarak İran diasporası genelinde daha verimli destek sağlamak. |
| `fn_badge` | Projeler yakında duyurulacak |
| `vision_label` | Vizyon |
| `vision_text` | Şeffaflık, erişilebilirlik ve işbirliği yoluyla dünya genelindeki İranlıları güçlendiren, güvenilir, modern ve tam dijital bir sivil altyapı oluşturmak. |
| `social_label` | Güncel Kalın |
| `social_title` | İlerlememizi takip edin |
| `social_text` | Anlamlı bir şey inşa ediyoruz. Projelerimiz, duyurularımız ve bu platformu geliştirmedeki ilerlememiz hakkında güncel kalmak için X'te bizi takip edin. |
| `social_cta` | @Azadbarg'ı takip et |
| `footer` | Azadbarg Technology OÜ projesi · Tallinn, 2026 |

---

## Technical Constraints

- **Hosting:** GitHub Pages — fully static, no server-side logic
- **No build system required** — single `index.html` + one optional `styles.css`; JS inline or in a single `main.js`
- **No frameworks** — vanilla HTML, CSS, JavaScript only
- **Fonts:** Google Fonts CDN (Cormorant Garamond + Outfit)
- **No images** — typography and colour only; no assets to manage
- **Responsive:** must work on mobile (single column layout below 640px breakpoint; Core Functions grid collapses to 1 column; language switcher scrolls horizontally with `overflow-x: auto` — wordmark always visible)
- **`.gitignore`** should include `.superpowers/`

---

## Files

```
/
├── index.html
├── main.js          # language switching logic + string translations
├── styles.css       # all styles
└── .gitignore
```

---

## Out of Scope (this version)

- Contact form
- Additional pages (About, Services, etc.)
- Auto-detect browser language (can be added later on top of the switcher)
- Analytics
- Any backend or CMS
