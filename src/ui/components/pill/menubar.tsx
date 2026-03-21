'use client';

import React, { forwardRef } from 'react';import { cn } from '@/lib/utils';
import { VariantColors } from '@/ui/types/common';

import { MenubarBase, MenubarCheckboxItemBase, MenubarContentBase, MenubarGroupBase, MenubarItemBase, MenubarItemIndicatorBase, MenubarLabelBase, MenubarMenuBase, MenubarPortalBase, MenubarRadioGroupBase, MenubarRadioItemBase, MenubarSeparatorBase, MenubarSubBase, MenubarSubContentBase, MenubarSubTriggerBase, MenubarTriggerBase } from '../_base/menubar';

const getStyles = (type?: string, colors?: VariantColors) => {
  if (!type || !colors) return {};
  
  switch (type) {
    case 'inverse':
      return {
        backgroundColor: colors.text,
        color: colors.background,
        border: `1px solid ${colors.text}`
      };
    case 'contrast':
      return {
        backgroundColor: colors.accent?.primary || colors.text,
        color: '#000000',
        fontWeight: 'bold',
        border: `1px solid ${colors.text}`
      };
    case 'soft':
      return {
        backgroundColor: colors.accent?.rgb ? `rgba(${colors?.accent?.rgb}, 0.1)` : (colors.accent?.primary ? `color-mix(in srgb, ${colors?.accent?.primary} 10%, transparent)` : 'rgba(0,0,0,0.1)'),
        color: colors.accent?.primary || colors.text,
        border: 'none'
      };
    default:
      return {};
  }
};


// Interfaces (simplified for generation)
interface MenubarProps extends React.ComponentPropsWithoutRef<typeof MenubarBase> {
  version?: string;
  variant?: string;
  type?: string;
  colors?: VariantColors;
}

const MenubarRoot = forwardRef<React.ElementRef<typeof MenubarBase>, MenubarProps>(
  ({ className, version, variant, type, colors, ...props }, ref) => (
    <MenubarBase
      ref={ref}
      className={cn(
        "flex h-10 items-center space-x-1 rounded-md border p-1",
        className
      )}
      {...props} style={{ ...getStyles(type, colors), ...(props.style as any) }}
    />
  )
);
MenubarRoot.displayName = MenubarBase.displayName;

const MenubarMenu = MenubarMenuBase;
const MenubarGroup = MenubarGroupBase;
const MenubarPortal = MenubarPortalBase;
const MenubarSub = MenubarSubBase;
const MenubarRadioGroup = MenubarRadioGroupBase;

const MenubarTrigger = forwardRef<React.ElementRef<typeof MenubarTriggerBase>, React.ComponentPropsWithoutRef<typeof MenubarTriggerBase>>(
  ({ className, ...props }, ref) => (
    <MenubarTriggerBase
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
);
MenubarTrigger.displayName = MenubarTriggerBase.displayName;

const MenubarSubTrigger = forwardRef<React.ElementRef<typeof MenubarSubTriggerBase>, React.ComponentPropsWithoutRef<typeof MenubarSubTriggerBase> & { inset?: boolean }>(
  ({ className, inset, children, ...props }, ref) => (
    <MenubarSubTriggerBase
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <span className="ml-auto text-xs tracking-widest text-muted-foreground">▶</span>
    </MenubarSubTriggerBase>
  )
);
MenubarSubTrigger.displayName = MenubarSubTriggerBase.displayName;

const MenubarSubContent = forwardRef<React.ElementRef<typeof MenubarSubContentBase>, React.ComponentPropsWithoutRef<typeof MenubarSubContentBase>>(
  ({ className, ...props }, ref) => (
    <MenubarSubContentBase
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  )
);
MenubarSubContent.displayName = MenubarSubContentBase.displayName;

const MenubarContent = forwardRef<React.ElementRef<typeof MenubarContentBase>, React.ComponentPropsWithoutRef<typeof MenubarContentBase>>(
  ({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
    <MenubarPortalBase>
      <MenubarContentBase
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPortalBase>
  )
);
MenubarContent.displayName = MenubarContentBase.displayName;

const MenubarItem = forwardRef<React.ElementRef<typeof MenubarItemBase>, React.ComponentPropsWithoutRef<typeof MenubarItemBase> & { inset?: boolean }>(
  ({ className, inset, ...props }, ref) => (
    <MenubarItemBase
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
);
MenubarItem.displayName = MenubarItemBase.displayName;

const MenubarCheckboxItem = forwardRef<React.ElementRef<typeof MenubarCheckboxItemBase>, React.ComponentPropsWithoutRef<typeof MenubarCheckboxItemBase>>(
  ({ className, children, checked, ...props }, ref) => (
    <MenubarCheckboxItemBase
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarItemIndicatorBase>
          Check
        </MenubarItemIndicatorBase>
      </span>
      {children}
    </MenubarCheckboxItemBase>
  )
);
MenubarCheckboxItem.displayName = MenubarCheckboxItemBase.displayName;

const MenubarRadioItem = forwardRef<React.ElementRef<typeof MenubarRadioItemBase>, React.ComponentPropsWithoutRef<typeof MenubarRadioItemBase>>(
  ({ className, children, ...props }, ref) => (
    <MenubarRadioItemBase
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarItemIndicatorBase>
          Radio
        </MenubarItemIndicatorBase>
      </span>
      {children}
    </MenubarRadioItemBase>
  )
);
MenubarRadioItem.displayName = MenubarRadioItemBase.displayName;

const MenubarLabel = forwardRef<React.ElementRef<typeof MenubarLabelBase>, React.ComponentPropsWithoutRef<typeof MenubarLabelBase> & { inset?: boolean }>(
  ({ className, inset, ...props }, ref) => (
    <MenubarLabelBase
      ref={ref}
      className={cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
);
MenubarLabel.displayName = MenubarLabelBase.displayName;

const MenubarSeparator = forwardRef<React.ElementRef<typeof MenubarSeparatorBase>, React.ComponentPropsWithoutRef<typeof MenubarSeparatorBase>>(
  ({ className, ...props }, ref) => (
    <MenubarSeparatorBase
      ref={ref}
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      {...props}
    />
  )
);
MenubarSeparator.displayName = MenubarSeparatorBase.displayName;

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
MenubarShortcut.displayName = "MenubarShortcut";

export {
  MenubarRoot,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
