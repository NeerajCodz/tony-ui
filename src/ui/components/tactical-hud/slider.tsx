import * as React from 'react';
import { SliderPrimitive } from '../_base/slider';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';


const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', style, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    style={{ ...style }}
    {...props}
  >
    <SliderPrimitive.Track
      className="relative h-2 w-full grow overflow-hidden bg-[var(--th-bg)]/50"
      style={{ ...bracketsStyle, '--corner': '2px', '--width': '1px' } as React.CSSProperties}
    >
      <SliderPrimitive.Range className="absolute h-full bg-[var(--th-primary)]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-5 w-5 bg-[var(--th-surface)] ring-offset-[var(--th-bg)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--th-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 "
      style={{ ...bracketsStyle, '--corner': '4px', '--width': '2px', '--pip': '0px' } as React.CSSProperties}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
