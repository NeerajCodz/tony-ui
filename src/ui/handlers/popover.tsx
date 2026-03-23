/**
 * Popover Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { Version, Variant } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

// Types
export type PopoverVersion = Version;
export type PopoverVariant = Variant;

export interface PopoverProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {
  version?: PopoverVersion;
  variant?: PopoverVariant;
}

// Context
interface PopoverContextValue {
  version: PopoverVersion;
  variant: PopoverVariant;
  colors: ReturnType<typeof getVariantColors>;
  versionModule: any;
}

const PopoverContext = createContext<PopoverContextValue>({
  version: 'angular-corner',
  variant: 'default',
  colors: getVariantColors('default'),
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
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);

  useEffect(() => {
    loadVersionModule(version, 'popover', true).then(setVersionModule).catch(() => setVersionModule(null));
  }, [version]);

  return (
    <PopoverContext.Provider value={{ version, variant, colors, versionModule }}>
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
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className = '', align = 'center', sideOffset = 4, ...props }, ref) => {
  const { versionModule, variant, colors } = usePopoverContext();

  if (versionModule?.PopoverContent) {
    const Component = versionModule.PopoverContent;
    return (
      <PopoverPrimitive.Portal>
        <Component
          ref={ref}
          variant={variant}
          colors={colors}
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
