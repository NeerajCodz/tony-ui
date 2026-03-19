'use client';

import React, { forwardRef } from 'react';
import * as ToggleGroupPrimitives from '@radix-ui/react-toggle-group';
import type { VariantColors } from '../../types/common';

const MatrixGridToggleGroup = forwardRef<React.ElementRef<typeof ToggleGroupPrimitives.Root>, React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitives.Root> & { colors?: VariantColors; version?: string }>(
  ({ className, colors, style, ...props }, ref) => (
    <ToggleGroupPrimitives.Root
      ref={ref}
      className={`flex items-center justify-center gap-1 ${className}`}
      style={style}
      {...props}
    />
  )
);
MatrixGridToggleGroup.displayName = 'MatrixGridToggleGroup';

const MatrixGridToggleGroupItem = forwardRef<React.ElementRef<typeof ToggleGroupPrimitives.Item>, React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitives.Item> & { colors?: VariantColors; version?: string }>(
  ({ className, colors, style, ...props }, ref) => {
    const bg = colors?.base || 'transparent';
    const fg = colors?.foreground || 'currentColor';
    const border = colors?.border || 'transparent';
    const accent = colors?.accent || colors?.base || 'currentColor';

    return (
        <ToggleGroupPrimitives.Item
            ref={ref}
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground ${className}`}
            style={{
                borderColor: border,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '0',
                fontFamily: 'monospace',
                clipPath: 'none',
                ...style
            }}
            {...props}
        />
    );
  }
);
MatrixGridToggleGroupItem.displayName = 'MatrixGridToggleGroupItem';

export {
  MatrixGridToggleGroup as ToggleGroup,
  MatrixGridToggleGroupItem as ToggleGroupItem,
};
