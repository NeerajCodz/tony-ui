'use client';

import React, { forwardRef } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import type { VariantColors } from '../../types/common';

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

export const DefaultAvatar = forwardRef<HTMLSpanElement, AvatarProps>(
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
    const bg = colors?.base || '#64748b';
    const fg = colors?.foreground || '#ffffff';

    const sizeStyles = {
      xs: { width: '1.5rem', height: '1.5rem', fontSize: '0.5rem' },
      sm: { width: '2rem', height: '2rem', fontSize: '0.625rem' },
      md: { width: '2.5rem', height: '2.5rem', fontSize: '0.875rem' },
      lg: { width: '3rem', height: '3rem', fontSize: '1rem' },
      xl: { width: '4rem', height: '4rem', fontSize: '1.25rem' },
    };

    const currentSize = sizeStyles[size as keyof typeof sizeStyles] || sizeStyles.md;

    return (
      <AvatarPrimitive.Root
        ref={ref}
        className={`default-avatar ${className}`}
        style={{
          ...styles,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: bg,
          ...currentSize,
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
            backgroundColor: bg,
            color: fg,
            fontWeight: 600,
            fontSize: currentSize.fontSize,
          }}
        >
          {fallback || children}
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
    );
  }
);

DefaultAvatar.displayName = 'DefaultAvatar';

export default DefaultAvatar;
