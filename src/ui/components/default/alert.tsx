'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string;
  variant?: string;
  type?: string;
  size?: string;
  colors?: VariantColors;
  styles?: React.CSSProperties;
  config?: any;
  icon?: React.ReactNode;
}

export const DefaultAlert = forwardRef<HTMLDivElement, AlertProps>(
  ({ 
    children, 
    styles = {}, 
    colors,
    className = '',
    icon,
    ...props 
  }, ref) => {
    const bg = colors?.base || '#64748b';
    const fg = colors?.foreground || '#ffffff';
    const border = colors?.border || '#475569';

    return (
      <div
        ref={ref}
        role="alert"
        className={`default-alert ${className}`}
        style={{
          ...styles,
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem',
          padding: '1rem',
          backgroundColor: `${bg}15`,
          color: fg,
          borderColor: border,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: '0.5rem',
        }}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <div className="flex-1">{children}</div>
      </div>
    );
  }
);

DefaultAlert.displayName = 'DefaultAlert';

export default DefaultAlert;
