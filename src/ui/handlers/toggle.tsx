"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> {
    version?: BaseUIProps["version"];
    variant?: BaseUIProps["variant"];
    effects?: string;
    size?: "default" | "sm" | "lg";
}

const Toggle = createHandler<ToggleProps & BaseUIProps>({
  componentName: "toggle",
  exportName: "Toggle"
});

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
export default Toggle;
export type { BaseUIProps };
