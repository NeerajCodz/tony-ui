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
  'angular-corner': lazy(() => import('../components/skeleton/skeleton-angular-corner.tsx')),
  'holo-frame': lazy(() => import('../components/skeleton/skeleton-holo-frame.tsx')),
  'data-panel': lazy(() => import('../components/skeleton/skeleton-data-panel.tsx')),
  'circuit-board': lazy(() => import('../components/skeleton/skeleton-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('../components/skeleton/skeleton-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('../components/skeleton/skeleton-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('../components/skeleton/skeleton-energy-shield.tsx')),
  'terminal-window': lazy(() => import('../components/skeleton/skeleton-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('../components/skeleton/skeleton-matrix-grid.tsx')),
  'neon-outline': lazy(() => import('../components/skeleton/skeleton-neon-outline.tsx')),
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
