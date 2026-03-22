import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';


const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 
      'relative h-4 w-full overflow-hidden bg-(--qg-bg) border border-(--qg-border) ',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-(--qg-iris-1) transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
