import * as React from 'react';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';


function Skeleton({
  className,
  effects = 'on',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: HoneyCombEffects }) {
  return (
    <div
      className={cn(honeyCombEffectsClass(effects),
        'animate-pulse bg-[var(--hc-hex-line)]/20',
        className
      )}
      style={{ '--corner': '4px' } as React.CSSProperties}
      {...props}
    />
  );
}

export { Skeleton };
