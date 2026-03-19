import React from 'react';
import { cn } from '@/lib/utils';
import type { InputProps } from '@/ui/types/components/input';

export default function Input({
  className,
  variant = 'default',
  type = 'default',
  colors,
  ...props
}: InputProps) {
  const baseStyles = "relative transition-all duration-200 border shadow-[0_0_10px_var(--tw-shadow-color)] flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:border-[var(--input-border)] focus-visible:shadow-[0_0_20px_var(--input-glow),inset_0_0_10px_var(--input-glow)] disabled:cursor-not-allowed disabled:opacity-50";
  
  const typeStyles = {
    default: {
      '--input-bg': colors.background,
      '--input-text': colors.text,
      '--input-border': colors.accent.primary,
      '--input-glow': colors.accent.glow,
      backgroundColor: 'var(--input-bg)',
      color: 'var(--input-text)',
      border: `1px solid var(--input-border)`,
      boxShadow: `0 0 10px var(--input-glow)`
    } as React.CSSProperties,
    outline: {
      '--input-bg': 'transparent',
      '--input-text': colors.accent.primary,
      '--input-border': colors.accent.primary,
      '--input-glow': colors.accent.glow,
      backgroundColor: 'transparent',
      color: 'var(--input-text)',
      border: `1px solid var(--input-border)`,
      boxShadow: `inset 0 0 5px var(--input-glow)`
    } as React.CSSProperties,
    ghost: {
      backgroundColor: 'transparent',
      color: colors.text,
      border: '1px solid transparent',
      textShadow: `0 0 5px ${colors.accent.glow}`
    },
    soft: {
      backgroundColor: colors.accent?.rgb ? `rgba(${colors.accent.rgb}, 0.1)` : (colors.accent?.primary ? `color-mix(in srgb, ${colors.accent.primary} 10%, transparent)` : 'rgba(0,0,0,0.1)'),
      color: colors.text,
      border: `1px solid ${colors.accent.primary}40`,
      boxShadow: `0 0 5px ${colors.accent.glow}`
    },
    inverse: {
      backgroundColor: colors.text,
      color: colors.background,
      border: `1px solid ${colors.background}`
    },
    solid: {
      backgroundColor: colors.accent.primary,
      color: colors.text,
      boxShadow: `0 0 10px ${colors.accent.glow}`
    },
    contrast: {
      backgroundColor: colors?.background || '#ffffff',
      color: colors?.text || colors?.foreground || '#000000',
      border: `2px solid ${colors?.text || colors?.foreground || '#000000'}`,
      fontWeight: 'bold'
    },
   };


  return (
    <div className="relative w-full">
      <input 
        className={cn(baseStyles, className)}
        style={typeStyles[type as keyof typeof typeStyles]}
        {...props}
      />
      
    </div>
  );
}
