import * as React from 'react';
import { ProgressPrimitive } from '../_base/progress';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';


const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', value, style, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'relative h-4 w-full overflow-hidden bg-[var(--th-surface)]/50',
      className
    )}
    style={{ ...bracketsStyle, '--corner': '4px', '--width': '1px', '--pip': '0px', ...style } as React.CSSProperties}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-[var(--th-primary)] transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
