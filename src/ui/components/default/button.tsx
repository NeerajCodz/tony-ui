'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  version?: string;
  variant?: string;
  type?: string;
  size?: string;
  colors?: VariantColors;
  styles?: React.CSSProperties;
  config?: any;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const DefaultButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    styles = {}, 
    colors,
    className = '',
    disabled,
    loading,
    fullWidth,
    leftIcon,
    rightIcon,
    ...props 
  }, ref) => {
    const bg = colors?.base || '#64748b';
    const fg = colors?.foreground || '#ffffff';
    const border = colors?.border || '#475569';

    return (
      <button
        ref={ref}
        className={`default-button ${className}`}
        disabled={disabled || loading}
        style={{
          ...styles,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          backgroundColor: bg,
          color: fg,
          borderColor: border,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: '0.375rem',
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          fontWeight: 500,
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
          transition: 'all 0.2s ease-in-out',
          width: fullWidth ? '100%' : 'auto',
        }}
        {...props}
      >
        {loading && <span className="animate-spin">⟳</span>}
        {leftIcon && !loading && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </button>
    );
  }
);

DefaultButton.displayName = 'DefaultButton';

export default DefaultButton;
