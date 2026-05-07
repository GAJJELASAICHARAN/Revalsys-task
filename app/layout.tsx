import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from '@/lib/auth-context'
import { CartProvider } from '@/lib/cart-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'TechHub — Shop Electronics, Laptops, Phones & More',
    template: '%s | TechHub',
  },
  description: 'Shop premium electronics at TechHub. Discover laptops, smartphones, tablets, wearables and accessories with AI-powered recommendations, fast free shipping, and 30-day returns.',
  keywords: ['electronics', 'laptops', 'smartphones', 'tablets', 'wearables', 'tech deals'],
  openGraph: {
    type: 'website',
    siteName: 'TechHub',
    title: 'TechHub — Shop Electronics, Laptops, Phones & More',
    description: 'Shop premium electronics with AI-powered recommendations and fast free shipping.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased bg-background">
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
