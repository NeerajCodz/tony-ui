import * as React from 'react';
import { SliderPrimitive } from '../_base/slider';
import { cn } from '@/lib/utils';
import { getNeonGlow } from './_effects';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & { effects?: boolean }
>(({ className, effects = true, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className={cn(
      "relative h-1.5 w-full grow overflow-hidden rounded-full bg-[var(--ne-primary)]/20",
      getNeonGlow(effects)
    )}>
      <SliderPrimitive.Range className={cn(
        "absolute h-full bg-[var(--ne-primary)]",
        getNeonGlow(effects)
      )} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={cn(
      "block h-5 w-5 rounded-full border-2 border-[var(--ne-primary)] bg-[var(--ne-bg)] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[var(--ne-primary)]",
      getNeonGlow(effects)
    )} />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
