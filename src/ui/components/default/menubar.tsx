import * as React from 'react';
import { 
    MenubarBase, 
    MenubarMenuBase, 
    MenubarTriggerBase, 
    MenubarContentBase, 
    MenubarItemBase, 
    MenubarSeparatorBase, 
    MenubarLabelBase, 
    MenubarCheckboxItemBase, 
    MenubarRadioGroupBase, 
    MenubarRadioItemBase, 
    MenubarSubBase, 
    MenubarSubTriggerBase, 
    MenubarSubContentBase, 
    MenubarShortcutBase,
    MenubarGroupBase,
    MenubarPortalBase
} from '../_base/menubar';
import { cn } from '@/lib/utils';
import { Check, ChevronRight, Circle } from 'lucide-react';

export const Menubar = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof MenubarBase>>(
  ({ className, ...props }, ref) => (
    <MenubarBase
      ref={ref}
      className={cn(
        'flex h-10 items-center space-x-1 rounded-md border border-[var(--df-border)] bg-[var(--df-surface)] p-1',
        className
      )}
      {...props}
    />
  )
);
Menubar.displayName = 'Menubar';

export const MenubarMenu = MenubarMenuBase;
export const MenubarGroup = MenubarGroupBase;
export const MenubarPortal = MenubarPortalBase;
export const MenubarSub = MenubarSubBase;
export const MenubarRadioGroup = MenubarRadioGroupBase;

export const MenubarTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof MenubarTriggerBase>>(
  ({ className, ...props }, ref) => (
    <MenubarTriggerBase
      ref={ref}
      className={cn(
        'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-[var(--df-accent)]/10 focus:text-[var(--df-accent)] data-[state=open]:bg-[var(--df-accent)]/10 data-[state=open]:text-[var(--df-accent)]',
        className
      )}
      {...props}
    />
  )
);
MenubarTrigger.displayName = 'MenubarTrigger';

export const MenubarSubTrigger = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof MenubarSubTriggerBase>>(
  ({ className, inset, children, ...props }, ref) => (
    <MenubarSubTriggerBase
      ref={ref}
      className={cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-[var(--df-accent)]/10 focus:text-[var(--df-accent)] data-[state=open]:bg-[var(--df-accent)]/10 data-[state=open]:text-[var(--df-accent)]',
        inset && 'pl-8',
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </MenubarSubTriggerBase>
  )
);
MenubarSubTrigger.displayName = 'MenubarSubTrigger';

export const MenubarSubContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof MenubarSubContentBase>>(
  ({ className, ...props }, ref) => (
    <MenubarSubContentBase
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border border-[var(--df-border)] bg-[var(--df-surface)] p-1 text-[var(--df-text)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  )
);
MenubarSubContent.displayName = 'MenubarSubContent';

export const MenubarContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof MenubarContentBase>>(
  ({ className, align = 'start', alignOffset = -4, sideOffset = 8, ...props }, ref) => (
    <MenubarContentBase
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[12rem] overflow-hidden rounded-md border border-[var(--df-border)] bg-[var(--df-surface)] p-1 text-[var(--df-text)] shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  )
);
MenubarContent.displayName = 'MenubarContent';

export const MenubarItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof MenubarItemBase>>(
  ({ className, inset, ...props }, ref) => (
    <MenubarItemBase
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-[var(--df-accent)]/10 focus:text-[var(--df-accent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
);
MenubarItem.displayName = 'MenubarItem';

export const MenubarCheckboxItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof MenubarCheckboxItemBase>>(
  ({ className, children, checked, ...props }, ref) => (
    <MenubarCheckboxItemBase
      ref={ref}
      checked={checked}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-[var(--df-accent)]/10 focus:text-[var(--df-accent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Check className="h-4 w-4" />
      </span>
      {children}
    </MenubarCheckboxItemBase>
  )
);
MenubarCheckboxItem.displayName = 'MenubarCheckboxItem';

export const MenubarRadioItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof MenubarRadioItemBase>>(
  ({ className, children, ...props }, ref) => (
    <MenubarRadioItemBase
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-[var(--df-accent)]/10 focus:text-[var(--df-accent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <Circle className="h-2 w-2 fill-current" />
      </span>
      {children}
    </MenubarRadioItemBase>
  )
);
MenubarRadioItem.displayName = 'MenubarRadioItem';

export const MenubarLabel = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof MenubarLabelBase>>(
  ({ className, inset, ...props }, ref) => (
    <MenubarLabelBase
      ref={ref}
      className={cn(
        'px-2 py-1.5 text-sm font-semibold',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
);
MenubarLabel.displayName = 'MenubarLabel';

export const MenubarSeparator = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof MenubarSeparatorBase>>(
  ({ className, ...props }, ref) => (
    <MenubarSeparatorBase
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-[var(--df-border)]', className)}
      {...props}
    />
  )
);
MenubarSeparator.displayName = 'MenubarSeparator';

export const MenubarShortcut = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<typeof MenubarShortcutBase>>(
  ({ className, ...props }, ref) => (
    <MenubarShortcutBase
      ref={ref}
      className={cn('ml-auto text-xs tracking-widest text-[var(--df-muted)]', className)}
      {...props}
    />
  )
);
MenubarShortcut.displayName = 'MenubarShortcut';
