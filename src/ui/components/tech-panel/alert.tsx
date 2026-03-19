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
  const baseStyles = "relative transition-all duration-200 border-2 w-full rounded-lg border px-4 py-3 text-sm";
  
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
      role="alert"
      className={cn(baseStyles, className)}
      style={typeStyles[type as keyof typeof typeStyles]}
      {...props}
    >
      {children}
      
      <span className="absolute top-1 left-1 w-1 h-1 rounded-full bg-current opacity-50" />
      <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-current opacity-50" />
      <span className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-current opacity-50" />
      <span className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-current opacity-50" />
        
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
