import React from 'react';
import { cn } from '@/lib/utils';
import type { InputGroupProps } from '@/ui/types/components/input';

export default function InputGroup({
  className,
  variant = 'default',
  colors,
  children,
  ...props
}: InputGroupProps) {
  // InputGroup usually doesn't need 'type' (solid/outline) as much as Input does, 
  // but we pass variant colors down if needed.
  // For now, it's a wrapper.
  const baseStyles = "relative font-mono transition-all duration-200 bg-grid-pattern flex items-center w-full";
  
  return (
    <div 
      className={cn(baseStyles, className)}
      style={{ borderColor: colors?.border }}
      {...props}
    >
      {children}
      
    </div>
  );
}
