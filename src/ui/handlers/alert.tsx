/**
 * Alert Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import type { Version, Variant } from '../types/common';

// Types
export type AlertVersion = Version;
export type AlertVariant = Variant;

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: AlertVersion;
  variant?: AlertVariant;
  icon?: React.ReactNode;
}

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  version?: AlertVersion;
  variant?: AlertVariant;
}

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  version?: AlertVersion;
  variant?: AlertVariant;
}

// Dynamic imports
const versionComponents: Record<string, React.LazyExoticComponent<any>> = {
  'angular-corner': lazy(() => import('../components/alert/alert-angular-corner.tsx')),
  'holo-frame': lazy(() => import('../components/alert/alert-holo-frame.tsx')),
  'data-panel': lazy(() => import('../components/alert/alert-data-panel.tsx')),
  'circuit-board': lazy(() => import('../components/alert/alert-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('../components/alert/alert-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('../components/alert/alert-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('../components/alert/alert-energy-shield.tsx')),
  'terminal-window': lazy(() => import('../components/alert/alert-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('../components/alert/alert-matrix-grid.tsx')),
  'neon-outline': lazy(() => import('../components/alert/alert-neon-outline.tsx')),
};

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-gray-800/20 rounded p-4 h-20" />
);

// Fallback
const FallbackAlert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ children, className = '', variant = 'default', ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={`relative w-full rounded-lg border p-4 ${className}`}
      style={{
        borderColor: 'hsl(var(--border-base))',
        backgroundColor: 'hsl(var(--background-secondary) / 0.5)',
      }}
      {...props}
    >
      {children}
    </div>
  )
);
FallbackAlert.displayName = 'FallbackAlert';

// Main Alert Component
const AlertBase = React.forwardRef<HTMLDivElement, AlertProps>(({
  version = 'angular-corner',
  variant = 'default',
  children,
  ...props
}, ref) => {
  const LazyComponent = versionComponents[version];

  if (!LazyComponent) {
    return <FallbackAlert ref={ref} variant={variant} {...props}>{children}</FallbackAlert>;
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyComponent ref={ref} variant={variant} {...props}>
        {children}
      </LazyComponent>
    </Suspense>
  );
});
AlertBase.displayName = 'Alert';

// Alert Title
const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(({
  className = '',
  children,
  ...props
}, ref) => (
  <h5
    ref={ref}
    className={`mb-1 font-medium leading-none tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h5>
));
AlertTitle.displayName = 'AlertTitle';

// Alert Description
const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(({
  className = '',
  children,
  ...props
}, ref) => (
  <p
    ref={ref}
    className={`text-sm opacity-90 ${className}`}
    {...props}
  >
    {children}
  </p>
));
AlertDescription.displayName = 'AlertDescription';

// Composite export
export const Alert = Object.assign(AlertBase, {
  Title: AlertTitle,
  Description: AlertDescription,
});

export { AlertTitle, AlertDescription };
export default Alert;
