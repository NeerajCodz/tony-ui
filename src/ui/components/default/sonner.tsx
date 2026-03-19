/**
 * Default Sonner Toast Component
 * Standard system toast with medium padding and border
 */

import React, { forwardRef, useEffect, useRef } from 'react';
import { Toaster as SonnerToaster } from 'sonner';
import { SonnerProps } from '../../types/components/sonner';
import { sonnerConfig } from '../../config/components/default/sonner';

const DefaultSonner = forwardRef<HTMLDivElement, SonnerProps>(
  (
    {
      version = 'default',
      type = 'default',
      variant = 'neutral',
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
      const variantStyles = sonnerConfig.variants[variant] || sonnerConfig.variants.neutral;

      return {
        ...baseStyles,
        ...typeStyles,
        ...variantStyles,
      };
    };

    // Get loader animation for loader type
    const getLoaderAnimation = () => {
      if (type !== 'loader') return null;

      const animationDuration = duration || 4;
      return `
        @keyframes sonner-loader-progress {
          from {
            width: 100%;
            opacity: 1;
          }
          to {
            width: 0%;
            opacity: 0;
          }
        }
        
        .sonner-loader-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, hsl(var(--primary)), transparent);
          animation: sonner-loader-progress ${animationDuration}s linear forwards;
        }
      `;
    };

    const toastStyles = getTypeStyles();

    return (
      <>
        {type === 'loader' && (
          <style>{getLoaderAnimation()}</style>
        )}
        <div
          ref={containerRef}
          className={`sonner-container-default ${className}`}
          style={{
            position: 'fixed',
            zIndex: 9999,
          }}
        >
          {/* @ts-ignore */}
          <SonnerToaster
            ref={ref}
            position={position as any}
            theme="dark"
            className="sonner-toaster-default"
            toastOptions={{
              duration: duration ? duration * 1000 : 4000,
              classNames: {
                toast: `sonner-toast-default ${type === 'loader' ? 'relative overflow-hidden' : ''}`,
                title: 'sonner-title-default',
                description: 'sonner-description-default',
                actionButton: 'sonner-action-button-default',
                cancelButton: 'sonner-cancel-button-default',
                closeButton: 'sonner-close-button-default',
              },
              style: {
                ...toastStyles,
                minWidth: '300px',
                maxWidth: '400px',
              },
            }}
            {...props}
          />

          {/* Loader bar overlay for loader type */}
          {type === 'loader' && showLoader && (
            <style>{`
              .sonner-toast-default.sonner-toast-loader {
                position: relative;
              }
              .sonner-toast-default.sonner-toast-loader::before {
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
                animation: sonner-progress-bar ${duration}s linear forwards;
              }
              
              @keyframes sonner-progress-bar {
                from {
                  right: 0;
                }
                to {
                  right: 100%;
                }
              }
            `}</style>
          )}
        </div>
      </>
    );
  }
);

DefaultSonner.displayName = 'DefaultSonner';

export default DefaultSonner;
