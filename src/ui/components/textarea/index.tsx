/**
 * Textarea Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '../../../lib/utils';

// --- Types ---
type TextareaVersion = 
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

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  version?: TextareaVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: TextareaVersion) => {
  switch (version) {
    case 'angular-corner': return import('./textarea-angular-corner.tsx');
    case 'holo-frame': return import('./textarea-holo-frame.tsx');
    case 'data-panel': return import('./textarea-data-panel.tsx');
    case 'circuit-board': return import('./textarea-circuit-board.tsx');
    case 'quantum-gate': return import('./textarea-quantum-gate.tsx');
    case 'tactical-hud': return import('./textarea-tactical-hud.tsx');
    case 'energy-shield': return import('./textarea-energy-shield.tsx');
    case 'terminal-window': return import('./textarea-terminal-window.tsx');
    case 'matrix-grid': return import('./textarea-matrix-grid.tsx');
    case 'neon-outline': return import('./textarea-neon-outline.tsx');
    default: return import('./textarea-angular-corner.tsx');
  }
};

// --- Main Component ---
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ 
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
    return <textarea className={cn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)} disabled />;
  }
  
  const Component = versionModule.default;
  return (
    <Component ref={ref} className={className} variant={variant} type={type} {...props} />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
export default Textarea;

