import * as React from 'react';
import { DigitalClockBase, type DigitalClockBaseProps } from '@/ui/components/_base/digital-clock';
import { cn } from '@/lib/utils';

const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockBaseProps>(
  ({ className, ...props }, ref) => (
    <DigitalClockBase
      ref={ref}
      className={cn('font-mono border border-[var(--br-border-dim)] p-2 rounded-none bg-background', className)}
      {...props}
    />
  )
);
DigitalClock.displayName = 'DigitalClock';
export { DigitalClock };
