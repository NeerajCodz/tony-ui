'use client';

import React, { forwardRef } from 'react';
import * as TogglePrimitives from '@radix-ui/react-toggle';
import type { VariantColors } from '../../types/common';

const TechPanelToggle = forwardRef<React.ElementRef<typeof TogglePrimitives.Root>, React.ComponentPropsWithoutRef<typeof TogglePrimitives.Root> & { colors?: VariantColors; version?: string }>(
  ({ className, colors, type, style, ...props }, ref) => {
    let bg = colors?.base || 'transparent';
    let fg = colors?.foreground || 'currentColor';
    let border = colors?.border || 'transparent';

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
    
    return (
      <TogglePrimitives.Root
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground ${className}`}
        style={{
            borderColor: border,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '2px',
            fontFamily: 'inherit',
            clipPath: 'none',
            ...style
        }}
        {...props}
      />
    );
  }
);

TechPanelToggle.displayName = 'TechPanelToggle';

export default TechPanelToggle;
