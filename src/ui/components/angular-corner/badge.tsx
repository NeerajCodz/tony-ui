'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

const CLIP_PATH = 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string;
  variant?: string;
  type?: string;
  size?: string;
  colors?: VariantColors;
  styles?: React.CSSProperties;
  config?: any;
  removable?: boolean;
  onRemove?: () => void;
}

export const AngularCornerBadge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ 
    children, 
    styles = {}, 
    colors,
    className = '',
    size = 'md',
    removable,
    onRemove,
    ...props 
  }, ref) => {
    const bg = colors?.base || '#06b6d4';
    const fg = colors?.foreground || '#ffffff';
    const border = colors?.border || '#0891b2';
    const glow = colors?.glow || '#22d3ee';

    const sizeStyles = {
      sm: { fontSize: '0.625rem', padding: '0.125rem 0.5rem', height: '1.25rem' },
      md: { fontSize: '0.75rem', padding: '0.25rem 0.625rem', height: '1.5rem' },
      lg: { fontSize: '0.875rem', padding: '0.375rem 0.875rem', height: '1.875rem' },
    };

    const currentSize = sizeStyles[size as keyof typeof sizeStyles] || sizeStyles.md;

    return (
      <div
        ref={ref}
        className={`angular-corner-badge ${className}`}
        style={{
          ...styles,
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.25rem',
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
            boxShadow: `0 0 8px ${glow}60`,
          }}
        />
        
        {/* Content Layer */}
        <div
          style={{
            position: 'relative',
            clipPath: CLIP_PATH,
            backgroundColor: bg,
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: currentSize.padding,
            height: '100%',
            margin: '1px',
          }}
        >
          <span style={{ color: fg, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {children}
          </span>
          {removable && (
            <button
              onClick={onRemove}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                color: fg,
                opacity: 0.7,
                fontSize: '1em',
                lineHeight: 1,
              }}
            >
              ×
            </button>
          )}
        </div>
      </div>
    );
  }
);

AngularCornerBadge.displayName = 'AngularCornerBadge';

export default AngularCornerBadge;
