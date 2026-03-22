import * as React from 'react';
import { SkeletonBase, type SkeletonBaseProps } from '@/ui/components/_base/skeleton';
import { cn } from '@/lib/utils';

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonBaseProps>(
  ({ className, ...props }, ref) => (
    <SkeletonBase
      ref={ref}
      className={cn('animate-pulse rounded-none bg-[var(--br-surface)]', className)}
      {...props}
    />
  )
);
Skeleton.displayName = 'Skeleton';

export { Skeleton };
