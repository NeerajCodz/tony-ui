import * as React from 'react';
import { 
    HoverCardBase, 
    HoverCardTriggerBase, 
    HoverCardContentBase, 
    HoverCardArrowBase 
} from '../_base/hover-card';
import { cn } from '@/lib/utils';

export const HoverCard = HoverCardBase;
export const HoverCardTrigger = HoverCardTriggerBase;

export const HoverCardContent = React.forwardRef<React.ElementRef<typeof HoverCardContentBase>, React.ComponentPropsWithoutRef<typeof HoverCardContentBase>>(
  ({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
    <HoverCardContentBase
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-64 rounded-md border border-[var(--df-border)] bg-[var(--df-surface)] p-4 text-[var(--df-text)] shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  )
);
HoverCardContent.displayName = 'HoverCardContent';

export const HoverCardArrow = React.forwardRef<React.ElementRef<typeof HoverCardArrowBase>, React.ComponentPropsWithoutRef<typeof HoverCardArrowBase>>(
    ({ className, ...props }, ref) => (
        <HoverCardArrowBase ref={ref} className={cn('fill-[var(--df-border)]', className)} {...props} />
    )
);
HoverCardArrow.displayName = 'HoverCardArrow';
