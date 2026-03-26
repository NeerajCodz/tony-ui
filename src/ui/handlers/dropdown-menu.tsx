"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface DropdownMenuProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
}

const DropdownMenuContentHandler = createHandler<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & BaseUIProps>({
  componentName: "dropdown-menu",
  exportName: "DropdownMenuContent"
});

const DropdownMenuItemHandler = createHandler<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & BaseUIProps & { inset?: boolean }>({
  componentName: "dropdown-menu",
  exportName: "DropdownMenuItem"
});

const DropdownMenuCheckboxItemHandler = createHandler<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> & BaseUIProps>({
  componentName: "dropdown-menu",
  exportName: "DropdownMenuCheckboxItem"
});

const DropdownMenuRadioItemHandler = createHandler<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> & BaseUIProps>({
  componentName: "dropdown-menu",
  exportName: "DropdownMenuRadioItem"
});

const DropdownMenuLabelHandler = createHandler<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & BaseUIProps>({
  componentName: "dropdown-menu",
  exportName: "DropdownMenuLabel"
});

const DropdownMenuSeparatorHandler = createHandler<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> & BaseUIProps>({
  componentName: "dropdown-menu",
  exportName: "DropdownMenuSeparator"
});

const DropdownMenuSubTriggerHandler = createHandler<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & BaseUIProps>({
  componentName: "dropdown-menu",
  exportName: "DropdownMenuSubTrigger"
});

const DropdownMenuSubContentHandler = createHandler<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> & BaseUIProps>({
  componentName: "dropdown-menu",
  exportName: "DropdownMenuSubContent"
});

const DropdownMenuShortcutHandler = createHandler<React.HTMLAttributes<HTMLSpanElement> & BaseUIProps>({
  componentName: "dropdown-menu",
  exportName: "DropdownMenuShortcut"
});

const DropdownMenuContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const DropdownMenu = ({ version = "default", variant = "default", effects, ...props }: DropdownMenuProps) => {
  return (
    <DropdownMenuContext.Provider value={{ version, variant, effects }}>
      <DropdownMenuPrimitive.Root {...props} />
    </DropdownMenuContext.Provider>
  );
};

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & BaseUIProps & {
    inset?: boolean;
  }
>(({ className, ...props }, ref) => {
  const context = React.useContext(DropdownMenuContext);
  return (
    <DropdownMenuSubTriggerHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(DropdownMenuContext);
  return (
    <DropdownMenuSubContentHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & BaseUIProps
>(({ className, sideOffset = 4, ...props }, ref) => {
  const context = React.useContext(DropdownMenuContext);
  return (
    <DropdownMenuPortal>
      <DropdownMenuContentHandler
        ref={ref}
        className={className}
        sideOffset={sideOffset}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        {...props}
      />
    </DropdownMenuPortal>
  );
});
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & BaseUIProps & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => {
  const context = React.useContext(DropdownMenuContext);
  return (
    <DropdownMenuItemHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      inset={inset}
      {...props}
    />
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> & BaseUIProps
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(DropdownMenuContext);
  return (
    <DropdownMenuCheckboxItemHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    >
      {children}
    </DropdownMenuCheckboxItemHandler>
  );
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> & BaseUIProps
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(DropdownMenuContext);
  return (
    <DropdownMenuRadioItemHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    >
      {children}
    </DropdownMenuRadioItemHandler>
  );
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & BaseUIProps & {
    inset?: boolean;
  }
>(({ className, ...props }, ref) => {
  const context = React.useContext(DropdownMenuContext);
  return (
    <DropdownMenuLabelHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(DropdownMenuContext);
  return (
    <DropdownMenuSeparatorHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & BaseUIProps) => {
  const context = React.useContext(DropdownMenuContext);
  return (
    <DropdownMenuShortcutHandler
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

const DropdownMenuExport = Object.assign(DropdownMenu, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioItem: DropdownMenuRadioItem,
  Label: DropdownMenuLabel,
  Separator: DropdownMenuSeparator,
  Shortcut: DropdownMenuShortcut,
  Group: DropdownMenuGroup,
  Portal: DropdownMenuPortal,
  Sub: DropdownMenuSub,
  SubContent: DropdownMenuSubContent,
  SubTrigger: DropdownMenuSubTrigger,
  RadioGroup: DropdownMenuRadioGroup,
});

export {
  DropdownMenuExport as DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
export default DropdownMenuExport;


export type { BaseUIProps };
