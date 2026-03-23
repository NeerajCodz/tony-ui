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
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-[4px] bg-[var(--ra-surface)] border-2 border-[var(--ra-border)]">
      <SliderPrimitive.Range className="absolute h-full bg-[var(--ra-accent)]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-[4px] border-2 border-[var(--ra-accent)] bg-[var(--ra-bg)] ring-offset-[var(--ra-bg)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ra-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[var(--ra-accent)] shadow-[2px_2px_0_var(--ra-shadow)] hover:shadow-[4px_4px_0_var(--ra-shadow)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_var(--ra-shadow)]" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
