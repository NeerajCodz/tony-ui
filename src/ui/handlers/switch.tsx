"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
    version?: BaseUIProps["version"];
    variant?: BaseUIProps["variant"];
    effects?: string;
}

const Switch = createHandler<SwitchProps & BaseUIProps>({
  componentName: "switch",
  exportName: "Switch"
});

Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
export default Switch;