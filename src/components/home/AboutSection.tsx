'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations, t } from '@/lib/translations';
import { Zap, Star, DollarSign } from 'lucide-react';

const valueIcons = {
  speed:   <Zap size={22} className="text-cyan-400" />,
  quality: <Star size={22} className="text-yellow-400" />,
  price:   <DollarSign size={22} className="text-green-400" />,
};

export default function AboutSection() {
  const { lang } = useLanguage();
  const { about } = translations;

  return (
    <section className="py-24 bg-[#080B20] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
              {t(about.sectionTitle, lang)}
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              {t(about.headline, lang)}
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              {t(about.story, lang)}
            </p>

            {/* Vision callout */}
            <div className="relative p-5 rounded-xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 border border-cyan-500/20">
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
              <p className="text-sm font-semibold text-cyan-300 mb-1">{t(about.vision.title, lang)}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{t(about.vision.text, lang)}</p>
            </div>
          </div>

          {/* Right — Values */}
          <div className="space-y-5">
            {(['speed', 'quality', 'price'] as const).map((key) => (
              <div
                key={key}
                className="flex items-start gap-4 p-5 rounded-xl bg-[#0D1235]/70 border border-slate-700/40 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {valueIcons[key]}
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">
                    {t(about.values[key].title, lang)}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {t(about.values[key].desc, lang)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
