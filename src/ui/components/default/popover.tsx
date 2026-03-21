'use client';

import React, { forwardRef } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '@/lib/utils';
import { VariantColors } from '@/ui/types/common';

import { PopoverBase, PopoverContentBase, PopoverTriggerBase } from '../_base/popover';

const getStyles = (type?: string, colors?: VariantColors) => {
  if (!type || !colors) return {};
  
  switch (type) {
    case 'inverse':
      return {
        backgroundColor: colors.text,
        color: colors.background,
        border: `1px solid ${colors.text}`
      };
    case 'contrast':
      return {
        backgroundColor: colors.accent?.primary || colors.text,
        color: '#000000',
        fontWeight: 'bold',
        border: `1px solid ${colors.text}`
      };
    case 'soft':
      return {
        backgroundColor: colors.accent?.rgb ? `rgba(${colors?.accent?.rgb}, 0.1)` : (colors.accent?.primary ? `color-mix(in srgb, ${colors?.accent?.primary} 10%, transparent)` : 'rgba(0,0,0,0.1)'),
        color: colors.accent?.primary || colors.text,
        border: 'none'
      };
    default:
      return {};
  }
};


const PopoverRoot = PopoverBase;

const PopoverTrigger = PopoverTriggerBase;

const PopoverContent = forwardRef<React.ElementRef<typeof PopoverContentBase>, React.ComponentPropsWithoutRef<typeof PopoverContentBase> & { version?: string, variant?: string, type?: string, colors?: VariantColors }>(
  ({ className, align = "center", sideOffset = 4, version, variant, type, colors, ...props }, ref) => (
    <PopoverPrimitive.Portal>
      <PopoverContentBase
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props} style={{ ...getStyles(type, colors), ...(props.style as any) }}
      />
    </PopoverPrimitive.Portal>
  )
);
PopoverContent.displayName = PopoverContentBase.displayName;

export { PopoverRoot, PopoverTrigger, PopoverContent };
