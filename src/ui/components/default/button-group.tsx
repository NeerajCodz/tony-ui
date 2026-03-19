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
  const baseStyles = "relative transition-all duration-200 rounded-md inline-flex -space-x-px rounded-md shadow-sm";
  
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
    <div 
      className={cn(baseStyles, className)}
      style={typeStyles[type as keyof typeof typeStyles]}
      role="group"
      {...props}
    >
      {children}
      
    </div>
  );
}
