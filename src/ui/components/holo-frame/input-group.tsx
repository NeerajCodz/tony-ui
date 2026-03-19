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
  const baseStyles = "relative border transition-all duration-200 shadow-[0_0_5px_rgba(0,0,0,0.2)] flex items-center w-full";
  
  return (
    <div 
      className={cn(baseStyles, className)}
      style={{ borderColor: colors?.border }}
      {...props}
    >
      {children}
      
      <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-50" />
      <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-50" />
        
    </div>
  );
}
