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
  const baseStyles = "relative text-lg p-6 transition-all duration-200 flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  
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
    }
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
