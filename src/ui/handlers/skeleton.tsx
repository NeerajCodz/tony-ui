/**
 * Skeleton Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import type { Version, Variant } from '../types/common';

// Types
export type SkeletonVersion = Version;
export type SkeletonVariant = Variant;

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: SkeletonVersion;
  variant?: SkeletonVariant;
  animated?: boolean;
}

// Dynamic imports
const versionComponents: Record<string, React.LazyExoticComponent<any>> = {
  'angular-corner': lazy(() => import('../components/angular-corner/skeleton.tsx')),
  'holo-frame': lazy(() => import('../components/holo-frame/skeleton.tsx')),
  'data-panel': lazy(() => import('../components/data-panel/skeleton.tsx')),
  'circuit-board': lazy(() => import('../components/circuit-board/skeleton.tsx')),
  'quantum-gate': lazy(() => import('../components/quantum-gate/skeleton.tsx')),
  'tactical-hud': lazy(() => import('../components/tactical-hud/skeleton.tsx')),
  'energy-shield': lazy(() => import('../components/energy-shield/skeleton.tsx')),
  'terminal-window': lazy(() => import('../components/terminal-window/skeleton.tsx')),
  'matrix-grid': lazy(() => import('../components/matrix-grid/skeleton.tsx')),
  'neon-outline': lazy(() => import('../components/neon-outline/skeleton.tsx')),
  'compact': lazy(() => import('../components/compact/skeleton.tsx')),
  'default': lazy(() => import('../components/default/skeleton.tsx')),
  'ghost': lazy(() => import('../components/ghost/skeleton.tsx')),
};

// Fallback
const FallbackSkeleton: React.FC<SkeletonProps> = ({
  className = '',
  animated = true,
  ...props
}) => (
  <div
    className={`${animated ? 'animate-pulse' : ''} rounded-md bg-muted ${className}`}
    {...props}
  />
);

// Main Skeleton Component
export const Skeleton: React.FC<SkeletonProps> = ({
  version = 'angular-corner',
  variant = 'default',
  ...props
}) => {
  const LazyComponent = versionComponents[version];

  if (!LazyComponent) {
    return <FallbackSkeleton {...props} />;
  }

  return (
    <Suspense fallback={<FallbackSkeleton {...props} />}>
      <LazyComponent variant={variant} {...props} />
    </Suspense>
  );
};

Skeleton.displayName = 'Skeleton';

export default Skeleton;
