import * as React from 'react';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { SkeletonBase } from '../_base/skeleton';


function Skeleton({
  className,
  effects = 'on',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: TechPanelEffects }) {
  return (
    <SkeletonBase
      className={cn(techPanelEffectsClass(effects),
        'animate-pulse bg-[var(--tp-border-inner)]/20',
        className
      )}
      style={{ } as React.CSSProperties}
      {...props}
    />
  );
}

export { Skeleton };
