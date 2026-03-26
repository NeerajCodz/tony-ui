"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
}

const CheckboxHandler = createHandler<CheckboxProps & BaseUIProps>({
  componentName: "checkbox",
  exportName: "Checkbox"
});

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxHandler ref={ref} className={className} {...props}>
    <CheckboxPrimitive.Indicator
      className={`flex items-center justify-center text-current`}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxHandler>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
export default Checkbox;

