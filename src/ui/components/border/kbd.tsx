import React from 'react';
import { cn } from '@/lib/utils';
// import type { KbdProps } from '@/ui/types/components/misc';

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  variant?: any;
  type?: any;
  colors?: any;
  version?: any;
}

export default function Kbd({
  className,
  variant = 'default',
  type = 'default',
  colors,
  children,
  ...props
}: KbdProps) {
  const baseStyles = "relative border-2 transition-all duration-200 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100";
  
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
    <kbd 
      className={cn(baseStyles, className)}
      style={typeStyles[type as keyof typeof typeStyles]}
      {...props}
    >
      {children}
      
    </kbd>
  );
}
