import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Unicorn Janitorial Ltd. | Professional Cleaning Services Okanagan',
  description: 'Expert commercial, residential, and office cleaning services in Penticton, Kelowna, Summerland, Naramata, and Peachland. Fully insured, eco-friendly cleaning solutions.',
  keywords: 'cleaning service Penticton, janitorial Kelowna, commercial cleaning Okanagan, residential cleaning, office cleaning, deep cleaning, post-construction cleaning',
  authors: [{ name: 'Unicorn Janitorial Ltd.' }],
  openGraph: {
    title: 'Unicorn Janitorial Ltd. | Professional Cleaning Services',
    description: 'Expert cleaning services across the Okanagan Valley. Contact us on WhatsApp for instant quotes.',
    type: 'website',
    locale: 'en_CA',
    siteName: 'Unicorn Janitorial Ltd.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#A78BFA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
        
        {/* Google Analytics 4 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        {children}
      </body>
    </html>
  )
}

