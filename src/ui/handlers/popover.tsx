/**
 * Popover Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { Version, Variant } from '../types/common';

// Types
export type PopoverVersion = Version;
export type PopoverVariant = Variant;

export interface PopoverProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {
  version?: PopoverVersion;
  variant?: PopoverVariant;
}

// Loading helper
const loadVersionModule = async (version: PopoverVersion) => {
  switch (version) {
    case 'angular-corner': return import('../components/popover/popover-angular-corner.tsx');
    case 'holo-frame': return import('../components/popover/popover-holo-frame.tsx');
    case 'data-panel': return import('../components/popover/popover-data-panel.tsx');
    case 'circuit-board': return import('../components/popover/popover-circuit-board.tsx');
    case 'quantum-gate': return import('../components/popover/popover-quantum-gate.tsx');
    case 'tactical-hud': return import('../components/popover/popover-tactical-hud.tsx');
    case 'energy-shield': return import('../components/popover/popover-energy-shield.tsx');
    case 'terminal-window': return import('../components/popover/popover-terminal-window.tsx');
    case 'matrix-grid': return import('../components/popover/popover-matrix-grid.tsx');
    case 'neon-outline': return import('../components/popover/popover-neon-outline.tsx');
    default: return import('../components/popover/popover-angular-corner.tsx');
  }
};

// Context
interface PopoverContextValue {
  version: PopoverVersion;
  variant: PopoverVariant;
  versionModule: any;
}

const PopoverContext = createContext<PopoverContextValue>({
  version: 'angular-corner',
  variant: 'default',
  versionModule: null,
});

const usePopoverContext = () => useContext(PopoverContext);

// Main Component
const PopoverRoot: React.FC<PopoverProps> = ({
  version = 'angular-corner',
  variant = 'default',
  children,
  ...props
}) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  return (
    <PopoverContext.Provider value={{ version, variant, versionModule }}>
      <PopoverPrimitive.Root {...props}>
        {children}
      </PopoverPrimitive.Root>
    </PopoverContext.Provider>
  );
};

// Subcomponents
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className = '', align = 'center', sideOffset = 4, ...props }, ref) => {
  const { versionModule, variant } = usePopoverContext();

  if (versionModule?.PopoverContent) {
    const Component = versionModule.PopoverContent;
    return (
      <PopoverPrimitive.Portal>
        <Component
          ref={ref}
          variant={variant}
          className={className}
          align={align}
          sideOffset={sideOffset}
          {...props}
        />
      </PopoverPrimitive.Portal>
    );
  }

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={`z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${className}`}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
});
PopoverContent.displayName = 'PopoverContent';

// Composite export
export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Anchor: PopoverAnchor,
  Content: PopoverContent,
});

export { PopoverTrigger, PopoverAnchor, PopoverContent };
export default Popover;
