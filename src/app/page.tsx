import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import AboutSection from '@/components/home/AboutSection';
import StatsSection from '@/components/home/StatsSection';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Coding Vibes — وكالة تصميم وتطوير ويب احترافية',
  description:
    'Coding Vibes وكالة تصميم وتطوير ويب. نبني دعوات الأفراح الرقمية، مواقع البورتفوليو، وحلول SaaS المخصصة. خبرة 3+ سنوات.',
};

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://codingvibes.dev/#organization',
      name: 'Coding Vibes',
      url: 'https://codingvibes.dev',
      email: 'codingvibesdev1@gmail.com',
      telephone: '+201061770954',
      sameAs: [
        'https://instagram.com/coding_vibes_dev',
        'https://tiktok.com/@coding_vibes_dev',
        'https://www.facebook.com/share/1Anfm8i4sb/',
      ],
      logo: { '@type': 'ImageObject', url: 'https://codingvibes.dev/og-image.png' },
      image: 'https://codingvibes.dev/og-image.png',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://codingvibes.dev/#website',
      url: 'https://codingvibes.dev',
      name: 'Coding Vibes',
      description:
        'Coding Vibes وكالة تصميم وتطوير ويب احترافية: دعوات أفراح رقمية، مواقع بورتفوليو، وحلول SaaS.',
      inLanguage: 'ar',
      publisher: { '@id': 'https://codingvibes.dev/#organization' },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <AboutSection />
      <CTASection />
    </>
  );
}
