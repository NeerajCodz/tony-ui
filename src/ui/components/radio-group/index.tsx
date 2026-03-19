/**
 * RadioGroup Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"
import { cn } from '../../../lib/utils';

// --- Types ---
type RadioGroupVersion = 
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

interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  version?: RadioGroupVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: RadioGroupVersion) => {
  switch (version) {
    case 'angular-corner': return import('./radio-group-angular-corner.tsx');
    case 'holo-frame': return import('./radio-group-holo-frame.tsx');
    case 'data-panel': return import('./radio-group-data-panel.tsx');
    case 'circuit-board': return import('./radio-group-circuit-board.tsx');
    case 'quantum-gate': return import('./radio-group-quantum-gate.tsx');
    case 'tactical-hud': return import('./radio-group-tactical-hud.tsx');
    case 'energy-shield': return import('./radio-group-energy-shield.tsx');
    case 'terminal-window': return import('./radio-group-terminal-window.tsx');
    case 'matrix-grid': return import('./radio-group-matrix-grid.tsx');
    case 'neon-outline': return import('./radio-group-neon-outline.tsx');
    default: return import('./radio-group-angular-corner.tsx');
  }
};

// --- Context ---
const VersionContext = createContext<any>(null);

// --- Main Component ---
const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(({ 
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
    return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} />;
  }

  const Component = versionModule.default || versionModule.RadioGroup;

  return (
    <VersionContext.Provider value={versionModule}>
      <Component ref={ref} className={className} variant={variant} type={type} {...props} />
    </VersionContext.Provider>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>>(({ className, ...props }, ref) => {
  const versionModule = useContext(VersionContext);
  
  if (!versionModule) {
     return <RadioGroupPrimitive.Item ref={ref} className={cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)} {...props}><RadioGroupPrimitive.Indicator className="flex items-center justify-center"><Circle className="h-2.5 w-2.5 fill-current text-current" /></RadioGroupPrimitive.Indicator></RadioGroupPrimitive.Item>;
  }

  const Component = versionModule.RadioGroupItem || versionModule.Item;
  return <Component ref={ref} className={className} {...props} />;
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem };
export default RadioGroup;

