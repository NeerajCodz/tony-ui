/**
 * Angular Corner Sonner Toast Component
 * Beveled corners with tech-notches design
 */

import React, { forwardRef, useRef } from 'react';
import { Toaster as SonnerToaster } from 'sonner';
import { SonnerProps } from '../../types/components/sonner';
import { sonnerConfig } from '../../config/components/angular-corner/sonner';

const AngularCornerSonner = forwardRef<HTMLDivElement, SonnerProps>(
  (
    {
      version = 'angular-corner',
      type = 'default',
      variant = 'primary',
      position = 'bottom-right',
      duration = 4,
      showLoader = true,
      className = '',
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Get type-specific styles
    const getTypeStyles = () => {
      const baseStyles = sonnerConfig.base;
      const typeStyles = sonnerConfig.types[type] || sonnerConfig.types.default;
      const variantStyles = sonnerConfig.variants[variant] || sonnerConfig.variants.primary;

      return {
        ...baseStyles,
        ...typeStyles,
        ...variantStyles,
      };
    };

    const toastStyles = getTypeStyles();

    return (
      <>
        <div
          ref={containerRef}
          className={`sonner-container-angular-corner ${className}`}
          style={{
            position: 'fixed',
            zIndex: 9999,
          }}
        >
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
              background: linear-gradient(135deg, hsl(var(--primary)), transparent);
              clip-path: polygon(100% 0, 100% 100%, 0 0);
            }

            .sonner-toast-angular-corner::after {
              content: '';
              position: absolute;
              bottom: 0;
              right: -2px;
              width: 12px;
              height: 12px;
              background: linear-gradient(45deg, hsl(var(--primary)), transparent);
              clip-path: polygon(100% 100%, 100% 0, 0 100%);
            }

            ${type === 'loader' ? `
              .sonner-toast-angular-corner.sonner-loader {
                position: relative;
              }
              
              .sonner-toast-angular-corner.sonner-loader::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, 
                  hsl(var(--primary)), 
                  hsl(var(--primary) / 0.5), 
                  transparent);
                animation: sonner-angular-progress ${duration}s linear forwards;
                z-index: 10;
              }
              
              @keyframes sonner-angular-progress {
                from {
                  right: 0;
                  opacity: 1;
                }
                to {
                  right: 100%;
                  opacity: 0;
                }
              }
            ` : ''}

            .sonner-toaster-angular-corner {
              --sonner-border-radius: 0;
            }
          `}</style>

          {/* @ts-ignore */}
          <SonnerToaster
            ref={ref}
            position={position as any}
            theme="dark"
            className="sonner-toaster-angular-corner"
            toastOptions={{
              duration: duration ? duration * 1000 : 4000,
              classNames: {
                toast: `sonner-toast-angular-corner ${type === 'loader' ? 'sonner-loader' : ''}`,
                title: 'sonner-title-angular-corner font-bold text-sm uppercase tracking-wider',
                description: 'sonner-description-angular-corner text-xs',
                actionButton: 'sonner-action-button-angular-corner',
                cancelButton: 'sonner-cancel-button-angular-corner',
                closeButton: 'sonner-close-button-angular-corner',
              },
              style: {
                ...toastStyles,
                minWidth: '320px',
                maxWidth: '450px',
                padding: '1rem 1.25rem',
              },
            }}
            {...props}
          />
        </div>
      </>
    );
  }
);

AngularCornerSonner.displayName = 'AngularCornerSonner';

export default AngularCornerSonner;
