"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

const NavigationMenuHandler = createHandler<React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> & BaseUIProps>({ componentName: "navigation-menu", exportName: "NavigationMenu" });
const NavigationMenuListHandler = createHandler<React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List> & BaseUIProps>({ componentName: "navigation-menu", exportName: "NavigationMenuList" });
const NavigationMenuItemHandler = createHandler<React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item> & BaseUIProps>({ componentName: "navigation-menu", exportName: "NavigationMenuItem" });
const NavigationMenuContentHandler = createHandler<React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> & BaseUIProps>({ componentName: "navigation-menu", exportName: "NavigationMenuContent" });
const NavigationMenuTriggerHandler = createHandler<React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> & BaseUIProps>({ componentName: "navigation-menu", exportName: "NavigationMenuTrigger" });
const NavigationMenuLinkHandler = createHandler<React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link> & BaseUIProps>({ componentName: "navigation-menu", exportName: "NavigationMenuLink" });
const NavigationMenuIndicatorHandler = createHandler<React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator> & BaseUIProps>({ componentName: "navigation-menu", exportName: "NavigationMenuIndicator" });
const NavigationMenuViewportHandler = createHandler<React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport> & BaseUIProps>({ componentName: "navigation-menu", exportName: "NavigationMenuViewport" });

const NavigationMenuContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> & BaseUIProps
>(({ className, children, version = "default", variant = "default", effects, ...props }, ref) => (
  <NavigationMenuContext.Provider value={{ version, variant, effects }}>
    <NavigationMenuHandler ref={ref} className={className} version={version} variant={variant} effects={effects} {...props}>
      {children}
    </NavigationMenuHandler>
  </NavigationMenuContext.Provider>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(NavigationMenuContext);
  return (
    <NavigationMenuListHandler ref={ref} className={className} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(NavigationMenuContext);
  return (
    <NavigationMenuItemHandler ref={ref} className={className} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName;

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> & BaseUIProps
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(NavigationMenuContext);
  return (
    <NavigationMenuTriggerHandler ref={ref} className={className} version={context.version} variant={context.variant} effects={context.effects} {...props}>
      {children}
    </NavigationMenuTriggerHandler>
  );
});
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(NavigationMenuContext);
  return (
    <NavigationMenuContentHandler ref={ref} className={className} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(NavigationMenuContext);
  return (
    <NavigationMenuLinkHandler ref={ref} className={className} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(NavigationMenuContext);
  return (
    <NavigationMenuIndicatorHandler ref={ref} className={className} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(NavigationMenuContext);
  return (
    <NavigationMenuViewportHandler ref={ref} className={className} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
export default NavigationMenu;
export type { BaseUIProps };
