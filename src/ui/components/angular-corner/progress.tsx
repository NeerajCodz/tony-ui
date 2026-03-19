'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

const CLIP_PATH = 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)';

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

export const AngularCornerProgress = forwardRef<HTMLDivElement, ProgressProps>(
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
    const bg = colors?.base || '#06b6d4';
    const border = colors?.border || '#0891b2';
    const glow = colors?.glow || '#22d3ee';
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    const sizeStyles = {
      sm: { height: '0.5rem' },
      md: { height: '0.75rem' },
      lg: { height: '1rem' },
    };

    const currentSize = sizeStyles[size as keyof typeof sizeStyles] || sizeStyles.md;

    return (
      <div
        ref={ref}
        className={`angular-corner-progress ${className}`}
        style={{
          ...styles,
          position: 'relative',
          width: '100%',
          ...currentSize,
        }}
        {...props}
      >
        {/* Border Layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            clipPath: CLIP_PATH,
            backgroundColor: border,
          }}
        />
        
        {/* Track */}
        <div
          style={{
            position: 'absolute',
            inset: '1px',
            clipPath: CLIP_PATH,
            backgroundColor: '#0a0a0f',
            overflow: 'hidden',
          }}
        >
          {/* Fill */}
          <div
            style={{
              height: '100%',
              width: `${percentage}%`,
              backgroundColor: bg,
              boxShadow: `0 0 10px ${glow}`,
              transition: animated ? 'width 0.3s ease-in-out' : 'none',
              position: 'relative',
            }}
          >
            {/* Scan Line Animation */}
            {animated && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '20px',
                  height: '100%',
                  background: `linear-gradient(90deg, transparent, ${glow})`,
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              />
            )}
          </div>
        </div>
        
        {/* Value Display */}
        {showValue && (
          <span
            style={{
              position: 'absolute',
              top: '50%',
              right: '8px',
              transform: 'translateY(-50%)',
              fontSize: '0.625rem',
              fontWeight: 700,
              color: glow,
              textShadow: `0 0 5px ${glow}`,
            }}
          >
            {Math.round(percentage)}%
          </span>
        )}
        
        {/* Corner Accents */}
        <div
          style={{
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            width: '6px',
            height: '6px',
            borderLeft: `1px solid ${glow}`,
            borderTop: `1px solid ${glow}`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-2px',
            right: '-2px',
            width: '6px',
            height: '6px',
            borderRight: `1px solid ${glow}`,
            borderBottom: `1px solid ${glow}`,
          }}
        />
      </div>
    );
  }
);

AngularCornerProgress.displayName = 'AngularCornerProgress';

export default AngularCornerProgress;
