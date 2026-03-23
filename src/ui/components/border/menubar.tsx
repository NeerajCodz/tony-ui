import * as React from 'react';
import { MenubarBase, MenubarMenuBase, MenubarTriggerBase, MenubarContentBase, MenubarItemBase, MenubarSeparatorBase, MenubarLabelBase, MenubarCheckboxItemBase, MenubarRadioGroupBase, MenubarRadioItemBase, MenubarPortalBase, MenubarSubContentBase, MenubarSubTriggerBase, MenubarGroupBase, MenubarSubBase, MenubarShortcutBase } from '@/ui/components/_base/menubar';
import { cn } from '@/lib/utils';
import { Check, ChevronRight, Circle } from 'lucide-react';

const MenubarMenu = MenubarMenuBase;
const MenubarGroup = MenubarGroupBase;
const MenubarPortal = MenubarPortalBase;
const MenubarSub = MenubarSubBase;
const MenubarRadioGroup = MenubarRadioGroupBase;

const Menubar = React.forwardRef<React.ComponentRef<typeof MenubarBase>, React.ComponentPropsWithoutRef<typeof MenubarBase>>(
  ({ className, ...props }, ref) => (
    <MenubarBase
      ref={ref}
      className={cn(
        'flex h-10 items-center space-x-1 rounded-none border border-[var(--br-border-dim)] bg-background p-1 font-mono',
        className
      )}
      {...props}
    />
  )
);
Menubar.displayName = 'Menubar';

const MenubarTrigger = React.forwardRef<React.ComponentRef<typeof MenubarTriggerBase>, React.ComponentPropsWithoutRef<typeof MenubarTriggerBase>>(
  ({ className, ...props }, ref) => (
    <MenubarTriggerBase
      ref={ref}
      className={cn(
        'flex cursor-default select-none items-center rounded-none px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        className
      )}
      {...props}
    />
  )
);
MenubarTrigger.displayName = 'MenubarTrigger';

const MenubarSubTrigger = React.forwardRef<React.ComponentRef<typeof MenubarSubTriggerBase>, React.ComponentPropsWithoutRef<typeof MenubarSubTriggerBase> & { inset?: boolean }>(
  ({ className, inset, children, ...props }, ref) => (
    <MenubarSubTriggerBase
      ref={ref}
      className={cn(
        'flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
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

const MenubarSubContent = React.forwardRef<React.ComponentRef<typeof MenubarSubContentBase>, React.ComponentPropsWithoutRef<typeof MenubarSubContentBase>>(
  ({ className, ...props }, ref) => (
    <MenubarSubContentBase
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-none border border-[var(--br-border-dim)] bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 font-mono',
        className
      )}
      {...props}
    />
  )
);
MenubarSubContent.displayName = 'MenubarSubContent';

const MenubarContent = React.forwardRef<React.ComponentRef<typeof MenubarContentBase>, React.ComponentPropsWithoutRef<typeof MenubarContentBase>>(
  ({ className, ...props }, ref) => (
    <MenubarContentBase
      ref={ref}
      className={cn(
        'z-50 min-w-[12rem] overflow-hidden rounded-none border border-[var(--br-border-dim)] bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 font-mono',
        className
      )}
      {...props}
    />
  )
);
MenubarContent.displayName = 'MenubarContent';

const MenubarItem = React.forwardRef<React.ComponentRef<typeof MenubarItemBase>, React.ComponentPropsWithoutRef<typeof MenubarItemBase> & { inset?: boolean }>(
  ({ className, inset, ...props }, ref) => (
    <MenubarItemBase
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
);
MenubarItem.displayName = 'MenubarItem';

const MenubarCheckboxItem = React.forwardRef<React.ComponentRef<typeof MenubarCheckboxItemBase>, React.ComponentPropsWithoutRef<typeof MenubarCheckboxItemBase>>(
  ({ className, children, checked, ...props }, ref) => (
    <MenubarCheckboxItemBase
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-none py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarItemBase>
          <Check className="h-4 w-4" />
        </MenubarItemBase>
      </span>
      {children}
    </MenubarCheckboxItemBase>
  )
);
MenubarCheckboxItem.displayName = 'MenubarCheckboxItem';

const MenubarRadioItem = React.forwardRef<React.ComponentRef<typeof MenubarRadioItemBase>, React.ComponentPropsWithoutRef<typeof MenubarRadioItemBase>>(
  ({ className, children, ...props }, ref) => (
    <MenubarRadioItemBase
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-none py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarItemBase>
          <Circle className="h-2 w-2 fill-current" />
        </MenubarItemBase>
      </span>
      {children}
    </MenubarRadioItemBase>
  )
);
MenubarRadioItem.displayName = 'MenubarRadioItem';

const MenubarLabel = React.forwardRef<React.ComponentRef<typeof MenubarLabelBase>, React.ComponentPropsWithoutRef<typeof MenubarLabelBase> & { inset?: boolean }>(
  ({ className, inset, ...props }, ref) => (
    <MenubarLabelBase
      ref={ref}
      className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
      {...props}
    />
  )
);
MenubarLabel.displayName = 'MenubarLabel';

const MenubarSeparator = React.forwardRef<React.ComponentRef<typeof MenubarSeparatorBase>, React.ComponentPropsWithoutRef<typeof MenubarSeparatorBase>>(
  ({ className, ...props }, ref) => (
    <MenubarSeparatorBase
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-muted', className)}
      {...props}
    />
  )
);
MenubarSeparator.displayName = 'MenubarSeparator';

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <MenubarShortcutBase
      className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
      {...props}
    />
  );
};
MenubarShortcut.displayName = 'MenubarShortcut';

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
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
