/**
 * Sheet Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import type { SheetProps, SheetVersion, VersionSheetComponents } from '../types/components/sheet.js';

// Dynamic imports for all sheet versions
const versionComponents: Record<SheetVersion, any> = {
  'angular-corner': lazy(() => import('../components/angular-corner/sheet.tsx')),
  'holo-frame': lazy(() => import('../components/holo-frame/sheet.tsx')),
  'data-panel': lazy(() => import('../components/data-panel/sheet.tsx')),
  'circuit-board': lazy(() => import('../components/circuit-board/sheet.tsx')),
  'quantum-gate': lazy(() => import('../components/quantum-gate/sheet.tsx')),
  'tactical-hud': lazy(() => import('../components/tactical-hud/sheet.tsx')),
  'energy-shield': lazy(() => import('../components/energy-shield/sheet.tsx')),
  'terminal-window': lazy(() => import('../components/terminal-window/sheet.tsx')),
  'matrix-grid': lazy(() => import('../components/matrix-grid/sheet.tsx')),
  'neon-outline': lazy(() => import('../components/neon-outline/sheet.tsx')),
};

// Minimal loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-gray-800/20 h-screen w-full" />
);

// Fallback for disabled versions
const FallbackSheet = React.forwardRef<HTMLDivElement, any>(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`fixed inset-0 z-50 bg-black/50 ${className}`}>
    <div className="fixed right-0 top-0 h-full w-3/4 bg-gray-950 border-l border-cyan-500 p-6 sm:max-w-sm">
      {children}
    </div>
  </div>
));
FallbackSheet.displayName = 'FallbackSheet';

// ============ MAIN SHEET COMPONENT ============

export const Sheet: React.FC<SheetProps> = ({
  version = 'angular-corner',
  variant = 'primary',
  open,
  onOpenChange,
  title,
  description,
  side = 'right',
  icon,
  children,
  className,
  ...props
}) => {
  const VersionComponent = versionComponents[version];

  if (!VersionComponent) {
    console.warn(`Sheet version "${version}" not found, using fallback`);
    return (
      <SheetPrimitive.Root open={open} onOpenChange={onOpenChange}>
        <FallbackSheet className={className}>{children}</FallbackSheet>
      </SheetPrimitive.Root>
    );
  }

  return (
    <SheetPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <Suspense fallback={<LoadingSkeleton />}>
        <VersionComponent.SheetContent
          side={side}
          variant={variant}
          className={className}
          {...props}
        >
          {(title || description) && (
            <VersionComponent.SheetHeader variant={variant}>
              {title && (
                <VersionComponent.SheetTitle variant={variant}>
                  {icon && <span className="mr-2">{icon}</span>}
                  {title}
                </VersionComponent.SheetTitle>
              )}
              {description && (
                <VersionComponent.SheetDescription variant={variant}>
                  {description}
                </VersionComponent.SheetDescription>
              )}
            </VersionComponent.SheetHeader>
          )}
          {children}
        </VersionComponent.SheetContent>
      </Suspense>
    </SheetPrimitive.Root>
  );
};

Sheet.displayName = 'Sheet';

// ============ COMPOUND COMPONENTS ============

// Re-export primitives for custom composition
export const SheetTrigger = SheetPrimitive.Trigger;
export const SheetClose = SheetPrimitive.Close;
export const SheetPortal = SheetPrimitive.Portal;

// Helper hook for sheet state
export function useSheet(defaultOpen = false) {
  const [open, setOpen] = React.useState(defaultOpen);

  return {
    open,
    setOpen,
    onOpenChange: setOpen,
  };
}

export default Sheet;
