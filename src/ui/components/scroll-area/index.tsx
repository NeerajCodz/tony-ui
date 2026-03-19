/**
 * ScrollArea Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
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
  | 'neon';

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
  versionModule: any;
}

const ScrollAreaContext = createContext<ScrollAreaContextValue>({
  version: 'angular-corner',
  variant: 'primary',
  type: 'default',
  versionModule: null,
});

const useScrollAreaContext = () => useContext(ScrollAreaContext);

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: ScrollAreaVersion) => {
  switch (version) {
    case 'angular-corner': return import('./scroll-area-angular-corner.tsx');
    case 'holo-frame': return import('./scroll-area-holo-frame.tsx');
    case 'data-panel': return import('./scroll-area-data-panel.tsx');
    case 'circuit-board': return import('./scroll-area-circuit-board.tsx');
    case 'quantum-gate': return import('./scroll-area-quantum-gate.tsx');
    case 'tactical-hud': return import('./scroll-area-tactical-hud.tsx');
    case 'energy-shield': return import('./scroll-area-energy-shield.tsx');
    case 'terminal-window': return import('./scroll-area-terminal-window.tsx');
    case 'matrix-grid': return import('./scroll-area-matrix-grid.tsx');
    case 'neon': return import('./scroll-area-neon.tsx');
    default: return import('./scroll-area-angular-corner.tsx');
  }
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
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  return (
    <ScrollAreaContext.Provider value={{ version, variant, type, scrollBarClassName, versionModule }}>
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
  const { version, scrollBarClassName, versionModule } = useScrollAreaContext();
  
  if (!versionModule?.ScrollBar) {
    return <div className="w-2 bg-gray-800" />;
  }
  
  const ScrollBarComponent = versionModule.ScrollBar;
  
  return (
    <ScrollBarComponent ref={ref} className={scrollBarClassName} {...props} />
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

