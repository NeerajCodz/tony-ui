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

type AlertDialogNodeKind = "title" | "description";

function getElementDisplayName(type: unknown): string | undefined {
  if (typeof type === "string") return type;
  if (!type || (typeof type !== "function" && typeof type !== "object")) return undefined;
  const typed = type as { displayName?: string; name?: string };
  return typed.displayName || typed.name;
}

function hasAlertDialogNode(node: React.ReactNode, kind: AlertDialogNodeKind): boolean {
  const targets =
    kind === "title"
      ? new Set(["AlertDialogTitle", AlertDialogPrimitive.Title.displayName || "AlertDialogTitle"])
      : new Set(["AlertDialogDescription", AlertDialogPrimitive.Description.displayName || "AlertDialogDescription"]);

  return React.Children.toArray(node).some((child) => {
    if (!React.isValidElement(child)) return false;
    const childElement = child as React.ReactElement<{ children?: React.ReactNode }>;
    const displayName = getElementDisplayName(childElement.type);
    if (displayName && targets.has(displayName)) {
      return true;
    }
    return hasAlertDialogNode(childElement.props.children, kind);
  });
}

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
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(AlertDialogContext);
  const fallbackTitleId = React.useId();
  const fallbackDescriptionId = React.useId();
  const hasTitle = hasAlertDialogNode(children, "title");
  const hasDescription = hasAlertDialogNode(children, "description");

  const ariaLabelledBy = props["aria-labelledby"];
  const ariaDescribedBy = props["aria-describedby"];
  const needsFallbackTitle = !hasTitle && ariaLabelledBy == null;
  const needsFallbackDescription = !hasDescription && ariaDescribedBy == null;

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
        aria-labelledby={ariaLabelledBy ?? (needsFallbackTitle ? fallbackTitleId : undefined)}
        aria-describedby={ariaDescribedBy ?? (needsFallbackDescription ? fallbackDescriptionId : undefined)}
      >
        {children}
        {needsFallbackTitle ? (
          <AlertDialogTitle id={fallbackTitleId} className="sr-only">
            Confirmation
          </AlertDialogTitle>
        ) : null}
        {needsFallbackDescription ? (
          <AlertDialogDescription id={fallbackDescriptionId} className="sr-only">
            Confirm or cancel this action.
          </AlertDialogDescription>
        ) : null}
      </AlertDialogContentHandler>
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


export type { BaseUIProps };
