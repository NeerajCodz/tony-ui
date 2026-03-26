/**
 * Select Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface SelectProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
}

const SelectContentHandler = createHandler<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & BaseUIProps>({
  componentName: "select",
  exportName: "SelectContent"
});

const SelectTriggerHandler = createHandler<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & BaseUIProps>({
  componentName: "select",
  exportName: "SelectTrigger"
});

const SelectItemHandler = createHandler<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & BaseUIProps>({
  componentName: "select",
  exportName: "SelectItem"
});

const SelectLabelHandler = createHandler<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & BaseUIProps>({
  componentName: "select",
  exportName: "SelectLabel"
});

const SelectSeparatorHandler = createHandler<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> & BaseUIProps>({
  componentName: "select",
  exportName: "SelectSeparator"
});

const SelectScrollUpButtonHandler = createHandler<React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> & BaseUIProps>({
  componentName: "select",
  exportName: "SelectScrollUpButton"
});

const SelectScrollDownButtonHandler = createHandler<React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> & BaseUIProps>({
  componentName: "select",
  exportName: "SelectScrollDownButton"
});

const SelectContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const Select = ({ version = "default", variant = "default", effects, ...props }: SelectProps) => {
  return (
    <SelectContext.Provider value={{ version, variant, effects }}>
      <SelectPrimitive.Root {...props} />
    </SelectContext.Provider>
  );
};

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & BaseUIProps
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  return (
    <SelectTriggerHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectTriggerHandler>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  return (
    <SelectScrollUpButtonHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    >
      <ChevronUp className="h-4 w-4" />
    </SelectScrollUpButtonHandler>
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  return (
    <SelectScrollDownButtonHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    >
      <ChevronDown className="h-4 w-4" />
    </SelectScrollDownButtonHandler>
  );
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & BaseUIProps
>(({ className, children, position = "popper", ...props }, ref) => {
  const context = React.useContext(SelectContext);
  return (
    <SelectPrimitive.Portal>
      <SelectContentHandler
        ref={ref}
        className={className}
        position={position}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={`p-1 ${position === "popper" ? "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]" : ""}`}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectContentHandler>
    </SelectPrimitive.Portal>
  );
});
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  return (
    <SelectLabelHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & BaseUIProps
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  return (
    <SelectItemHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectItemHandler>
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  return (
    <SelectSeparatorHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

const SelectExport = Object.assign(Select, {
  Group: SelectGroup,
  Value: SelectValue,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Label: SelectLabel,
  Item: SelectItem,
  Separator: SelectSeparator,
  ScrollUpButton: SelectScrollUpButton,
  ScrollDownButton: SelectScrollDownButton,
});

export {
  SelectExport as Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
export default SelectExport;

