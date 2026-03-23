import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';


const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className="relative h-2 w-full grow overflow-hidden bg-[var(--tp-inset)] border border-[var(--tp-border-inner)] rounded-none"
      style={{ } as React.CSSProperties}
    >
      <SliderPrimitive.Range className="absolute h-full bg-[var(--tp-accent)]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-5 w-5 border border-[var(--tp-border-outer)] bg-[var(--tp-panel)] ring-offset-[var(--tp-bg)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tp-accent)] disabled:pointer-events-none disabled:opacity-50 rounded-none shadow-md hover:border-[var(--tp-accent)]"
      style={{ } as React.CSSProperties}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
