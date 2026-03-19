import React, { useCallback, useEffect, useState, createContext, useContext } from 'react';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '../../../lib/utils';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  className?: string;
  children?: React.ReactNode;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

// Styles
const getRootStyles = (version: string) => {
  const base = "relative";
  const styles = {
    'angular-corner': "p-4 border border-gray-800 bg-gray-900/50 clip-path-polygon-[10px_0,_100%_0,_100%_calc(100%-10px),_calc(100%-10px)_100%,_0_100%,_0_10px]",
    'holo-frame': "p-6 border border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] rounded-xl",
    'data-panel': "p-4 bg-gray-900 border-l-4 border-cyan-500 rounded-none",
    'circuit-board': "p-4 bg-black border border-gray-800",
    'quantum-gate': "p-6 bg-gray-900/90 rounded-2xl border border-cyan-500/20",
    'tactical-hud': "p-4 bg-black border-2 border-gray-800 rounded-sm relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-4 after:h-4 after:border-t-2 after:border-l-2 after:border-cyan-500",
    'energy-shield': "p-4 bg-cyan-950/20 border border-cyan-400/30 shadow-[inset_0_0_10px_rgba(6,182,212,0.1)] rounded-lg",
    'terminal-window': "p-4 bg-black border border-green-500/50",
    'matrix-grid': "p-4 bg-black border border-green-900",
    'neon': "p-6 bg-black border-2 border-cyan-400 shadow-[0_0_10px_cyan] rounded-lg",
  };
  return cn(base, styles[version as keyof typeof styles]);
};

const getButtonStyles = (version: string) => {
  const base = "absolute h-8 w-8 rounded-full flex items-center justify-center disabled:opacity-50";
  const styles = {
    'angular-corner': "bg-cyan-500 text-black hover:bg-cyan-400 rounded-none skew-x-[-10deg]",
    'holo-frame': "border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_10px_cyan]",
    'data-panel': "bg-gray-800 text-cyan-500 hover:bg-gray-700 rounded-none border border-gray-700",
    'circuit-board': "bg-gray-900 text-cyan-400 border border-gray-800 hover:border-cyan-400 rounded-none",
    'quantum-gate': "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/40 rounded-full",
    'tactical-hud': "bg-cyan-900/50 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-900 rounded-none",
    'energy-shield': "bg-cyan-500/10 text-cyan-200 border border-cyan-500/30 hover:bg-cyan-500/20",
    'terminal-window': "bg-green-900/30 text-green-500 border border-green-500/50 hover:bg-green-900/50 rounded-none",
    'matrix-grid': "bg-black text-green-500 border border-green-700 hover:border-green-500 rounded-none",
    'neon': "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black shadow-[0_0_5px_cyan]",
  };
  return cn(base, styles[version as keyof typeof styles]);
};


const getTypeStyles = (type: string | undefined) => {
  if (!type) return '';
  switch (type) {
    case 'inverse': return "bg-white text-black border-black hover:bg-gray-100";
    case 'contrast': return "bg-black text-white border-white border-2 shadow-[4px_4px_0px_white]";
    case 'soft': return "bg-opacity-20 border-opacity-30 shadow-none";
    default: return '';
  }
};

export const CarouselRoot = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({type,  orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback((api: CarouselApi) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
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
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api.off("reInit", onSelect);
        api.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDown={handleKeyDown}
          className={cn(getRootStyles('matrix-grid'), className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
CarouselRoot.displayName = "Carousel";

export const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          , getTypeStyles(type))}
          {...props}
        />
      </div>
    );
  }
);
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        , getTypeStyles(type))}
        {...props}
      />
    );
  }
);
CarouselItem.displayName = "CarouselItem";

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return (
      <button
        ref={ref}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        className={cn(
          getButtonStyles('matrix-grid'),
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        )}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </button>
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return (
      <button
        ref={ref}
        disabled={!canScrollNext}
        onClick={scrollNext}
        className={cn(
          getButtonStyles('matrix-grid'),
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        )}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </button>
    );
  }
);
CarouselNext.displayName = "CarouselNext";
