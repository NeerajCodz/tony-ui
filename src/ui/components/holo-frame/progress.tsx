import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'relative h-4 w-full overflow-hidden bg-[var(--hf-bg)] border border-[var(--hf-border-dim)] ',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-[var(--hf-border-main)] transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
