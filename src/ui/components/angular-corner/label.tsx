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
  const baseStyles = "relative font-mono uppercase tracking-wider transition-all duration-200 clip-path-angular text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
  // Label usually doesn't have solid/outline types, mostly just color
  
  return (
    <LabelPrimitive.Root 
      className={cn(baseStyles, className)}
      style={{ color: colors?.text }}
      {...props}
    >
      {children}
      
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l" style={{ borderColor: colors.accent.secondary }} />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r" style={{ borderColor: colors.accent.secondary }} />
        
    </LabelPrimitive.Root>
  );
}
