import * as React from 'react';
import { MenubarPrimitive } from '../_base/menubar';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '../_base/menubar';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';


const Menubar = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'flex h-10 items-center space-x-1 border border-[var(--tp-border-outer)] bg-[var(--tp-panel)] p-1 rounded-none',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const MenubarTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'flex cursor-default select-none items-center px-3 py-1 text-sm font-display font-medium uppercase tracking-wide outline-none focus:bg-[var(--tp-accent)] focus:text-[var(--tp-bg)] data-[state=open]:bg-[var(--tp-accent)] data-[state=open]:text-[var(--tp-bg)] rounded-none',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & { effects?: TechPanelEffects } & {
    inset?: boolean;
  }
>(({ className, effects = 'on', inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'flex cursor-default select-none items-center px-2 py-1.5 text-sm font-mono outline-none focus:bg-[var(--tp-accent)] focus:text-[var(--tp-bg)] data-[state=open]:bg-[var(--tp-accent)] data-[state=open]:text-[var(--tp-bg)] rounded-none',
      inset && 'pl-8',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'z-50 min-w-[8rem] overflow-hidden border border-[var(--tp-border-outer)] bg-[var(--tp-panel)] p-1 text-[var(--text-primary)] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-none',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content> & { effects?: TechPanelEffects }
>(
  (
    { className, align = 'start', alignOffset = -4, sideOffset = 8, effects = 'on', ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(techPanelEffectsClass(effects), 
          'z-50 min-w-[12rem] overflow-hidden border border-[var(--tp-border-outer)] bg-[var(--tp-panel)] p-1 text-[var(--text-primary)] shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-none',
          className
        )}
        style={{ } as React.CSSProperties}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & { effects?: TechPanelEffects } & {
    inset?: boolean;
  }
>(({ className, effects = 'on', inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'relative flex cursor-default select-none items-center px-2 py-1.5 text-sm font-mono outline-none focus:bg-[var(--tp-accent)] focus:text-[var(--tp-bg)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 rounded-none',
      inset && 'pl-8',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm font-mono outline-none focus:bg-[var(--tp-accent)] focus:text-[var(--tp-bg)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 rounded-none',
      className
    )}
    checked={checked}
    style={{ } as React.CSSProperties}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm font-mono outline-none focus:bg-[var(--tp-accent)] focus:text-[var(--tp-bg)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 rounded-none',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <DotFilledIcon className="h-4 w-4 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & { effects?: TechPanelEffects } & {
    inset?: boolean;
  }
>(({ className, effects = 'on', inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'px-2 py-1.5 text-sm font-semibold font-display uppercase',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn(techPanelEffectsClass(effects), '-mx-1 my-1 h-px bg-[var(--tp-border-inner)]', className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, effects = 'on', ...props }: React.HTMLAttributes<HTMLSpanElement> & { effects?: TechPanelEffects }) => {
  return (
    <span
      className={cn(techPanelEffectsClass(effects), 
        'ml-auto text-xs tracking-widest text-[var(--text-muted)]',
        className
      )}
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
