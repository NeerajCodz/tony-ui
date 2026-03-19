/**
 * Spinner Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Loader2 } from "lucide-react"
import { cn } from '../../../lib/utils';

// --- Types ---
type SpinnerVersion = 
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

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: SpinnerVersion;
  size?: 'sm' | 'md' | 'lg';
}

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: SpinnerVersion) => {
  switch (version) {
    case 'angular-corner': return import('./spinner-angular-corner.tsx');
    case 'holo-frame': return import('./spinner-holo-frame.tsx');
    case 'data-panel': return import('./spinner-data-panel.tsx');
    case 'circuit-board': return import('./spinner-circuit-board.tsx');
    case 'quantum-gate': return import('./spinner-quantum-gate.tsx');
    case 'tactical-hud': return import('./spinner-tactical-hud.tsx');
    case 'energy-shield': return import('./spinner-energy-shield.tsx');
    case 'terminal-window': return import('./spinner-terminal-window.tsx');
    case 'matrix-grid': return import('./spinner-matrix-grid.tsx');
    case 'neon-outline': return import('./spinner-neon-outline.tsx');
    default: return import('./spinner-angular-corner.tsx');
  }
};

// --- Main Component ---
const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(({ 
  version = 'angular-corner', 
  size = 'md',
  className,
  ...props 
}, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);
  
  if (!versionModule) {
    return <Loader2 className={cn("animate-spin text-primary", className)} />;
  }

  const Component = versionModule.default;
  return (
    <Component ref={ref} size={size} className={className} {...props} />
  );
});
Spinner.displayName = "Spinner";

export { Spinner };
export default Spinner;

