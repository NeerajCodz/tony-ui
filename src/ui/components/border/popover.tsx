import * as React from 'react';
import { PopoverBase, PopoverTriggerBase, PopoverContentBase, type PopoverContentBaseProps } from '@/ui/components/_base/popover';
import { cn } from '@/lib/utils';

const Popover = PopoverBase;
const PopoverTrigger = PopoverTriggerBase;

const PopoverContent = React.forwardRef<React.ElementRef<typeof PopoverContentBase>, PopoverContentBaseProps>(
  ({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
    <PopoverContentBase
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-72 rounded-none border border-[var(--br-border-dim)] bg-[var(--br-bg)] p-4 text-[var(--text-primary)] font-mono shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  )
);
PopoverContent.displayName = 'PopoverContent';

export { Popover, PopoverTrigger, PopoverContent };
