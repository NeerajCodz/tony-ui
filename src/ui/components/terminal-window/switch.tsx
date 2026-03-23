import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(terminalWindowEffectsClass(effects), 
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-none border-2 border-[var(--tm-phosphor)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tm-phosphor)] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--tm-phosphor)] data-[state=unchecked]:bg-[var(--tm-bg)]',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        'pointer-events-none block h-4 w-4 rounded-none bg-[var(--tm-phosphor)] ring-0 transition-transform data-[state=checked]:bg-[var(--tm-bg)] data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5'
      )}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
