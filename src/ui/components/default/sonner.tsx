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

const DefaultSonner = forwardRef<HTMLDivElement, SonnerProps>(
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

    return (
      <div ref={ref} className={`sonner-container-default ${className}`}>
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
              borderRadius: '0.5rem',
              padding: '1rem',
            },
            classNames: {
              toast: 'sonner-toast-default',
              title: 'font-semibold text-sm',
              description: 'text-sm opacity-80',
            },
          }}
          {...props}
        />
        
        {type === 'loader' && showLoader && (
          <style>{`
            .sonner-toast-default {
              position: relative;
              overflow: hidden;
            }
            .sonner-toast-default::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 2px;
              background: linear-gradient(90deg, ${colors?.glow || '#60a5fa'}, transparent);
              animation: sonner-progress ${duration / 1000}s linear forwards;
            }
            @keyframes sonner-progress {
              from { right: 0; }
              to { right: 100%; }
            }
          `}</style>
        )}
      </div>
    );
  }
);

DefaultSonner.displayName = 'DefaultSonner';

export default DefaultSonner;
