import React from 'react';
import { cn } from '@/lib/utils';
import type { InputGroupProps } from '@/ui/types/components/input';

export default function InputGroup({
  type = 'default',
  className,
  variant = 'default',
  colors,
  children,
  ...props
}: InputGroupProps) {

  const getTypeStyles = (type: string | undefined, colors: any) => {
    if (!type || type === 'default') return {};
    if (type === 'inverse') return { 
      backgroundColor: colors?.text || '#000000', 
      color: colors?.background || '#ffffff',
      borderColor: colors?.background || '#ffffff'
    };
    if (type === 'contrast') return { 
      backgroundColor: colors?.background || '#ffffff', 
      color: colors?.text || '#000000', 
      border: `2px solid ${colors?.text || '#000000'}`, 
      fontWeight: 'bold' 
    };
    if (type === 'soft') return { 
      backgroundColor: colors?.accent?.primary ? `${colors.accent.primary}20` : '#00000020', 
      color: colors?.text || '#000000' 
    };
    return {};
  };

  // InputGroup usually doesn't need 'type' (solid/outline) as much as Input does, 
  // but we pass variant colors down if needed.
  // For now, it's a wrapper.
  const baseStyles = "relative backdrop-blur-md bg-opacity-20 border border-white/10 shadow-xl transition-all duration-200 flex items-center w-full";
  
  return (
    <div 
      className={cn(baseStyles, className)}
      style={{  borderColor: colors?.border , ...getTypeStyles(type, colors) }}
      {...props}
    >
      {children}
      
    </div>
  );
}
