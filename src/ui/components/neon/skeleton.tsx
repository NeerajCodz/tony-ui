import * as React from 'react';
import { SkeletonBase } from '../_base/skeleton';

import { cn } from '@/lib/utils';
import { getNeonGlow } from './_effects';

function Skeleton({
  className,
  effects = true,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: boolean }) {
  return (
    <SkeletonBase
      className={cn('animate-pulse rounded-md bg-[var(--ne-primary)]/10', getNeonGlow(effects), className)}
      {...props}
    />
  );
}

export { Skeleton };
