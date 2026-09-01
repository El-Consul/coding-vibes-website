import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon, FacebookIcon, TikTokIcon } from '@/components/ui/Icons';
import NeonCard from '@/components/ui/NeonCard';

export const metadata: Metadata = {
  title: 'تواصل معنا — Coding Vibes',
  description: 'تواصل مع Coding Vibes عبر النموذج، WhatsApp، Instagram، أو Facebook. نحن هنا لمساعدتك في مشروعك الرقمي.',
  openGraph: {
    title: 'تواصل مع Coding Vibes',
    description: 'نحن هنا لمساعدتك. تواصل معنا عبر أي قناة تفضلها.',
  },
};

const socialLinks = [
  {
    icon: <WhatsAppIcon size={22} />,
    label: 'WhatsApp',
    value: '+XXX XXX XXXX',
    href: 'https://wa.me/YOUR_WHATSAPP',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'hover:border-green-500/40',
  },
  {
    icon: <InstagramIcon size={22} />,
    label: 'Instagram',
    value: '@YOUR_INSTAGRAM',
    href: 'https://instagram.com/YOUR_INSTAGRAM',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'hover:border-pink-500/40',
  },
  {
    icon: <FacebookIcon size={22} />,
    label: 'Facebook',
    value: 'Coding Vibes',
    href: 'https://facebook.com/YOUR_FACEBOOK',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'hover:border-blue-500/40',
  },
  {
    icon: <TikTokIcon size={22} />,
    label: 'TikTok',
    value: '@YOUR_TIKTOK',
    href: 'https://tiktok.com/@YOUR_TIKTOK',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'hover:border-cyan-500/40',
  },
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'YOUR_EMAIL@gmail.com',
    href: 'mailto:YOUR_EMAIL@gmail.com',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'hover:border-cyan-500/40',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0E27] pt-24 pb-20">
      {/* Page header */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">Contact</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
          تواصل{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            معنا
          </span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          نحن هنا لمساعدتك في أي وقت. أرسل لنا رسالة وسنرد عليك في أقرب وقت.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form — larger */}
          <div className="lg:col-span-3">
            <NeonCard className="p-8">
              <h2 className="text-xl font-bold text-white mb-6">أرسل رسالة</h2>
              <ContactForm />
            </NeonCard>
          </div>

          {/* Social + Info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Social Links */}
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl bg-[#0D1235]/80 border border-slate-700/40 ${s.border} transition-all duration-300 group`}
              >
                <div className={`w-11 h-11 rounded-xl ${s.bg} ${s.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-0.5">{s.label}</p>
                  <p className={`text-sm font-semibold ${s.color}`}>{s.value}</p>
                </div>
              </a>
            ))}

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0D1235]/80 border border-slate-700/40">
              <div className="w-11 h-11 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-slate-400 text-xs mb-0.5">الموقع / Location</p>
                <p className="text-sm font-semibold text-slate-200">فلسطين 🇵🇸</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
