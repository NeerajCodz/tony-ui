import * as React from 'react';
import { SelectPrimitive } from '../_base/select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;


const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 
      'flex h-10 w-full items-center justify-between border border-(--qg-border) bg-(--qg-surface) px-3 py-2 text-sm placeholder:text-(--text-muted) focus:outline-none focus:ring-1 focus:ring-(--qg-iris-1) disabled:cursor-not-allowed disabled:opacity-50 font-sans text-(--text-primary) transition-colors hover:bg-(--qg-iris-1)/10 [&>span]:line-clamp-1',
      '[clip-path:polygon(var(--fold)_0%,100%_0%,100%_calc(100%-var(--fold)),calc(100%-var(--fold))_100%,0%_100%,0%_var(--fold))]',
      className
    )}
    style={{ '--fold': '8px' } as React.CSSProperties}
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
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 
      'flex cursor-default items-center justify-center py-1 text-(--text-muted)',
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
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 
      'flex cursor-default items-center justify-center py-1 text-(--text-muted)',
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
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(quantumGateEffectsClass(effects), 
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden border border-(--qg-border) bg-(--qg-surface) text-(--text-primary) shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        '[clip-path:polygon(var(--fold)_0%,100%_0%,100%_calc(100%-var(--fold)),calc(100%-var(--fold))_100%,0%_100%,0%_var(--fold))]',
        className
      )}
      position={position}
      style={{ '--fold': '12px' } as React.CSSProperties}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(quantumGateEffectsClass(effects), 
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
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 
      'py-1.5 pl-8 pr-2 text-xs font-bold font-sans uppercase text-(--text-muted)',
      className
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 
      'relative flex w-full cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-(--qg-iris-1) focus:text-(--qg-bg) data-[disabled]:pointer-events-none data-[disabled]:opacity-50 font-sans transition-colors',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), '-mx-1 my-1 h-px bg-(--qg-border)', className)}
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
