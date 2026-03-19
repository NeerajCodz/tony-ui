import React, { createContext, useContext, useState, useEffect } from 'react';
import { Skeleton } from '../../handlers/skeleton';

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
    case 'angular-corner': return import('../../components/angular-corner/carousel.tsx');
    case 'holo-frame': return import('../../components/holo-frame/carousel.tsx');
    case 'data-panel': return import('../../components/data-panel/carousel.tsx');
    case 'circuit-board': return import('../../components/circuit-board/carousel.tsx');
    case 'quantum-gate': return import('../../components/quantum-gate/carousel.tsx');
    case 'tactical-hud': return import('../../components/tactical-hud/carousel.tsx');
    case 'energy-shield': return import('../../components/energy-shield/carousel.tsx');
    case 'terminal-window': return import('../../components/terminal-window/carousel.tsx');
    case 'matrix-grid': return import('../../components/matrix-grid/carousel.tsx');
    case 'neon-outline': return import('../../components/neon-outline/carousel.tsx');
    default: return import('../../components/angular-corner/carousel.tsx');
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

