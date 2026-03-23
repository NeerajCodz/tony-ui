import * as React from 'react';
import { HoverCardBase, HoverCardTriggerBase, HoverCardContentBase, type HoverCardContentBaseProps } from '@/ui/components/_base/hover-card';
import { cn } from '@/lib/utils';

const HoverCard = HoverCardBase;
const HoverCardTrigger = HoverCardTriggerBase;

const HoverCardContent = React.forwardRef<React.ComponentRef<typeof HoverCardContentBase>, HoverCardContentBaseProps>(
  ({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
    <HoverCardContentBase
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-64 rounded-none border border-[var(--cb-trace)] bg-[var(--cb-soldermask)] p-4 text-[var(--cb-trace-lit)] shadow-[0_0_10px_var(--cb-trace)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 uppercase tracking-wide',
        className
      )}
      {...props}
    />
  )
);
HoverCardContent.displayName = 'HoverCardContent';

export { HoverCard, HoverCardTrigger, HoverCardContent };
