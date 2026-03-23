import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { SliderBase, SliderTrackBase, SliderRangeBase, SliderThumbBase, type SliderBaseProps } from '@/ui/components/_base/slider';
import { cn } from '@/lib/utils';

const sliderVariants = cva(
  'relative flex w-full touch-none select-none items-center',
  {
    variants: {
      size: {
        sm: 'h-4',
        md: 'h-5',
        lg: 'h-6',
      }
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface SliderProps extends SliderBaseProps, VariantProps<typeof sliderVariants> {}

const Slider = React.forwardRef<React.ComponentRef<typeof SliderBase>, SliderProps>(
  ({ className, size, ...props }, ref) => (
    <SliderBase
      ref={ref}
      size={size}
      className={cn(sliderVariants({ size, className }))}
      {...props}
    >
      <SliderTrackBase className="relative h-1 w-full grow overflow-hidden rounded-none bg-[var(--cb-trace-dim)]/20 border border-[var(--cb-trace-dim)]/50">
        <SliderRangeBase className="absolute h-full bg-[var(--cb-trace-lit)] shadow-[0_0_5px_var(--cb-trace-lit)]" />
      </SliderTrackBase>
      <SliderThumbBase className="block h-4 w-4 rounded-none bg-[var(--cb-trace-lit)] shadow-[0_0_8px_var(--cb-trace-lit)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cb-trace-lit)] disabled:pointer-events-none disabled:opacity-50 hover:scale-110 transition-transform" />
    </SliderBase>
  )
);
Slider.displayName = 'Slider';

export { Slider };
