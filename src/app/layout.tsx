import type { Metadata } from 'next'
import './globals.css'
import { siteContent } from '@/content/homepage'
import BackToTop from '@/components/layout/BackToTop'

const { seo } = siteContent

export const metadata: Metadata = {
  title:       seo.title,
  description: seo.description,
  keywords:    seo.keywords,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kamsonfinancial.com'),
  openGraph: {
    title:       seo.title,
    description: seo.description,
    url:         process.env.NEXT_PUBLIC_SITE_URL,
    siteName:    'Kamson Financial Services',
    images:      seo.ogImage ? [{ url: seo.ogImage, width: 1200, height: 630 }] : [],
    locale:      'en_IN',
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       seo.title,
    description: seo.description,
    images:      seo.ogImage ? [seo.ogImage] : [],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
