"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
}

const TabsHandler = createHandler<TabsProps & BaseUIProps>({
  componentName: "tabs",
  exportName: "Tabs"
});

const TabsListHandler = createHandler<React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & BaseUIProps>({
  componentName: "tabs",
  exportName: "TabsList"
});

const TabsTriggerHandler = createHandler<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & BaseUIProps>({
  componentName: "tabs",
  exportName: "TabsTrigger"
});

const TabsContentHandler = createHandler<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & BaseUIProps>({
  componentName: "tabs",
  exportName: "TabsContent"
});

const TabsContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const Tabs = ({ version = "default", variant = "default", effects, ...props }: TabsProps) => {
  return (
    <TabsContext.Provider value={{ version, variant, effects }}>
      <TabsHandler version={version} variant={variant} effects={effects} {...props} />
    </TabsContext.Provider>
  );
};

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(TabsContext);
  return (
    <TabsListHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(TabsContext);
  return (
    <TabsTriggerHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => {
  const context = React.useContext(TabsContext);
  return (
    <TabsContentHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

const TabsExport = Object.assign(Tabs, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export { TabsExport as Tabs, TabsList, TabsTrigger, TabsContent };
export default TabsExport;


