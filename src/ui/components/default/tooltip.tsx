import { cn } from '@/lib/utils';
import * as React from 'react';
import { TooltipArrowBase, TooltipBase, TooltipContentBase, TooltipProviderBase, TooltipTriggerBase } from '../_base/tooltip';

export const Tooltip = TooltipBase;
export const TooltipTrigger = TooltipTriggerBase;
export const TooltipProvider = TooltipProviderBase;

export const TooltipContent = React.forwardRef<React.ComponentRef<typeof TooltipContentBase>, React.ComponentPropsWithoutRef<typeof TooltipContentBase>>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipContentBase
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden rounded-md border border-[var(--df-border)] bg-[var(--df-surface)] px-3 py-1.5 text-sm text-[var(--df-text)] shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  )
);
TooltipContent.displayName = 'TooltipContent';

export const TooltipArrow = React.forwardRef<React.ComponentRef<typeof TooltipArrowBase>, React.ComponentPropsWithoutRef<typeof TooltipArrowBase>>(
    ({ className, ...props }, ref) => (
        <TooltipArrowBase ref={ref} className={cn('fill-[var(--df-border)]', className)} {...props} />
    )
);
TooltipArrow.displayName = 'TooltipArrow';
