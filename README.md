# Coding Vibes Website 🚀

**وكالة تصميم وتطوير ويب احترافية | Professional Web Design & Development Agency**

---

## Tech Stack

| Technology | Version |
|-----------|---------|
| Next.js | 15+ (App Router) |
| React | 19+ |
| Tailwind CSS | 4 |
| Lucide React | Latest |
| TypeScript | 5+ |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/coding-vibes-website.git

# Navigate to project
cd coding-vibes-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Variables

Create `.env.local` from `.env.example`:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_ID` | Your Formspree form ID (from formspree.io) |
| `NEXT_PUBLIC_SITE_URL` | Your production URL |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number (with country code, no +) |

---

## 📦 Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. `npm run build`
2. Upload `out/` folder OR connect GitHub repo
3. Set `NEXT_PUBLIC_*` env vars in Netlify dashboard

---

## 📝 Customization Guide

### Update Contact Info
Search for `YOUR_WHATSAPP`, `YOUR_INSTAGRAM`, `YOUR_FACEBOOK`, `YOUR_EMAIL` in:
- `src/components/layout/Footer.tsx`
- `src/components/home/CTASection.tsx`
- `src/app/contact/page.tsx`
- `src/components/services/ServiceCard.tsx`

### Update Site URL
Replace `https://codingvibes.dev` with your domain in:
- `src/app/layout.tsx` (metadataBase)
- `src/app/sitemap.ts`
- `src/app/robots.ts`

### Add Your Logo
Place your logo file in `public/logo.png` and update the Navbar component.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx         ← Root layout
│   ├── page.tsx           ← Home page
│   ├── services/page.tsx  ← Services page
│   ├── about/page.tsx     ← About page
│   ├── contact/page.tsx   ← Contact page
│   ├── sitemap.ts         ← Dynamic sitemap
│   └── robots.ts          ← Robots.txt
├── components/
│   ├── layout/            ← Navbar, Footer
│   ├── home/              ← Hero, Services, About, Stats, CTA
│   ├── services/          ← ServiceCard
│   ├── contact/           ← ContactForm
│   └── ui/                ← GlowButton, NeonCard, LanguageSwitcher
├── contexts/
│   └── LanguageContext.tsx ← AR/EN context
└── lib/
    └── translations.ts    ← All AR/EN strings
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Cyan | `#00D9FF` |
| Primary Magenta | `#E500FF` |
| Background | `#0A0E27` |
| Card BG | `#0D1235` |
| Deep BG | `#080B20` |

---

## 📜 License

© 2024 Coding Vibes — All Rights Reserved
