import * as React from 'react';
import { CheckboxPrimitive } from '../_base/checkbox';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';
import { Check } from 'lucide-react';

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', style, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'peer h-4 w-4 shrink-0 bg-[var(--th-surface)] ring-offset-[var(--th-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--th-primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-[var(--th-primary)]',
      className
    )}
    style={{ ...bracketsStyle, '--corner': '4px', '--width': '1px', '--pip': '0px', ...style } as React.CSSProperties}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
