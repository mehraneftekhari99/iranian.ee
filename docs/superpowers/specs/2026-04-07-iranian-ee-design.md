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
- **Translations:** English strings are final. Translations for FA, KU, AR, TR are placeholder stubs during build — marked with a comment. Final translated strings to be supplied by the user before publishing.

### String keys required (per language)
`tagline`, `mission_label`, `mission_text`, `functions_label`, `functions_title`, `fn1_title`, `fn1_desc`, `fn2_title`, `fn2_desc`, `fn3_title`, `fn3_desc`, `fn4_title`, `fn4_desc`, `fn_badge`, `vision_label`, `vision_text`, `social_label`, `social_title`, `social_text`, `social_cta`, `footer`

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
