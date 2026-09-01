import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan:    { DEFAULT: '#00D9FF', 400: '#22E5FF', 500: '#00D9FF', 300: '#66EEFF' },
        magenta: { DEFAULT: '#E500FF', 400: '#EE33FF', 500: '#E500FF' },
        dark:    { DEFAULT: '#0A0E27', card: '#0D1235', deeper: '#080B20' },
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
        inter:   ['Inter', 'sans-serif'],
        sans:    ['Tajawal', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'neon-gradient':     'linear-gradient(135deg, #00D9FF, #E500FF)',
        'cyan-gradient':     'linear-gradient(135deg, #00D9FF, #0099FF)',
        'dark-gradient':     'linear-gradient(180deg, #0A0E27 0%, #080B20 100%)',
        'grid-pattern':
          'linear-gradient(rgba(0,217,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '60px 60px',
      },
      animation: {
        'fade-in-up':  'fade-in-up 0.6s ease-out forwards',
        'float':       'float 5s ease-in-out infinite',
        'pulse-slow':  'pulse-slow 4s ease-in-out infinite',
        'spin-slow':   'spin-slow 8s linear infinite',
        'glow-pulse':  'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)',   opacity: '0.3' },
          '50%':      { transform: 'translateY(-20px) scale(1.2)', opacity: '0.6' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.5' },
          '50%':      { opacity: '1' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 217, 255, 0.3)' },
          '50%':      { boxShadow: '0 0 30px rgba(0, 217, 255, 0.6), 0 0 60px rgba(0, 217, 255, 0.2)' },
        },
      },
      boxShadow: {
        'neon-cyan':    '0 0 20px rgba(0, 217, 255, 0.4)',
        'neon-magenta': '0 0 20px rgba(229, 0, 255, 0.4)',
        'neon-lg':      '0 0 40px rgba(0, 217, 255, 0.3), 0 0 80px rgba(0, 217, 255, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
