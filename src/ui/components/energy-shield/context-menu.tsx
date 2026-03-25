import * as React from 'react';
import { ContextMenuPrimitive } from '../_base/context-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;


const ContextMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & { effects?: EnergyShieldEffects } & {
    inset?: boolean;
  }
>(({ className, effects = 'on', inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none focus:bg-[var(--es-plasma-1)] focus:text-[var(--es-bg)] data-[state=open]:bg-[var(--es-plasma-1)] data-[state=open]:text-[var(--es-bg)] font-mono',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'z-50 min-w-[8rem] overflow-hidden border border-[var(--es-hex-line)] bg-[var(--es-surface)] p-1 text-[var(--text-primary)] shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    style={{ '--corner': '8px' } as React.CSSProperties}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(energyShieldEffectsClass(effects), 
        'z-50 min-w-[8rem] overflow-hidden border border-[var(--es-hex-line)] bg-[var(--es-surface)] p-1 text-[var(--text-primary)] shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      style={{ '--corner': '8px' } as React.CSSProperties}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & { effects?: EnergyShieldEffects } & {
    inset?: boolean;
  }
>(({ className, effects = 'on', inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none focus:bg-[var(--es-plasma-1)] focus:text-[var(--es-bg)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 font-mono transition-colors',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-[var(--es-plasma-1)] focus:text-[var(--es-bg)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 font-mono',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-[var(--es-plasma-1)] focus:text-[var(--es-bg)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 font-mono',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & { effects?: EnergyShieldEffects } & {
    inset?: boolean;
  }
>(({ className, effects = 'on', inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'px-2 py-1.5 text-xs font-bold text-[var(--text-muted)] font-sans uppercase tracking-wider',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), '-mx-1 my-1 h-px bg-[var(--es-hex-line)]', className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, effects = 'on', ...props }: React.HTMLAttributes<HTMLSpanElement> & { effects?: EnergyShieldEffects }) => {
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
ContextMenuShortcut.displayName = 'ContextMenuShortcut';

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
