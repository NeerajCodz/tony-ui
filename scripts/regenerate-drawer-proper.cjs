const fs = require('fs');
const path = require('path');

const componentName = 'drawer';
const versions = [
  'angular-corner',
  'holo-frame',
  'data-panel',
  'circuit-board',
  'quantum-gate',
  'tactical-hud',
  'energy-shield',
  'terminal-window',
  'matrix-grid',
  'neon-outline',
];

const targetDir = path.join(__dirname, '../src/ui/components', componentName);

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. Generate the dispatcher (index.tsx)
const indexContent = `/**
 * Drawer Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense, createContext, useContext } from 'react';
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
}

const DrawerContext = createContext<DrawerContextValue>({
  version: 'angular-corner',
  variant: 'primary',
  type: 'default',
});

const useDrawerContext = () => useContext(DrawerContext);

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./drawer-angular-corner')),
  'holo-frame': lazy(() => import('./drawer-holo-frame')),
  'data-panel': lazy(() => import('./drawer-data-panel')),
  'circuit-board': lazy(() => import('./drawer-circuit-board')),
  'quantum-gate': lazy(() => import('./drawer-quantum-gate')),
  'tactical-hud': lazy(() => import('./drawer-tactical-hud')),
  'energy-shield': lazy(() => import('./drawer-energy-shield')),
  'terminal-window': lazy(() => import('./drawer-terminal-window')),
  'matrix-grid': lazy(() => import('./drawer-matrix-grid')),
  'neon-outline': lazy(() => import('./drawer-neon-outline')),
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
  return (
    <DrawerContext.Provider value={{ version, variant, type }}>
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
  const { version } = useDrawerContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={<div className="fixed inset-0 bg-black/80" />}>
      {/* @ts-ignore */}
      <VersionModule.Overlay ref={ref} {...props} />
    </Suspense>
  );
});
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>>(({ children, ...props }, ref) => {
  const { version } = useDrawerContext();
  const VersionModule = versionComponents[version];
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <Suspense fallback={<div className="fixed bottom-0 left-0 right-0 h-96 bg-gray-900 rounded-t-[10px]" />}>
        {/* @ts-ignore */}
        <VersionModule.Content ref={ref} {...props}>
          {children}
        </VersionModule.Content>
      </Suspense>
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
  const { version } = useDrawerContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={null}>
      {/* @ts-ignore */}
      <VersionModule.Title ref={ref} {...props} />
    </Suspense>
  );
});
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>>((props, ref) => {
  const { version } = useDrawerContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={null}>
      {/* @ts-ignore */}
      <VersionModule.Description ref={ref} {...props} />
    </Suspense>
  );
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
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    overlay: "fixed inset-0 bg-black/60 backdrop-blur-sm",
    content: "fixed bottom-0 left-0 right-0 mt-24 flex h-auto flex-col rounded-t-[10px] border border-cyan-500/30 bg-gray-950 clip-path-bevel-top",
    title: "text-lg font-semibold leading-none tracking-tight text-cyan-400 font-mono",
    description: "text-sm text-cyan-500/70 font-mono",
  },
  'holo-frame': {
    overlay: "fixed inset-0 bg-cyan-900/20 backdrop-blur-md",
    content: "fixed bottom-0 left-0 right-0 mt-24 flex h-auto flex-col rounded-t-[10px] border-t border-cyan-400/50 bg-gray-900/90 shadow-[0_-5px_20px_rgba(6,182,212,0.2)]",
    title: "text-lg font-bold text-cyan-100 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]",
    description: "text-sm text-cyan-200/80",
  },
  'data-panel': {
    overlay: "fixed inset-0 bg-gray-950/80",
    content: "fixed bottom-0 left-0 right-0 mt-24 flex h-auto flex-col border-t-4 border-cyan-600 bg-gray-950",
    title: "text-lg font-bold text-gray-100 uppercase tracking-widest",
    description: "text-sm text-gray-400 font-mono",
  },
  'circuit-board': {
    overlay: "fixed inset-0 bg-black/70 bg-[url('/patterns/circuit.svg')] bg-opacity-10",
    content: "fixed bottom-0 left-0 right-0 mt-24 flex h-auto flex-col rounded-t-[10px] border-t border-cyan-900/50 bg-gray-950 bg-[url('/patterns/circuit.svg')]",
    title: "text-lg font-semibold text-cyan-300",
    description: "text-sm text-cyan-700",
  },
  // Default fallback
  'default': {
    overlay: "fixed inset-0 bg-black/80",
    content: "fixed bottom-0 left-0 right-0 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
    title: "text-lg font-semibold leading-none tracking-tight",
    description: "text-sm text-muted-foreground",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

export const Overlay = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn(styles.overlay, className)}
    {...props}
  />
));
Overlay.displayName = DrawerPrimitive.Overlay.displayName;

export const Content = React.forwardRef(({ className, children, ...props }: any, ref: any) => (
  <DrawerPrimitive.Content
    ref={ref}
    className={cn(styles.content, className)}
    {...props}
  >
    <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
    {children}
  </DrawerPrimitive.Content>
));
Content.displayName = DrawerPrimitive.Content.displayName;

export const Title = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(styles.title, className)}
    {...props}
  />
));
Title.displayName = DrawerPrimitive.Title.displayName;

export const Description = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn(styles.description, className)}
    {...props}
  />
));
Description.displayName = DrawerPrimitive.Description.displayName;
`;

  fs.writeFileSync(path.join(targetDir, `drawer-${version}.tsx`), versionContent);
});

console.log('Drawer regeneration complete.');
