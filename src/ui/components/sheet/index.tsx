/**
 * Sheet Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from '../../../lib/utils';

// --- Types ---
type SheetVersion = 
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

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
  version?: SheetVersion;
  side?: "top" | "bottom" | "left" | "right";
}

// --- Context ---
interface SheetContextValue {
  version: SheetVersion;
  versionModule: any;
}

const SheetContext = createContext<SheetContextValue>({
  version: 'angular-corner',
  versionModule: null,
});

const useSheetContext = () => useContext(SheetContext);

const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: SheetVersion) => {
  switch (version) {
    case 'angular-corner': return import('./sheet-angular-corner.tsx');
    case 'holo-frame': return import('./sheet-holo-frame.tsx');
    case 'data-panel': return import('./sheet-data-panel.tsx');
    case 'circuit-board': return import('./sheet-circuit-board.tsx');
    case 'quantum-gate': return import('./sheet-quantum-gate.tsx');
    case 'tactical-hud': return import('./sheet-tactical-hud.tsx');
    case 'energy-shield': return import('./sheet-energy-shield.tsx');
    case 'terminal-window': return import('./sheet-terminal-window.tsx');
    case 'matrix-grid': return import('./sheet-matrix-grid.tsx');
    case 'neon-outline': return import('./sheet-neon-outline.tsx');
    default: return import('./sheet-angular-corner.tsx');
  }
};

// --- Main Component ---
const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(({ 
  version = 'angular-corner', 
  side = "right",
  className,
  children,
  ...props 
}, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);
  
  if (!versionModule) {
    return (
      <SheetPortal>
        <SheetOverlay />
        <SheetPrimitive.Content className={cn("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", className)} {...props}>
          {children}
        </SheetPrimitive.Content>
      </SheetPortal>
    );
  }

  const Component = versionModule.default;

  return (
    <SheetContext.Provider value={{ version, versionModule }}>
      <SheetPortal>
        <Component ref={ref} side={side} className={className} {...props}>
          {children}
        </Component>
      </SheetPortal>
    </SheetContext.Provider>
  );
});
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Title>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Description>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
export default Sheet;

