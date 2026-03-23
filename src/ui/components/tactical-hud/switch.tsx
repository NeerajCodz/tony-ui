import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', style, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(tacticalHudEffectsClass(effects), 
      'peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--th-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--th-bg)] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--th-primary)]/20 data-[state=unchecked]:bg-[var(--th-surface)]',
      className
    )}
    style={{ ...bracketsStyle, ...style }}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 bg-[var(--th-primary)] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
      )}
      style={{ ...bracketsStyle, '--corner': '4px', '--width': '0px', '--pip': '0px' } as React.CSSProperties}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
