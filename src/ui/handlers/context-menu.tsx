"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

const ContextMenuHandler = createHandler<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Root> & BaseUIProps>({ componentName: "context-menu", exportName: "ContextMenu" });
const ContextMenuTriggerHandler = createHandler<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Trigger> & BaseUIProps>({ componentName: "context-menu", exportName: "ContextMenuTrigger" });
const ContextMenuContentHandler = createHandler<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> & BaseUIProps>({ componentName: "context-menu", exportName: "ContextMenuContent" });
const ContextMenuItemHandler = createHandler<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & BaseUIProps & { inset?: boolean }>({ componentName: "context-menu", exportName: "ContextMenuItem" });
const ContextMenuCheckboxItemHandler = createHandler<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> & BaseUIProps>({ componentName: "context-menu", exportName: "ContextMenuCheckboxItem" });
const ContextMenuRadioItemHandler = createHandler<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> & BaseUIProps>({ componentName: "context-menu", exportName: "ContextMenuRadioItem" });
const ContextMenuLabelHandler = createHandler<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & BaseUIProps & { inset?: boolean }>({ componentName: "context-menu", exportName: "ContextMenuLabel" });
const ContextMenuSeparatorHandler = createHandler<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> & BaseUIProps>({ componentName: "context-menu", exportName: "ContextMenuSeparator" });
const ContextMenuShortcutHandler = createHandler<React.HTMLAttributes<HTMLSpanElement> & BaseUIProps>({ componentName: "context-menu", exportName: "ContextMenuShortcut" });
const ContextMenuGroupHandler = createHandler<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Group> & BaseUIProps>({ componentName: "context-menu", exportName: "ContextMenuGroup" });
const ContextMenuPortalHandler = createHandler<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Portal> & BaseUIProps>({ componentName: "context-menu", exportName: "ContextMenuPortal" });
const ContextMenuSubHandler = createHandler<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Sub> & BaseUIProps>({ componentName: "context-menu", exportName: "ContextMenuSub" });
const ContextMenuSubContentHandler = createHandler<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent> & BaseUIProps>({ componentName: "context-menu", exportName: "ContextMenuSubContent" });
const ContextMenuSubTriggerHandler = createHandler<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & BaseUIProps>({ componentName: "context-menu", exportName: "ContextMenuSubTrigger" });
const ContextMenuRadioGroupHandler = createHandler<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioGroup> & BaseUIProps>({ componentName: "context-menu", exportName: "ContextMenuRadioGroup" });

const ContextMenuContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const ContextMenu = ({ version = "default", variant = "default", effects, ...props }: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Root> & BaseUIProps) => (
  <ContextMenuContext.Provider value={{ version, variant, effects }}>
    <ContextMenuHandler version={version} variant={variant} effects={effects} {...props} />
  </ContextMenuContext.Provider>
);
ContextMenu.displayName = ContextMenuPrimitive.Root.displayName;

const ContextMenuTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Trigger> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(ContextMenuContext);
  return (
    <ContextMenuTriggerHandler ref={ref} className={className} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
ContextMenuTrigger.displayName = ContextMenuPrimitive.Trigger.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(ContextMenuContext);
  return (
    <ContextMenuContentHandler ref={ref} className={className} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & BaseUIProps & { inset?: boolean }
>(({ className, inset, ...props }, ref) => {
  const context = React.useContext(ContextMenuContext);
  return (
    <ContextMenuItemHandler ref={ref} className={className} inset={inset} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> & BaseUIProps
>(({ className, children, checked, ...props }, ref) => {
  const context = React.useContext(ContextMenuContext);
  return (
    <ContextMenuCheckboxItemHandler ref={ref} className={className} checked={checked} version={context.version} variant={context.variant} effects={context.effects} {...props}>
      {children}
    </ContextMenuCheckboxItemHandler>
  );
});
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> & BaseUIProps
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(ContextMenuContext);
  return (
    <ContextMenuRadioItemHandler ref={ref} className={className} version={context.version} variant={context.variant} effects={context.effects} {...props}>
      {children}
    </ContextMenuRadioItemHandler>
  );
});
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & BaseUIProps & { inset?: boolean }
>(({ className, inset, ...props }, ref) => {
  const context = React.useContext(ContextMenuContext);
  return (
    <ContextMenuLabelHandler ref={ref} className={className} inset={inset} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(ContextMenuContext);
  return (
    <ContextMenuSeparatorHandler ref={ref} className={className} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & BaseUIProps) => {
  const context = React.useContext(ContextMenuContext);
  return (
    <ContextMenuShortcutHandler className={className} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

const ContextMenuGroup = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Group> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(ContextMenuContext);
  return (
    <ContextMenuGroupHandler ref={ref} className={className} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
ContextMenuGroup.displayName = ContextMenuPrimitive.Group.displayName;

const ContextMenuPortal = ContextMenuPortalHandler;
const ContextMenuSub = ContextMenuSubHandler;
const ContextMenuSubContent = ContextMenuSubContentHandler;
const ContextMenuSubTrigger = ContextMenuSubTriggerHandler;
const ContextMenuRadioGroup = ContextMenuRadioGroupHandler;

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
export default ContextMenu;
export type { BaseUIProps };
