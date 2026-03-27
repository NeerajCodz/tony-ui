"use client";

import type { UseEmblaCarouselType } from "embla-carousel-react";
import React from "react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export type CarouselApi = UseEmblaCarouselType[1];

export interface CarouselProps extends BaseUIProps, React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}

const CarouselRootHandler = createHandler<CarouselProps>({
  componentName: "carousel",
  exportName: "Carousel",
});

const CarouselContentHandler = createHandler<BaseUIProps & React.HTMLAttributes<HTMLDivElement>>({
  componentName: "carousel",
  exportName: "CarouselContent",
});

const CarouselItemHandler = createHandler<BaseUIProps & React.HTMLAttributes<HTMLDivElement>>({
  componentName: "carousel",
  exportName: "CarouselItem",
});

const CarouselPreviousHandler = createHandler<BaseUIProps & React.ComponentProps<"button">>({
  componentName: "carousel",
  exportName: "CarouselPrevious",
});

const CarouselNextHandler = createHandler<BaseUIProps & React.ComponentProps<"button">>({
  componentName: "carousel",
  exportName: "CarouselNext",
});

const CarouselStyleContext = React.createContext<{
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
}>({});

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ version = "default", variant = "default", effects, ...props }, ref) => (
    <CarouselStyleContext.Provider value={{ version, variant, effects }}>
      <CarouselRootHandler
        ref={ref}
        version={version}
        variant={variant}
        effects={effects}
        {...props}
      />
    </CarouselStyleContext.Provider>
  )
);
Carousel.displayName = "Carousel";

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  BaseUIProps & React.HTMLAttributes<HTMLDivElement>
>(({ version, variant, effects, ...props }, ref) => {
  const context = React.useContext(CarouselStyleContext);
  return (
    <CarouselContentHandler
      ref={ref}
      version={context.version ?? version}
      variant={context.variant ?? variant}
      effects={context.effects ?? effects}
      {...props}
    />
  );
});
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  BaseUIProps & React.HTMLAttributes<HTMLDivElement>
>(({ version, variant, effects, ...props }, ref) => {
  const context = React.useContext(CarouselStyleContext);
  return (
    <CarouselItemHandler
      ref={ref}
      version={context.version ?? version}
      variant={context.variant ?? variant}
      effects={context.effects ?? effects}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  BaseUIProps & React.ComponentProps<"button">
>(({ version, variant, effects, ...props }, ref) => {
  const context = React.useContext(CarouselStyleContext);
  return (
    <CarouselPreviousHandler
      ref={ref}
      version={context.version ?? version}
      variant={context.variant ?? variant}
      effects={context.effects ?? effects}
      {...props}
    />
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  BaseUIProps & React.ComponentProps<"button">
>(({ version, variant, effects, ...props }, ref) => {
  const context = React.useContext(CarouselStyleContext);
  return (
    <CarouselNextHandler
      ref={ref}
      version={context.version ?? version}
      variant={context.variant ?? variant}
      effects={context.effects ?? effects}
      {...props}
    />
  );
});
CarouselNext.displayName = "CarouselNext";

const CarouselExport = Object.assign(Carousel, {
  Content: CarouselContent,
  Item: CarouselItem,
  Previous: CarouselPrevious,
  Next: CarouselNext,
});

export default CarouselExport;
export type { BaseUIProps };

