import type { Metadata } from 'next';
import ServiceCard from '@/components/services/ServiceCard';

export const metadata: Metadata = {
  title: 'الخدمات — Coding Vibes',
  description:
    'اكتشف خدمات Coding Vibes: دعوات الأفراح الرقمية، مواقع البورتفوليو والأعمال، وحلول SaaS المخصصة. اطلب عرض سعر مخصصاً الآن.',
  alternates: {
    canonical: 'https://codingvibes.dev/services',
  },
  openGraph: {
    title: 'خدمات Coding Vibes — دعوات، مواقع، SaaS',
    description: 'دعوات الأفراح الرقمية، مواقع البورتفوليو، وحلول SaaS. اطلب عرض سعر الآن.',
    url: 'https://codingvibes.dev/services',
  },
};

// JSON-LD Schema for Services
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Coding Vibes Services',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'Wedding & Engagement Digital Invitations',
      description: 'Luxurious digital invitations for weddings and engagements',
      provider: { '@type': 'LocalBusiness', name: 'Coding Vibes' },
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Portfolio & Business Websites',
      description: 'Professional, fast, and SEO-optimized business websites',
      provider: { '@type': 'LocalBusiness', name: 'Coding Vibes' },
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Custom SaaS Solutions',
      description: 'Tailored web applications and software solutions',
      provider: { '@type': 'LocalBusiness', name: 'Coding Vibes' },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <div className="min-h-screen bg-[#0A0E27] pt-24 pb-20">
        {/* Page header */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            ما يميز{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Coding Vibes
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ثلاث خدمات متكاملة تغطي كل احتياجاتك الرقمية — من المناسبات الخاصة إلى الحلول التقنية المتقدمة.
          </p>
        </div>

        {/* Service cards */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ServiceCard serviceKey="wedding" />
          <ServiceCard serviceKey="portfolio" />
          <ServiceCard serviceKey="saas" />
        </div>
      </div>
    </>
  );
}
