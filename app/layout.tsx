import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { Providers } from './providers'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Faris Salhi',
    template: '%s | Faris Salhi',
  },
  description:
    'Portfolio of Faris Salhi, a computer science graduate focused on software engineering, networking, and security.',
  openGraph: {
    title: 'Faris Salhi',
    description:
      'Portfolio of Faris Salhi, a computer science graduate focused on software engineering, networking, and security.',
    url: baseUrl,
    siteName: 'Faris Salhi',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/icon.ico',
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
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'w-full h-full bg-neutral-100 dark:bg-neutral-900',
        GeistSans.variable,
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
      <body className="antialiased w-full min-h-screen bg-neutral-100 dark:bg-neutral-900">
        <div className="max-w-xl mx-auto px-4 py-8 min-h-screen flex flex-col">
          <Providers>
            <Navbar />
            <main className="flex-grow mt-6">
              {children}
            </main>
            <Footer />
          </Providers>
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  )
}
