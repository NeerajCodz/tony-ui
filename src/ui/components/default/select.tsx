import * as React from 'react';
import { 
    SelectBase, 
    SelectGroupBase, 
    SelectValueBase, 
    SelectTriggerBase, 
    SelectContentBase, 
    SelectLabelBase, 
    SelectItemBase, 
    SelectSeparatorBase, 
    SelectScrollUpButtonBase,
    SelectScrollDownButtonBase,
    type SelectTriggerBaseProps
} from '../_base/select';
import { cn } from '@/lib/utils';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import * as SelectPrimitive from '@radix-ui/react-select';

export const Select = SelectBase;

export const SelectGroup = SelectGroupBase;

export const SelectValue = SelectValueBase;

export const SelectTrigger = React.forwardRef<React.ComponentRef<typeof SelectTriggerBase>, SelectTriggerBaseProps>(
  ({ className, children, ...props }, ref) => (
    <SelectTriggerBase
      ref={ref}
      className={cn(
        'flex h-10 w-full items-center justify-between rounded-md border border-[var(--df-border)] bg-[var(--df-surface)] px-3 py-2 text-sm placeholder:text-[var(--df-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--df-accent)] disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className='h-4 w-4 opacity-50' />
      </SelectPrimitive.Icon>
    </SelectTriggerBase>
  )
);
SelectTrigger.displayName = 'SelectTrigger';

export const SelectScrollUpButton = React.forwardRef<React.ComponentRef<typeof SelectScrollUpButtonBase>, React.ComponentPropsWithoutRef<typeof SelectScrollUpButtonBase>>(
  ({ className, ...props }, ref) => (
    <SelectScrollUpButtonBase
      ref={ref}
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className
      )}
      {...props}
    >
      <ChevronUp className='h-4 w-4' />
    </SelectScrollUpButtonBase>
  )
);
SelectScrollUpButton.displayName = 'SelectScrollUpButton';

export const SelectScrollDownButton = React.forwardRef<React.ComponentRef<typeof SelectScrollDownButtonBase>, React.ComponentPropsWithoutRef<typeof SelectScrollDownButtonBase>>(
  ({ className, ...props }, ref) => (
    <SelectScrollDownButtonBase
      ref={ref}
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className
      )}
      {...props}
    >
      <ChevronDown className='h-4 w-4' />
    </SelectScrollDownButtonBase>
  )
);
SelectScrollDownButton.displayName = 'SelectScrollDownButton';

export const SelectContent = React.forwardRef<React.ComponentRef<typeof SelectContentBase>, React.ComponentPropsWithoutRef<typeof SelectContentBase>>(
  ({ className, children, position = 'popper', ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectContentBase
        ref={ref}
        className={cn(
          'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-[var(--df-border)] bg-[var(--df-surface)] text-[var(--df-text)] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectContentBase>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = 'SelectContent';

export const SelectLabel = React.forwardRef<React.ComponentRef<typeof SelectLabelBase>, React.ComponentPropsWithoutRef<typeof SelectLabelBase>>(
  ({ className, ...props }, ref) => (
    <SelectLabelBase
      ref={ref}
      className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
      {...props}
    />
  )
);
SelectLabel.displayName = 'SelectLabel';

export const SelectItem = React.forwardRef<React.ComponentRef<typeof SelectItemBase>, React.ComponentPropsWithoutRef<typeof SelectItemBase>>(
  ({ className, children, ...props }, ref) => (
    <SelectItemBase
      ref={ref}
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-[var(--df-accent)]/10 focus:text-[var(--df-accent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
        <SelectPrimitive.ItemIndicator>
          <Check className='h-4 w-4' />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectItemBase>
  )
);
SelectItem.displayName = 'SelectItem';

export const SelectSeparator = React.forwardRef<React.ComponentRef<typeof SelectSeparatorBase>, React.ComponentPropsWithoutRef<typeof SelectSeparatorBase>>(
  ({ className, ...props }, ref) => (
    <SelectSeparatorBase
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-[var(--df-border)]', className)}
      {...props}
    />
  )
);
SelectSeparator.displayName = 'SelectSeparator';
