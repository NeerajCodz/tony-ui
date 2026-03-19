'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string;
  variant?: string;
  type?: string;
  size?: string;
  colors?: VariantColors;
  styles?: React.CSSProperties;
  config?: any;
}

export const DefaultCard = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    children, 
    styles = {}, 
    colors,
    type = 'default',
    className = '',
    ...props 
  }, ref) => {
    const border = colors?.border || '#475569';
    const base = colors?.base || '#06b6d4';

    const getTypeStyles = (): React.CSSProperties => {
      const baseStyles: React.CSSProperties = {
        borderRadius: '0.5rem',
        backgroundColor: '#0f0f14',
        overflow: 'hidden',
      };

      switch (type) {
        case 'outline':
          return {
            ...baseStyles,
            border: `2px solid ${border}`,
          };
        case 'solid':
          return {
            ...baseStyles,
            border: `1px solid ${border}`,
            backgroundColor: 'rgba(10, 14, 20, 0.95)',
          };
        case 'ghost':
          return {
            ...baseStyles,
            backgroundColor: 'transparent',
            border: `1px solid ${border}40`,
          };
        case 'inverse':
          return {
            ...baseStyles,
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid black',
          };
        case 'contrast':
          return {
            ...baseStyles,
            backgroundColor: 'black',
            border: '2px solid white',
            color: 'white',
            boxShadow: '4px 4px 0px white',
          };
        case 'soft':
          return {
            ...baseStyles,
            backgroundColor: `${base}20`,
            border: `1px solid ${base}30`,
            boxShadow: 'none',
          };
        case 'default':
        default:
          return {
            ...baseStyles,
            border: `1px solid ${border}`,
          };
      }
    };

    return (
      <div
        ref={ref}
        className={`default-card ${className}`}
        style={{
          ...getTypeStyles(),
          ...styles,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

DefaultCard.displayName = 'DefaultCard';

// Card Header
export const DefaultCardHeader = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', colors, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`default-card-header ${className}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.375rem',
          padding: '1.5rem',
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DefaultCardHeader.displayName = 'DefaultCardHeader';

// Card Title
export const DefaultCardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement> & { colors?: VariantColors }>(
  ({ children, className = '', colors, ...props }, ref) => {
    const fg = colors?.foreground || '#ffffff';
    
    return (
      <h3
        ref={ref}
        className={`default-card-title ${className}`}
        style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          color: fg,
          lineHeight: 1.2,
        }}
        {...props}
      >
        {children}
      </h3>
    );
  }
);
DefaultCardTitle.displayName = 'DefaultCardTitle';

// Card Description
export const DefaultCardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & { colors?: VariantColors }>(
  ({ children, className = '', colors, ...props }, ref) => {
    const fg = colors?.foreground || '#ffffff';
    
    return (
      <p
        ref={ref}
        className={`default-card-description ${className}`}
        style={{
          fontSize: '0.875rem',
          color: fg,
          opacity: 0.7,
        }}
        {...props}
      >
        {children}
      </p>
    );
  }
);
DefaultCardDescription.displayName = 'DefaultCardDescription';

// Card Content
export const DefaultCardContent = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`default-card-content ${className}`}
        style={{
          padding: '0 1.5rem 1.5rem',
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DefaultCardContent.displayName = 'DefaultCardContent';

// Card Footer
export const DefaultCardFooter = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', colors, ...props }, ref) => {
    const border = colors?.border || '#475569';
    
    return (
      <div
        ref={ref}
        className={`default-card-footer ${className}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '1rem 1.5rem',
          borderTop: `1px solid ${border}`,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DefaultCardFooter.displayName = 'DefaultCardFooter';

export default DefaultCard;
