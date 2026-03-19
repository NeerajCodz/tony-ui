import React from 'react';
import { cn } from '@/lib/utils';
// import type { IconButtonProps } from '@/ui/types/components/icon-button'; // Doesn't exist yet

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: any;
  type?: any;
  colors?: any;
}

export default function IconButton({
  className,
  variant = 'default',
  type = 'default',
  colors,
  children,
  ...props
}: IconButtonProps) {
  const baseStyles = "relative font-mono uppercase tracking-wider transition-all duration-200 clip-path-angular p-2 inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  
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
    <button 
      className={cn(baseStyles, className)}
      style={typeStyles[type as keyof typeof typeStyles]}
      {...props}
    >
      {children}
      
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l" style={{ borderColor: colors.accent.secondary }} />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r" style={{ borderColor: colors.accent.secondary }} />
        
    </button>
  );
}
