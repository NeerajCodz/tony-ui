import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
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
      className="relative h-2 w-full grow overflow-hidden bg-[var(--cp-bg)] border border-[var(--cp-border)] "
      style={{ borderRadius: '2px' } as React.CSSProperties}
    >
      <SliderPrimitive.Range className="absolute h-full bg-[var(--cp-accent)]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-5 w-5 border border-[var(--cp-accent)] bg-[var(--cp-bg)] ring-offset-[var(--cp-bg)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--cp-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 "
      style={{ borderRadius: '2px' } as React.CSSProperties}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
