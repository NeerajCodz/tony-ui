'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

const CLIP_PATH = 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)';

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

export const AngularCornerAlert = forwardRef<HTMLDivElement, AlertProps>(
  ({ 
    children, 
    styles = {}, 
    colors,
    className = '',
    icon,
    ...props 
  }, ref) => {
    const bg = colors?.base || '#06b6d4';
    const fg = colors?.foreground || '#ffffff';
    const border = colors?.border || '#0891b2';
    const glow = colors?.glow || '#22d3ee';

    return (
      <div
        ref={ref}
        role="alert"
        className={`angular-corner-alert ${className}`}
        style={{
          ...styles,
          position: 'relative',
          overflow: 'visible',
        }}
        {...props}
      >
        {/* Border Layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            clipPath: CLIP_PATH,
            backgroundColor: border,
            boxShadow: `0 0 15px ${glow}40`,
          }}
        />
        
        {/* Content Layer */}
        <div
          style={{
            position: 'relative',
            clipPath: CLIP_PATH,
            backgroundColor: `${bg}15`,
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            margin: '1px',
          }}
        >
          {icon && (
            <span style={{ color: bg, flexShrink: 0, marginTop: '2px' }}>
              {icon}
            </span>
          )}
          <div style={{ color: fg, flex: 1 }}>{children}</div>
        </div>
        
        {/* Corner Accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '12px',
            height: '12px',
            borderLeft: `2px solid ${glow}`,
            borderTop: `2px solid ${glow}`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '12px',
            height: '12px',
            borderRight: `2px solid ${glow}`,
            borderBottom: `2px solid ${glow}`,
          }}
        />
      </div>
    );
  }
);

AngularCornerAlert.displayName = 'AngularCornerAlert';

export default AngularCornerAlert;
