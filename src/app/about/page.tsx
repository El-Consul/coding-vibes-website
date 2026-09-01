import type { Metadata } from 'next';
import AboutSection from '@/components/home/AboutSection';

export const metadata: Metadata = {
  title: 'من نحن — Coding Vibes',
  description:
    'تعرف على Coding Vibes: وكالة تصميم وتطوير ويب بخبرة 3+ سنوات. نؤمن بسرعة التسليم، الجودة العالية، والأسعار التنافسية.',
  openGraph: {
    title: 'من نحن — Coding Vibes',
    description: 'وكالة تصميم وتطوير ويب بخبرة 3+ سنوات. جودة، سرعة، أسعار مناسبة.',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Coding Vibes',
  description: 'Web design and development agency specializing in wedding invitations, business websites, and custom SaaS solutions.',
  foundingDate: '2022',
  url: 'https://codingvibes.dev',
  telephone: '+201061770954',
  email: 'codingvibesdev1@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'EG',
  },
  sameAs: [
    'https://linktr.ee/coding_vibes_dev',
    'https://instagram.com/coding_vibes_dev',
    'https://tiktok.com/@coding_vibes_dev',
    'https://www.facebook.com/share/1Anfm8i4sb/',
    'https://wa.me/201061770954',
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div className="min-h-screen bg-[#0A0E27] pt-24">
        {/* Page header */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            القصة وراء{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Coding Vibes
            </span>
          </h1>
        </div>

        {/* Reuse AboutSection */}
        <AboutSection />

        {/* Extra: Timeline / Journey */}
        <section className="py-16 bg-[#0A0E27]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative border-l border-cyan-500/20 ps-8 space-y-10">
              {[
                { year: '2022', title: 'بداية الرحلة', desc: 'بدأت Coding Vibes بشغف حقيقي لبناء تجارب رقمية مميزة وفريدة.' },
                { year: '2023', title: 'توسع الخدمات', desc: 'أضفنا دعوات الأفراح الرقمية وحلول SaaS المخصصة لتغطية أوسع.' },
                { year: '2024', title: 'نمو وتميز', desc: 'تجاوزنا 50 مشروعاً ناجحاً مع عملاء من مناطق مختلفة.' },
                { year: '2025+', title: 'المستقبل', desc: 'نواصل البناء، التطوير، وتقديم قيمة حقيقية لكل عميل.' },
              ].map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -start-11 top-1 w-5 h-5 rounded-full bg-[#0A0E27] border-2 border-cyan-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <span className="text-cyan-400 text-xs font-bold tracking-widest">{item.year}</span>
                  <h3 className="text-white font-bold mt-1 mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
