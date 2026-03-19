/**
 * Checkbox Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '../../../lib/utils';
import { Check } from 'lucide-react';

// --- Types ---
type CheckboxVersion = 
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

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  version?: CheckboxVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: CheckboxVersion) => {
  switch (version) {
    case 'angular-corner': return import('./checkbox-angular-corner.tsx');
    case 'holo-frame': return import('./checkbox-holo-frame.tsx');
    case 'data-panel': return import('./checkbox-data-panel.tsx');
    case 'circuit-board': return import('./checkbox-circuit-board.tsx');
    case 'quantum-gate': return import('./checkbox-quantum-gate.tsx');
    case 'tactical-hud': return import('./checkbox-tactical-hud.tsx');
    case 'energy-shield': return import('./checkbox-energy-shield.tsx');
    case 'terminal-window': return import('./checkbox-terminal-window.tsx');
    case 'matrix-grid': return import('./checkbox-matrix-grid.tsx');
    case 'neon-outline': return import('./checkbox-neon-outline.tsx');
    default: return import('./checkbox-angular-corner.tsx');
  }
};

// --- Main Component ---
const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(({ 
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
    return <div className={cn("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className)} />;
  }

  const Component = versionModule.default;
  return (
    <Component ref={ref} className={className} variant={variant} type={type} {...props} />
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
export default Checkbox;

