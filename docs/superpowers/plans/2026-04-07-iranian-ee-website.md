# iranian.ee Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page multilingual static website for the Iranian Electronic Embassy, deployable to GitHub Pages at iranian.ee.

**Architecture:** Three files — `index.html` carries full page structure with `data-i18n` attributes on all translatable elements; `styles.css` holds all styles plus RTL overrides via `html[dir="rtl"]` selectors; `main.js` holds the translations object and `switchLanguage(lang)` which swaps text, sets `dir`/`lang` on `<html>`, and marks the active button. No build tools, no frameworks, no page reload on language switch.

**Tech Stack:** Vanilla HTML5, CSS3, JavaScript ES6. Google Fonts CDN (Cormorant Garamond + Outfit). GitHub Pages with custom domain via `CNAME` file.

---

## File Map

| File | Responsibility |
|---|---|
| `index.html` | Full page structure; translatable text nodes carry `data-i18n="key"`, elements with inner HTML carry `data-i18n-html="key"` |
| `styles.css` | All styles, organised by section; RTL overrides at bottom; mobile breakpoint (≤640px) at bottom |
| `main.js` | `translations` object (EN/FA/KU/AR/TR) + `switchLanguage(lang)` function |
| `CNAME` | One-line file containing `iranian.ee` for GitHub Pages custom domain |
| `.gitignore` | Already exists |

---

## Task 1: Scaffold all files

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `main.js`
- Create: `CNAME`

- [ ] **Step 1: Create `CNAME`**

```
iranian.ee
```

- [ ] **Step 2: Create `main.js` stub**

```javascript
'use strict';

let currentLang = 'en';

const translations = {};

function switchLanguage(lang) {
  // implementation in Task 8
}
```

- [ ] **Step 3: Create `styles.css` stub**

```css
/* iranian.ee — styles */
```

- [ ] **Step 4: Create `index.html`**

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iranian Electronic Embassy</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,500&family=Outfit:wght@300;400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <nav class="site-nav">
    <div class="nav-wordmark">iranian.ee</div>
    <div class="lang-switcher">
      <button class="lang-btn active" data-lang="en" onclick="switchLanguage('en')">EN</button>
      <button class="lang-btn" data-lang="fa" onclick="switchLanguage('fa')">FA</button>
      <button class="lang-btn" data-lang="ku" onclick="switchLanguage('ku')">KU</button>
      <button class="lang-btn" data-lang="ar" onclick="switchLanguage('ar')">AR</button>
      <button class="lang-btn" data-lang="tr" onclick="switchLanguage('tr')">TR</button>
    </div>
  </nav>

  <section class="hero">
    <h1 class="hero-title">Iranian Electronic Embassy</h1>
    <p class="hero-tagline" data-i18n="tagline">A non-partisan, civic-oriented digital infrastructure serving Iranian citizens and communities around the world.</p>
  </section>

  <section class="mission">
    <p class="section-label" data-i18n="mission_label">Mission</p>
    <p class="mission-text" data-i18n="mission_text">To serve as a neutral, accessible, and technology-driven point of contact for Iranian civil matters internationally — fostering connections between individuals, organisations, and resources.</p>
  </section>

  <section class="functions">
    <h2 class="functions-title" data-i18n="functions_title">Core Functions</h2>
    <div class="functions-grid">
      <div class="fn-cell">
        <p class="fn-number">01</p>
        <h3 class="fn-title" data-i18n="fn1_title">Civil Support Hub</h3>
        <p class="fn-desc" data-i18n="fn1_desc">A primary digital point of contact for handling Iranian civil affairs and inquiries outside of Iran.</p>
        <span class="fn-badge" data-i18n="fn_badge">Projects to be announced</span>
      </div>
      <div class="fn-cell">
        <p class="fn-number">02</p>
        <h3 class="fn-title" data-i18n="fn2_title">Non-Partisan Service</h3>
        <p class="fn-desc" data-i18n="fn2_desc">Operating independently of political affiliations, focusing solely on public service, accessibility, and trust.</p>
        <span class="fn-badge" data-i18n="fn_badge">Projects to be announced</span>
      </div>
      <div class="fn-cell">
        <p class="fn-number">03</p>
        <h3 class="fn-title" data-i18n="fn3_title">Digital Service Delivery</h3>
        <p class="fn-desc" data-i18n="fn3_desc">Secure, user-friendly online platforms for documentation, assistance, and information access.</p>
        <span class="fn-badge" data-i18n="fn_badge">Projects to be announced</span>
      </div>
      <div class="fn-cell">
        <p class="fn-number">04</p>
        <h3 class="fn-title" data-i18n="fn4_title">Community &amp; NGO Connectivity</h3>
        <p class="fn-desc" data-i18n="fn4_desc">Connecting NGOs, charities, and individuals to enable more efficient support across the Iranian diaspora.</p>
        <span class="fn-badge" data-i18n="fn_badge">Projects to be announced</span>
      </div>
    </div>
  </section>

  <section class="vision">
    <p class="section-label" data-i18n="vision_label">Vision</p>
    <p class="vision-text" data-i18n-html="vision_text">To establish a <strong>trusted, modern, and fully digital civic infrastructure</strong> that empowers Iranians worldwide through transparency, accessibility, and collaboration.</p>
  </section>

  <section class="social">
    <p class="section-label" data-i18n="social_label">Stay Informed</p>
    <h2 class="social-title" data-i18n="social_title">Follow our progress</h2>
    <p class="social-text" data-i18n="social_text">We are building something meaningful. Follow us on X to stay up to date on our projects, announcements, and progress as we develop this platform.</p>
    <a class="social-link" href="https://x.com/Azadbarg" target="_blank" rel="noopener noreferrer">
      <span class="x-icon" aria-hidden="true">𝕏</span>
      <span data-i18n="social_cta">Follow @Azadbarg</span>
    </a>
  </section>

  <footer class="site-footer">
    <p class="footer-text" data-i18n="footer">an Azadbarg Technology OÜ project · Tallinn, 2026</p>
  </footer>

  <script src="main.js"></script>
