import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '3ELogic',
  description: '3ELOGIC CONSULTANCY PTE. LTD. specializes in Business Analytics and Optimization. We help clients achieve sustainable cost savings, operational efficiency, and optimal performance through intelligent data analysis.',
  keywords: 'business analytics, optimization, consulting, data analysis, Singapore',
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
