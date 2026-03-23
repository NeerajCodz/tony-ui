import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';

const Separator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & { effects?: QuantumGateEffects }
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
        quantumGateEffectsClass(effects),
        'shrink-0 bg-[var(--qg-border)] opacity-60',
        orientation === 'horizontal' ? 'h-[2px] w-full' : 'h-full w-[2px]',
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
