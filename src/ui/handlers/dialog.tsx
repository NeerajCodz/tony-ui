'use client';

/**
 * Dialog Component Handler - Dynamic Loading
 * NO hardcoded colors, styles, or variants
 */

"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface DialogProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
}

const DialogContentHandler = createHandler<React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & BaseUIProps>({
  componentName: "dialog",
  exportName: "DialogContent"
});

const DialogHeaderHandler = createHandler<React.HTMLAttributes<HTMLDivElement> & BaseUIProps>({
  componentName: "dialog",
  exportName: "DialogHeader"
});

const DialogFooterHandler = createHandler<React.HTMLAttributes<HTMLDivElement> & BaseUIProps>({
  componentName: "dialog",
  exportName: "DialogFooter"
});

const DialogTitleHandler = createHandler<React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> & BaseUIProps>({
  componentName: "dialog",
  exportName: "DialogTitle"
});

const DialogDescriptionHandler = createHandler<React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> & BaseUIProps>({
  componentName: "dialog",
  exportName: "DialogDescription"
});

const DialogContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const Dialog = ({ version = "default", variant = "default", effects, ...props }: DialogProps) => {
  return (
    <DialogContext.Provider value={{ version, variant, effects }}>
      <DialogPrimitive.Root {...props} />
    </DialogContext.Provider>
  );
};

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> & BaseUIProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={className}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & BaseUIProps
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(DialogContext);
  
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogContentHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogContentHandler>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(DialogContext);
  return (
    <DialogHeaderHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
DialogHeader.displayName = "DialogHeader";

const DialogFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(DialogContext);
  return (
    <DialogFooterHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(DialogContext);
  return (
    <DialogTitleHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(DialogContext);
  return (
    <DialogDescriptionHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const DialogExport = Object.assign(Dialog, {
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Close: DialogClose,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
});

export {
  DialogExport as Dialog,
  DialogTrigger,
  DialogPortal,
  DialogClose,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
export default DialogExport;


export type { BaseUIProps };
