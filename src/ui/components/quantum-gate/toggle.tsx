'use client';

import React, { forwardRef } from 'react';
import * as TogglePrimitives from '@radix-ui/react-toggle';
import type { VariantColors } from '../../types/common';

const QuantumGateToggle = forwardRef<React.ElementRef<typeof TogglePrimitives.Root>, React.ComponentPropsWithoutRef<typeof TogglePrimitives.Root> & { colors?: VariantColors; version?: string }>(
  ({ className, colors, style, ...props }, ref) => {
    const bg = colors?.base || 'transparent';
    const fg = colors?.foreground || 'currentColor';
    const border = colors?.border || 'transparent';
    
    return (
      <TogglePrimitives.Root
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

QuantumGateToggle.displayName = 'QuantumGateToggle';

export default QuantumGateToggle;
