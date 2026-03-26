"use client";

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

const CommandHandler = createHandler<React.ComponentPropsWithoutRef<typeof CommandPrimitive> & BaseUIProps>({
  componentName: "command",
  exportName: "Command"
});

const CommandDialogHandler = createHandler<DialogProps & BaseUIProps>({
  componentName: "command",
  exportName: "CommandDialog"
});

const CommandInputHandler = createHandler<React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & BaseUIProps>({
  componentName: "command",
  exportName: "CommandInput"
});

const CommandListHandler = createHandler<React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> & BaseUIProps>({
  componentName: "command",
  exportName: "CommandList"
});

const CommandEmptyHandler = createHandler<React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> & BaseUIProps>({
  componentName: "command",
  exportName: "CommandEmpty"
});

const CommandGroupHandler = createHandler<React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> & BaseUIProps>({
  componentName: "command",
  exportName: "CommandGroup"
});

const CommandItemHandler = createHandler<React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & BaseUIProps>({
  componentName: "command",
  exportName: "CommandItem"
});

const CommandShortcutHandler = createHandler<React.HTMLAttributes<HTMLSpanElement> & BaseUIProps>({
  componentName: "command",
  exportName: "CommandShortcut"
});

const CommandSeparatorHandler = createHandler<React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> & BaseUIProps>({
  componentName: "command",
  exportName: "CommandSeparator"
});

const CommandContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive> & BaseUIProps
>(({ className, version = "default", variant = "default", effects, ...props }, ref) => (
  <CommandContext.Provider value={{ version, variant, effects }}>
    <CommandHandler
      ref={ref}
      className={className}
      version={version}
      variant={variant}
      effects={effects}
      {...props}
    />
  </CommandContext.Provider>
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({
  version = "default",
  variant = "default",
  effects,
  children,
  ...props
}: DialogProps & BaseUIProps) => {
  return (
    <CommandContext.Provider value={{ version, variant, effects }}>
      <CommandDialogHandler version={version} variant={variant} effects={effects} {...props}>
        {children}
      </CommandDialogHandler>
    </CommandContext.Provider>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(CommandContext);
  return (
    <CommandInputHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(CommandContext);
  return (
    <CommandListHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> & BaseUIProps
>((props, ref) => {
  const context = React.useContext(CommandContext);
  return (
    <CommandEmptyHandler
      ref={ref}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(CommandContext);
  return (
    <CommandGroupHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(CommandContext);
  return (
    <CommandSeparatorHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(CommandContext);
  return (
    <CommandItemHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & BaseUIProps) => {
  const context = React.useContext(CommandContext);
  return (
    <CommandShortcutHandler
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
export default Command;
export type { BaseUIProps };
