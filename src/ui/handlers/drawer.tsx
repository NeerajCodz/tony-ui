"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export type DrawerProps = React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Root> & {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
  shouldScaleBackground?: boolean;
};

const DrawerContentHandler = createHandler<React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & BaseUIProps>({
  componentName: "drawer",
  exportName: "DrawerContent"
});

const DrawerOverlayHandler = createHandler<React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> & BaseUIProps>({
  componentName: "drawer",
  exportName: "DrawerOverlay"
});

const DrawerHeaderHandler = createHandler<React.HTMLAttributes<HTMLDivElement> & BaseUIProps>({
  componentName: "drawer",
  exportName: "DrawerHeader"
});

const DrawerFooterHandler = createHandler<React.HTMLAttributes<HTMLDivElement> & BaseUIProps>({
  componentName: "drawer",
  exportName: "DrawerFooter"
});

const DrawerTitleHandler = createHandler<React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> & BaseUIProps>({
  componentName: "drawer",
  exportName: "DrawerTitle"
});

const DrawerDescriptionHandler = createHandler<React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> & BaseUIProps>({
  componentName: "drawer",
  exportName: "DrawerDescription"
});

const DrawerContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const Drawer = ({
  shouldScaleBackground = true,
  version = "default",
  variant = "default",
  effects,
  children,
  ...props
}: DrawerProps) => {
  return (
    <DrawerContext.Provider value={{ version, variant, effects }}>
      <DrawerPrimitive.Root
        shouldScaleBackground={shouldScaleBackground}
        {...props}
      >
        {children}
      </DrawerPrimitive.Root>
    </DrawerContext.Provider>
  );
};
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(DrawerContext);
  return (
    <DrawerOverlayHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & BaseUIProps
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(DrawerContext);
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerContentHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        {...props}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        {children}
      </DrawerContentHandler>
    </DrawerPortal>
  );
});
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(DrawerContext);
  return (
    <DrawerHeaderHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(DrawerContext);
  return (
    <DrawerFooterHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(DrawerContext);
  return (
    <DrawerTitleHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(DrawerContext);
  return (
    <DrawerDescriptionHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

const DrawerExport = Object.assign(Drawer, {
  Trigger: DrawerTrigger,
  Portal: DrawerPortal,
  Close: DrawerClose,
  Overlay: DrawerOverlay,
  Content: DrawerContent,
  Header: DrawerHeader,
  Footer: DrawerFooter,
  Title: DrawerTitle,
  Description: DrawerDescription,
});

export {
  DrawerExport as Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerClose,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
export default DrawerExport;

