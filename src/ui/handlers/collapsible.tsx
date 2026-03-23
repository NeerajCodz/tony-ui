/**
 * Collapsible Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect } from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import type { Version, Variant } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

// Types
export type CollapsibleVersion = Version;
export type CollapsibleVariant = Variant;

export interface CollapsibleProps extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> {
  version?: CollapsibleVersion;
  variant?: CollapsibleVariant;
}

// Context
interface CollapsibleContextValue {
  version: CollapsibleVersion;
  variant: CollapsibleVariant;
  colors: ReturnType<typeof getVariantColors>;
  versionModule: any;
}

const CollapsibleContext = createContext<CollapsibleContextValue>({
  version: 'default',
  variant: 'default',
  colors: getVariantColors('default'),
  versionModule: null,
});

const useCollapsibleContext = () => useContext(CollapsibleContext);

// Main Component
const CollapsibleRoot = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Root>,
  CollapsibleProps
>(({
  version = 'default',
  variant = 'default',
  children,
  ...props
}, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);

  useEffect(() => {
    loadVersionModule(version, 'collapsible').then(setVersionModule).catch(() => setVersionModule(null));
  }, [version]);

  return (
    <CollapsibleContext.Provider value={{ version, variant, colors, versionModule }}>
      <CollapsiblePrimitive.Root ref={ref} {...props}>
        {children}
      </CollapsiblePrimitive.Root>
    </CollapsibleContext.Provider>
  );
});
CollapsibleRoot.displayName = 'Collapsible';

// Trigger
const CollapsibleTrigger = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>((props, ref) => {
  const { versionModule, variant, colors } = useCollapsibleContext();

  if (versionModule?.CollapsibleTrigger) {
    const Component = versionModule.CollapsibleTrigger;
    return <Component ref={ref} variant={variant} colors={colors} {...props} />;
  }

  return <CollapsiblePrimitive.Trigger ref={ref} {...props} />;
});
CollapsibleTrigger.displayName = 'CollapsibleTrigger';

// Content
const CollapsibleContent = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>((props, ref) => {
  const { versionModule, variant, colors } = useCollapsibleContext();

  if (versionModule?.CollapsibleContent) {
    const Component = versionModule.CollapsibleContent;
    return <Component ref={ref} variant={variant} colors={colors} {...props} />;
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
