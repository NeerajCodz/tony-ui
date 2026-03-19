import React, { createContext, useContext, useState, useEffect } from 'react';
import { Skeleton } from '../skeleton';

// --- Types ---
type CarouselVersion = 
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

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: CarouselVersion) => {
  switch (version) {
    case 'angular-corner': return import('./carousel-angular-corner.tsx');
    case 'holo-frame': return import('./carousel-holo-frame.tsx');
    case 'data-panel': return import('./carousel-data-panel.tsx');
    case 'circuit-board': return import('./carousel-circuit-board.tsx');
    case 'quantum-gate': return import('./carousel-quantum-gate.tsx');
    case 'tactical-hud': return import('./carousel-tactical-hud.tsx');
    case 'energy-shield': return import('./carousel-energy-shield.tsx');
    case 'terminal-window': return import('./carousel-terminal-window.tsx');
    case 'matrix-grid': return import('./carousel-matrix-grid.tsx');
    case 'neon-outline': return import('./carousel-neon-outline.tsx');
    default: return import('./carousel-angular-corner.tsx');
  }
};

// Context to share module across subcomponents
const CarouselContext = createContext<any>(null);

export const Carousel = React.forwardRef(({ 
  version = 'angular-corner', 
  variant = 'primary', 
  type = 'default',
  children,
  ...props 
}: any, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  if (!versionModule) {
    return <Skeleton className="h-[200px] w-full opacity-20" />;
  }

  const Component = versionModule.CarouselRoot || versionModule.Carousel;

  return (
    <CarouselContext.Provider value={versionModule}>
      <Component ref={ref} variant={variant} type={type} {...props}>
        {children}
      </Component>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = 'Carousel';

// Subcomponents wrapper
const createSubComponent = (name: string, exportName: string) => {
  const Component = React.forwardRef(({ children, ...props }: any, ref) => {
    const versionModule = useContext(CarouselContext);
    
    if (!versionModule) {
      return name === 'Content' ? <div className="flex gap-4 overflow-hidden">{children}</div> : null;
    }

    const Comp = versionModule[exportName];
    return <Comp ref={ref} {...props}>{children}</Comp>;
  });
  Component.displayName = `Carousel.${name}`;
  return Component;
};

// Attach subcomponents to Carousel
const CarouselNamespace = Object.assign(Carousel, {
  Content: createSubComponent('Content', 'CarouselContent'),
  Item: createSubComponent('Item', 'CarouselItem'),
  Previous: createSubComponent('Previous', 'CarouselPrevious'),
  Next: createSubComponent('Next', 'CarouselNext'),
});

export default CarouselNamespace;

