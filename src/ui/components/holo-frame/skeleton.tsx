import * as React from 'react';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { SkeletonBase } from '../_base/skeleton';

function Skeleton({
  className,
  effects = 'on',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: HoloFrameEffects }) {
  return (
    <SkeletonBase
      className={cn(holoFrameEffectsClass(effects),
        'animate-pulse bg-[var(--hf-border-dim)]/20',
        className
      )}
      style={{ '--corner': '4px' } as React.CSSProperties}
      {...props}
    />
  );
}

export { Skeleton };
