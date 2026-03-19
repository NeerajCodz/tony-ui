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

// Dynamic imports
const versionComponents: Record<string, React.LazyExoticComponent<any>> = {
  'angular-corner': lazy(() => import('../components/input/input-angular-corner.tsx')),
  'holo-frame': lazy(() => import('../components/input/input-holo-frame.tsx')),
  'data-panel': lazy(() => import('../components/input/input-data-panel.tsx')),
  'circuit-board': lazy(() => import('../components/input/input-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('../components/input/input-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('../components/input/input-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('../components/input/input-energy-shield.tsx')),
  'terminal-window': lazy(() => import('../components/input/input-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('../components/input/input-matrix-grid.tsx')),
  'neon-outline': lazy(() => import('../components/input/input-neon-outline.tsx')),
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
