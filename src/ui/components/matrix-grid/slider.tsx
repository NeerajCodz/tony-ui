import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden bg-[var(--mg-surface)] border border-[var(--mg-border)]">
      <SliderPrimitive.Range className="absolute h-full bg-[var(--mg-accent)]/50" />
      {/* Grid lines on track */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,var(--mg-border)_1px,transparent_1px)] bg-[size:10%_100%]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 border-2 border-[var(--mg-accent)] bg-[var(--mg-bg)] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[var(--mg-accent)]/20 shadow-[0_0_8px_var(--mg-accent)] rounded-none" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
