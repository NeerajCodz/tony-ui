/**
 * Collapsible Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense, createContext, useContext } from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { cn } from '../../../lib/utils';
import { ChevronsUpDown } from 'lucide-react';

// --- Types ---
type CollapsibleVersion = 
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

interface CollapsibleProps extends React.ComponentProps<typeof CollapsiblePrimitive.Root> {
  version?: CollapsibleVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Context ---
interface CollapsibleContextValue {
  version: CollapsibleVersion;
  variant: CollapsibleProps['variant'];
  type: CollapsibleProps['type'];
}

const CollapsibleContext = createContext<CollapsibleContextValue>({
  version: 'angular-corner',
  variant: 'primary',
  type: 'default',
});

const useCollapsibleContext = () => useContext(CollapsibleContext);

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./collapsible-angular-corner.tsx')),
  'holo-frame': lazy(() => import('./collapsible-holo-frame.tsx')),
  'data-panel': lazy(() => import('./collapsible-data-panel.tsx')),
  'circuit-board': lazy(() => import('./collapsible-circuit-board.tsx')),
  'quantum-gate': lazy(() => import('./collapsible-quantum-gate.tsx')),
  'tactical-hud': lazy(() => import('./collapsible-tactical-hud.tsx')),
  'energy-shield': lazy(() => import('./collapsible-energy-shield.tsx')),
  'terminal-window': lazy(() => import('./collapsible-terminal-window.tsx')),
  'matrix-grid': lazy(() => import('./collapsible-matrix-grid.tsx')),
  'neon-outline': lazy(() => import('./collapsible-neon-outline.tsx')),
};

// --- Main Component ---
const Collapsible = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  children, 
  ...props 
}: CollapsibleProps) => {
  return (
    <CollapsibleContext.Provider value={{ version, variant, type }}>
      <CollapsiblePrimitive.Root {...props}>
        {children}
      </CollapsiblePrimitive.Root>
    </CollapsibleContext.Provider>
  );
};
Collapsible.displayName = 'Collapsible';

// --- Subcomponents ---

const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

const CollapsibleContent = React.forwardRef<React.ElementRef<typeof CollapsiblePrimitive.Content>, React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>>((props, ref) => {
  const { version } = useCollapsibleContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={null}>
      {/* @ts-ignore */}
      <VersionModule.Content ref={ref} {...props} />
    </Suspense>
  );
});
CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName;

// --- Exports ---
const CollapsibleNamespace = Object.assign(Collapsible, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
});

export { CollapsibleNamespace as Collapsible };
export default CollapsibleNamespace;


