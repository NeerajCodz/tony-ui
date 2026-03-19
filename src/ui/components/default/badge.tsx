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
  const baseStyles = "relative transition-all duration-200 rounded-md inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const typeStyles = {
    default: {
      backgroundColor: colors.background,
      color: colors.text,
      border: `1px solid ${colors.border}`
    },
    solid: {
      backgroundColor: colors.accent.primary,
      color: colors.text,
      boxShadow: `0 0 10px ${colors.accent.glow}`
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.accent.primary,
      border: `1px solid ${colors.accent.primary}`
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.textHover
    },
    inverse: {
      backgroundColor: colors.text,
      color: colors.background,
      border: `1px solid ${colors.text}`
    },
    contrast: {
      backgroundColor: colors.accent?.primary || colors.text,
      color: '#000000',
      fontWeight: 'bold',
      border: `1px solid ${colors.text}`
    },
    soft: {
      backgroundColor: colors.accent?.rgb ? `rgba(${colors.accent.rgb}, 0.1)` : (colors.accent?.primary ? `color-mix(in srgb, ${colors.accent.primary} 10%, transparent)` : 'rgba(0,0,0,0.1)'),
      color: colors.accent?.primary || colors.text,
      border: 'none'
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
