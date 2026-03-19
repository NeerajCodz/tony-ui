'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  version?: string;
  variant?: string;
  type?: string;
  size?: string;
  colors?: VariantColors;
  styles?: React.CSSProperties;
  config?: any;
  error?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const DefaultInput = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    styles = {}, 
    colors,
    className = '',
    error,
    icon,
    iconPosition = 'left',
    ...props 
  }, ref) => {
    const border = colors?.border || '#475569';
    const glow = colors?.glow || '#94a3b8';

    return (
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {icon && iconPosition === 'left' && (
          <span style={{ position: 'absolute', left: '0.75rem', pointerEvents: 'none' }}>
            {icon}
          </span>
        )}
        <input
          ref={ref}
          className={`default-input ${error ? 'error' : ''} ${className}`}
          style={{
            ...styles,
            width: '100%',
            height: '2.5rem',
            padding: icon ? (iconPosition === 'left' ? '0 0.75rem 0 2.5rem' : '0 2.5rem 0 0.75rem') : '0 0.75rem',
            fontSize: '0.875rem',
            backgroundColor: 'transparent',
            color: 'inherit',
            borderColor: error ? '#ef4444' : border,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '0.375rem',
            outline: 'none',
            transition: 'all 0.2s ease-in-out',
          }}
          {...props}
        />
        {icon && iconPosition === 'right' && (
          <span style={{ position: 'absolute', right: '0.75rem', pointerEvents: 'none' }}>
            {icon}
          </span>
        )}
      </div>
    );
  }
);

DefaultInput.displayName = 'DefaultInput';

export default DefaultInput;
