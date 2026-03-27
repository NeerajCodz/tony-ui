import { cn } from '@/lib/utils';
import { AnalogClockBase, type AnalogClockBaseProps } from '@/ui/components/_base/analog-clock';
import * as React from 'react';

const AnalogClock = React.forwardRef<React.ComponentRef<typeof AnalogClockBase>, AnalogClockBaseProps>(
  ({ className, ...props }, ref) => (
    <AnalogClockBase
      ref={ref}
      className={cn('rounded-full border-4 border-[var(--br-border-dim)] bg-background', className)}
      {...props}
    />
  )
);
AnalogClock.displayName = 'AnalogClock';
export { AnalogClock };
