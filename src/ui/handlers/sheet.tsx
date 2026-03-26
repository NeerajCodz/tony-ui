/**
 * Sheet Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";
import type { SheetProps } from "../types/components/sheet.js";

const SheetContentHandler = createHandler<SheetProps & BaseUIProps>({
  componentName: "sheet",
  exportName: "SheetContent"
});

const SheetHeaderHandler = createHandler<React.HTMLAttributes<HTMLDivElement> & BaseUIProps>({
  componentName: "sheet",
  exportName: "SheetHeader"
});

const SheetFooterHandler = createHandler<React.HTMLAttributes<HTMLDivElement> & BaseUIProps>({
  componentName: "sheet",
  exportName: "SheetFooter"
});

const SheetTitleHandler = createHandler<React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> & BaseUIProps>({
  componentName: "sheet",
  exportName: "SheetTitle"
});

const SheetDescriptionHandler = createHandler<React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> & BaseUIProps>({
  componentName: "sheet",
  exportName: "SheetDescription"
});

const SheetOverlayHandler = createHandler<React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> & BaseUIProps>({
  componentName: "sheet",
  exportName: "SheetOverlay"
});

const SheetContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const Sheet = ({
  version = "default",
  variant = "default",
  effects,
  open,
  onOpenChange,
  children,
  side = "right",
  title,
  description,
  icon,
  className,
  ...props
}: SheetProps) => {
  return (
    <SheetContext.Provider value={{ version, variant, effects }}>
      <SheetPrimitive.Root open={open} onOpenChange={onOpenChange}>
        <SheetOverlayHandler version={version} variant={variant} effects={effects} />
        <SheetContentHandler
          version={version}
          variant={variant}
          effects={effects}
          side={side}
          className={className}
          {...props}
        >
           {/* If the versioned SheetContent expects children directly, we pass them.
               If it expects Header/Footer/Title/Description as children, we render them here.
               The previous implementation passed title/description/icon as PROPS to SheetHandler.
               If we are breaking it down, we should render them as components inside Content.
               However, to maintain backward compatibility with `SheetProps` having title/description, 
               we should render them inside if provided.
           */}
           {(title || description || icon) && (
             <SheetHeaderHandler version={version} variant={variant} effects={effects}>
               {title && <SheetTitleHandler version={version} variant={variant} effects={effects}>{title}</SheetTitleHandler>}
               {description && <SheetDescriptionHandler version={version} variant={variant} effects={effects}>{description}</SheetDescriptionHandler>}
             </SheetHeaderHandler>
           )}
          {children}
        </SheetContentHandler>
      </SheetPrimitive.Root>
    </SheetContext.Provider>
  );
};
Sheet.displayName = "Sheet";

// Note: SheetHandler here seems to be wrapping the Content AND Header/Title/Description?
// The previous implementation used `versionModule.SheetContent` and INSIDE it rendered Header/Title etc.
// If createHandler("sheet") returns SheetContent, then we should use it like that.
// But the previous `Sheet` component was monolithic (taking title, description as props).
// This is different from standard Radix/Shadcn where components are composed.
// To support the existing API where `Sheet` takes `title`/`description`, the version component `SheetContent` must handle them.
// OR `createHandler("sheet")` returns a wrapper that expects these props.
// Based on the previous code, `SheetContent` took these props. So `createHandler` is correct.

const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

// Hook
function useSheet(defaultOpen = false) {
  const [open, setOpen] = React.useState(defaultOpen);
  return {
    open,
    setOpen,
    onOpenChange: setOpen,
  };
}

const SheetExport = Object.assign(Sheet, {
  Trigger: SheetTrigger,
  Close: SheetClose,
  Portal: SheetPortal,
  Content: SheetContentHandler, // Expose for composition if needed
  Header: SheetHeaderHandler,
  Footer: SheetFooterHandler,
  Title: SheetTitleHandler,
  Description: SheetDescriptionHandler,
  Overlay: SheetOverlayHandler
});

export { 
  SheetExport as Sheet, 
  SheetTrigger, 
  SheetClose, 
  SheetPortal, 
  useSheet,
  SheetContentHandler as SheetContent,
  SheetHeaderHandler as SheetHeader,
  SheetFooterHandler as SheetFooter,
  SheetTitleHandler as SheetTitle,
  SheetDescriptionHandler as SheetDescription,
  SheetOverlayHandler as SheetOverlay
};
export default SheetExport;


export type { BaseUIProps };

export type { SheetProps };