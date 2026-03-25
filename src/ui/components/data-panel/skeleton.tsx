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
        'animate-pulse bg-[var(--dp-border)]/20',
        className
      )}
      style={{ '--corner': '4px' } as React.CSSProperties}
      {...props}
    />
  );
}

export { Skeleton };
