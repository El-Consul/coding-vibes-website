import type { Metadata } from 'next';
import { Inter, Tajawal } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://codingvibes.dev'),
  title: {
    default: 'Coding Vibes — وكالة تصميم وتطوير ويب احترافية',
    template: '%s | Coding Vibes',
  },
  description:
    'Coding Vibes وكالة تصميم وتطوير ويب متخصصة في دعوات الأفراح الرقمية، مواقع البورتفوليو، وحلول SaaS المخصصة. خبرة 3+ سنوات، جودة عالية، أسعار تنافسية.',
  keywords: [
    'تصميم مواقع', 'تطوير ويب', 'دعوات الأفراح الرقمية', 'موقع بورتفوليو',
    'SaaS', 'web design', 'web development', 'wedding invitation',
    'Coding Vibes', 'فلسطين', 'Palestine',
  ],
  authors: [{ name: 'Coding Vibes' }],
  creator: 'Coding Vibes',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    alternateLocale: 'en_US',
    url: 'https://codingvibes.dev',
    siteName: 'Coding Vibes',
    title: 'Coding Vibes — وكالة تصميم وتطوير ويب احترافية',
    description: 'دعوات أفراح رقمية، مواقع بورتفوليو، وحلول SaaS مخصصة. خبرة 3+ سنوات.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Coding Vibes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coding Vibes — وكالة تصميم وتطوير ويب',
    description: 'دعوات أفراح رقمية، مواقع بورتفوليو، وحلول SaaS مخصصة.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${tajawal.variable}`}>
      <body className="bg-[#0A0E27] text-slate-200 antialiased font-tajawal selection:bg-cyan-500/30 selection:text-cyan-100">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
