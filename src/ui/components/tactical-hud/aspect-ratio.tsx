import React from 'react';
import { cn } from '@/lib/utils';
import type { AspectRatioProps } from '@/ui/types/components/data-display';
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

export function AspectRatio({ className, variant = 'default', type = 'default', colors, ...props }: AspectRatioProps) {
  const baseStyles = "relative font-mono tracking-tight transition-all duration-200 border-x";
  
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
    <div className="relative" style={typeStyles[type as keyof typeof typeStyles]}>
      <AspectRatioPrimitive.Root className={cn(baseStyles, className)} {...props} />
      
      <span className="absolute top-0 left-0 w-1 h-1 bg-current" />
      <span className="absolute top-0 right-0 w-1 h-1 bg-current" />
      <span className="absolute bottom-0 left-0 w-1 h-1 bg-current" />
      <span className="absolute bottom-0 right-0 w-1 h-1 bg-current" />
        
    </div>
  )
}
