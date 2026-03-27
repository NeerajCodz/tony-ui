import { cn } from '@/lib/utils';
import { ProgressBase, ProgressIndicatorBase, type ProgressBaseProps } from '@/ui/components/_base/progress';
import * as React from 'react';

const Progress = React.forwardRef<React.ComponentRef<typeof ProgressBase>, ProgressBaseProps>(
  ({ className, value, ...props }, ref) => (
    <ProgressBase
      ref={ref}
      className={cn('relative w-full overflow-hidden rounded-none bg-[var(--br-surface)]', className)}
      {...props}
    >
      <ProgressIndicatorBase
        className="h-full w-full flex-1 bg-[var(--br-accent)] transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressBase>
  )
);
Progress.displayName = 'Progress';

export { Progress };
