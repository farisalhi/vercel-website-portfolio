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
    'Portfolio of Faris Salhi, a BSc. Computer Science graduate focused on software, networking, and security.',
  openGraph: {
    title: 'Faris Salhi',
    description:
      'Portfolio of Faris Salhi, a BSc. Computer Science graduate focused on software, networking, and security.',
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
        'w-full h-full bg-stone-50 dark:bg-neutral-950',
        GeistSans.variable,
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
      <body className="w-full min-h-screen antialiased text-neutral-950 dark:text-neutral-50">
        <div className="page-shell flex min-h-screen flex-col px-5 py-5 sm:px-8 sm:py-7">
          <Providers>
            <Navbar />
            <main className="flex-grow py-10 sm:py-14">
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
