'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

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

export const DefaultBadge = forwardRef<HTMLDivElement, BadgeProps>(
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
    const bg = colors?.base || '#64748b';
    const fg = colors?.foreground || '#ffffff';

    const sizeStyles = {
      sm: { fontSize: '0.625rem', padding: '0.125rem 0.375rem' },
      md: { fontSize: '0.75rem', padding: '0.25rem 0.5rem' },
      lg: { fontSize: '0.875rem', padding: '0.375rem 0.75rem' },
    };

    return (
      <div
        ref={ref}
        className={`default-badge ${className}`}
        style={{
          ...styles,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.25rem',
          backgroundColor: bg,
          color: fg,
          borderRadius: '9999px',
          fontWeight: 600,
          ...sizeStyles[size as keyof typeof sizeStyles],
        }}
        {...props}
      >
        {children}
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
            }}
          >
            ×
          </button>
        )}
      </div>
    );
  }
);

DefaultBadge.displayName = 'DefaultBadge';

export default DefaultBadge;
