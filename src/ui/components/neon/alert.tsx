import React from 'react';
import { cn } from '@/lib/utils';
import type { AlertProps, AlertTitleProps, AlertDescriptionProps } from '@/ui/types/components/alert';

export function Alert({
  className,
  variant = 'default',
  type = 'default',
  colors,
  children,
  ...props
}: AlertProps) {
  const baseStyles = "relative transition-all duration-200 border shadow-[0_0_10px_var(--tw-shadow-color)] w-full rounded-lg border px-4 py-3 text-sm";
  
  const typeStyles = {
    default: {
      backgroundColor: colors.accent.primary,
      color: colors.background === '#ffffff' ? '#000000' : '#ffffff',
      boxShadow: `0 0 15px ${colors.accent.glow}`,
      border: 'none'
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.accent.primary,
      border: `1px solid ${colors.accent.primary}`,
      boxShadow: `inset 0 0 5px ${colors.accent.glow}`
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.accent.primary,
      border: 'none',
      boxShadow: 'none',
      textShadow: `0 0 5px ${colors.accent.glow}`
    },
    soft: {
      backgroundColor: colors.accent?.rgb ? `rgba(${colors.accent.rgb}, 0.15)` : (colors.accent?.primary ? `color-mix(in srgb, ${colors.accent.primary} 15%, transparent)` : 'rgba(0,0,0,0.1)'),
      color: colors.accent.primary,
      boxShadow: `0 0 5px ${colors.accent.glow}`,
      border: 'none'
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
      role="alert"
      className={cn(baseStyles, className)}
      style={typeStyles[type as keyof typeof typeStyles]}
      {...props}
    >
      {children}
      
    </div>
  );
}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <h5
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  )
}

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return (
    <div
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
}
