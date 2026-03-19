/**
 * Slider Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '../../../lib/utils';

// --- Types ---
type SliderVersion = 
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

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  version?: SliderVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: SliderVersion) => {
  switch (version) {
    case 'angular-corner': return import('./slider-angular-corner.tsx');
    case 'holo-frame': return import('./slider-holo-frame.tsx');
    case 'data-panel': return import('./slider-data-panel.tsx');
    case 'circuit-board': return import('./slider-circuit-board.tsx');
    case 'quantum-gate': return import('./slider-quantum-gate.tsx');
    case 'tactical-hud': return import('./slider-tactical-hud.tsx');
    case 'energy-shield': return import('./slider-energy-shield.tsx');
    case 'terminal-window': return import('./slider-terminal-window.tsx');
    case 'matrix-grid': return import('./slider-matrix-grid.tsx');
    case 'neon-outline': return import('./slider-neon-outline.tsx');
    default: return import('./slider-angular-corner.tsx');
  }
};

// --- Main Component ---
const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(({ 
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
    return <div className={cn("relative flex w-full touch-none select-none items-center", className)} />;
  }
  
  const Component = versionModule.default;
  return (
    <Component ref={ref} className={className} variant={variant} type={type} {...props} />
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
export default Slider;

