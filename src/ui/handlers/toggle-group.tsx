"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

const ToggleGroupHandler = createHandler<React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & BaseUIProps>({
  componentName: "toggle-group",
  exportName: "ToggleGroup"
});

const ToggleGroupItemHandler = createHandler<React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & BaseUIProps>({
  componentName: "toggle-group",
  exportName: "ToggleGroupItem"
});

const ToggleGroupContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
  size?: "default" | "sm" | "lg";
}>({});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & BaseUIProps & { size?: "default" | "sm" | "lg" }
>(({ className, version = "default", variant = "default", effects, size = "default", ...props }, ref) => (
  <ToggleGroupContext.Provider value={{ version, variant, effects, size }}>
    <ToggleGroupHandler
      ref={ref}
      className={className}
      version={version}
      variant={variant}
      effects={effects}
      size={size}
      {...props}
    />
  </ToggleGroupContext.Provider>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & BaseUIProps & { size?: "default" | "sm" | "lg" }
>(({ className, children, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);
  return (
    <ToggleGroupItemHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      size={size || context.size}
      {...props}
    >
      {children}
    </ToggleGroupItemHandler>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
export default ToggleGroup;
export type { BaseUIProps };
