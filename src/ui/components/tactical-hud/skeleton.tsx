import * as React from 'react';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects } from './_effects';
import { SkeletonBase } from '../_base/skeleton';


function Skeleton({
  className,
  effects = 'on',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: TacticalHudEffects }) {
  return (
    <SkeletonBase
      className={cn(tacticalHudEffectsClass(effects),
        'animate-pulse bg-[var(--th-hex-line)]/20',
        className
      )}
      style={{ '--corner': '4px' } as React.CSSProperties}
      {...props}
    />
  );
}

export { Skeleton };
