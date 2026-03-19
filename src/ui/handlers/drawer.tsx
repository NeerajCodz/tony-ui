/**
 * Drawer Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import type { DrawerProps, DrawerVersion, VersionDrawerComponents } from '../types/components/drawer.js';

// Dynamic imports for all drawer versions
const versionComponents: Record<DrawerVersion, any> = {
  'angular-corner': lazy(() => import('../components/angular-corner/drawer.tsx')),
  'holo-frame': lazy(() => import('../components/holo-frame/drawer.tsx')),
  'data-panel': lazy(() => import('../components/data-panel/drawer.tsx')),
  'circuit-board': lazy(() => import('../components/circuit-board/drawer.tsx')),
  'quantum-gate': lazy(() => import('../components/quantum-gate/drawer.tsx')),
  'tactical-hud': lazy(() => import('../components/tactical-hud/drawer.tsx')),
  'energy-shield': lazy(() => import('../components/energy-shield/drawer.tsx')),
  'terminal-window': lazy(() => import('../components/terminal-window/drawer.tsx')),
  'matrix-grid': lazy(() => import('../components/matrix-grid/drawer.tsx')),
  'neon-outline': lazy(() => import('../components/neon-outline/drawer.tsx')),
};

// Minimal loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-gray-800/20 h-32" />
);

// Fallback for disabled versions
const FallbackDrawer = React.forwardRef<HTMLDivElement, any>(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`fixed bottom-0 left-0 right-0 bg-gray-950 border-t border-cyan-500 p-6 ${className}`}>
    {children}
  </div>
));
FallbackDrawer.displayName = 'FallbackDrawer';

// ============ MAIN DRAWER COMPONENT ============

export const Drawer: React.FC<DrawerProps> = ({
  version = 'angular-corner',
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
  const VersionComponent = versionComponents[version];

  if (!VersionComponent) {
    console.warn(`Drawer version "${version}" not found, using fallback`);
    return (
      <DrawerPrimitive.Root open={open} onOpenChange={onOpenChange}>
        <FallbackDrawer className={className}>{children}</FallbackDrawer>
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
        <VersionComponent.Overlay />
        <DrawerPrimitive.Portal>
          <VersionComponent.Content variant={variant} className={className} {...props}>
            {(title || description) && (
              <div className="px-4 pt-6 pb-4">
                {title && (
                  <VersionComponent.Title variant={variant}>
                    {icon && <span className="mr-2">{icon}</span>}
                    {title}
                  </VersionComponent.Title>
                )}
                {description && (
                  <VersionComponent.Description variant={variant} className="mt-2">
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
