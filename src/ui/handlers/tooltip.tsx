"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipHandler = createHandler<React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> & BaseUIProps>({
  componentName: "tooltip",
  exportName: "Tooltip"
});

const TooltipContentHandler = createHandler<React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & BaseUIProps>({
  componentName: "tooltip",
  exportName: "TooltipContent"
});

const TooltipTriggerHandler = createHandler<React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger> & BaseUIProps>({
  componentName: "tooltip",
  exportName: "TooltipTrigger"
});

const TooltipContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const Tooltip = ({ version = "default", variant = "default", effects, ...props }: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> & BaseUIProps) => (
  <TooltipContext.Provider value={{ version, variant, effects }}>
    <TooltipHandler version={version} variant={variant} effects={effects} {...props} />
  </TooltipContext.Provider>
);
Tooltip.displayName = "Tooltip";

const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(TooltipContext);
  return (
    <TooltipTriggerHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & BaseUIProps
>(({ className, sideOffset = 4, ...props }, ref) => {
  const context = React.useContext(TooltipContext);
  return (
    <TooltipContentHandler
      ref={ref}
      sideOffset={sideOffset}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
export default Tooltip;