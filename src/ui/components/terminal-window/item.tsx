import React from 'react';
import { cn } from '@/lib/utils';
// import type { ItemProps } from '@/ui/types/components/misc'; 
// Temporarily using any/local interface as misc.ts has restrictive version types
export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: string;
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
  const baseStyles = "relative font-mono border-2 transition-all duration-200 flex items-center gap-2 p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors";
  
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
 ,
    inverse: {
      backgroundColor: colors?.text || colors?.foreground || '#000000',
      color: colors?.background || '#ffffff',
      border: `1px solid ${colors?.background || '#ffffff'}`
    },
    contrast: {
      backgroundColor: colors?.background || '#ffffff',
      color: colors?.text || colors?.foreground || '#000000',
      border: `2px solid ${colors?.text || colors?.foreground || '#000000'}`,
      fontWeight: 'bold'
    },
    soft: {
      backgroundColor: colors?.accent?.primary ? `${colors.accent.primary}20` : '#00000020',
      color: colors?.text || '#000000',
      border: colors?.accent?.primary ? `1px solid ${colors.accent.primary}30` : 'none'
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
