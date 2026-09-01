'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, t } from '@/lib/translations';
import NeonCard from '@/components/ui/NeonCard';
import { Heart, Globe, Cpu, CheckCircle, ArrowRight } from 'lucide-react';

const serviceIcons = [
  { icon: <Heart size={28} />, color: 'text-pink-400', bg: 'bg-pink-500/10', key: 'wedding' as const },
  { icon: <Globe size={28} />, color: 'text-cyan-400', bg: 'bg-cyan-500/10', key: 'portfolio' as const },
  { icon: <Cpu size={28} />,   color: 'text-purple-400', bg: 'bg-purple-500/10', key: 'saas' as const },
];

export default function ServicesPreview() {
  const { lang } = useLanguage();

  return (
    <section className="py-24 bg-[#0A0E27] relative">
      {/* Section divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            {t(translations.services.title, lang)}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            {t(translations.services.subtitle, lang)}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceIcons.map(({ icon, color, bg, key }) => {
            const service = translations.services[key];
            const features = (lang === 'ar' ? service.features.ar : service.features.en) as readonly string[];

            return (
              <NeonCard
                key={key}
                glowColor={key === 'wedding' ? 'purple' : 'cyan'}
                className="p-8 flex flex-col"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${bg} ${color} flex items-center justify-center mb-6`}>
                  {icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {t(service.title, lang)}
                </h3>

                {/* Desc */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {t(service.desc, lang)}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8 flex-1">
                  {features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle size={14} className="text-cyan-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/services"
                  className={`flex items-center gap-2 text-sm font-semibold ${color} hover:gap-3 transition-all duration-200`}
                >
                  {t(translations.services.cta, lang)}
                  <ArrowRight size={16} />
                </Link>
              </NeonCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
