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
    className = '',
    ...props 
  }, ref) => {
    const border = colors?.border || '#475569';

    return (
      <div
        ref={ref}
        className={`default-card ${className}`}
        style={{
          ...styles,
          borderRadius: '0.5rem',
          border: `1px solid ${border}`,
          backgroundColor: '#0f0f14',
          overflow: 'hidden',
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
