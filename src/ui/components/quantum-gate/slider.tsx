import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';


const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className="relative h-2 w-full grow overflow-hidden bg-(--qg-bg) border border-(--qg-border) "
      style={{ } as React.CSSProperties}
    >
      <SliderPrimitive.Range className="absolute h-full bg-(--qg-iris-1)" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-5 w-5 border border-(--qg-iris-1) bg-(--qg-surface) ring-offset-(--qg-bg) transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--qg-iris-1) focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 "
      style={{ } as React.CSSProperties}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