</body>
</html>
```

- [ ] **Step 5: Open in browser and verify structure loads without errors**

```bash
open index.html
```

Expected: Unstyled page with all sections visible, no JS console errors.

- [ ] **Step 6: Commit**

```bash
git add index.html styles.css main.js CNAME
git commit -m "feat: scaffold html structure, css, js, and CNAME"
```

---

## Task 2: CSS foundation and nav

**Files:**
- Modify: `styles.css`

- [ ] **Step 1: Add CSS custom properties, reset, and nav styles to `styles.css`**

Replace the stub content entirely:

```css
/* ─── Custom Properties ─────────────────────────────────── */
:root {
  --blue:       #2c5aa0;
  --blue-light: #dde4f0;
  --blue-pale:  #f6f8fc;
  --divider:    #eef0f4;
  --text-dark:  #111;
  --text-mid:   #444;
  --text-soft:  #555;
  --text-muted: #999;
  --text-faint: #bbb;
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans:  'Outfit', system-ui, sans-serif;
}

/* ─── Reset ─────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: var(--font-sans); background: #fff; color: var(--text-dark); }
button { cursor: pointer; font: inherit; border: none; background: none; }
a { text-decoration: none; }

/* ─── Nav ────────────────────────────────────────────────── */
.site-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  height: 52px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-wordmark {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 700;
  color: var(--blue);
  letter-spacing: 0.5px;
}

.lang-switcher {
  display: flex;
  border: 1px solid #d8e4f4;
  border-radius: 4px;
  overflow: hidden;
}

.lang-btn {
  padding: 5px 11px;
  font-size: 10px;
  font-weight: 500;
  color: var(--text-soft);
  border-right: 1px solid #d8e4f4;
  letter-spacing: 0.5px;
  background: #fff;
  transition: background 0.15s, color 0.15s;
}

.lang-btn:last-child { border-right: none; }

.lang-btn.active,
.lang-btn:hover { background: var(--blue); color: #fff; }
```

- [ ] **Step 2: Open in browser and verify**

```bash
open index.html
```

Expected: Clean nav bar with `iranian.ee` wordmark on the left, language buttons on the right, EN highlighted in blue. Scrolling the page keeps nav fixed.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add css foundation and nav styles"
```

---

## Task 3: Hero and Mission styles

**Files:**
- Modify: `styles.css`

- [ ] **Step 1: Append hero and mission styles to `styles.css`**

```css
/* ─── Hero ───────────────────────────────────────────────── */
.hero {
  background: var(--blue);
  padding: 52px 40px 48px;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(36px, 5vw, 54px);
  font-weight: 700;
  color: #fff;
  line-height: 1.05;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
}

.hero-tagline {
  font-size: 15px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.82);
  max-width: 520px;
  line-height: 1.75;
}

/* ─── Mission ────────────────────────────────────────────── */
.mission {
  padding: 52px 40px;
  border-bottom: 1px solid var(--divider);
  max-width: 760px;
}

.section-label {
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 16px;
}

.mission-text {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 600;
  font-style: italic;
  color: var(--text-dark);
  line-height: 1.6;
}
```

- [ ] **Step 2: Open in browser and verify**

```bash
open index.html
```

Expected: Large blue hero band with white serif title "Iranian Electronic Embassy" and lighter tagline text beneath. Mission section below with small blue "MISSION" label and italic serif text.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add hero and mission styles"
```

---

## Task 4: Core Functions styles

**Files:**
- Modify: `styles.css`

- [ ] **Step 1: Append functions styles to `styles.css`**

```css
/* ─── Core Functions ─────────────────────────────────────── */
.functions {
  padding: 52px 40px;
  border-bottom: 1px solid var(--divider);
}

.functions-title {
  font-family: var(--font-serif);
  font-size: 30px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 28px;
}

.functions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--blue-light);
}

