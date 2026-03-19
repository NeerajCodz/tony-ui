'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';
import { Loader2 } from 'lucide-react';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string;
  type?: string;
  variant?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  colors?: VariantColors;
}

const TacticalHudSpinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 'md', colors, type, className = '', style, ...props }, ref) => {
    let fg = colors?.foreground || 'currentColor';
    const glow = colors?.glow || 'transparent';

    if (type === 'inverse') {
      fg = colors?.base || 'currentColor';
    } else if (type === 'contrast') {
      fg = colors?.foreground || '#ffffff';
    } else if (type === 'soft') {
      fg = colors?.muted || fg;
    }

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
        className={`spinner-tactical-hud relative inline-flex items-center justify-center ${className}`}
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

TacticalHudSpinner.displayName = 'TacticalHudSpinner';

export default TacticalHudSpinner;
