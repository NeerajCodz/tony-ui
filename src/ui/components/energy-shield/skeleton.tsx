import { cn } from '@/lib/utils';
import * as React from 'react';
import { SkeletonBase } from '../_base/skeleton';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';


function Skeleton({
  className,
  effects = 'on',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: EnergyShieldEffects }) {
  return (
    <SkeletonBase
      className={cn(energyShieldEffectsClass(effects),
        'animate-pulse bg-[var(--es-hex-line)]/20',
        className
      )}
      style={{ '--corner': '4px' } as React.CSSProperties}
      {...props}
    />
  );
}

export { Skeleton };
