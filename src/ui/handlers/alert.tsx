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

// Dynamic imports - Version-First Architecture
const versionComponents: Record<string, React.LazyExoticComponent<any>> = {
  'angular-corner': lazy(() => import('../components/angular-corner/alert.tsx')),
  'holo-frame': lazy(() => import('../components/holo-frame/alert.tsx')),
  'data-panel': lazy(() => import('../components/data-panel/alert.tsx')),
  'circuit-board': lazy(() => import('../components/circuit-board/alert.tsx')),
  'quantum-gate': lazy(() => import('../components/quantum-gate/alert.tsx')),
  'tactical-hud': lazy(() => import('../components/tactical-hud/alert.tsx')),
  'energy-shield': lazy(() => import('../components/energy-shield/alert.tsx')),
  'terminal-window': lazy(() => import('../components/terminal-window/alert.tsx')),
  'matrix-grid': lazy(() => import('../components/matrix-grid/alert.tsx')),
  'neon-outline': lazy(() => import('../components/neon-outline/alert.tsx')),
  'glass-morphism': lazy(() => import('../components/glass-morphism/alert.tsx')),
  'tech-panel': lazy(() => import('../components/tech-panel/alert.tsx')),
  'default': lazy(() => import('../components/default/alert.tsx')),
  'border': lazy(() => import('../components/border/alert.tsx')),
  'compact': lazy(() => import('../components/compact/alert.tsx')),
  'ghost': lazy(() => import('../components/ghost/alert.tsx')),
  'large': lazy(() => import('../components/large/alert.tsx')),
  'padding': lazy(() => import('../components/padding/alert.tsx')),
  'raised': lazy(() => import('../components/raised/alert.tsx')),
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
