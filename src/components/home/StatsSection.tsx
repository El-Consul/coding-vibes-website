'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations, t } from '@/lib/translations';

const statsKeys = ['projects', 'years', 'clients', 'rate'] as const;

export default function StatsSection() {
  const { lang } = useLanguage();
  const { stats } = translations;

  return (
    <section className="py-20 bg-[#0A0E27] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 via-transparent to-purple-500/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsKeys.map((key) => (
            <div key={key} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stats[key].value}
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {t(stats[key].label, lang)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
