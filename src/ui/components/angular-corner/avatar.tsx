'use client';

import React, { forwardRef } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import type { VariantColors } from '../../types/common';

const CLIP_PATH = 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)';

export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  version?: string;
  variant?: string;
  type?: string;
  size?: string;
  colors?: VariantColors;
  styles?: React.CSSProperties;
  config?: any;
  src?: string;
  alt?: string;
  fallback?: string;
}

export const AngularCornerAvatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ 
    styles = {}, 
    colors,
    className = '',
    size = 'md',
    src,
    alt,
    fallback,
    children,
    ...props 
  }, ref) => {
    const bg = colors?.base || '#06b6d4';
    const fg = colors?.foreground || '#ffffff';
    const border = colors?.border || '#0891b2';
    const glow = colors?.glow || '#22d3ee';

    const sizeStyles = {
      xs: { width: '1.5rem', height: '1.5rem', fontSize: '0.5rem' },
      sm: { width: '2rem', height: '2rem', fontSize: '0.625rem' },
      md: { width: '2.5rem', height: '2.5rem', fontSize: '0.875rem' },
      lg: { width: '3rem', height: '3rem', fontSize: '1rem' },
      xl: { width: '4rem', height: '4rem', fontSize: '1.25rem' },
    };

    const currentSize = sizeStyles[size as keyof typeof sizeStyles] || sizeStyles.md;

    return (
      <div
        className={`angular-corner-avatar ${className}`}
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
            backgroundColor: border,
            boxShadow: `0 0 10px ${glow}40`,
          }}
        />
        
        {/* Avatar Content */}
        <AvatarPrimitive.Root
          ref={ref}
          style={{
            position: 'absolute',
            inset: '2px',
            clipPath: CLIP_PATH,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
          {...props}
        >
          <AvatarPrimitive.Image
            src={src}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <AvatarPrimitive.Fallback
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0a0a0f',
              color: glow,
              fontWeight: 700,
              fontSize: currentSize.fontSize,
              textShadow: `0 0 5px ${glow}`,
            }}
          >
            {fallback || children}
          </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>
        
        {/* Corner Accents */}
        <div
          style={{
            position: 'absolute',
            top: '-1px',
            left: '-1px',
            width: '8px',
            height: '8px',
            borderLeft: `2px solid ${glow}`,
            borderTop: `2px solid ${glow}`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-1px',
            right: '-1px',
            width: '8px',
            height: '8px',
            borderRight: `2px solid ${glow}`,
            borderBottom: `2px solid ${glow}`,
          }}
        />
      </div>
    );
  }
);

AngularCornerAvatar.displayName = 'AngularCornerAvatar';

export default AngularCornerAvatar;
