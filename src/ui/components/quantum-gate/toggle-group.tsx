'use client';

import React, { forwardRef } from 'react';
import * as ToggleGroupPrimitives from '@radix-ui/react-toggle-group';
import type { VariantColors } from '../../types/common';

const QuantumGateToggleGroup = forwardRef<React.ElementRef<typeof ToggleGroupPrimitives.Root>, React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitives.Root> & { colors?: VariantColors; version?: string }>(
  ({ className, colors, style, ...props }, ref) => (
    <ToggleGroupPrimitives.Root
      ref={ref}
      className={`flex items-center justify-center gap-1 ${className}`}
      style={style}
      {...props}
    />
  )
);
QuantumGateToggleGroup.displayName = 'QuantumGateToggleGroup';

const QuantumGateToggleGroupItem = forwardRef<React.ElementRef<typeof ToggleGroupPrimitives.Item>, React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitives.Item> & { colors?: VariantColors; version?: string }>(
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
                borderWidth: '4px',
                borderStyle: 'double',
                borderRadius: '50% / 10%',
                fontFamily: 'inherit',
                clipPath: 'none',
                ...style
            }}
            {...props}
        />
    );
  }
);
QuantumGateToggleGroupItem.displayName = 'QuantumGateToggleGroupItem';

export {
  QuantumGateToggleGroup as ToggleGroup,
  QuantumGateToggleGroupItem as ToggleGroupItem,
};
