import { cn } from '@/lib/utils';
import * as React from 'react';
import { SkeletonBase } from '../_base/skeleton';

const AC_CLIP_PATH = 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <SkeletonBase
      className={cn(
        'animate-pulse bg-[var(--ac-border)]/20',
        className
      )}
      style={{ clipPath: AC_CLIP_PATH, '--corner': '4px' } as React.CSSProperties}
      {...props}
    />
  );
}

export { Skeleton };
