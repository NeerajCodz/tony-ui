'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string;
  variant?: string;
  type?: string;
  size?: string;
  colors?: VariantColors;
  styles?: React.CSSProperties;
  config?: any;
  value?: number;
  max?: number;
  showValue?: boolean;
  animated?: boolean;
}

export const DefaultProgress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ 
    styles = {}, 
    colors,
    className = '',
    value = 0,
    max = 100,
    showValue,
    animated,
    size = 'md',
    ...props 
  }, ref) => {
    const bg = colors?.base || '#64748b';
    const border = colors?.border || '#475569';
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    const sizeStyles = {
      sm: { height: '0.5rem' },
      md: { height: '0.75rem' },
      lg: { height: '1rem' },
    };

    return (
      <div
        ref={ref}
        className={`default-progress ${className}`}
        style={{
          ...styles,
          position: 'relative',
          width: '100%',
          backgroundColor: `${border}40`,
          borderRadius: '9999px',
          overflow: 'hidden',
          ...sizeStyles[size as keyof typeof sizeStyles],
        }}
        {...props}
      >
        <div
          style={{
            height: '100%',
            width: `${percentage}%`,
            backgroundColor: bg,
            borderRadius: '9999px',
            transition: animated ? 'width 0.3s ease-in-out' : 'none',
          }}
        />
        {showValue && (
          <span
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '0.625rem',
              fontWeight: 600,
            }}
          >
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    );
  }
);

DefaultProgress.displayName = 'DefaultProgress';

export default DefaultProgress;
