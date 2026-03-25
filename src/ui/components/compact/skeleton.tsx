import * as React from 'react';
import { cn } from '@/lib/utils';
import { SkeletonBase } from '../_base/skeleton';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <SkeletonBase
      className={cn(
        'animate-pulse bg-[var(--cp-border)]/20',
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
