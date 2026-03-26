"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface AlertDialogProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Root> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
}

const AlertDialogContentHandler = createHandler<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & BaseUIProps>({
  componentName: "alert-dialog",
  exportName: "AlertDialogContent"
});

const AlertDialogActionHandler = createHandler<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> & BaseUIProps>({
  componentName: "alert-dialog",
  exportName: "AlertDialogAction"
});

const AlertDialogCancelHandler = createHandler<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> & BaseUIProps>({
  componentName: "alert-dialog",
  exportName: "AlertDialogCancel"
});

const AlertDialogTitleHandler = createHandler<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> & BaseUIProps>({
  componentName: "alert-dialog",
  exportName: "AlertDialogTitle"
});

const AlertDialogDescriptionHandler = createHandler<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> & BaseUIProps>({
  componentName: "alert-dialog",
  exportName: "AlertDialogDescription"
});

const AlertDialogHeaderHandler = createHandler<React.HTMLAttributes<HTMLDivElement> & BaseUIProps>({
  componentName: "alert-dialog",
  exportName: "AlertDialogHeader"
});

const AlertDialogFooterHandler = createHandler<React.HTMLAttributes<HTMLDivElement> & BaseUIProps>({
  componentName: "alert-dialog",
  exportName: "AlertDialogFooter"
});

const AlertDialogOverlayHandler = createHandler<React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> & BaseUIProps>({
  componentName: "alert-dialog",
  exportName: "AlertDialogOverlay"
});


const AlertDialogContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const AlertDialog = ({ version = "default", variant = "default", effects, ...props }: AlertDialogProps) => {
  return (
    <AlertDialogContext.Provider value={{ version, variant, effects }}>
      <AlertDialogPrimitive.Root {...props} />
    </AlertDialogContext.Provider>
  );
};

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(AlertDialogContext);
  return (
    <AlertDialogOverlayHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(AlertDialogContext);
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogContentHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        {...props}
      />
    </AlertDialogPortal>
  );
});
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(AlertDialogContext);
  return (
    <AlertDialogHeaderHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(AlertDialogContext);
  return (
    <AlertDialogFooterHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(AlertDialogContext);
  return (
    <AlertDialogTitleHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(AlertDialogContext);
  return (
    <AlertDialogDescriptionHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(AlertDialogContext);
  return (
    <AlertDialogActionHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(AlertDialogContext);
  return (
    <AlertDialogCancelHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

const AlertDialogExport = Object.assign(AlertDialog, {
  Portal: AlertDialogPortal,
  Overlay: AlertDialogOverlay,
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Header: AlertDialogHeader,
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
});

export {
  AlertDialogExport as AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
export default AlertDialogExport;

