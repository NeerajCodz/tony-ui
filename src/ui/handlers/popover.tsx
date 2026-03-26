"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface PopoverProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
}

const PopoverContentHandler = createHandler<React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & BaseUIProps>({
  componentName: "popover",
  exportName: "PopoverContent"
});

const PopoverContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const Popover = ({ version = "default", variant = "default", effects, ...props }: PopoverProps) => {
  return (
    <PopoverContext.Provider value={{ version, variant, effects }}>
      <PopoverPrimitive.Root {...props} />
    </PopoverContext.Provider>
  );
};

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & BaseUIProps
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => {
  const context = React.useContext(PopoverContext);
  return (
    <PopoverPrimitive.Portal>
      <PopoverContentHandler
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={className}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const PopoverExport = Object.assign(Popover, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Anchor: PopoverAnchor,
});

export { PopoverExport as Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
export default PopoverExport;

