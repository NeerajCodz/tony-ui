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
  const baseStyles = "relative transition-all duration-200 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
  // Label usually doesn't have solid/outline types, mostly just color
  
  return (
    <LabelPrimitive.Root 
      className={cn(baseStyles, className)}
      style={{ color: colors?.text }}
      {...props}
    >
      {children}
      
      <span className="absolute inset-0 rounded-lg pointer-events-none shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]" />
        
    </LabelPrimitive.Root>
  );
}
