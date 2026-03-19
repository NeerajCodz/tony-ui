/**
 * EmptyState Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense } from 'react';
import { cn } from '../../../lib/utils';
import { FolderOpen } from "lucide-react";

// --- Types ---
type EmptyStateVersion = 
  | 'angular-corner'
  | 'holo-frame'
  | 'data-panel'
  | 'circuit-board'
  | 'quantum-gate'
  | 'tactical-hud'
  | 'energy-shield'
  | 'terminal-window'
  | 'matrix-grid'
  | 'neon';

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: EmptyStateVersion;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  icon?: React.ReactNode;
}

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./empty-state-angular-corner.tsx')),
  'holo-frame': lazy(() => import('./empty-state-holo-frame.tsx')),
  'data-panel': lazy(() => import('./empty-state-data-panel.tsx')),
  'circuit-board': lazy(() => import('./empty-state-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('./empty-state-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('./empty-state-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('./empty-state-energy-shield.tsx')),
  'terminal-window': lazy(() => import('./empty-state-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('./empty-state-matrix-grid.tsx')),
  'neon': lazy(() => import('./empty-state-neon.tsx')),
};

// --- Main Component ---
const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(({ 
  version = 'angular-corner', 
  className,
  title = "No Data Found",
  description = "There are no items to display at this time.",
  action,
  icon,
  ...props 
}, ref) => {
  const VersionModule = versionComponents[version];
  
  return (
    <Suspense fallback={<div className={cn("flex flex-col items-center justify-center p-8 text-center", className)} {...props}><FolderOpen className="h-10 w-10 text-muted-foreground mb-4" /><h3 className="text-lg font-semibold">{title}</h3><p className="text-sm text-muted-foreground mt-2 mb-4">{description}</p>{action}</div>}>
      {/* @ts-ignore */}
      <VersionModule.default ref={ref} title={title} description={description} action={action} icon={icon} className={className} {...props} />
    </Suspense>
  );
});
EmptyState.displayName = "EmptyState";

export { EmptyState };
export default EmptyState;


