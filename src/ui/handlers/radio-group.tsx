"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
}

const RadioGroupItemHandler = createHandler<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & BaseUIProps>({
  componentName: "radio-group",
  exportName: "RadioGroupItem"
});

const RadioGroupContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, version = "default", variant = "default", effects, ...props }, ref) => {
  return (
    <RadioGroupContext.Provider value={{ version, variant, effects }}>
      <RadioGroupPrimitive.Root
        className={`grid gap-2 ${className || ""}`}
        {...props}
        ref={ref}
      />
    </RadioGroupContext.Provider>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(RadioGroupContext);
  return (
    <RadioGroupItemHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupItemHandler>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const RadioGroupExport = Object.assign(RadioGroup, {
  Item: RadioGroupItem,
});

export { RadioGroupExport as RadioGroup, RadioGroupItem };
export default RadioGroupExport;


export type { BaseUIProps };
