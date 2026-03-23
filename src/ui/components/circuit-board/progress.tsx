import * as React from 'react';
import { ProgressBase, ProgressIndicatorBase, type ProgressBaseProps } from '@/ui/components/_base/progress';
import { cn } from '@/lib/utils';

const Progress = React.forwardRef<React.ComponentRef<typeof ProgressBase>, ProgressBaseProps>(
  ({ className, value, ...props }, ref) => (
    <ProgressBase
      ref={ref}
      className={cn('relative w-full overflow-hidden rounded-none bg-[var(--cb-trace-dim)]/20 border border-[var(--cb-trace-dim)]/50', className)}
      {...props}
    >
      <ProgressIndicatorBase
        className="h-full w-full flex-1 bg-[var(--cb-trace-lit)] shadow-[0_0_8px_var(--cb-trace-lit)] transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressBase>
  )
);
Progress.displayName = 'Progress';

export { Progress };
