"use client";

import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

const MenubarHandler = createHandler<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> & BaseUIProps>({ componentName: "menubar", exportName: "Menubar" });
const MenubarMenuHandler = createHandler<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Menu> & BaseUIProps>({ componentName: "menubar", exportName: "MenubarMenu" });
const MenubarTriggerHandler = createHandler<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> & BaseUIProps>({ componentName: "menubar", exportName: "MenubarTrigger" });
const MenubarContentHandler = createHandler<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content> & BaseUIProps>({ componentName: "menubar", exportName: "MenubarContent" });
const MenubarItemHandler = createHandler<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & BaseUIProps & { inset?: boolean }>({ componentName: "menubar", exportName: "MenubarItem" });
const MenubarSeparatorHandler = createHandler<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> & BaseUIProps>({ componentName: "menubar", exportName: "MenubarSeparator" });
const MenubarLabelHandler = createHandler<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & BaseUIProps & { inset?: boolean }>({ componentName: "menubar", exportName: "MenubarLabel" });
const MenubarCheckboxItemHandler = createHandler<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> & BaseUIProps>({ componentName: "menubar", exportName: "MenubarCheckboxItem" });
const MenubarRadioGroupHandler = createHandler<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioGroup> & BaseUIProps>({ componentName: "menubar", exportName: "MenubarRadioGroup" });
const MenubarRadioItemHandler = createHandler<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> & BaseUIProps>({ componentName: "menubar", exportName: "MenubarRadioItem" });
const MenubarSubHandler = createHandler<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Sub> & BaseUIProps>({ componentName: "menubar", exportName: "MenubarSub" });
const MenubarSubTriggerHandler = createHandler<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & BaseUIProps>({ componentName: "menubar", exportName: "MenubarSubTrigger" });
const MenubarSubContentHandler = createHandler<React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> & BaseUIProps>({ componentName: "menubar", exportName: "MenubarSubContent" });
const MenubarShortcutHandler = createHandler<React.HTMLAttributes<HTMLSpanElement> & BaseUIProps>({ componentName: "menubar", exportName: "MenubarShortcut" });

const MenubarContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> & BaseUIProps
>(({ className, version = "default", variant = "default", effects, ...props }, ref) => (
  <MenubarContext.Provider value={{ version, variant, effects }}>
    <MenubarHandler ref={ref} className={className} version={version} variant={variant} effects={effects} {...props} />
  </MenubarContext.Provider>
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarMenu = ({
  version,
  variant,
  effects,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Menu> & BaseUIProps) => {
  const context = React.useContext(MenubarContext);
  return (
    <MenubarMenuHandler
      version={version || context.version}
      variant={variant || context.variant}
      effects={effects || context.effects}
      {...props}
    />
  );
};

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(MenubarContext);
  return (
    <MenubarTriggerHandler ref={ref} className={className} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content> & BaseUIProps
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => {
  const context = React.useContext(MenubarContext);
  return (
    <MenubarContentHandler
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & BaseUIProps & { inset?: boolean }
>(({ className, inset, ...props }, ref) => {
  const context = React.useContext(MenubarContext);
  return (
    <MenubarItemHandler ref={ref} className={className} inset={inset} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> & BaseUIProps
>(({ className, children, checked, ...props }, ref) => {
  const context = React.useContext(MenubarContext);
  return (
    <MenubarCheckboxItemHandler ref={ref} className={className} checked={checked} version={context.version} variant={context.variant} effects={context.effects} {...props}>
      {children}
    </MenubarCheckboxItemHandler>
  );
});
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> & BaseUIProps
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(MenubarContext);
  return (
    <MenubarRadioItemHandler ref={ref} className={className} version={context.version} variant={context.variant} effects={context.effects} {...props}>
      {children}
    </MenubarRadioItemHandler>
  );
});
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & BaseUIProps & { inset?: boolean }
>(({ className, inset, ...props }, ref) => {
  const context = React.useContext(MenubarContext);
  return (
    <MenubarLabelHandler ref={ref} className={className} inset={inset} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(MenubarContext);
  return (
    <MenubarSeparatorHandler ref={ref} className={className} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
});
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & BaseUIProps) => {
  const context = React.useContext(MenubarContext);
  return (
    <MenubarShortcutHandler className={className} version={context.version} variant={context.variant} effects={context.effects} {...props} />
  );
};
MenubarShortcut.displayName = "MenubarShortcut";

const MenubarSub = MenubarSubHandler;
const MenubarRadioGroup = MenubarRadioGroupHandler;
const MenubarSubContent = MenubarSubContentHandler;
const MenubarSubTrigger = MenubarSubTriggerHandler;

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
};
export default Menubar;