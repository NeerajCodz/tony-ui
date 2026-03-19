import React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from '../../../lib/utils';

// Styles for Root (Bar)
const getRootStyles = (version: string) => {
  const base = "flex h-10 items-center space-x-1 rounded-md border bg-background p-1";
  
  const styles: Record<string, string> = {
    'angular-corner': "border-cyan-900 bg-gray-950 clip-path-bevel border-b-2 border-cyan-500 rounded-none",
    'default': "border-gray-800 bg-gray-900"
  };
  return cn(base, styles[version] || styles['default']);
};

// Styles for Trigger
const getTriggerStyles = (version: string) => {
  const base = "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground";
  
  const styles: Record<string, string> = {
    'angular-corner': "focus:bg-cyan-500 focus:text-black data-[state=open]:bg-cyan-500 data-[state=open]:text-black hover:skew-x-[-10deg] transition-transform rounded-none uppercase font-bold tracking-wider",
    'default': "focus:bg-cyan-500 focus:text-black"
  };
  return cn(base, styles[version] || styles['default']);
};

// Styles for Content
const getContentStyles = (version: string) => {
  const base = "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";
  
  const styles: Record<string, string> = {
    'angular-corner': "border-cyan-500/50 bg-black/95 text-cyan-500 clip-path-bevel shadow-[0_0_15px_rgba(6,182,212,0.3)] rounded-none border-l-4",
    'default': "border-cyan-500/30 bg-black/90"
  };
  return cn(base, styles[version] || styles['default']);
};

// Styles for Item
const getItemStyles = (version: string) => {
  const base = "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50";
  
  const styles: Record<string, string> = {
    'angular-corner': "focus:bg-cyan-900/50 focus:text-cyan-300 hover:pl-4 transition-all rounded-none focus:border-l-2 focus:border-cyan-500",
    'default': "focus:bg-cyan-500 focus:text-black"
  };
  return cn(base, styles[version] || styles['default']);
};

export const MenubarRoot = ({ className, ...props }: any) => {
  return (
    <MenubarPrimitive.Root
      className={cn(getRootStyles('angular-corner'), className)}
      {...props}
    />
  );
};

export const MenubarTrigger = ({ className, ...props }: any) => {
  return (
    <MenubarPrimitive.Trigger
      className={cn(getTriggerStyles('angular-corner'), className)}
      {...props}
    />
  );
};

export const MenubarContent = ({ className, align = 'start', alignOffset = -4, sideOffset = 8, ...props }: any) => {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(getContentStyles('angular-corner'), className)}
        {...props}
      />
    </MenubarPrimitive.Portal>
  );
};

export const MenubarItem = ({ className, inset, ...props }: any) => {
  return (
    <MenubarPrimitive.Item
      className={cn(
        getItemStyles('angular-corner'),
        inset && "pl-8",
        className
      )}
      {...props}
    />
  );
};

export const MenubarCheckboxItem = ({ className, children, checked, ...props }: any) => {
  return (
    <MenubarPrimitive.CheckboxItem
      className={cn(
        getItemStyles('angular-corner'),
        "pl-8",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Check className="h-4 w-4 text-cyan-500" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
};

export const MenubarRadioItem = ({ className, children, ...props }: any) => {
  return (
    <MenubarPrimitive.RadioItem
      className={cn(
        getItemStyles('angular-corner'),
        "pl-8",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current text-cyan-500" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
};

export const MenubarLabel = ({ className, inset, ...props }: any) => {
  return (
    <MenubarPrimitive.Label
      className={cn(
        "px-2 py-1.5 text-sm font-semibold uppercase tracking-widest text-cyan-700",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  );
};

export const MenubarSeparator = ({ className, ...props }: any) => {
  return (
    <MenubarPrimitive.Separator
      className={cn("-mx-1 my-1 h-px bg-cyan-900/50", className)}
      {...props}
    />
  );
};

export const MenubarShortcut = ({ className, ...props }: any) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60 font-mono", className)}
      {...props}
    />
  );
};

export const MenubarSubTrigger = ({ className, inset, children, ...props }: any) => {
  return (
    <MenubarPrimitive.SubTrigger
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-cyan-900/30 data-[state=open]:bg-cyan-900/30",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4 text-cyan-500" />
    </MenubarPrimitive.SubTrigger>
  );
};

export const MenubarSubContent = ({ className, ...props }: any) => {
  return (
    <MenubarPrimitive.SubContent
      className={cn(
        getContentStyles('angular-corner'),
        className
      )}
      {...props}
    />
  );
};
