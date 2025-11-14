# 🦄 Unicorn Janitorial Ltd. - Official Website

A modern, single-page Next.js website for Unicorn Janitorial Ltd., offering professional cleaning services across the Okanagan Valley.

## 🚀 Features

- **Next.js 15** with App Router
- **React 19** - Latest stable version
- **Tailwind CSS 3** - Beautiful unicorn-themed gradients
- **SEO Optimized** - Complete metadata and JSON-LD structured data
- **WhatsApp Integration** - Instant quotes via WhatsApp
- **Google Analytics 4 & GTM** - Built-in tracking (replace IDs)
- **Fully Responsive** - Mobile-first design
- **Fast Performance** - Optimized images and code splitting

## 📍 Service Areas

- Penticton
- Kelowna
- Summerland
- Naramata
- Peachland

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Update Configuration

Before deploying, update these important values:

#### **WhatsApp Number** (`app/page.js`, line 4)
```javascript
const WHATSAPP_NUMBER = '12504860386' // +1 250-486-0386
```

#### **Google Analytics & GTM IDs** (`app/layout.js`)
Replace `GTM-XXXXXXX` and `G-XXXXXXX` with your actual IDs:
```javascript
// Line 45-50: Google Tag Manager
'https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX'

// Line 55-56: Google Analytics 4
src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
gtag('config', 'G-XXXXXXX');
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

### Option 1: Via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Next.js and deploys!

### Option 2: Via Vercel CLI

```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
unicorn-janitorial/
├── app/
│   ├── layout.js          # Root layout with GA4/GTM
│   ├── page.js            # Main single-page website
│   └── globals.css        # Tailwind styles
├── public/
│   ├── logo.svg           # Unicorn Janitorial logo
│   └── images/            # Service and location images
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Colors

Unicorn-themed colors are defined in `tailwind.config.js`:

```javascript
colors: {
  'unicorn-purple': '#A78BFA',
  'unicorn-blue': '#93C5FD',
  'unicorn-pink': '#F9A8D4',
  'unicorn-mint': '#A7F3D0',
  'unicorn-lilac': '#DDD6FE',
}
```

### Sections

All sections are in `app/page.js`:
1. Hero - With logo and main CTA
2. About - Company introduction
3. Services - 6 service cards with images
4. Service Areas - 5 cities + more areas card
5. Why Choose Us - 6 feature cards
6. Testimonials - 3 client reviews
7. Contact - WhatsApp CTA + business info
8. Footer - Navigation and links

### Images

All images are stored in `public/images/`:
- `about-team.jpg` - Team photo
- `commercial-cleaning.jpg`
- `residential-cleaning.jpg`
- `office-cleaning.jpg`
- `deep-cleaning.jpg`
- `penticton.jpg`
- `kelowna.jpg`
- `summerland.jpg`
- `naramata.jpg`
- `peachland.jpg`

## 📱 WhatsApp Integration

The website features two WhatsApp CTAs:
1. **Hero Section** - Large button with message
2. **Floating Button** - Bottom-right corner, always visible

Update the phone number and customize the pre-filled message in `app/page.js`.

## 📊 Analytics Setup

### Google Tag Manager
1. Create account at [tagmanager.google.com](https://tagmanager.google.com)
2. Get your GTM ID (format: `GTM-XXXXXXX`)
3. Replace in `app/layout.js`

### Google Analytics 4
1. Create property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXX`)
3. Replace in `app/layout.js`

## 🔍 SEO

The website includes:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data (CleaningService schema)
- ✅ Semantic HTML
- ✅ Mobile-friendly
- ✅ Fast loading times
- ✅ Alt tags on all images

## 📝 License

© 2024 Unicorn Janitorial Ltd. All rights reserved.

## 🆘 Support

For technical support or customization requests, contact via WhatsApp or your development team.

---

**Built with ❤️ using Next.js 15, React 19, and Tailwind CSS**


