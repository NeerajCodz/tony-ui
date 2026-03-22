import * as React from 'react';
import { SelectBase, SelectGroupBase, SelectValueBase, SelectTriggerBase, SelectContentBase, SelectLabelBase, SelectItemBase, SelectSeparatorBase, SelectScrollUpButtonBase, SelectScrollDownButtonBase, SelectIconBase, SelectPortalBase, SelectViewportBase, SelectItemIndicatorBase, SelectItemTextBase } from '@/ui/components/_base/select';
import { cn } from '@/lib/utils';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const Select = SelectBase;
const SelectGroup = SelectGroupBase;
const SelectValue = SelectValueBase;

const SelectTrigger = React.forwardRef<React.ElementRef<typeof SelectTriggerBase>, React.ComponentPropsWithoutRef<typeof SelectTriggerBase>>(
  ({ className, children, ...props }, ref) => (
    <SelectTriggerBase
      ref={ref}
      className={cn(
        'flex h-10 w-full items-center justify-between rounded-none border border-[var(--cb-trace)] bg-[var(--cb-soldermask)] px-3 py-2 text-sm ring-offset-background placeholder:text-[var(--cb-trace-dim)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--cb-trace-lit)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono uppercase tracking-widest text-[var(--cb-trace-lit)] shadow-[0_0_5px_var(--cb-trace)]',
        className
      )}
      {...props}
    >
      {children}
      <SelectIconBase asChild>
        <ChevronDown className="h-4 w-4 opacity-50 text-[var(--cb-trace-dim)]" />
      </SelectIconBase>
    </SelectTriggerBase>
  )
);
SelectTrigger.displayName = 'SelectTrigger';

const SelectScrollUpButton = React.forwardRef<React.ElementRef<typeof SelectScrollUpButtonBase>, React.ComponentPropsWithoutRef<typeof SelectScrollUpButtonBase>>(
  ({ className, ...props }, ref) => (
    <SelectScrollUpButtonBase
      ref={ref}
      className={cn('flex cursor-default items-center justify-center py-1 text-[var(--cb-trace-lit)]', className)}
      {...props}
    >
      <ChevronUp className="h-4 w-4" />
    </SelectScrollUpButtonBase>
  )
);
SelectScrollUpButton.displayName = 'SelectScrollUpButton';

const SelectScrollDownButton = React.forwardRef<React.ElementRef<typeof SelectScrollDownButtonBase>, React.ComponentPropsWithoutRef<typeof SelectScrollDownButtonBase>>(
  ({ className, ...props }, ref) => (
    <SelectScrollDownButtonBase
      ref={ref}
      className={cn('flex cursor-default items-center justify-center py-1 text-[var(--cb-trace-lit)]', className)}
      {...props}
    >
      <ChevronDown className="h-4 w-4" />
    </SelectScrollDownButtonBase>
  )
);
SelectScrollDownButton.displayName = 'SelectScrollDownButton';

const SelectContent = React.forwardRef<React.ElementRef<typeof SelectContentBase>, React.ComponentPropsWithoutRef<typeof SelectContentBase>>(
  ({ className, children, position = 'popper', ...props }, ref) => (
    <SelectPortalBase>
      <SelectContentBase
        ref={ref}
        className={cn(
          'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-none border border-[var(--cb-trace)] bg-[var(--cb-soldermask)] text-[var(--cb-trace-lit)] shadow-[0_0_15px_var(--cb-trace)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 font-mono uppercase tracking-widest',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectViewportBase
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
          )}
        >
          {children}
        </SelectViewportBase>
        <SelectScrollDownButton />
      </SelectContentBase>
    </SelectPortalBase>
  )
);
SelectContent.displayName = 'SelectContent';

const SelectLabel = React.forwardRef<React.ElementRef<typeof SelectLabelBase>, React.ComponentPropsWithoutRef<typeof SelectLabelBase>>(
  ({ className, ...props }, ref) => (
    <SelectLabelBase
      ref={ref}
      className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold text-[var(--cb-trace-lit)] drop-shadow-[0_0_2px_currentColor]', className)}
      {...props}
    />
  )
);
SelectLabel.displayName = 'SelectLabel';

const SelectItem = React.forwardRef<React.ElementRef<typeof SelectItemBase>, React.ComponentPropsWithoutRef<typeof SelectItemBase>>(
  ({ className, children, ...props }, ref) => (
    <SelectItemBase
      ref={ref}
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-none py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-[var(--cb-trace-dim)]/20 focus:text-[var(--cb-trace-lit)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 font-mono uppercase tracking-widest hover:text-[var(--cb-trace-lit)]',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectItemIndicatorBase>
          <Check className="h-4 w-4" />
        </SelectItemIndicatorBase>
      </span>

      <SelectItemTextBase>{children}</SelectItemTextBase>
    </SelectItemBase>
  )
);
SelectItem.displayName = 'SelectItem';

const SelectSeparator = React.forwardRef<React.ElementRef<typeof SelectSeparatorBase>, React.ComponentPropsWithoutRef<typeof SelectSeparatorBase>>(
  ({ className, ...props }, ref) => (
    <SelectSeparatorBase
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-[var(--cb-trace-dim)]/30', className)}
      {...props}
    />
  )
);
SelectSeparator.displayName = 'SelectSeparator';

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
