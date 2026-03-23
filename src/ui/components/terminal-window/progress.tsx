import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'relative h-4 w-full overflow-hidden rounded-none border border-[var(--tm-phosphor)] bg-[var(--tm-phosphor)]/10',
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className='h-full w-full flex-1 bg-[var(--tm-phosphor)] transition-all'
      style={{ transform: 	ranslateX(-%) }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
