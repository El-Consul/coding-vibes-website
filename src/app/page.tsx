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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <AboutSection />
      <CTASection />
    </>
  );
}
