

Everything is optimized for:

* **Next.js (App Router)**
* **1-page website only (`app/page.js`)**
* **Tailwind CSS**
* **Icons8 + OpenPeeps**
* **Google Analytics 4 + GTM**
* **Deployed on Vercel**
* **Unicorn Janitorial Ltd.**
* **Service Areas: Penticton, Kelowna, Summerland, Naramata, Peachland**
* **WhatsApp-only communication**

---

# **Unicorn Janitorial Ltd. — Next.js One-Page Website Project Specification**

## 🟣 Overview

This document describes the build specifications for a **single-page marketing website** for:

**Business Name:**
**Unicorn Janitorial Ltd.**

**Service Regions:**

* Penticton
* Kelowna
* Summerland
* Naramata
* Peachland

**Primary Goal:**
➡️ **Drive all traffic to WhatsApp (no forms, no backend).**

The project uses **Next.js (App Router)** with **Tailwind**, and is deployed via **Vercel** with **Google Analytics 4 + Google Tag Manager** integrated.

---

# **1. Project Requirements**

* **1-page website only**

  * Single route: `app/page.js`
  * No dynamic pages
* No backend / database
* No physical address
* WhatsApp-only for communication
* Ultra-fast and SEO optimized
* Uses local assets (Icons8, OpenPeeps)
* Structured data included
* Hosted on Vercel
* Includes GA4 + GTM

---

# **2. Tech Stack**

## **Core Tech**

* **Next.js (App Router)**
* **React Server Components**
* **Tailwind CSS**
* **JavaScript / JSX**
* **Icons8** (stored locally)
* **OpenPeeps SVGs** (stored locally)
* **Google Analytics 4**
* **Google Tag Manager**
* **Deployed on Vercel**

## **Notes**

* Only one page: `/app/page.js`
* Serve illustrations from `/public`
* SEO done via metadata & `<head>` extension
* No client-side heavy JS
* Smooth transitions + responsive layout

---

# **3. Website Structure (1 Page)**

**Route:**
`/app/page.js`

Sections included:

## **1. Hero Section**

* OpenPeeps illustration
* Main headline
* Subtext value proposition
* WhatsApp primary CTA
* Light pastel unicorn-color gradient background

## **2. About Section**

Introduce Unicorn Janitorial Ltd:

* Experience
* Professional cleaning team
* Core values

## **3. Services Section**

Use cards grid with Icons8 icons:

* Commercial Cleaning
* Residential Cleaning
* Office Cleaning
* Deep Cleaning
* Post-Construction Cleaning

Each card includes:

* Local icon
* Title
* 2–3 line description

## **4. Service Areas**

List regions served:

* Penticton
* Kelowna
* Summerland
* Naramata
* Peachland

## **5. Why Choose Us**

Features list:

* Fully insured
* Eco-friendly options
* Fast response
* Professional cleaners
* WhatsApp instant quotes

## **6. Testimonials (Static)**

Short 2–3 quotes written manually.

## **7. Contact Section**

* Big WhatsApp call-to-action
* Phone number
* Hours
* **No form**
* **No address**

## **8. Footer**

* Logo (OpenPeeps or Icons8 style)
* Copyright
* Quick navigation anchors
* WhatsApp link

---

# **4. SEO Requirements**

Next.js metadata API:

* `export const metadata = { ... }`
* Title & meta description
* Open Graph data
* Canonical URL
* JSON-LD structured data using `<script type="application/ld+json">`

**No address**.
Use service regions instead.

## **Structured Data Types**

```
@type: LocalBusiness
@type: CleaningService
```

## **Target Keywords**

* Penticton cleaning service
* Kelowna janitorial company
* Okanagan cleaners
* Commercial cleaning Penticton
* Residential cleaning Kelowna

---

# **5. WhatsApp CTA**

Two mandatory CTAs:

**Main hero button**
**Floating bottom-right sticky button**

Link example:

```
https://wa.me/<PHONE>?text=Hello%20I%20need%20cleaning%20services
```

Phone number added later.

---

# **6. Styling Rules**

* Tailwind for all styling
* Soft unicorn-inspired pastels: lilac, soft blue, mint
* Cards with rounded corners (`rounded-2xl`)
* Shadows: `shadow-lg`
* Max width container (`max-w-7xl mx-auto`)
* Mobile-first
* Use local Icons8 & OpenPeeps assets

---

# **7. Icons & Illustrations**

### **Local Assets Only**

Store in `/public`:

```
/public/icons8/
/public/peeps/
/public/favicon.ico
```

No hotlinking to external sources.

---

# **8. Analytics & Tracking**

## **Google Tag Manager**

Place GTM scripts inside:

```
app/layout.js
```

before `<body>` closing.

## **Google Analytics 4**

Implement via:

* GTM
  or
* Next.js `<Script>` tag:

```jsx
<Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
/>

<Script id="ga-setup">
{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
`}
</Script>
```

IDs added later.

---

# **9. Next.js Project Structure**

```
project/
│  package.json
│  next.config.js
│  tailwind.config.js
│  postcss.config.js
│
├─ app/
│   ├─ layout.js
│   └─ page.js   (ONLY PAGE)
│
├─ public/
│   ├─ icons8/
│   ├─ peeps/
│   └─ favicon.ico
│
└─ styles/
    └─ globals.css
```

---

# **10. Hosting on Vercel**

Steps:

1. Connect repo to Vercel
2. Deploy
3. Vercel auto-detects Next.js
4. Runs optimized build
5. CDN edge-cached, instant global deploy

---

# **11. Final Deliverables**

Cursor should generate:

* Full Next.js project scaffold
* **Single page** in `app/page.js`
* Complete hero, services, testimonials, contact
* Tailwind styling
* WhatsApp CTA buttons
* GTM + GA4 integrated
* Local assets from Icons8 & OpenPeeps
* Fully responsive layout
* SEO structure + metadata + JSON-LD
* Works instantly on Vercel

---

If you'd like, I can now generate:

✅ Full working Next.js code
✅ Tailwind components
✅ JSON-LD script
✅ All copywriting for the website
✅ A fully ready project for Cursor AI

Just say **“generate full code”** and I’ll create the entire project.
