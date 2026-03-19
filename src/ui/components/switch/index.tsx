/**
 * Switch Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '../../../lib/utils';

// --- Types ---
type SwitchVersion = 
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

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  version?: SwitchVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: SwitchVersion) => {
  switch (version) {
    case 'angular-corner': return import('./switch-angular-corner.tsx');
    case 'holo-frame': return import('./switch-holo-frame.tsx');
    case 'data-panel': return import('./switch-data-panel.tsx');
    case 'circuit-board': return import('./switch-circuit-board.tsx');
    case 'quantum-gate': return import('./switch-quantum-gate.tsx');
    case 'tactical-hud': return import('./switch-tactical-hud.tsx');
    case 'energy-shield': return import('./switch-energy-shield.tsx');
    case 'terminal-window': return import('./switch-terminal-window.tsx');
    case 'matrix-grid': return import('./switch-matrix-grid.tsx');
    case 'neon': return import('./switch-neon.tsx');
    default: return import('./switch-angular-corner.tsx');
  }
};

// --- Main Component ---
const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  className,
  ...props 
}, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  if (!versionModule) {
    return <div className={cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className)} />;
  }

  const Component = versionModule.default;
  return (
    <Component ref={ref} className={className} variant={variant} type={type} {...props} />
  );
});
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
export default Switch;

