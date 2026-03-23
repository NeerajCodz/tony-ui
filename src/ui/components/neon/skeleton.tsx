import * as React from 'react';

import { cn } from '@/lib/utils';
import { getNeonGlow } from './_effects';

function Skeleton({
  className,
  effects = true,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: boolean }) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-[var(--ne-primary)]/10', getNeonGlow(effects), className)}
      {...props}
    />
  );
}

export { Skeleton };
