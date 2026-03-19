'use client';

import React, { forwardRef } from 'react';
import * as ToggleGroupPrimitives from '@radix-ui/react-toggle-group';
import type { VariantColors } from '../../types/common';

const CircuitBoardToggleGroup = forwardRef<React.ElementRef<typeof ToggleGroupPrimitives.Root>, React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitives.Root> & { colors?: VariantColors; version?: string }>(
  ({ className, colors, type, style, ...props }, ref) => (
    <ToggleGroupPrimitives.Root
      ref={ref}
      className={`flex items-center justify-center gap-1 ${className}`}
      style={style}
      {...props}
    />
  )
);
CircuitBoardToggleGroup.displayName = 'CircuitBoardToggleGroup';

const CircuitBoardToggleGroupItem = forwardRef<React.ElementRef<typeof ToggleGroupPrimitives.Item>, React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitives.Item> & { colors?: VariantColors; version?: string }>(
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
    const accent = colors?.accent || colors?.base || 'currentColor';

    return (
        <ToggleGroupPrimitives.Item
            ref={ref}
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground ${className}`}
            style={{
                borderColor: border,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '4px',
                fontFamily: 'inherit',
                clipPath: 'none',
                ...style
            }}
            {...props}
        />
    );
  }
);
CircuitBoardToggleGroupItem.displayName = 'CircuitBoardToggleGroupItem';

export {
  CircuitBoardToggleGroup as ToggleGroup,
  CircuitBoardToggleGroupItem as ToggleGroupItem,
};
