/**
 * Separator Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
}

const SeparatorHandler = createHandler<SeparatorProps & BaseUIProps>({
  componentName: "separator",
  exportName: "Separator"
});

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(({ version = "default", variant = "default", effects, ...props }, ref) => {
  return (
    <SeparatorHandler
      ref={ref}
      version={version}
      variant={variant}
      effects={effects}
      {...props}
    />
  );
});
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
export default Separator;


export type { BaseUIProps };
