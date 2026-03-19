/**
 * Sonner Handler Component
 * 
 * Central handler that:
 * 1. Wraps the sonner library's Toaster
 * 2. Applies design system styling based on version
 * 3. Handles toast type logic and animations
 * 4. Manages loader animation with duration prop
 */

import React, { forwardRef, useMemo } from 'react';
import { Toaster as SonnerToaster } from 'sonner';
import { SonnerProps, SonnerVersion, SonnerType, SONNER_VERSION_CONFIGS } from '../types/components/sonner';

// Dynamic component imports
const versionComponents: Record<string, React.ComponentType<any>> = {
  'default': React.lazy(() => import('../components/default/sonner')),
  'angular-corner': React.lazy(() => import('../components/angular-corner/sonner')),
  'neon-outline': React.lazy(() => import('../components/neon-outline/sonner')),
};

// Fallback loader
const LoadingSkeleton: React.FC = () => (
  <div className="fixed bottom-4 right-4 w-[356px] h-[80px] bg-muted/20 animate-pulse rounded" />
);

/**
 * Calculate toast duration from seconds to milliseconds
 * If duration is provided and type is 'loader', use it for animation
 */
const calculateDuration = (duration?: number, type?: SonnerType): number => {
  if (type === 'loader' && duration) {
    return duration * 1000; // Convert seconds to milliseconds
  }
  return 4000; // Default duration
};

/**
 * Get toast options based on type and variant
 */
const getToastOptions = (
  type?: SonnerType,
  variant?: string,
  duration?: number
): Partial<typeof SonnerToaster> => {
  const toastDuration = calculateDuration(duration, type);

  const baseOptions = {
    duration: toastDuration,
  };

  // Type-specific configurations
  const typeConfigs: Record<SonnerType, any> = {
    default: {
      // Standard toast with full styling
    },
    filled: {
      // Solid background
      className: 'sonner-toast-filled',
    },
    outline: {
      // Border-only
      className: 'sonner-toast-outline',
    },
    minimal: {
      // Text-only, no background
      className: 'sonner-toast-minimal',
    },
    loader: {
      // Progress animation
      className: 'sonner-toast-loader',
      duration: toastDuration,
    },
  };

  return {
    ...baseOptions,
    ...(type && typeConfigs[type]),
  };
};

/**
 * Sonner Handler - Main component that manages toast rendering
 */
export const SonnerHandler = forwardRef<HTMLDivElement, SonnerProps>(
  (
    {
      version = 'default',
      type = 'default',
      variant = 'neutral',
      position = 'bottom-right',
      duration = 4,
      showLoader = true,
      max = 5,
      className = '',
      ...props
    },
    ref
  ) => {
    // Get version config
    const versionConfig = useMemo(() => {
      return SONNER_VERSION_CONFIGS[version as SonnerVersion] || SONNER_VERSION_CONFIGS.default;
    }, [version]);

    // Get toast options
    const toastOptions = useMemo(() => {
      return getToastOptions(type, variant, duration);
    }, [type, variant, duration]);

    // Get the version-specific component
    const VersionComponent = versionComponents[version as SonnerVersion];

    // Fallback if version component not found
    if (!VersionComponent) {
      return (
        <SonnerToaster
          ref={ref}
          position={position as any}
          theme="dark"
          className={`sonner-toaster ${className}`}
          toastOptions={{
            ...toastOptions,
            classNames: {
              toast: 'sonner-toast-fallback',
              title: 'sonner-title',
              description: 'sonner-description',
              actionButton: 'sonner-action-button',
              cancelButton: 'sonner-cancel-button',
              closeButton: 'sonner-close-button',
            },
          }}
          {...props}
        />
      );
    }

    // Render version-specific component with configuration
    return (
      <React.Suspense fallback={<LoadingSkeleton />}>
        <VersionComponent
          ref={ref}
          version={version}
          type={type}
          variant={variant}
          position={position}
          duration={duration}
          showLoader={showLoader}
          max={max}
          versionConfig={versionConfig}
          toastOptions={toastOptions}
          className={className}
          {...props}
        />
      </React.Suspense>
    );
  }
);

SonnerHandler.displayName = 'SonnerHandler';

export default SonnerHandler;
