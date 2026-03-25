import * as React from 'react';
import { SliderPrimitive } from '../_base/slider';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'relative flex w-full touch-none select-none items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track className='relative h-2 w-full grow overflow-hidden rounded-none bg-[var(--tm-phosphor)]/20 border border-[var(--tm-phosphor)]/50'>
      <SliderPrimitive.Range className='absolute h-full bg-[var(--tm-phosphor)]' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='block h-5 w-5 rounded-none border-2 border-[var(--tm-phosphor)] bg-[var(--tm-bg)] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tm-phosphor)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50' />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
