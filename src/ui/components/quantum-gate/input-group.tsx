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
  const baseStyles = "relative transition-all duration-200 clip-path-hexagon flex items-center w-full";
  
  return (
    <div 
      className={cn(baseStyles, className)}
      style={{ borderColor: colors?.border }}
      {...props}
    >
      {children}
      
      <span className="absolute inset-0 border border-current opacity-20 rotate-45" />
        
    </div>
  );
}
