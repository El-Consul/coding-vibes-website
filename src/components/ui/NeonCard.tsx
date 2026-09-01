'use client';

import { ReactNode } from 'react';

interface NeonCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'gradient';
  hover?: boolean;
}

const glowMap = {
  cyan:     'hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/15',
  purple:   'hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/15',
  gradient: 'hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10',
};

export default function NeonCard({
  children,
  className = '',
  glowColor = 'cyan',
  hover = true,
}: NeonCardProps) {
  return (
    <div
      className={`
        relative rounded-2xl bg-[#0D1235]/80 backdrop-blur-sm
        border border-slate-700/50
        transition-all duration-300
        ${hover ? `${glowMap[glowColor]} hover:-translate-y-1` : ''}
        ${className}
      `}
    >
      {/* Top glow line */}
      <div
        className={`absolute top-0 left-1/4 right-1/4 h-px rounded-full ${
          glowColor === 'purple'
            ? 'bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'
            : 'bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
        }`}
      />
      {children}
    </div>
  );
}
