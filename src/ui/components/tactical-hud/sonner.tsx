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

const TacticalHudSonner = forwardRef<HTMLDivElement, SonnerProps>(
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
    const bg = colors?.base || '#1f2937';
    const fg = colors?.foreground || '#ffffff';
    const border = colors?.border || '#374151';
    const glow = colors?.glow || 'rgba(0,0,0,0)';

    return (
      <div ref={ref} className={`sonner-container-tactical-hud ${className}`}>
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
              borderRadius: '0',
              fontFamily: 'inherit',
              boxShadow: `none`,
              clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
              backdropFilter: 'none',
              padding: '1rem',
              
            },
            classNames: {
              toast: 'sonner-toast-tactical-hud',
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

TacticalHudSonner.displayName = 'TacticalHudSonner';

export default TacticalHudSonner;
