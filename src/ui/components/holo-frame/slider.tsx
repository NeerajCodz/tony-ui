import * as React from 'react';
import { SliderPrimitive } from '../_base/slider';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className="relative h-2 w-full grow overflow-hidden bg-[var(--hf-bg)] border border-[var(--hf-border-dim)] "
      style={{ } as React.CSSProperties}
    >
      <SliderPrimitive.Range className="absolute h-full bg-[var(--hf-border-main)]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-5 w-5 border border-[var(--hf-border-main)] bg-[var(--hf-surface)] ring-offset-[var(--hf-bg)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hf-border-main)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 "
      style={{ } as React.CSSProperties}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
