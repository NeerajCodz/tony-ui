/**
 * Progress Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from '../../../lib/utils';

// --- Types ---
type ProgressVersion = 
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

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  version?: ProgressVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
}

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: ProgressVersion) => {
  switch (version) {
    case 'angular-corner': return import('./progress-angular-corner.tsx');
    case 'holo-frame': return import('./progress-holo-frame.tsx');
    case 'data-panel': return import('./progress-data-panel.tsx');
    case 'circuit-board': return import('./progress-circuit-board.tsx');
    case 'quantum-gate': return import('./progress-quantum-gate.tsx');
    case 'tactical-hud': return import('./progress-tactical-hud.tsx');
    case 'energy-shield': return import('./progress-energy-shield.tsx');
    case 'terminal-window': return import('./progress-terminal-window.tsx');
    case 'matrix-grid': return import('./progress-matrix-grid.tsx');
    case 'neon-outline': return import('./progress-neon-outline.tsx');
    default: return import('./progress-angular-corner.tsx');
  }
};

// --- Main Component ---
const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(({ 
  version = 'angular-corner', 
  variant = 'primary', 
  className,
  value,
  ...props 
}, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  if (!versionModule) {
    return <ProgressPrimitive.Root className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)} {...props}><ProgressPrimitive.Indicator className="h-full w-full flex-1 bg-primary transition-all" style={{ transform: `translateX(-${100 - (value || 0)}%)` }} /></ProgressPrimitive.Root>;
  }

  const Component = versionModule.default;
  return (
    <Component ref={ref} className={className} variant={variant} value={value} {...props} />
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
export default Progress;