.fn-cell {
  background: #fff;
  padding: 30px 28px 26px;
}

.fn-number {
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 2px;
  color: var(--blue);
  margin-bottom: 10px;
}

.fn-title {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 10px;
  line-height: 1.2;
}

.fn-desc {
  font-size: 12.5px;
  font-weight: 300;
  color: var(--text-soft);
  line-height: 1.7;
  margin-bottom: 18px;
}

.fn-badge {
  display: inline-block;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--blue);
  border: 1px solid #c8d8f0;
  padding: 3px 9px;
}
```

- [ ] **Step 2: Open in browser and verify**

```bash
open index.html
```

Expected: A 2×2 grid of white cells separated by thin blue-grey hairlines. Each cell has a numbered label, serif title, light body text, and a small outlined badge reading "PROJECTS TO BE ANNOUNCED".

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add core functions grid styles"
```

---

## Task 5: Vision, Social, and Footer styles

**Files:**
- Modify: `styles.css`

- [ ] **Step 1: Append vision, social, and footer styles to `styles.css`**

```css
/* ─── Vision ─────────────────────────────────────────────── */
.vision {
  background: var(--blue-pale);
  padding: 52px 40px;
  border-bottom: 1px solid var(--divider);
}

.vision-text {
  font-size: 13.5px;
  font-weight: 300;
  color: var(--text-mid);
  line-height: 1.85;
  max-width: 660px;
}

.vision-text strong {
  font-weight: 500;
  color: var(--text-dark);
}

/* ─── Social ─────────────────────────────────────────────── */
.social {
  padding: 52px 40px;
  border-bottom: 1px solid var(--divider);
}

.social-title {
  font-family: var(--font-serif);
  font-size: 26px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 12px;
}

.social-text {
  font-size: 13.5px;
  font-weight: 300;
  color: var(--text-soft);
  line-height: 1.75;
  max-width: 500px;
  margin-bottom: 24px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: var(--blue);
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.3px;
  padding: 11px 22px;
  transition: opacity 0.15s;
}

.social-link:hover { opacity: 0.88; }

.x-icon {
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
}

/* ─── Footer ─────────────────────────────────────────────── */
.site-footer {
  padding: 18px 40px;
  display: flex;
  justify-content: flex-end;
}

.footer-text {
  font-size: 10px;
  font-weight: 300;
  color: var(--text-faint);
  letter-spacing: 0.3px;
}
```

- [ ] **Step 2: Open in browser and verify**

```bash
open index.html
```

