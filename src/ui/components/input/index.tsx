/**
 * Input Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { cn } from '../../../lib/utils';

// --- Types ---
type InputVersion = 
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

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  version?: InputVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: InputVersion) => {
  switch (version) {
    case 'angular-corner': return import('./input-angular-corner.tsx');
    case 'holo-frame': return import('./input-holo-frame.tsx');
    case 'data-panel': return import('./input-data-panel.tsx');
    case 'circuit-board': return import('./input-circuit-board.tsx');
    case 'quantum-gate': return import('./input-quantum-gate.tsx');
    case 'tactical-hud': return import('./input-tactical-hud.tsx');
    case 'energy-shield': return import('./input-energy-shield.tsx');
    case 'terminal-window': return import('./input-terminal-window.tsx');
    case 'matrix-grid': return import('./input-matrix-grid.tsx');
    case 'neon-outline': return import('./input-neon-outline.tsx');
    default: return import('./input-angular-corner.tsx');
  }
};

// --- Main Component ---
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ 
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
    return (
      <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" disabled />
    );
  }

  const Component = versionModule.default;
  return (
    <Component ref={ref} className={className} variant={variant} type={type} {...props} />
  );
});
Input.displayName = 'Input';

export { Input };
export default Input;

