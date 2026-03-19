const fs = require('fs');
const path = require('path');

const componentName = 'scroll-area';
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
 * ScrollArea Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { lazy, Suspense, createContext, useContext } from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { cn } from '../../../lib/utils';

// --- Types ---
type ScrollAreaVersion = 
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

interface ScrollAreaProps extends React.ComponentProps<typeof ScrollAreaPrimitive.Root> {
  version?: ScrollAreaVersion;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  type?: 'default' | 'outline' | 'solid' | 'ghost';
  orientation?: 'vertical' | 'horizontal' | 'both';
  viewportClassName?: string;
  scrollBarClassName?: string;
}

// --- Context ---
interface ScrollAreaContextValue {
  version: ScrollAreaVersion;
  variant: ScrollAreaProps['variant'];
  type: ScrollAreaProps['type'];
  scrollBarClassName?: string;
}

const ScrollAreaContext = createContext<ScrollAreaContextValue>({
  version: 'angular-corner',
  variant: 'primary',
  type: 'default',
});

const useScrollAreaContext = () => useContext(ScrollAreaContext);

// --- Lazy Loaders ---
const versionComponents = {
  'angular-corner': lazy(() => import('./scroll-area-angular-corner')),
  'holo-frame': lazy(() => import('./scroll-area-holo-frame')),
  'data-panel': lazy(() => import('./scroll-area-data-panel')),
  'circuit-board': lazy(() => import('./scroll-area-circuit-board')),
  'quantum-gate': lazy(() => import('./scroll-area-quantum-gate')),
  'tactical-hud': lazy(() => import('./scroll-area-tactical-hud')),
  'energy-shield': lazy(() => import('./scroll-area-energy-shield')),
  'terminal-window': lazy(() => import('./scroll-area-terminal-window')),
  'matrix-grid': lazy(() => import('./scroll-area-matrix-grid')),
  'neon-outline': lazy(() => import('./scroll-area-neon-outline')),
};

// --- Main Component ---
const ScrollArea = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.Root>, ScrollAreaProps>(({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default', 
  className, 
  children, 
  orientation = 'vertical',
  viewportClassName,
  scrollBarClassName,
  ...props 
}, ref) => {
  return (
    <ScrollAreaContext.Provider value={{ version, variant, type, scrollBarClassName }}>
      <ScrollAreaPrimitive.Root
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        <ScrollAreaViewport className={viewportClassName}>
          {children}
        </ScrollAreaViewport>
        <ScrollBar orientation={orientation === 'both' ? 'vertical' : orientation} />
        {orientation === 'both' && <ScrollBar orientation="horizontal" />}
        <ScrollAreaCorner />
      </ScrollAreaPrimitive.Root>
    </ScrollAreaContext.Provider>
  );
});
ScrollArea.displayName = 'ScrollArea';

// --- Subcomponents ---

const ScrollAreaViewport = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.Viewport>, React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport>>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Viewport
    ref={ref}
    className={cn("h-full w-full rounded-[inherit]", className)}
    {...props}
  >
    {children}
  </ScrollAreaPrimitive.Viewport>
));
ScrollAreaViewport.displayName = ScrollAreaPrimitive.Viewport.displayName;

const ScrollBar = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.Scrollbar>, React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>>((props, ref) => {
  const { version, scrollBarClassName } = useScrollAreaContext();
  const VersionModule = versionComponents[version];
  return (
    <Suspense fallback={<div className="w-2 bg-gray-800" />}>
      {/* @ts-ignore */}
      <VersionModule.ScrollBar ref={ref} className={scrollBarClassName} {...props} />
    </Suspense>
  );
});
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;

const ScrollAreaCorner = ScrollAreaPrimitive.Corner;

// --- Exports ---
const ScrollAreaNamespace = Object.assign(ScrollArea, {
  Viewport: ScrollAreaViewport,
  ScrollBar: ScrollBar,
  Corner: ScrollAreaCorner,
});

export { ScrollAreaNamespace as ScrollArea };
export default ScrollAreaNamespace;
`;

fs.writeFileSync(path.join(targetDir, 'index.tsx'), indexContent);

// 2. Generate version files
versions.forEach(version => {
  const versionContent = `import React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    scrollbar: "flex touch-none select-none transition-colors bg-cyan-900/10 p-0.5 ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5",
    thumb: "relative flex-1 rounded-[1px] bg-cyan-500/50 hover:bg-cyan-500",
  },
  'holo-frame': {
    scrollbar: "flex touch-none select-none transition-colors bg-cyan-950/20 p-px ease-out data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2 shadow-[0_0_5px_rgba(6,182,212,0.1)]",
    thumb: "relative flex-1 rounded-full bg-cyan-400/60 shadow-[0_0_8px_rgba(6,182,212,0.6)] hover:bg-cyan-400",
  },
  'data-panel': {
    scrollbar: "flex touch-none select-none transition-colors bg-gray-900 p-0 ease-out data-[orientation=vertical]:w-3 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-3 border-l border-gray-800",
    thumb: "relative flex-1 bg-gray-600 hover:bg-cyan-600 rounded-none",
  },
  'circuit-board': {
    scrollbar: "flex touch-none select-none transition-colors bg-cyan-950/30 p-0.5 ease-out data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2 border-l border-cyan-900/30",
    thumb: "relative flex-1 rounded-[1px] bg-cyan-700/50 hover:bg-cyan-500",
  },
  // Default fallback
  'default': {
    scrollbar: "flex touch-none select-none transition-colors bg-transparent p-px ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5",
    thumb: "relative flex-1 rounded-full bg-border",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('${version}' in versionStyles ? '${version}' : 'default');

export const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }: any, ref: any) => (
  <ScrollAreaPrimitive.Scrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      styles.scrollbar,
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className={styles.thumb} />
  </ScrollAreaPrimitive.Scrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;
`;

  fs.writeFileSync(path.join(targetDir, `scroll-area-${version}.tsx`), versionContent);
});

console.log('ScrollArea regeneration complete.');
