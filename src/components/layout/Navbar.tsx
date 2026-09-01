'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, t } from '@/lib/translations';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/',          key: 'home' as const },
  { href: '/services',  key: 'services' as const },
  { href: '/about',     key: 'about' as const },
  { href: '/contact',   key: 'contact' as const },
];

export default function Navbar() {
  const { lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0E27]/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative">
              <span className="text-xl md:text-2xl font-black tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                  Coding
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 ml-1">
                  Vibes
                </span>
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-400 to-fuchsia-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="px-4 py-2 text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-cyan-500/10"
              >
                {t(translations.nav[link.key], lang)}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              {t(translations.nav.contact, lang)}
            </Link>
          </nav>

          {/* Right side: LanguageSwitcher + Mobile Menu */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0A0E27]/98 backdrop-blur-md border-t border-cyan-500/20 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors rounded-lg hover:bg-cyan-500/10"
            >
              {t(translations.nav[link.key], lang)}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-3 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl text-center"
          >
            {t(translations.nav.contact, lang)}
          </Link>
        </div>
      </div>
    </header>
  );
}
