import { cn } from '@/lib/utils';
import * as React from 'react';
import { CheckIcon, ChevronRightIcon, DotFilledIcon, MenubarPrimitive } from '../_base/menubar';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';

const Menubar = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'flex h-12 items-center space-x-1 border border-[var(--es-hex-line)] bg-[var(--es-surface)] p-1 ',
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
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'flex cursor-default select-none items-center px-3 py-1 text-sm font-sans font-medium outline-none focus:bg-[var(--es-plasma-1)] focus:text-[var(--es-bg)] data-[state=open]:bg-[var(--es-plasma-1)] data-[state=open]:text-[var(--es-bg)] ',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & { effects?: EnergyShieldEffects } & {
    inset?: boolean;
  }
>(({ className, effects = 'on', inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'flex cursor-default select-none items-center px-2 py-1.5 text-sm font-sans outline-none focus:bg-[var(--es-plasma-1)] focus:text-[var(--es-bg)] data-[state=open]:bg-[var(--es-plasma-1)] data-[state=open]:text-[var(--es-bg)] ',
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
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'z-50 min-w-[8rem] overflow-hidden border border-[var(--es-hex-line)] bg-[var(--es-surface)] p-1 text-[var(--text-primary)] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content> & { effects?: EnergyShieldEffects }
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
        className={cn(energyShieldEffectsClass(effects), 
          'z-50 min-w-[12rem] overflow-hidden border border-[var(--es-hex-line)] bg-[var(--es-surface)] p-1 text-[var(--text-primary)] shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ',
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
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & { effects?: EnergyShieldEffects } & {
    inset?: boolean;
  }
>(({ className, effects = 'on', inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'relative flex cursor-default select-none items-center px-2 py-1.5 text-sm font-sans outline-none focus:bg-[var(--es-plasma-1)] focus:text-[var(--es-bg)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ',
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
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm font-sans outline-none focus:bg-[var(--es-plasma-1)] focus:text-[var(--es-bg)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ',
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
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm font-sans outline-none focus:bg-[var(--es-plasma-1)] focus:text-[var(--es-bg)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ',
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
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & { effects?: EnergyShieldEffects } & {
    inset?: boolean;
  }
>(({ className, effects = 'on', inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'px-2 py-1.5 text-sm font-semibold font-sans',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), '-mx-1 my-1 h-px bg-[var(--es-hex-line)]', className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, effects = 'on', ...props }: React.HTMLAttributes<HTMLSpanElement> & { effects?: EnergyShieldEffects }) => {
  return (
    <span
      className={cn(energyShieldEffectsClass(effects), 
        'ml-auto text-xs tracking-widest text-[var(--text-muted)]',
        className
      )}
      {...props}
    />
  );
};
MenubarShortcut.displayName = 'MenubarShortcut';

export {
Menubar,MenubarCheckboxItem,MenubarContent,MenubarGroup,MenubarItem,MenubarLabel,MenubarMenu,MenubarPortal,MenubarRadioGroup,
MenubarRadioItem,MenubarSeparator,MenubarShortcut,MenubarSub,MenubarSubContent,
MenubarSubTrigger,MenubarTrigger
};
