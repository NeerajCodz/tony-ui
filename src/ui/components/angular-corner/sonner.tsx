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

const AngularCornerSonner = forwardRef<HTMLDivElement, SonnerProps>(
  ({ 
    colors,
    position = 'bottom-right',
    expand = true,
    richColors = false,
    closeButton = true,
    duration = 4000,
    type = 'default',
    showLoader = true,
    className = '',
    ...props 
  }, ref) => {
    const bg = colors?.base || '#06b6d4';
    const fg = colors?.foreground || '#ffffff';
    const border = colors?.border || '#0891b2';
    const glow = colors?.glow || '#22d3ee';

    return (
      <div ref={ref} className={`sonner-container-angular-corner ${className}`}>
        <style>{`
          .sonner-toast-angular-corner {
            clip-path: polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%);
            position: relative;
            overflow: hidden;
          }

          .sonner-toast-angular-corner::before {
            content: '';
            position: absolute;
            top: 0;
            right: -2px;
            width: 12px;
            height: 12px;
            background: linear-gradient(135deg, ${glow}, transparent);
            clip-path: polygon(100% 0, 100% 100%, 0 0);
          }

          .sonner-toast-angular-corner::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: -2px;
            width: 12px;
            height: 12px;
            background: linear-gradient(45deg, ${glow}, transparent);
            clip-path: polygon(100% 100%, 100% 0, 0 100%);
          }

          ${type === 'loader' ? `
            .sonner-toast-angular-corner.sonner-loader::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 3px;
              background: linear-gradient(90deg, ${glow}, ${glow}80, transparent);
              animation: sonner-angular-progress ${duration / 1000}s linear forwards;
              z-index: 10;
            }
            
            @keyframes sonner-angular-progress {
              from { right: 0; opacity: 1; }
              to { right: 100%; opacity: 0; }
            }
          ` : ''}

          .sonner-toaster-angular-corner {
            --sonner-border-radius: 0;
          }
        `}</style>

        <SonnerToaster
          position={position}
          expand={expand}
          richColors={richColors}
          closeButton={closeButton}
          theme="dark"
          className="sonner-toaster-angular-corner"
          toastOptions={{
            duration: duration,
            classNames: {
              toast: `sonner-toast-angular-corner ${type === 'loader' ? 'sonner-loader' : ''}`,
              title: 'font-bold text-sm uppercase tracking-wider',
              description: 'text-xs opacity-80',
            },
            style: {
              backgroundColor: '#0a0a0f',
              color: fg,
              border: `1px solid ${border}`,
              boxShadow: `0 0 15px ${glow}40`,
              minWidth: '320px',
              maxWidth: '450px',
              padding: '1rem 1.25rem',
            },
          }}
          {...props}
        />
      </div>
    );
  }
);

AngularCornerSonner.displayName = 'AngularCornerSonner';

export default AngularCornerSonner;
