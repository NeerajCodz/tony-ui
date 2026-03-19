'use client';

import React, { forwardRef, useState } from 'react';
import type { VariantColors } from '../../types/common';

const CLIP_PATH = 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)';

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

export const AngularCornerInput = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    styles = {}, 
    colors,
    className = '',
    error,
    icon,
    iconPosition = 'left',
    size = 'md',
    ...props 
  }, ref) => {
    const [focused, setFocused] = useState(false);
    
    const bg = colors?.base || '#06b6d4';
    const fg = colors?.foreground || '#ffffff';
    const border = colors?.border || '#0891b2';
    const glow = colors?.glow || '#22d3ee';

    const sizeStyles = {
      sm: { height: '2rem', fontSize: '0.75rem', padding: '0 0.75rem' },
      md: { height: '2.5rem', fontSize: '0.875rem', padding: '0 1rem' },
      lg: { height: '3rem', fontSize: '1rem', padding: '0 1.25rem' },
    };

    const currentSize = sizeStyles[size as keyof typeof sizeStyles] || sizeStyles.md;

    return (
      <div
        className={`angular-corner-input-wrapper ${className}`}
        style={{
          ...styles,
          position: 'relative',
          ...currentSize,
        }}
      >
        {/* Border Layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            clipPath: CLIP_PATH,
            backgroundColor: error ? '#ef4444' : (focused ? glow : border),
            boxShadow: focused ? `0 0 15px ${error ? '#ef444460' : `${glow}60`}` : 'none',
            transition: 'all 0.2s ease-in-out',
          }}
        />
        
        {/* Input Container */}
        <div
          style={{
            position: 'absolute',
            inset: '1px',
            clipPath: CLIP_PATH,
            backgroundColor: '#0a0a0f',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {icon && iconPosition === 'left' && (
            <span style={{ paddingLeft: '0.75rem', color: bg, flexShrink: 0 }}>
              {icon}
            </span>
          )}
          <input
            ref={ref}
            className="angular-corner-input"
            onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
            onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
            style={{
              width: '100%',
              height: '100%',
              padding: currentSize.padding,
              paddingLeft: icon && iconPosition === 'left' ? '0.5rem' : currentSize.padding,
              paddingRight: icon && iconPosition === 'right' ? '0.5rem' : currentSize.padding,
              fontSize: currentSize.fontSize,
              backgroundColor: 'transparent',
              color: fg,
              border: 'none',
              outline: 'none',
              fontFamily: 'inherit',
            }}
            {...props}
          />
          {icon && iconPosition === 'right' && (
            <span style={{ paddingRight: '0.75rem', color: bg, flexShrink: 0 }}>
              {icon}
            </span>
          )}
        </div>
        
        {/* Corner Accents */}
        <div
          style={{
            position: 'absolute',
            top: '-1px',
            left: '-1px',
            width: '8px',
            height: '8px',
            borderLeft: `2px solid ${focused ? glow : border}`,
            borderTop: `2px solid ${focused ? glow : border}`,
            transition: 'all 0.2s ease-in-out',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-1px',
            right: '-1px',
            width: '8px',
            height: '8px',
            borderRight: `2px solid ${focused ? glow : border}`,
            borderBottom: `2px solid ${focused ? glow : border}`,
            transition: 'all 0.2s ease-in-out',
          }}
        />
      </div>
    );
  }
);

AngularCornerInput.displayName = 'AngularCornerInput';

export default AngularCornerInput;
