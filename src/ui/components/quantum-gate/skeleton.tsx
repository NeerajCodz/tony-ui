import * as React from 'react';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';
import { SkeletonBase } from '../_base/skeleton';


function Skeleton({
  className,
  effects = 'on',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: QuantumGateEffects }) {
  return (
    <SkeletonBase
      className={cn(quantumGateEffectsClass(effects),
        'animate-pulse bg-[var(--qg-border)]/20',
        className
      )}
      style={{ '--corner': '4px' } as React.CSSProperties}
      {...props}
    />
  );
}

export { Skeleton };
