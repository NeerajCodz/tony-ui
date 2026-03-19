import React from 'react';
import { cn } from '@/lib/utils';
import type { BadgeProps } from '@/ui/types/components/feedback';

export default function Badge({
  className,
  variant = 'default',
  type = 'default',
  colors,
  children,
  ...props
}: BadgeProps) {
  const baseStyles = "relative transition-all duration-200 border shadow-[0_0_10px_var(--tw-shadow-color)] inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const typeStyles = {
    default: {
      backgroundColor: colors.accent.primary,
      color: colors.background === '#ffffff' ? '#000000' : '#ffffff',
      boxShadow: `0 0 10px ${colors.accent.glow}`,
      border: 'none',
      fontWeight: '600'
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.accent.primary,
      border: `1px solid ${colors.accent.primary}`,
      boxShadow: `0 0 5px ${colors.accent.glow}`
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.accent.primary,
      textShadow: `0 0 5px ${colors.accent.glow}`,
      boxShadow: 'none'
    },
    soft: {
      backgroundColor: colors.accent?.rgb ? `rgba(${colors.accent.rgb}, 0.15)` : (colors.accent?.primary ? `color-mix(in srgb, ${colors.accent.primary} 15%, transparent)` : 'rgba(0,0,0,0.1)'),
      color: colors.accent.primary,
      boxShadow: `0 0 5px ${colors.accent.glow}`
    },
    inverse: {
      backgroundColor: colors.text,
      color: colors.background,
      border: `1px solid ${colors.text}`
    },
    solid: {
      backgroundColor: colors.accent.primary,
      color: colors.text,
      boxShadow: `0 0 10px ${colors.accent.glow}`
    },
    contrast: {
      backgroundColor: colors.accent?.primary || colors.text,
      color: '#000000',
      fontWeight: 'bold',
      border: `1px solid ${colors.text}`
    },
  };


  return (
    <div 
      className={cn(baseStyles, className)}
      style={typeStyles[type as keyof typeof typeStyles]}
      {...props}
    >
      {children}
      
    </div>
  );
}
