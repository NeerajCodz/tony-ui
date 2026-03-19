/**
 * Separator Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '../../../lib/utils';

// --- Types ---
type SeparatorVersion = 
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

interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  version?: SeparatorVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Lazy Loaders ---
const versionComponents: Record<string, any> = {
  'angular-corner': lazy(() => import('./separator-angular-corner.tsx')),
  'holo-frame': lazy(() => import('./separator-holo-frame.tsx')),
  'data-panel': lazy(() => import('./separator-data-panel.tsx')),
  'circuit-board': lazy(() => import('./separator-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('./separator-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('./separator-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('./separator-energy-shield.tsx')),
  'terminal-window': lazy(() => import('./separator-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('./separator-matrix-grid.tsx')),
  'neon-outline': lazy(() => import('./separator-neon-outline.tsx')),
};

// --- Main Component ---
const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, SeparatorProps>(({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  ...props 
}, ref) => {
  const VersionComponent = versionComponents[version];
  
  return (
    <Suspense fallback={<div className="h-px w-full bg-gray-800" />}>
      {/* @ts-ignore */}
      <VersionComponent ref={ref} variant={variant} type={type} {...props} />
    </Suspense>
  );
});
Separator.displayName = 'Separator';

export { Separator };
export default Separator;


