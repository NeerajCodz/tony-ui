/**
 * Input Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import type { Version, Variant } from '../types/common';

// Types
export type InputVersion = Version;
export type InputVariant = Variant;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  version?: InputVersion;
  variant?: InputVariant;
  error?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

// Dynamic imports - Version-First Architecture
const versionComponents: Record<string, React.LazyExoticComponent<any>> = {
  'angular-corner': lazy(() => import('../components/angular-corner/input.tsx')),
  'holo-frame': lazy(() => import('../components/holo-frame/input.tsx')),
  'data-panel': lazy(() => import('../components/data-panel/input.tsx')),
  'circuit-board': lazy(() => import('../components/circuit-board/input.tsx')),
  'quantum-gate': lazy(() => import('../components/quantum-gate/input.tsx')),
  'tactical-hud': lazy(() => import('../components/tactical-hud/input.tsx')),
  'energy-shield': lazy(() => import('../components/energy-shield/input.tsx')),
  'terminal-window': lazy(() => import('../components/terminal-window/input.tsx')),
  'matrix-grid': lazy(() => import('../components/matrix-grid/input.tsx')),
  'neon-outline': lazy(() => import('../components/neon-outline/input.tsx')),
  'glass-morphism': lazy(() => import('../components/glass-morphism/input.tsx')),
  'tech-panel': lazy(() => import('../components/tech-panel/input.tsx')),
  'default': lazy(() => import('../components/default/input.tsx')),
  'border': lazy(() => import('../components/border/input.tsx')),
  'compact': lazy(() => import('../components/compact/input.tsx')),
  'ghost': lazy(() => import('../components/ghost/input.tsx')),
  'large': lazy(() => import('../components/large/input.tsx')),
  'padding': lazy(() => import('../components/padding/input.tsx')),
  'raised': lazy(() => import('../components/raised/input.tsx')),
};

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-gray-800/20 rounded h-10 w-full" />
);

// Fallback
const FallbackInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, icon, iconPosition = 'left', type, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${error ? 'border-destructive' : ''} ${className}`}
      {...props}
    />
  )
);
FallbackInput.displayName = 'FallbackInput';

// Main Input Component
export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  version = 'angular-corner',
  variant = 'default',
  ...props
}, ref) => {
  const LazyComponent = versionComponents[version];

  if (!LazyComponent) {
    return <FallbackInput ref={ref} {...props} />;
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyComponent ref={ref} variant={variant} {...props} />
    </Suspense>
  );
});
Input.displayName = 'Input';

export default Input;
