import { cn } from '@/lib/utils';
import * as React from 'react';
import { SliderPrimitive } from '../_base/slider';


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
    <SliderPrimitive.Track
      className="relative h-2 w-full grow overflow-hidden bg-[var(--dp-bg)] border border-[var(--dp-border)] "
      style={{ } as React.CSSProperties}
    >
      <SliderPrimitive.Range className="absolute h-full bg-[var(--dp-accent)]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-5 w-5 border border-[var(--dp-accent)] bg-[var(--dp-surface)] ring-offset-[var(--dp-bg)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--dp-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 "
      style={{ } as React.CSSProperties}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
