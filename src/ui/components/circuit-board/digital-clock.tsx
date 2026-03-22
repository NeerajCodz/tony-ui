import * as React from 'react';
import { DigitalClockBase, type DigitalClockBaseProps } from '@/ui/components/_base/digital-clock';
import { cn } from '@/lib/utils';

const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockBaseProps>(
  ({ className, ...props }, ref) => (
    <DigitalClockBase
      ref={ref}
      className={cn('font-mono uppercase tracking-widest text-[var(--cb-trace-lit)] shadow-[0_0_15px_var(--cb-trace)] border border-[var(--cb-trace)] p-2 rounded-none bg-[var(--cb-soldermask)]', className)}
      {...props}
    />
  )
);
DigitalClock.displayName = 'DigitalClock';
export { DigitalClock };
