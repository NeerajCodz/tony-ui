'use client';

"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

type AccordionPrimitiveRootProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;
export type AccordionProps = AccordionPrimitiveRootProps & {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
  uiType?: BaseUIProps["uiType"];
};

const AccordionHandler = createHandler<AccordionProps & BaseUIProps>({
  componentName: "accordion",
  exportName: "Accordion"
});

const AccordionContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
  uiType?: BaseUIProps['uiType'];
}>({});

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ version = "default", variant = "default", effects, uiType = "default", ...props }, ref) => {
  return (
    <AccordionContext.Provider value={{ version, variant, effects, uiType }}>
      <AccordionHandler
        ref={ref}
        version={version}
        variant={variant}
        effects={effects}
        uiType={uiType}
        {...props}
      />
    </AccordionContext.Provider>
  );
});
Accordion.displayName = AccordionPrimitive.Root.displayName;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>((props, ref) => (
  <AccordionPrimitive.Item ref={ref} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>((props, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger ref={ref} {...props} />
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>((props, ref) => (
  <AccordionPrimitive.Content ref={ref} {...props} />
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const AccordionExport = Object.assign(Accordion, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export { AccordionExport as Accordion, AccordionItem, AccordionTrigger, AccordionContent };
export default AccordionExport;


export type { BaseUIProps };
