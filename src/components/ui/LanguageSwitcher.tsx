'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/lib/translations';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const toggle = (l: Language) => {
    if (l !== lang) setLang(l);
  };

  return (
    <div className="flex items-center bg-slate-800/60 rounded-full p-0.5 border border-slate-700/50">
      <button
        onClick={() => toggle('ar')}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
          lang === 'ar'
            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        AR
      </button>
      <button
        onClick={() => toggle('en')}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
          lang === 'en'
            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        EN
      </button>
    </div>
  );
}
