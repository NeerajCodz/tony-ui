/**
 * Button Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import type { Version, Variant } from '../types/common';

// Types
export type ButtonVersion = Version;
export type ButtonVariant = Variant;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  version?: ButtonVersion;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
}

// Dynamic imports for all button versions
const versionComponents: Record<string, React.LazyExoticComponent<any>> = {
  'angular-corner': lazy(() => import('../components/angular-corner/button.tsx')),
  'holo-frame': lazy(() => import('../components/holo-frame/button.tsx')),
  'circuit-board': lazy(() => import('../components/circuit-board/button.tsx')),
  'compact': lazy(() => import('../components/compact/button.tsx')),
  'data-panel': lazy(() => import('../components/data-panel/button.tsx')),
  'default': lazy(() => import('../components/default/button.tsx')),
  'energy-shield': lazy(() => import('../components/energy-shield/button.tsx')),
  'ghost': lazy(() => import('../components/ghost/button.tsx')),
  'large': lazy(() => import('../components/large/button.tsx')),
  'matrix-grid': lazy(() => import('../components/matrix-grid/button.tsx')),
  'neon-outline': lazy(() => import('../components/neon-outline/button.tsx')),
  'pill': lazy(() => import('../components/pill/button.tsx')),
  'quantum-gate': lazy(() => import('../components/quantum-gate/button.tsx')),
  'raised': lazy(() => import('../components/raised/button.tsx')),
  'tactical-hud': lazy(() => import('../components/tactical-hud/button.tsx')),
  'tech-panel': lazy(() => import('../components/tech-panel/button.tsx')),
  'terminal-window': lazy(() => import('../components/terminal-window/button.tsx')),
};

// Fallback button
const FallbackButton: React.FC<ButtonProps> = ({
  children,
  className = '',
  ...props
}) => (
  <button
    className={`px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="inline-block w-24 h-10 bg-muted/20 animate-pulse rounded" />
);

// Main Button Component
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    version = 'default',
    variant = 'default',
    ...props
  }, ref) => {
    const LazyComponent = versionComponents[version];

    if (!LazyComponent) {
      return <FallbackButton ref={ref} {...props} />;
    }

    return (
      <Suspense fallback={<LoadingSkeleton />}>
        <LazyComponent ref={ref} variant={variant} {...props} />
      </Suspense>
    );
  }
);

Button.displayName = 'Button';

export default Button;

