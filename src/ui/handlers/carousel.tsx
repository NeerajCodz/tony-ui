/**
 * Carousel Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

import React, { lazy, Suspense, createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { Version, Variant } from '../types/common';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';

// Types
export type CarouselVersion = Version;
export type CarouselVariant = Variant;
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: CarouselVersion;
  variant?: CarouselVariant;
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
}

// Loading helper
const loadVersionModule = async (version: CarouselVersion) => {
  switch (version) {
    case 'angular-corner': return import('../components/carousel/carousel-angular-corner.tsx');
    case 'holo-frame': return import('../components/carousel/carousel-holo-frame.tsx');
    case 'data-panel': return import('../components/carousel/carousel-data-panel.tsx');
    case 'circuit-board': return import('../components/carousel/carousel-circuit-board.tsx');
    case 'quantum-gate': return import('../components/carousel/carousel-quantum-gate.tsx');
    case 'tactical-hud': return import('../components/carousel/carousel-tactical-hud.tsx');
    case 'energy-shield': return import('../components/carousel/carousel-energy-shield.tsx');
    case 'terminal-window': return import('../components/carousel/carousel-terminal-window.tsx');
    case 'matrix-grid': return import('../components/carousel/carousel-matrix-grid.tsx');
    case 'neon': return import('../components/carousel/carousel-neon.tsx');
    default: return import('../components/carousel/carousel-angular-corner.tsx');
  }
};

// Context
interface CarouselContextValue {
  version: CarouselVersion;
  variant: CarouselVariant;
  versionModule: any;
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  orientation: 'horizontal' | 'vertical';
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a Carousel');
  }
  return context;
};

// Loading skeleton
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-gray-800/20 rounded w-full h-48" />
);

// Main Component
const CarouselRoot = React.forwardRef<HTMLDivElement, CarouselProps>(({
  version = 'angular-corner',
  variant = 'default',
  opts,
  plugins,
  orientation = 'horizontal',
  setApi,
  className = '',
  children,
  ...props
}, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === 'horizontal' ? 'x' : 'y' },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);
    return () => {
      api?.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        version,
        variant,
        versionModule,
        carouselRef,
        api,
        opts,
        orientation,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      } as CarouselContextValue}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={`relative ${className}`}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
CarouselRoot.displayName = 'Carousel';

// Content
const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => {
    const { carouselRef, orientation, versionModule, variant } = useCarousel();

    if (versionModule?.CarouselContent) {
      const Component = versionModule.CarouselContent;
      return <Component ref={ref} variant={variant} className={className} {...props} />;
    }

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={`flex ${orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col'} ${className}`}
          {...props}
        />
      </div>
    );
  }
);
CarouselContent.displayName = 'CarouselContent';

// Item
const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => {
    const { orientation, versionModule, variant } = useCarousel();

    if (versionModule?.CarouselItem) {
      const Component = versionModule.CarouselItem;
      return <Component ref={ref} variant={variant} className={className} {...props} />;
    }

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={`min-w-0 shrink-0 grow-0 basis-full ${orientation === 'horizontal' ? 'pl-4' : 'pt-4'} ${className}`}
        {...props}
      />
    );
  }
);
CarouselItem.displayName = 'CarouselItem';

// Previous Button
const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<'button'>>(
  ({ className = '', ...props }, ref) => {
    const { scrollPrev, canScrollPrev, versionModule, variant } = useCarousel();

    if (versionModule?.CarouselPrevious) {
      const Component = versionModule.CarouselPrevious;
      return <Component ref={ref} variant={variant} className={className} {...props} />;
    }

    return (
      <button
        ref={ref}
        className={`absolute h-8 w-8 rounded-full border bg-background left-2 top-1/2 -translate-y-1/2 disabled:opacity-50 ${className}`}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <span className="sr-only">Previous slide</span>
        {'<'}
      </button>
    );
  }
);
CarouselPrevious.displayName = 'CarouselPrevious';

// Next Button
const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<'button'>>(
  ({ className = '', ...props }, ref) => {
    const { scrollNext, canScrollNext, versionModule, variant } = useCarousel();

    if (versionModule?.CarouselNext) {
      const Component = versionModule.CarouselNext;
      return <Component ref={ref} variant={variant} className={className} {...props} />;
    }

    return (
      <button
        ref={ref}
        className={`absolute h-8 w-8 rounded-full border bg-background right-2 top-1/2 -translate-y-1/2 disabled:opacity-50 ${className}`}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <span className="sr-only">Next slide</span>
        {'>'}
      </button>
    );
  }
);
CarouselNext.displayName = 'CarouselNext';

// Composite export
export const Carousel = Object.assign(CarouselRoot, {
  Content: CarouselContent,
  Item: CarouselItem,
  Previous: CarouselPrevious,
  Next: CarouselNext,
});

export { CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
export default Carousel;
