import React from 'react';
import { cn } from '@/lib/utils';
import type { LabelProps } from '@/ui/types/components/inputs';
import * as LabelPrimitive from "@radix-ui/react-label"

export default function Label({
  className,
  variant = 'default',
  // type prop is not standard on Label but we can support it for consistency
  colors,
  children,
  ...props
}: LabelProps & { type?: string; colors?: any }) {

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

  const baseStyles = "relative border-2 transition-all duration-200 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
  // Label usually doesn't have solid/outline types, mostly just color
  
  return (
    <LabelPrimitive.Root 
      className={cn(baseStyles, className)}
      style={{  color: colors?.text , ...getTypeStyles(type, colors) }}
      {...props}
    >
      {children}
      
    </LabelPrimitive.Root>
  );
}
