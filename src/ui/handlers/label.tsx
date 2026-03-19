/**
 * Label Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import type { Version, Variant } from '../types/common';

// Types
export type LabelVersion = Version;
export type LabelVariant = Variant;

export interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  version?: LabelVersion;
  variant?: LabelVariant;
  required?: boolean;
  error?: boolean;
}

// Dynamic imports
const versionComponents: Record<string, React.LazyExoticComponent<any>> = {
  'angular-corner': lazy(() => import('../components/label/label-angular-corner.tsx')),
  'holo-frame': lazy(() => import('../components/label/label-holo-frame.tsx')),
  'data-panel': lazy(() => import('../components/label/label-data-panel.tsx')),
  'circuit-board': lazy(() => import('../components/label/label-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('../components/label/label-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('../components/label/label-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('../components/label/label-energy-shield.tsx')),
  'terminal-window': lazy(() => import('../components/label/label-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('../components/label/label-matrix-grid.tsx')),
  'neon-outline': lazy(() => import('../components/label/label-neon-outline.tsx')),
};

// Fallback
const FallbackLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className = '', required, error, children, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${error ? 'text-destructive' : ''} ${className}`}
    {...props}
  >
    {children}
    {required && <span className="text-destructive ml-1">*</span>}
  </LabelPrimitive.Root>
));
FallbackLabel.displayName = 'FallbackLabel';

// Main Label Component
export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({
  version = 'angular-corner',
  variant = 'default',
  ...props
}, ref) => {
  const LazyComponent = versionComponents[version];

  if (!LazyComponent) {
    return <FallbackLabel ref={ref} {...props} />;
  }

  return (
    <Suspense fallback={null}>
      <LazyComponent ref={ref} variant={variant} {...props} />
    </Suspense>
  );
});
Label.displayName = 'Label';

export default Label;
