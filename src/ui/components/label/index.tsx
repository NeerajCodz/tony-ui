/**
 * Label Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense } from 'react';
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '../../../lib/utils';

// --- Types ---
type LabelVersion = 
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

interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  version?: LabelVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./label-angular-corner.tsx')),
  'holo-frame': lazy(() => import('./label-holo-frame.tsx')),
  'data-panel': lazy(() => import('./label-data-panel.tsx')),
  'circuit-board': lazy(() => import('./label-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('./label-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('./label-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('./label-energy-shield.tsx')),
  'terminal-window': lazy(() => import('./label-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('./label-matrix-grid.tsx')),
  'neon-outline': lazy(() => import('./label-neon-outline.tsx')),
};

// --- Main Component ---
const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  className,
  ...props 
}, ref) => {
  const VersionModule = versionComponents[version];
  
  return (
    <Suspense fallback={<LabelPrimitive.Root className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)} {...props} />}>
      {/* @ts-ignore */}
      <VersionModule.default ref={ref} className={className} {...props} />
    </Suspense>
  );
});
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
export default Label;


