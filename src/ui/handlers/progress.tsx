/**
 * Progress Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import type { Version, Variant } from '../types/common';

// Types
export type ProgressVersion = Version;
export type ProgressVariant = Variant;

export interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  version?: ProgressVersion;
  variant?: ProgressVariant;
  value?: number;
  max?: number;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

// Dynamic imports
const versionComponents: Record<string, React.LazyExoticComponent<any>> = {
  'angular-corner': lazy(() => import('../components/progress/progress-angular-corner.tsx')),
  'holo-frame': lazy(() => import('../components/progress/progress-holo-frame.tsx')),
  'data-panel': lazy(() => import('../components/progress/progress-data-panel.tsx')),
  'circuit-board': lazy(() => import('../components/progress/progress-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('../components/progress/progress-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('../components/progress/progress-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('../components/progress/progress-energy-shield.tsx')),
  'terminal-window': lazy(() => import('../components/progress/progress-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('../components/progress/progress-matrix-grid.tsx')),
  'neon-outline': lazy(() => import('../components/progress/progress-neon-outline.tsx')),
};

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-gray-800/20 rounded-full h-4 w-full" />
);

// Fallback
const FallbackProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className = '', value = 0, max = 100, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={`relative h-4 w-full overflow-hidden rounded-full bg-secondary ${className}`}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value / max) * 100}%)` }}
    />
  </ProgressPrimitive.Root>
));
FallbackProgress.displayName = 'FallbackProgress';

// Main Progress Component
export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({
  version = 'angular-corner',
  variant = 'default',
  ...props
}, ref) => {
  const LazyComponent = versionComponents[version];

  if (!LazyComponent) {
    return <FallbackProgress ref={ref} {...props} />;
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyComponent ref={ref} variant={variant} {...props} />
    </Suspense>
  );
});
Progress.displayName = 'Progress';

export default Progress;
