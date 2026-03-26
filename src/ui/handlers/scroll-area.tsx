'use client';

"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
  uiType?: BaseUIProps["uiType"];
  withHorizontalBar?: boolean;
  hideBar?: boolean;
}

export interface ScrollBarProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
  uiType?: BaseUIProps["uiType"];
}

const ScrollAreaHandler = createHandler<ScrollAreaProps & BaseUIProps>({
  componentName: "scroll-area",
  exportName: "ScrollArea"
});

const ScrollAreaContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
  uiType?: BaseUIProps['uiType'];
}>({});

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ version = "default", variant = "default", effects, uiType = "default", ...props }, ref) => {
  return (
    <ScrollAreaContext.Provider value={{ version, variant, effects, uiType }}>
      <ScrollAreaHandler
        ref={ref}
        version={version}
        variant={variant}
        effects={effects}
        uiType={uiType}
        {...props}
      />
    </ScrollAreaContext.Provider>
  );
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBarProps
>(({ className, orientation = "vertical", ...props }, ref) => {
  // Assuming ScrollArea version handles its own scrollbars usually.
  // But if used standalone or if version expects manual ScrollBar:
  // We use primitive here. The versioned ScrollArea usually includes ScrollBar or styles it via context/selectors.
  // If we wanted a versioned ScrollBar, we'd need a separate handler or assumption.
  // For now, mapping to primitive to ensure it works.
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={`flex touch-none select-none transition-colors ${
        orientation === "vertical"
          ? "h-full w-2.5 border-l border-l-transparent p-[1px]"
          : "h-2.5 flex-col border-t border-t-transparent p-[1px]"
      } ${className || ""}`}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
});
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

const ScrollAreaExport = Object.assign(ScrollArea, {
  ScrollBar,
});

export { ScrollAreaExport as ScrollArea, ScrollBar };
export default ScrollAreaExport;



export type { BaseUIProps };
