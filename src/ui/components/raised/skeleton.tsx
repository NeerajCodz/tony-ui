import * as React from 'react';
import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-[2px] bg-[var(--ra-border)]/20', className)}
      {...props}
    />
  );
}

export { Skeleton };