Expected: Light blue-grey vision section with emboldened key phrase. Social section with serif "Follow our progress" heading, body text, and a solid blue button. Footer aligned right with faint company credit.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add vision, social, and footer styles"
```

---

## Task 6: Responsive and RTL styles

**Files:**
- Modify: `styles.css`

- [ ] **Step 1: Append responsive and RTL styles to `styles.css`**

```css
/* ─── Responsive — ≤640px ────────────────────────────────── */
@media (max-width: 640px) {
  .site-nav {
    padding: 0 20px;
    height: 48px;
  }

  .lang-switcher {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .lang-switcher::-webkit-scrollbar { display: none; }

  .hero      { padding: 36px 20px 32px; }
  .mission   { padding: 36px 20px; }
  .functions { padding: 36px 20px; }
  .vision    { padding: 36px 20px; }
  .social    { padding: 36px 20px; }

  .site-footer { padding: 16px 20px; }

  .functions-grid { grid-template-columns: 1fr; }

  .hero-title  { font-size: 32px; }
  .mission-text { font-size: 18px; }
}

/* ─── RTL overrides ──────────────────────────────────────── */
html[dir="rtl"] .mission,
html[dir="rtl"] .functions,
html[dir="rtl"] .vision,
html[dir="rtl"] .social,
html[dir="rtl"] .site-footer {
  text-align: right;
}

html[dir="rtl"] .site-footer {
  justify-content: flex-start;
}

/* Disable letter-spacing for Arabic/Persian/Kurdish script */
html[dir="rtl"] .section-label,
html[dir="rtl"] .fn-number,
html[dir="rtl"] .fn-badge,
html[dir="rtl"] .lang-btn {
  letter-spacing: 0;
}

/* Social link RTL — reverse icon/text order */
html[dir="rtl"] .social-link {
  flex-direction: row-reverse;
}
```

- [ ] **Step 2: Test responsive layout**

Open browser DevTools (F12), toggle device toolbar, set width to 375px.

Expected:
- Nav language buttons scroll horizontally without showing scrollbar
- Core Functions grid collapses to a single column
- All sections have 20px side padding

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add responsive and RTL styles"
```

---

## Task 7: Translations and language switching

**Files:**
- Modify: `main.js`

- [ ] **Step 1: Replace `main.js` with complete implementation**

```javascript
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
```

- [ ] **Step 2: Open in browser and test all five languages**

```bash
open index.html
```

Click each language button and verify:

| Button | Expected direction | Key text to check |
|---|---|---|
| EN | LTR | "Mission" label, "Core Functions" title |
| FA | RTL (layout flips) | "مأموریت" label, "وظایف اصلی" title |
| KU | RTL (layout flips) | "ئەرک" label, "کارەکانی سەرەکی" title |
| AR | RTL (layout flips) | "المهمة" label, "الوظائف الأساسية" title |
| TR | LTR | "Misyon" label, "Temel İşlevler" title |

Also verify: switching back to EN from any RTL language restores LTR layout correctly.

- [ ] **Step 3: Run console assertions**

Open browser DevTools console and paste:

```javascript
// Test all languages load without undefined values
const missing = [];
Object.entries(translations).forEach(([lang, t]) => {
  const keys = ['tagline','mission_label','mission_text','functions_title',
    'fn1_title','fn1_desc','fn2_title','fn2_desc','fn3_title','fn3_desc',
    'fn4_title','fn4_desc','fn_badge','vision_label','vision_text',
    'social_label','social_title','social_text','social_cta','footer'];
  keys.forEach(k => { if (!t[k]) missing.push(`${lang}.${k}`); });
});
console.assert(missing.length === 0, 'Missing keys:', missing);
console.log(missing.length === 0 ? '✓ All translation keys present' : '✗ Missing: ' + missing.join(', '));
```

Expected output: `✓ All translation keys present`

- [ ] **Step 4: Commit**

```bash
git add main.js
git commit -m "feat: add translations and language switching"
```

---

## Task 8: Final review and deploy

**Files:**
- Verify: `index.html`, `styles.css`, `main.js`, `CNAME`

- [ ] **Step 1: Verify CNAME content**

```bash
cat CNAME
```

Expected output: `iranian.ee`

- [ ] **Step 2: Full visual review checklist**

Open `index.html` in browser and check each item:

- [ ] Nav is sticky — scroll down, nav stays at top
- [ ] Nav wordmark `iranian.ee` visible at all viewport widths
- [ ] Hero title "Iranian Electronic Embassy" renders in Cormorant Garamond
- [ ] All body text renders in Outfit
- [ ] Core Functions: 2×2 grid with hairline gaps visible between cells
- [ ] Each cell badge reads "Projects to be announced"
- [ ] Vision section has light blue-grey background
- [ ] Social link opens `https://x.com/Azadbarg` in a new tab
- [ ] Footer text is right-aligned and faint
- [ ] At 375px width: grid collapses to 1 column, no horizontal scroll on page
- [ ] EN → FA: layout flips RTL, text is Persian script
- [ ] EN → KU: layout flips RTL, text is Sorani Kurdish script
- [ ] EN → AR: layout flips RTL, text is Arabic script
- [ ] EN → TR: layout stays LTR, text is Turkish
- [ ] Switching back to EN from any language restores layout correctly

- [ ] **Step 3: Push to GitHub**

```bash
git push origin main
```

- [ ] **Step 4: Configure GitHub Pages**

In the repository settings on GitHub:
- Go to **Settings → Pages**
- Source: Deploy from branch → `main` → `/ (root)`
- Custom domain: enter `iranian.ee`
- Check "Enforce HTTPS" once DNS propagates

- [ ] **Step 5: Verify live site**

Once DNS is configured and Pages has deployed (usually 1–5 minutes):

```bash
curl -I https://iranian.ee
```

Expected: `HTTP/2 200`
