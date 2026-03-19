import React from 'react';
import { cn } from '@/lib/utils';
import type { AvatarProps, AvatarImageProps, AvatarFallbackProps } from '@/ui/types/components/avatar';

export function Avatar({
  className,
  variant = 'default',
  type = 'default',
  colors,
  children,
  ...props
}: AvatarProps) {
  const baseStyles = "relative font-mono border-2 transition-all duration-200 relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full";
  
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

export function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <img
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  )
}

export function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )}
      {...props}
    />
  )
}
