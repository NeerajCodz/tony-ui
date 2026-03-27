import { cn } from '@/lib/utils';
import * as React from 'react';
import { SliderBase, SliderRangeBase, SliderThumbBase, SliderTrackBase, type SliderBaseProps } from '../_base/slider';

export const Slider = React.forwardRef<React.ComponentRef<typeof SliderBase>, SliderBaseProps>(
  ({ className, ...props }, ref) => (
    <SliderBase
      ref={ref}
      className={cn(
        'relative flex w-full touch-none select-none items-center',
        className
      )}
      {...props}
    >
      <SliderTrackBase className='relative h-2 w-full grow overflow-hidden rounded-full bg-[var(--df-secondary)]'>
        <SliderRangeBase className='absolute h-full bg-[var(--df-accent)]' />
      </SliderTrackBase>
      <SliderThumbBase className='block h-5 w-5 rounded-full border-2 border-[var(--df-accent)] bg-[var(--df-surface)] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--df-ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50' />
    </SliderBase>
  )
);
Slider.displayName = 'Slider';
