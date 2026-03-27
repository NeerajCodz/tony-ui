import { cn } from '@/lib/utils';
import * as React from 'react';
import { SliderPrimitive } from '../_base/slider';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(energyShieldEffectsClass(effects), 
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className="relative h-2 w-full grow overflow-hidden bg-[var(--es-bg)] border border-[var(--es-hex-line)] "
      style={{ } as React.CSSProperties}
    >
      <SliderPrimitive.Range className="absolute h-full bg-[var(--es-plasma-1)]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-5 w-5 border border-[var(--es-plasma-1)] bg-[var(--es-surface)] ring-offset-[var(--es-bg)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--es-plasma-1)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 "
      style={{ } as React.CSSProperties}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
