import { cn } from '@/lib/utils';
import * as React from 'react';
import { SeparatorPrimitive } from '../_base/separator';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';

const Separator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & { effects?: EnergyShieldEffects }
>(
  (
    { className, effects = 'on', orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        energyShieldEffectsClass(effects),
        'shrink-0 bg-[var(--es-hex-line)] opacity-60',
        orientation === 'horizontal' ? 'h-[2px] w-full' : 'h-full w-[2px]',
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
