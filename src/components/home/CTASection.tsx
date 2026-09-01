'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations, t } from '@/lib/translations';
import GlowButton from '@/components/ui/GlowButton';
import { MessageCircle } from 'lucide-react';

export default function CTASection() {
  const { lang } = useLanguage();
  const { cta } = translations;

  return (
    <section className="py-24 bg-[#080B20] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/6 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-600/6 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative element */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-cyan-500/50" />
          <div className="w-3 h-3 mx-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-cyan-500/50" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
          {t(cta.headline, lang)}
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          {t(cta.sub, lang)}
        </p>

        <GlowButton
          href="https://wa.me/YOUR_WHATSAPP"
          variant="primary"
          size="lg"
          external
        >
          <MessageCircle size={20} />
          {t(cta.btn, lang)}
        </GlowButton>
      </div>
    </section>
  );
}
