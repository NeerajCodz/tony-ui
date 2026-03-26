"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

const HoverCardHandler = createHandler<React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root> & BaseUIProps>({
  componentName: "hover-card",
  exportName: "HoverCard"
});

const HoverCardContentHandler = createHandler<React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> & BaseUIProps>({
  componentName: "hover-card",
  exportName: "HoverCardContent"
});

const HoverCardTriggerHandler = createHandler<React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger> & BaseUIProps>({
  componentName: "hover-card",
  exportName: "HoverCardTrigger"
});

const HoverCardContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const HoverCard = ({ version = "default", variant = "default", effects, ...props }: React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root> & BaseUIProps) => (
  <HoverCardContext.Provider value={{ version, variant, effects }}>
    <HoverCardHandler version={version} variant={variant} effects={effects} {...props} />
  </HoverCardContext.Provider>
);
HoverCard.displayName = "HoverCard";

const HoverCardTrigger = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(HoverCardContext);
  return (
    <HoverCardTriggerHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
HoverCardTrigger.displayName = HoverCardPrimitive.Trigger.displayName;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> & BaseUIProps
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => {
  const context = React.useContext(HoverCardContext);
  return (
    <HoverCardContentHandler
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
export default HoverCard;
export type { BaseUIProps };
