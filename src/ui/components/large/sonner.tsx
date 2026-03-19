'use client';

import React, { forwardRef } from 'react';
import { Toaster as SonnerToaster } from 'sonner';
import type { VariantColors } from '../../types/common';

export interface SonnerProps {
  version?: string;
  variant?: string;
  type?: string;
  size?: string;
  colors?: VariantColors;
  styles?: React.CSSProperties;
  config?: any;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  expand?: boolean;
  richColors?: boolean;
  closeButton?: boolean;
  duration?: number;
  showLoader?: boolean;
  className?: string;
}

const LargeSonner = forwardRef<HTMLDivElement, SonnerProps>(
  ({ 
    colors,
    position = 'bottom-right',
    expand = true,
    richColors = true,
    closeButton = true,
    duration = 4000,
    type = 'default',
    showLoader = true,
    className = '',
    ...props 
  }, ref) => {
    let bg = colors?.base || '#1f2937';
    let fg = colors?.foreground || '#ffffff';
    let border = colors?.border || '#374151';
    const glow = colors?.glow || 'rgba(0,0,0,0)';

    // Handle new types
    if (type === 'inverse') {
      const temp = bg;
      bg = fg;
      fg = temp;
      border = bg;
    } else if (type === 'contrast') {
      border = fg;
      bg = colors?.base || '#000000';
      fg = colors?.foreground || '#ffffff';
    } else if (type === 'soft') {
      bg = colors?.muted || bg;
      border = colors?.border ? `${colors.border}40` : border;
    }

    return (
      <div ref={ref} className={`sonner-container-large ${className}`}>
        <SonnerToaster
          position={position}
          expand={expand}
          richColors={richColors}
          closeButton={closeButton}
          theme="dark"
          toastOptions={{
            duration: duration,
            style: {
              backgroundColor: bg,
              color: fg,
              border: `1px solid ${border}`,
              borderRadius: '1rem',
              fontFamily: 'inherit',
              boxShadow: `none`,
              clipPath: 'none',
              backdropFilter: 'none',
              padding: '1rem',
              
            },
            classNames: {
              toast: 'sonner-toast-large',
              title: 'font-semibold text-sm',
              description: 'text-sm opacity-80',
            },
          }}
          {...props}
        />
      </div>
    );
  }
);

LargeSonner.displayName = 'LargeSonner';

export default LargeSonner;
