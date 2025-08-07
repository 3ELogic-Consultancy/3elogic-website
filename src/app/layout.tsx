import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '3ELogic',
  description: '3ELOGIC CONSULTANCY PTE. LTD. specializes in Business Analytics and Optimization. We help clients achieve sustainable cost savings, operational efficiency, and optimal performance through intelligent data analysis.',
  keywords: 'business analytics, optimization, consulting, data analysis, Singapore, 3ELogic, business consultancy',
  authors: [{ name: '3ELogic' }],
  creator: '3ELogic',
  publisher: '3ELogic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://3elogic.com.sg'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '3ELogic - Business Analytics & Optimization Consultancy',
    description: '3ELOGIC CONSULTANCY PTE. LTD. specializes in Business Analytics and Optimization. We help clients achieve sustainable cost savings, operational efficiency, and optimal performance.',
    url: 'https://3elogic.com.sg',
    siteName: '3ELogic',
    images: [
      {
        url: '/logo/3ELogo_HD.png',
        width: 1200,
        height: 630,
        alt: '3ELogic Logo',
      },
    ],
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3ELogic - Business Analytics & Optimization Consultancy',
    description: '3ELOGIC CONSULTANCY PTE. LTD. specializes in Business Analytics and Optimization.',
    images: ['/logo/3ELogo_HD.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo/3ELogo.png',
    shortcut: '/logo/3ELogo.png',
    apple: '/logo/3ELogo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo/3ELogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo/3ELogo.png" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <div className="relative z-50">
            <Navigation />
          </div>
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
