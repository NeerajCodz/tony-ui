import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden bg-[var(--mg-surface)] border border-[var(--mg-border)]',
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-[var(--mg-accent)] transition-all shadow-[0_0_10px_var(--mg-accent)]"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
    {/* Segment lines overlay */}
    <div className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,transparent_20%,var(--mg-bg)_20%,var(--mg-bg)_22%,transparent_22%)] bg-[size:10%_100%] pointer-events-none opacity-50" />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
