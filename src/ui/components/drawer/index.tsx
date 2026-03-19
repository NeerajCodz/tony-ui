/**
 * Drawer Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '../../../lib/utils';

// --- Types ---
type DrawerVersion = 
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

interface DrawerProps extends React.ComponentProps<typeof DrawerPrimitive.Root> {
  version?: DrawerVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
}

// --- Context ---
interface DrawerContextValue {
  version: DrawerVersion;
  variant: DrawerProps['variant'];
  type: DrawerProps['type'];
  versionModule: any;
}

const DrawerContext = createContext<DrawerContextValue>({
  version: 'angular-corner',
  variant: 'primary',
  type: 'default',
  versionModule: null,
});

const useDrawerContext = () => useContext(DrawerContext);

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: DrawerVersion) => {
  switch (version) {
    case 'angular-corner': return import('./drawer-angular-corner.tsx');
    case 'holo-frame': return import('./drawer-holo-frame.tsx');
    case 'data-panel': return import('./drawer-data-panel.tsx');
    case 'circuit-board': return import('./drawer-circuit-board.tsx');
    case 'quantum-gate': return import('./drawer-quantum-gate.tsx');
    case 'tactical-hud': return import('./drawer-tactical-hud.tsx');
    case 'energy-shield': return import('./drawer-energy-shield.tsx');
    case 'terminal-window': return import('./drawer-terminal-window.tsx');
    case 'matrix-grid': return import('./drawer-matrix-grid.tsx');
    case 'neon-outline': return import('./drawer-neon-outline.tsx');
    default: return import('./drawer-angular-corner.tsx');
  }
};

// --- Main Component ---
const Drawer = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  shouldScaleBackground = true,
  children, 
  ...props 
}: DrawerProps) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  return (
    <DrawerContext.Provider value={{ version, variant, type, versionModule }}>
      <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props}>
        {children}
      </DrawerPrimitive.Root>
    </DrawerContext.Provider>
  );
};
Drawer.displayName = 'Drawer';

// --- Subcomponents ---

const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>>((props, ref) => {
  const { versionModule } = useDrawerContext();
  if (!versionModule?.Overlay) {
    return <div className="fixed inset-0 bg-black/80" />;
  }
  const OverlayComponent = versionModule.Overlay;
  return <OverlayComponent ref={ref} {...props} />;
});
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>>(({ children, ...props }, ref) => {
  const { versionModule } = useDrawerContext();
  
  if (!versionModule?.Content) {
    return <div className="fixed bottom-0 left-0 right-0 h-96 bg-gray-900 rounded-t-[10px]" />;
  }
  
  const ContentComponent = versionModule.Content;
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <ContentComponent ref={ref} {...props}>
        {children}
      </ContentComponent>
    </DrawerPortal>
  );
});
DrawerContent.displayName = DrawerPrimitive.Content.displayName;

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>>((props, ref) => {
  const { versionModule } = useDrawerContext();
  if (!versionModule?.Title) return null;
  const TitleComponent = versionModule.Title;
  return <TitleComponent ref={ref} {...props} />;
});
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>>((props, ref) => {
  const { versionModule } = useDrawerContext();
  if (!versionModule?.Description) return null;
  const DescriptionComponent = versionModule.Description;
  return <DescriptionComponent ref={ref} {...props} />;
});
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

// --- Exports ---
const DrawerNamespace = Object.assign(Drawer, {
  Trigger: DrawerTrigger,
  Content: DrawerContent,
  Header: DrawerHeader,
  Footer: DrawerFooter,
  Title: DrawerTitle,
  Description: DrawerDescription,
  Close: DrawerClose,
  Overlay: DrawerOverlay,
});

export { DrawerNamespace as Drawer };
export default DrawerNamespace;

