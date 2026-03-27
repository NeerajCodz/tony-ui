import { cn } from '@/lib/utils';
import { SliderBase, SliderRangeBase, SliderThumbBase, SliderTrackBase, type SliderBaseProps } from '@/ui/components/_base/slider';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

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
      <SliderTrackBase className="relative h-1 w-full grow overflow-hidden rounded-none bg-[var(--br-surface)] border border-[var(--br-border-dim)]">
        <SliderRangeBase className="absolute h-full bg-[var(--br-accent)]" />
      </SliderTrackBase>
      <SliderThumbBase className="block h-4 w-4 rounded-none border border-[var(--br-accent)] bg-[var(--br-bg)] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    </SliderBase>
  )
);
Slider.displayName = 'Slider';

export { Slider };
