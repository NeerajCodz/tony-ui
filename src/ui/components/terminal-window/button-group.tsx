import React from 'react';
import { cn } from '@/lib/utils';
import type { ButtonGroupProps } from '@/ui/types/components/misc';

export default function ButtonGroup({
  className,
  variant = 'default',
  type = 'default',
  colors,
  children,
  ...props
}: ButtonGroupProps) {
  const baseStyles = "relative font-mono border-2 transition-all duration-200 inline-flex -space-x-px rounded-md shadow-sm";
  
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
      role="group"
      {...props}
    >
      {children}
      
      <div className="absolute top-0 left-0 right-0 h-4 bg-current opacity-10 flex items-center px-1 gap-1">
        <span className="w-2 h-2 rounded-full bg-red-500 opacity-50" />
        <span className="w-2 h-2 rounded-full bg-yellow-500 opacity-50" />
        <span className="w-2 h-2 rounded-full bg-green-500 opacity-50" />
      </div>
        
    </div>
  );
}
