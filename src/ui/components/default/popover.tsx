import * as React from 'react';
import { 
    PopoverBase, 
    PopoverTriggerBase, 
    PopoverContentBase, 
    PopoverCloseBase, 
    PopoverArrowBase 
} from '../_base/popover';
import { cn } from '@/lib/utils';

export const Popover = PopoverBase;
export const PopoverTrigger = PopoverTriggerBase;
export const PopoverClose = PopoverCloseBase;

export const PopoverContent = React.forwardRef<React.ElementRef<typeof PopoverContentBase>, React.ComponentPropsWithoutRef<typeof PopoverContentBase>>(
  ({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
    <PopoverContentBase
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-72 rounded-md border border-[var(--df-border)] bg-[var(--df-surface)] p-4 text-[var(--df-text)] shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  )
);
PopoverContent.displayName = 'PopoverContent';

export const PopoverArrow = React.forwardRef<React.ElementRef<typeof PopoverArrowBase>, React.ComponentPropsWithoutRef<typeof PopoverArrowBase>>(
  ({ className, ...props }, ref) => (
    <PopoverArrowBase
      ref={ref}
      className={cn('fill-[var(--df-border)]', className)}
      {...props}
    />
  )
);
PopoverArrow.displayName = 'PopoverArrow';
