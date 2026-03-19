'use client';

import React, { forwardRef } from 'react';
import * as TooltipPrimitives from '@radix-ui/react-tooltip';
import type { VariantColors } from '../../types/common';

const NeonOutlineTooltipProvider = TooltipPrimitives.Provider;

const NeonOutlineTooltip = TooltipPrimitives.Root;

const NeonOutlineTooltipTrigger = TooltipPrimitives.Trigger;

const NeonOutlineTooltipContent = forwardRef<React.ElementRef<typeof TooltipPrimitives.Content>, React.ComponentPropsWithoutRef<typeof TooltipPrimitives.Content> & { colors?: VariantColors; version?: string }>(
  ({ className, colors, type, style, sideOffset = 4, ...props }, ref) => {
    let bg = colors?.base || '#1f2937';

    if (type === 'inverse') {
      const temp = bg;
      bg = fg;
      fg = temp;
      border = bg;
    } else if (type === 'contrast') {
      border = fg;
      bg = colors?.base || '#000000';
      fg = colors?.foreground || '#ffffff';
    } else if (type === 'soft') {
      bg = colors?.muted || bg;
      border = colors?.border ? `${colors.border}40` : border;
    }
    let fg = colors?.foreground || '#ffffff';
    let border = colors?.border || '#374151';
    const glow = colors?.glow || 'transparent';

    return (
        <TooltipPrimitives.Content
            ref={ref}
            sideOffset={sideOffset}
            className={`z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${className}`}
            style={{
                backgroundColor: bg,
                color: fg,
                borderColor: border,
                borderWidth: '2px',
                borderStyle: 'solid',
                borderRadius: '0.5rem',
                fontFamily: 'inherit',
                boxShadow: `0 0 5px ${glow}, 0 0 10px ${glow}`,
                clipPath: 'none',
                ...style
            }}
            {...props}
        />
    );
  }
);
NeonOutlineTooltipContent.displayName = 'NeonOutlineTooltipContent';

export {
  NeonOutlineTooltip as Tooltip,
  NeonOutlineTooltipTrigger as TooltipTrigger,
  NeonOutlineTooltipContent as TooltipContent,
  NeonOutlineTooltipProvider as TooltipProvider,
};
