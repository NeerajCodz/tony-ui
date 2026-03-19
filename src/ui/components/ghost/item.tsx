import React from 'react';
import { cn } from '@/lib/utils';
// import type { ItemProps } from '@/ui/types/components/misc'; 
// Temporarily using any/local interface as misc.ts has restrictive version types
export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: any;
  type?: any;
  colors?: any;
  version?: any;
}

export default function Item({
  className,
  variant = 'default',
  type = 'default',
  colors,
  children,
  ...props
}: ItemProps) {
  const baseStyles = "relative transition-all duration-200 opacity-80 hover:opacity-100 flex items-center gap-2 p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors";
  
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
      
    </div>
  );
}
