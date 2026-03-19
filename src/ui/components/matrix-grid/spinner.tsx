'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';
import { Loader2 } from 'lucide-react';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string;
  variant?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  colors?: VariantColors;
}

const MatrixGridSpinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 'md', colors, className = '', style, ...props }, ref) => {
    const fg = colors?.foreground || 'currentColor';
    const glow = colors?.glow || 'transparent';

    const sizeMap = {
      sm: 16,
      md: 24,
      lg: 32,
      xl: 48,
    };

    const pxSize = sizeMap[size] || 24;

    return (
      <div
        ref={ref}
        className={`spinner-matrix-grid relative inline-flex items-center justify-center ${className}`}
        style={{
          color: fg,
          ...style,
        }}
        {...props}
      >
        <Loader2 
            size={pxSize} 
            className="animate-spin" 
            style={{
                filter: `drop-shadow(0 0 2px ${glow})`
            }}
        />
      </div>
    );
  }
);

MatrixGridSpinner.displayName = 'MatrixGridSpinner';

export default MatrixGridSpinner;
