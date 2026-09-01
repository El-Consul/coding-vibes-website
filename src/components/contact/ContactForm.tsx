'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, t } from '@/lib/translations';
import GlowButton from '@/components/ui/GlowButton';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : '#';

export default function ContactForm() {
  const { lang } = useLanguage();
  const c = translations.contact;

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

  const serviceOptions = t(c.serviceOptions, lang) as readonly string[];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (FORMSPREE_ENDPOINT === '#') {
      alert('Please configure NEXT_PUBLIC_FORMSPREE_ID in .env.local');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _language: lang }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = `
    w-full bg-[#0D1235]/80 border border-slate-700/50 rounded-xl px-4 py-3
    text-slate-200 placeholder-slate-500 text-sm
    focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30
    transition-all duration-200
  `;
  const labelClass = 'block text-sm font-medium text-slate-300 mb-2';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label className={labelClass}>{t(c.name, lang)}</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder={t(c.placeholderName, lang)}
          required
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>{t(c.email, lang)}</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={t(c.placeholderEmail, lang)}
          required
          className={inputClass}
        />
      </div>

      {/* Service Type */}
      <div>
        <label className={labelClass}>{t(c.service, lang)}</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className={inputClass}
        >
          {serviceOptions.map((opt, i) => (
            <option key={i} value={i === 0 ? '' : opt} disabled={i === 0}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>{t(c.message, lang)}</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={t(c.placeholderMessage, lang)}
          required
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Status messages */}
      {status === 'success' && (
        <div className="flex items-center gap-2 text-green-400 text-sm p-3 bg-green-500/10 rounded-xl border border-green-500/20">
          <CheckCircle size={16} />
          {t(c.success, lang)}
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-400 text-sm p-3 bg-red-500/10 rounded-xl border border-red-500/20">
          <AlertCircle size={16} />
          {t(c.error, lang)}
        </div>
      )}

      {/* Submit */}
      <GlowButton
        variant="primary"
        size="md"
        className="w-full"
        onClick={status !== 'sending' ? undefined : () => {}}
      >
        <Send size={16} />
        {status === 'sending' ? t(c.sending, lang) : t(c.send, lang)}
      </GlowButton>
    </form>
  );
}
