'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations, t } from '@/lib/translations';
import NeonCard from '@/components/ui/NeonCard';
import GlowButton from '@/components/ui/GlowButton';
import { Heart, Globe, Cpu, CheckCircle, MessageCircle } from 'lucide-react';

type ServiceKey = 'wedding' | 'portfolio' | 'saas';

const serviceConfig: Array<{
  key: ServiceKey;
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
  glowColor: 'cyan' | 'purple';
  whatsapp: string;
}> = [
  {
    key: 'wedding',
    icon: <Heart size={32} />,
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/10',
    glowColor: 'purple',
    whatsapp: 'https://wa.me/YOUR_WHATSAPP?text=مرحباً،+أريد+الاستفسار+عن+دعوة+الفرح',
  },
  {
    key: 'portfolio',
    icon: <Globe size={32} />,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    glowColor: 'cyan',
    whatsapp: 'https://wa.me/YOUR_WHATSAPP?text=مرحباً،+أريد+الاستفسار+عن+موقع+بورتفوليو',
  },
  {
    key: 'saas',
    icon: <Cpu size={32} />,
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    glowColor: 'purple',
    whatsapp: 'https://wa.me/YOUR_WHATSAPP?text=مرحباً،+أريد+الاستفسار+عن+حل+SaaS',
  },
];

export default function ServiceCard({ serviceKey }: { serviceKey: ServiceKey }) {
  const { lang } = useLanguage();
  const config = serviceConfig.find((s) => s.key === serviceKey)!;
  const service = translations.services[serviceKey];
  const features = (lang === 'ar' ? service.features.ar : service.features.en) as readonly string[];

  return (
    <NeonCard glowColor={config.glowColor} className="p-8 md:p-10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl ${config.iconBg} ${config.iconColor} flex items-center justify-center flex-shrink-0`}>
          {config.icon}
        </div>

        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            {t(service.title, lang)}
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            {t(service.desc, lang)}
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle size={15} className="text-cyan-400 flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>

          {/* CTA */}
          <GlowButton href={config.whatsapp} variant="primary" external>
            <MessageCircle size={18} />
            {t(translations.services.cta, lang)}
          </GlowButton>
        </div>
      </div>
    </NeonCard>
  );
}
