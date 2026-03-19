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
  const baseStyles = "relative font-mono tracking-tight transition-all duration-200 border-x flex items-center w-full";
  
  return (
    <div 
      className={cn(baseStyles, className)}
      style={{ borderColor: colors?.border }}
      {...props}
    >
      {children}
      
      <span className="absolute top-0 left-0 w-1 h-1 bg-current" />
      <span className="absolute top-0 right-0 w-1 h-1 bg-current" />
      <span className="absolute bottom-0 left-0 w-1 h-1 bg-current" />
      <span className="absolute bottom-0 right-0 w-1 h-1 bg-current" />
        
    </div>
  );
}
