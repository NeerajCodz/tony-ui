/**
 * Checkbox Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type { Version, Variant } from '../types/common';

// Types
export type CheckboxVersion = Version;
export type CheckboxVariant = Variant;

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  version?: CheckboxVersion;
  variant?: CheckboxVariant;
  size?: 'sm' | 'md' | 'lg';
}

// Dynamic imports
const versionComponents: Record<string, React.LazyExoticComponent<any>> = {
  'angular-corner': lazy(() => import('../components/checkbox/checkbox-angular-corner.tsx')),
  'holo-frame': lazy(() => import('../components/checkbox/checkbox-holo-frame.tsx')),
  'data-panel': lazy(() => import('../components/checkbox/checkbox-data-panel.tsx')),
  'circuit-board': lazy(() => import('../components/checkbox/checkbox-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('../components/checkbox/checkbox-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('../components/checkbox/checkbox-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('../components/checkbox/checkbox-energy-shield.tsx')),
  'terminal-window': lazy(() => import('../components/checkbox/checkbox-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('../components/checkbox/checkbox-matrix-grid.tsx')),
  'neon-outline': lazy(() => import('../components/checkbox/checkbox-neon-outline.tsx')),
};

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-gray-800/20 rounded w-4 h-4" />
);

// Fallback
const FallbackCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className = '', ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={`peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground ${className}`}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5L4 8L9 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
FallbackCheckbox.displayName = 'FallbackCheckbox';

// Main Component
export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({
  version = 'angular-corner',
  variant = 'default',
  size = 'md',
  ...props
}, ref) => {
  const LazyComponent = versionComponents[version];

  if (!LazyComponent) {
    return <FallbackCheckbox ref={ref} {...props} />;
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyComponent ref={ref} variant={variant} size={size} {...props} />
    </Suspense>
  );
});
Checkbox.displayName = 'Checkbox';

export default Checkbox;
