import { cn } from '@/lib/utils';
import { SkeletonBase, type SkeletonBaseProps } from '@/ui/components/_base/skeleton';
import * as React from 'react';

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonBaseProps>(
  ({ className, ...props }, ref) => (
    <SkeletonBase
      ref={ref}
      className={cn('animate-pulse rounded-none bg-[var(--cb-trace)]/20 shadow-[0_0_5px_var(--cb-trace)]/20', className)}
      {...props}
    />
  )
);
Skeleton.displayName = 'Skeleton';

export { Skeleton };
