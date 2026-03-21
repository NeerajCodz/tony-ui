'use client';

/**
 * Drawer Component Handler - Dynamic Loading
 * NO hardcoded colors, styles, or variants
 */

import React, { lazy, Suspense, useMemo, useState, useEffect } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import type { DrawerProps, DrawerVersion, VersionDrawerComponents } from '../types/components/drawer.js';
import type { Version, Variant, VariantColors } from '../types/common';
import { getVariantColors } from '../core/handler-factory';

// Dynamic component loader - NO hardcoded versions
const loadDrawerComponent = (version: Version) => {
  return lazy(() =>
    import(`../components/${version}/drawer.tsx`)
      .catch(() => import(`../components/default/drawer.tsx`))
      .catch(() => ({
        default: {
          Overlay: () => <div />,
          Content: React.forwardRef<HTMLDivElement, any>(({ children, className = '' }, ref) => (
            <div ref={ref} className={className}>{children}</div>
          )),
          Title: React.forwardRef<HTMLHeadingElement, any>(({ children, className = '' }, ref) => (
            <h2 ref={ref} className={className}>{children}</h2>
          )),
          Description: React.forwardRef<HTMLParagraphElement, any>(({ children, className = '' }, ref) => (
            <p ref={ref} className={className}>{children}</p>
          )),
        }
      }))
  );
};

const resolveDrawerConfigModule = (module: unknown) => {
  if (!module || typeof module !== 'object') {
    return null;
  }

  const maybeModule = module as { drawerConfig?: unknown; default?: unknown };
  return maybeModule.drawerConfig ?? maybeModule.default ?? null;
};

// Dynamic config loader
const loadDrawerConfig = async (version: Version) => {
  try {
    const module = await import(`../config/components/${version}/drawer.tsx`);
    return resolveDrawerConfigModule(module);
  } catch {
    try {
      const module = await import(`../config/components/default/drawer.tsx`);
      return resolveDrawerConfigModule(module);
    } catch {
      return null;
    }
  }
};

// Component cache for performance
const componentCache = new Map<string, React.LazyExoticComponent<any>>();

// Minimal loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-muted/20 h-32" />
);

// ============ MAIN DRAWER COMPONENT ============

export const Drawer: React.FC<DrawerProps> = ({
  version = 'default',
  variant = 'primary',
  open,
  onOpenChange,
  title,
  description,
  icon,
  children,
  className,
  dismissible = true,
  snapPoints,
  activeSnapPoint,
  setActiveSnapPoint,
  ...props
}) => {
  const [config, setConfig] = useState<any>(null);
  const [VersionComponent, setVersionComponent] = useState<any>(null);
  
  // Dynamically load config
  useEffect(() => {
    loadDrawerConfig(version).then(setConfig);
  }, [version]);
  
  // Get variant colors dynamically - NO hardcoding
  const colors = useMemo(() => getVariantColors(variant), [variant]);
  
  // Get or create lazy component
  useEffect(() => {
    const cacheKey = `${version}/drawer`;
    if (!componentCache.has(cacheKey)) {
      componentCache.set(cacheKey, loadDrawerComponent(version));
    }
    const LazyComponent = componentCache.get(cacheKey)!;
    
    // Load the component to get its exports
    import(`../components/${version}/drawer.tsx`)
      .catch(() => import(`../components/default/drawer.tsx`))
      .then(module => setVersionComponent(module))
      .catch(() => setVersionComponent(null));
  }, [version]);

  if (!VersionComponent) {
    return (
      <DrawerPrimitive.Root open={open} onOpenChange={onOpenChange}>
        <LoadingSkeleton />
      </DrawerPrimitive.Root>
    );
  }

  return (
    <DrawerPrimitive.Root
      open={open}
      onOpenChange={onOpenChange}
      dismissible={dismissible}
      snapPoints={snapPoints}
      activeSnapPoint={activeSnapPoint}
      setActiveSnapPoint={setActiveSnapPoint}
    >
      <Suspense fallback={<LoadingSkeleton />}>
        <VersionComponent.Overlay colors={colors} />
        <DrawerPrimitive.Portal>
          <VersionComponent.Content variant={variant} colors={colors} config={config} className={className} {...props}>
            {(title || description) && (
              <div className="px-4 pt-6 pb-4">
                {title && (
                  <VersionComponent.Title variant={variant} colors={colors}>
                    {icon && <span className="mr-2">{icon}</span>}
                    {title}
                  </VersionComponent.Title>
                )}
                {description && (
                  <VersionComponent.Description variant={variant} colors={colors} className="mt-2">
                    {description}
                  </VersionComponent.Description>
                )}
              </div>
            )}
            <div className="px-4 pb-6">{children}</div>
          </VersionComponent.Content>
        </DrawerPrimitive.Portal>
      </Suspense>
    </DrawerPrimitive.Root>
  );
};

Drawer.displayName = 'Drawer';

// ============ COMPOUND COMPONENTS ============

// Re-export primitives for custom composition
export const DrawerTrigger = DrawerPrimitive.Trigger;
export const DrawerClose = DrawerPrimitive.Close;
export const DrawerPortal = DrawerPrimitive.Portal;

// Helper hook for drawer state
export function useDrawer(defaultOpen = false) {
  const [open, setOpen] = React.useState(defaultOpen);

  return {
    open,
    setOpen,
    onOpenChange: setOpen,
  };
}

export default Drawer;
