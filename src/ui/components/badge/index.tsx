/**
 * Badge Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '../../../lib/utils';

// --- Types ---
type BadgeVersion = 
  | 'angular-corner'
  | 'holo-frame'
  | 'data-panel'
  | 'circuit-board'
  | 'quantum-gate'
  | 'tactical-hud'
  | 'energy-shield'
  | 'terminal-window'
  | 'matrix-grid'
  | 'neon-outline'
  | 'parallelogram';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: BadgeVersion;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: BadgeVersion) => {
  switch (version) {
    case 'angular-corner': return import('./badge-angular-corner.tsx');
    case 'holo-frame': return import('./badge-holo-frame.tsx');
    case 'data-panel': return import('./badge-data-panel.tsx');
    case 'circuit-board': return import('./badge-circuit-board.tsx');
    case 'quantum-gate': return import('./badge-quantum-gate.tsx');
    case 'tactical-hud': return import('./badge-tactical-hud.tsx');
    case 'energy-shield': return import('./badge-energy-shield.tsx');
    case 'terminal-window': return import('./badge-terminal-window.tsx');
    case 'matrix-grid': return import('./badge-matrix-grid.tsx');
    case 'neon-outline': return import('./badge-neon-outline.tsx');
    case 'parallelogram': return import('./badge-parallelogram.tsx');
    default: return import('./badge-angular-corner.tsx');
  }
};

// --- Main Component ---
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ 
  version = 'angular-corner', 
  className,
  variant,
  ...props 
}, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);
  
  if (!versionModule) {
    return <div className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", className)} {...props} />;
  }

  const Component = versionModule.default;
  return (
    <Component ref={ref} variant={variant} className={className} {...props} />
  );
});
Badge.displayName = "Badge";

export { Badge };
export default Badge;

