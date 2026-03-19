'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

const CLIP_PATH = 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)';

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

export const AngularCornerButton = forwardRef<HTMLButtonElement, ButtonProps>(
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
    size = 'md',
    ...props 
  }, ref) => {
    const bg = colors?.base || '#06b6d4';
    const fg = colors?.foreground || '#ffffff';
    const border = colors?.border || '#0891b2';
    const glow = colors?.glow || '#22d3ee';

    const sizeStyles = {
      xs: { height: '1.5rem', fontSize: '0.625rem', padding: '0 0.5rem' },
      sm: { height: '2rem', fontSize: '0.75rem', padding: '0 0.75rem' },
      md: { height: '2.5rem', fontSize: '0.875rem', padding: '0 1rem' },
      lg: { height: '3rem', fontSize: '1rem', padding: '0 1.25rem' },
      xl: { height: '3.5rem', fontSize: '1.125rem', padding: '0 1.5rem' },
    };

    const currentSize = sizeStyles[size as keyof typeof sizeStyles] || sizeStyles.md;

    return (
      <button
        ref={ref}
        className={`angular-corner-button ${className}`}
        disabled={disabled || loading}
        style={{
          ...styles,
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          background: 'transparent',
          border: 'none',
          padding: 0,
          overflow: 'visible',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
          width: fullWidth ? '100%' : 'auto',
          ...currentSize,
        }}
        {...props}
      >
        {/* Background / Border Layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            clipPath: CLIP_PATH,
            backgroundColor: border,
            transition: 'all 0.2s',
            zIndex: 0,
            boxShadow: `0 0 10px ${glow}`,
          }}
        />
        
        {/* Content Layer */}
        <div
          style={{
            position: 'absolute',
            inset: '2px',
            clipPath: CLIP_PATH,
            backgroundColor: bg,
            transition: 'all 0.2s',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          {loading && <span className="animate-spin" style={{ color: fg }}>⟳</span>}
          {leftIcon && !loading && <span style={{ color: fg }}>{leftIcon}</span>}
          <span style={{ color: fg, fontWeight: 600 }}>{children}</span>
          {rightIcon && <span style={{ color: fg }}>{rightIcon}</span>}
        </div>
      </button>
    );
  }
);

AngularCornerButton.displayName = 'AngularCornerButton';

export default AngularCornerButton;
