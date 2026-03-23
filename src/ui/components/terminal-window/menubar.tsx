import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'flex h-10 items-center space-x-1 rounded-none border border-[var(--tm-phosphor)] bg-[var(--tm-bg)] p-1',
      className
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'flex cursor-default select-none items-center px-3 py-1.5 text-sm font-medium outline-none focus:bg-[var(--tm-phosphor)] focus:text-[var(--tm-bg)] data-[state=open]:bg-[var(--tm-phosphor)] data-[state=open]:text-[var(--tm-bg)] font-mono uppercase',
      className
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
    effects?: TerminalWindowEffects;
  }
>(({ className, inset, effects = 'on', children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none focus:bg-[var(--tm-phosphor)] focus:text-[var(--tm-bg)] data-[state=open]:bg-[var(--tm-phosphor)] data-[state=open]:text-[var(--tm-bg)] font-mono uppercase',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className='ml-auto h-4 w-4' />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'z-50 min-w-[8rem] overflow-hidden rounded-none border border-[var(--tm-phosphor)] bg-[var(--tm-bg)] p-1 text-[var(--tm-phosphor)] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', align = 'start', alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(terminalWindowEffectsClass(effects), 
        'z-50 min-w-[12rem] overflow-hidden rounded-none border border-[var(--tm-phosphor)] bg-[var(--tm-bg)] p-1 text-[var(--tm-phosphor)] shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
    effects?: TerminalWindowEffects;
  }
>(({ className, inset, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none focus:bg-[var(--tm-phosphor)] focus:text-[var(--tm-bg)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 font-mono uppercase',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> & { effects?: TerminalWindowEffects }
>(({ className, children, checked, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-[var(--tm-phosphor)] focus:text-[var(--tm-bg)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 font-mono uppercase',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <MenubarPrimitive.ItemIndicator>
        <Check className='h-4 w-4' />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> & { effects?: TerminalWindowEffects }
>(({ className, children, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-[var(--tm-phosphor)] focus:text-[var(--tm-bg)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 font-mono uppercase',
      className
    )}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <MenubarPrimitive.ItemIndicator>
        <Circle className='h-2 w-2 fill-current' />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
    effects?: TerminalWindowEffects;
  }
>(({ className, inset, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'px-2 py-1.5 text-sm font-semibold font-mono uppercase text-[var(--tm-phosphor-dim)]',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), '-mx-1 my-1 h-px bg-[var(--tm-phosphor)]/30', className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { effects?: TerminalWindowEffects }) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60 font-mono', className)}
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
