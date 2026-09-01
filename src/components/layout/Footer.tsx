'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, t } from '@/lib/translations';
import { InstagramIcon, FacebookIcon, WhatsAppIcon, TikTokIcon, LinktreeIcon } from '@/components/ui/Icons';

const navLinks = [
  { href: '/',         key: 'home' as const },
  { href: '/services', key: 'services' as const },
  { href: '/about',    key: 'about' as const },
  { href: '/contact',  key: 'contact' as const },
];

const socialLinks = [
  {
    icon: <WhatsAppIcon size={18} />,
    href: 'https://wa.me/201061770954',
    label: 'WhatsApp',
    color: 'hover:text-green-400',
  },
  {
    icon: <InstagramIcon size={18} />,
    href: 'https://instagram.com/coding_vibes_dev',
    label: 'Instagram',
    color: 'hover:text-pink-400',
  },
  {
    icon: <FacebookIcon size={18} />,
    href: 'https://www.facebook.com/share/1Anfm8i4sb/',
    label: 'Facebook',
    color: 'hover:text-blue-400',
  },
  {
    icon: <TikTokIcon size={18} />,
    href: 'https://tiktok.com/@coding_vibes_dev',
    label: 'TikTok',
    color: 'hover:text-cyan-400',
  },
  {
    icon: <LinktreeIcon size={18} />,
    href: 'https://linktr.ee/coding_vibes_dev',
    label: 'Linktree',
    color: 'hover:text-emerald-400',
  },
];

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080B20] border-t border-cyan-500/10 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-black">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">Coding</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 ml-1">Vibes</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {t(translations.footer.tagline, lang)}
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`text-slate-500 transition-colors duration-200 ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-5 text-sm tracking-wider uppercase">
              {t(translations.footer.links, lang)}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t(translations.nav[link.key], lang)}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://linktr.ee/coding_vibes_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Linktree (@coding_vibes_dev)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-5 text-sm tracking-wider uppercase">
              {t(translations.footer.contact, lang)}
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="mailto:codingvibesdev1@gmail.com" className="hover:text-purple-400 transition-colors">
                  Email: codingvibesdev1@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/201061770954" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  WhatsApp: +20 106 177 0954
                </a>
              </li>
              <li>
                <a href="https://instagram.com/coding_vibes_dev" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                  Instagram: @coding_vibes_dev
                </a>
              </li>
              <li>
                <a href="https://tiktok.com/@coding_vibes_dev" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  TikTok: @coding_vibes_dev
                </a>
              </li>
              <li className="text-slate-500">
                {t(translations.contact.locationValue, lang)}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {year} Coding Vibes — {t(translations.footer.rights, lang)}
          </p>
          <p className="text-slate-500 text-xs flex items-center gap-1">
            {t(translations.footer.madeWith, lang)}{' '}
            <span className="text-red-400">❤</span>{' '}
            &amp; 💻
          </p>
        </div>
      </div>
    </footer>
  );
}
