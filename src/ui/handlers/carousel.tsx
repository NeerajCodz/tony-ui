"use client";

import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}


const CarouselContentHandler = createHandler<React.HTMLAttributes<HTMLDivElement> & BaseUIProps>({
  componentName: "carousel",
  exportName: "CarouselContent"
});

const CarouselItemHandler = createHandler<React.HTMLAttributes<HTMLDivElement> & BaseUIProps>({
  componentName: "carousel",
  exportName: "CarouselItem"
});

const CarouselPreviousHandler = createHandler<React.ComponentProps<"button"> & BaseUIProps>({
  componentName: "carousel",
  exportName: "CarouselPrevious"
});

const CarouselNextHandler = createHandler<React.ComponentProps<"button"> & BaseUIProps>({
  componentName: "carousel",
  exportName: "CarouselNext"
});

const Carousel = React.forwardRef<
  HTMLDivElement,
  CarouselProps & BaseUIProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      version = "default",
      variant = "default",
      effects,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );
    // ... (rest of logic same) ...
    // Note: Carousel itself needs a handler IF the version styles the container.
    // The previous implementation used CarouselHandler as a wrapper in `CarouselContent`.
    // Actually, `Carousel` component logic is here (useEmblaCarousel).
    // The version component probably expects to wrap this logic or be used inside.
    // Standard Shadcn: `Carousel` provides Context.
    // `CarouselContent` uses `carouselRef`.
    // So `Carousel` component here IS the provider.
    // We don't need `CarouselHandler` for `Carousel` root if it's just a div with context.
    // But if version wants to style the root, we can use `CarouselHandler` to wrap.
    // However, `useEmblaCarousel` returns `carouselRef` which must be on the viewport.
    // In Shadcn, `CarouselContent` IS the viewport container (overflow-hidden).
    // Wait, no. `Carousel` is the outer wrapper. `CarouselContent` is the track.
    // `Carousel` usually has no ref.
    // But here `Carousel` takes a ref.
    
    // Let's assume `Carousel` logic stays here.
    // `CarouselContent` needs to be styled.
    // `CarouselItem` needs to be styled.
    // `CarouselPrevious`/`Next` need to be styled.
    
    // So we use handlers for Content, Item, Prev, Next.
    
    // ... (logic) ...
    
    // Re-implementing logic part because I'm replacing the whole file block in `edit`.
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
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

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          version,
          variant,
          effects,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={`relative ${className || ""}`}
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
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & BaseUIProps
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation, version, variant, effects } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <CarouselContentHandler
        ref={ref}
        className={`flex ${
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"
        } ${className || ""}`}
        version={version}
        variant={variant}
        effects={effects}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & BaseUIProps
>(({ className, ...props }, ref) => {
  const { orientation, version, variant, effects } = useCarousel();

  return (
    <CarouselItemHandler
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={`min-w-0 shrink-0 grow-0 basis-full ${
        orientation === "horizontal" ? "pl-4" : "pt-4"
      } ${className || ""}`}
      version={version}
      variant={variant}
      effects={effects}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & BaseUIProps
>(({ className, ...props }, ref) => {
  const { scrollPrev, canScrollPrev, version, variant, effects } = useCarousel();

  return (
    <CarouselPreviousHandler
      ref={ref}
      className={className}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      version={version}
      variant={variant}
      effects={effects}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </CarouselPreviousHandler>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & BaseUIProps
>(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext, version, variant, effects } = useCarousel();

  return (
    <CarouselNextHandler
      ref={ref}
      className={className}
      disabled={!canScrollNext}
      onClick={scrollNext}
      version={version}
      variant={variant}
      effects={effects}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </CarouselNextHandler>
  );
});
CarouselNext.displayName = "CarouselNext";

const CarouselExport = Object.assign(Carousel, {
  Content: CarouselContent,
  Item: CarouselItem,
  Previous: CarouselPrevious,
  Next: CarouselNext,
});

export {
  CarouselExport as Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
export default CarouselExport;


export type { BaseUIProps };
