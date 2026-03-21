/**
 * Sheet Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense } from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import type { SheetProps, SheetVersion, VersionSheetComponents } from '../types/components/sheet.js';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

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
  const colors = React.useMemo(() => getVariantColors(variant), [variant]);
  const [versionModule, setVersionModule] = React.useState<any>(null);

  React.useEffect(() => {
    loadVersionModule(version, 'sheet', true).then(setVersionModule).catch(() => setVersionModule(null));
  }, [version]);

  return (
    <SheetPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <Suspense fallback={<LoadingSkeleton />}>
        {versionModule?.SheetContent ? (
          <versionModule.SheetContent
            side={side}
            variant={variant}
            colors={colors}
            className={className}
            {...props}
          >
            {(title || description) && (
              <versionModule.SheetHeader variant={variant} colors={colors}>
                {title && (
                  <versionModule.SheetTitle variant={variant} colors={colors}>
                    {icon && <span className="mr-2">{icon}</span>}
                    {title}
                  </versionModule.SheetTitle>
                )}
                {description && (
                  <versionModule.SheetDescription variant={variant} colors={colors}>
                    {description}
                  </versionModule.SheetDescription>
                )}
              </versionModule.SheetHeader>
            )}
            {children}
          </versionModule.SheetContent>
        ) : (
          <FallbackSheet className={className}>{children}</FallbackSheet>
        )}
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
