/**
 * Skeleton Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense } from 'react';
import { cn } from '../../../lib/utils';

// --- Types ---
type SkeletonVersion = 
  | 'angular-corner'
  | 'holo-frame'
  | 'data-panel'
  | 'circuit-board'
  | 'quantum-gate'
  | 'tactical-hud'
  | 'energy-shield'
  | 'terminal-window'
  | 'matrix-grid'
  | 'neon-outline';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: SkeletonVersion;
}

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./skeleton-angular-corner.tsx')),
  'holo-frame': lazy(() => import('./skeleton-holo-frame.tsx')),
  'data-panel': lazy(() => import('./skeleton-data-panel.tsx')),
  'circuit-board': lazy(() => import('./skeleton-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('./skeleton-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('./skeleton-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('./skeleton-energy-shield.tsx')),
  'terminal-window': lazy(() => import('./skeleton-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('./skeleton-matrix-grid.tsx')),
  'neon-outline': lazy(() => import('./skeleton-neon-outline.tsx')),
};

// --- Main Component ---
const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(({ 
  version = 'angular-corner', 
  className,
  ...props 
}, ref) => {
  const VersionModule = versionComponents[version];
  
  return (
    <Suspense fallback={<div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />}>
      {/* @ts-ignore */}
      <VersionModule.default ref={ref} className={className} {...props} />
    </Suspense>
  );
});
Skeleton.displayName = "Skeleton";

export { Skeleton };
export default Skeleton;


