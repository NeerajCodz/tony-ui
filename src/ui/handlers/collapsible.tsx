/**
 * Collapsible Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect } from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import type { Version, Variant } from '../types/common';

// Types
export type CollapsibleVersion = Version;
export type CollapsibleVariant = Variant;

export interface CollapsibleProps extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> {
  version?: CollapsibleVersion;
  variant?: CollapsibleVariant;
}

// Loading helper
const loadVersionModule = async (version: CollapsibleVersion) => {
  switch (version) {
    case 'angular-corner': return import('../components/collapsible/collapsible-angular-corner.tsx');
    case 'holo-frame': return import('../components/collapsible/collapsible-holo-frame.tsx');
    case 'data-panel': return import('../components/collapsible/collapsible-data-panel.tsx');
    case 'circuit-board': return import('../components/collapsible/collapsible-circuit-board.tsx');
    case 'quantum-gate': return import('../components/collapsible/collapsible-quantum-gate.tsx');
    case 'tactical-hud': return import('../components/collapsible/collapsible-tactical-hud.tsx');
    case 'energy-shield': return import('../components/collapsible/collapsible-energy-shield.tsx');
    case 'terminal-window': return import('../components/collapsible/collapsible-terminal-window.tsx');
    case 'matrix-grid': return import('../components/collapsible/collapsible-matrix-grid.tsx');
    case 'neon-outline': return import('../components/collapsible/collapsible-neon-outline.tsx');
    default: return import('../components/collapsible/collapsible-angular-corner.tsx');
  }
};

// Context
interface CollapsibleContextValue {
  version: CollapsibleVersion;
  variant: CollapsibleVariant;
  versionModule: any;
}

const CollapsibleContext = createContext<CollapsibleContextValue>({
  version: 'angular-corner',
  variant: 'default',
  versionModule: null,
});

const useCollapsibleContext = () => useContext(CollapsibleContext);

// Main Component
const CollapsibleRoot = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  CollapsibleProps
>(({
  version = 'angular-corner',
  variant = 'default',
  children,
  ...props
}, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  return (
    <CollapsibleContext.Provider value={{ version, variant, versionModule }}>
      <CollapsiblePrimitive.Root ref={ref} {...props}>
        {children}
      </CollapsiblePrimitive.Root>
    </CollapsibleContext.Provider>
  );
});
CollapsibleRoot.displayName = 'Collapsible';

// Trigger
const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>((props, ref) => {
  const { versionModule, variant } = useCollapsibleContext();

  if (versionModule?.CollapsibleTrigger) {
    const Component = versionModule.CollapsibleTrigger;
    return <Component ref={ref} variant={variant} {...props} />;
  }

  return <CollapsiblePrimitive.Trigger ref={ref} {...props} />;
});
CollapsibleTrigger.displayName = 'CollapsibleTrigger';

// Content
const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>((props, ref) => {
  const { versionModule, variant } = useCollapsibleContext();

  if (versionModule?.CollapsibleContent) {
    const Component = versionModule.CollapsibleContent;
    return <Component ref={ref} variant={variant} {...props} />;
  }

  return <CollapsiblePrimitive.Content ref={ref} {...props} />;
});
CollapsibleContent.displayName = 'CollapsibleContent';

// Composite export
export const Collapsible = Object.assign(CollapsibleRoot, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
});

export { CollapsibleTrigger, CollapsibleContent };
export default Collapsible;
