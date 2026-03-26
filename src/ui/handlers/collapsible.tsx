/**
 * Collapsible Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

"use client";

import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface CollapsibleProps extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
}

const CollapsibleHandler = createHandler<CollapsibleProps & BaseUIProps>({
  componentName: "collapsible",
  exportName: "Collapsible"
});

const CollapsibleContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  CollapsibleProps
>(({ version = "default", variant = "default", effects, ...props }, ref) => {
  return (
    <CollapsibleContext.Provider value={{ version, variant, effects }}>
      <CollapsibleHandler
        ref={ref}
        version={version}
        variant={variant}
        effects={effects}
        {...props}
      />
    </CollapsibleContext.Provider>
  );
});
Collapsible.displayName = CollapsiblePrimitive.Root.displayName;

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>((props, ref) => {
  // Primitives for parts, assuming the Root Handler sets up structure/theme
  // or that these are just standard interactive elements.
  return <CollapsiblePrimitive.Trigger ref={ref} {...props} />;
});
CollapsibleTrigger.displayName = CollapsiblePrimitive.Trigger.displayName;

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>((props, ref) => {
  return <CollapsiblePrimitive.Content ref={ref} {...props} />;
});
CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName;

const CollapsibleExport = Object.assign(Collapsible, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
});

export { CollapsibleExport as Collapsible, CollapsibleTrigger, CollapsibleContent };
export default CollapsibleExport;

