import * as React from 'react';
import { SelectPrimitive } from '../_base/select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', children, style, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'flex h-10 w-full items-center justify-between bg-[var(--th-surface)] px-3 py-2 text-sm placeholder:text-[var(--th-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--th-primary)] disabled:cursor-not-allowed disabled:opacity-50 font-sans text-[var(--th-primary)] transition-colors hover:bg-[var(--th-primary)]/10 [&>span]:line-clamp-1',
      className
    )}
    style={{ ...bracketsStyle, ...style }}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'flex cursor-default items-center justify-center py-1 text-[var(--th-muted)]',
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'flex cursor-default items-center justify-center py-1 text-[var(--th-muted)]',
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', children, position = 'popper', style, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(tacticalHudEffectsClass(effects), 
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden bg-[var(--th-surface)]/95 text-[var(--th-primary)] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      style={{ ...bracketsStyle, ...style }}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(tacticalHudEffectsClass(effects), 
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'py-1.5 pl-8 pr-2 text-xs font-bold font-sans uppercase text-[var(--th-muted)]',
      className
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'relative flex w-full cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-[var(--th-primary)]/10 focus:text-[var(--th-active)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 font-sans transition-colors',
      className
    )}
    {...props}
  />
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), '-mx-1 my-1 h-px bg-[var(--th-muted)]/20', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
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
