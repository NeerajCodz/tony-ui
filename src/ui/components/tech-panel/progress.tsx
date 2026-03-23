import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';


const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'relative h-4 w-full overflow-hidden bg-[var(--tp-inset)] border border-[var(--tp-border-inner)] rounded-none',
      className
    )}
    style={{ } as React.CSSProperties}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-[var(--tp-accent)] transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
