import { cn } from '@/lib/utils';
import * as React from 'react';
import { RadioGroupPrimitive } from '../_base/radio-group';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(energyShieldEffectsClass(effects), 'grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(energyShieldEffectsClass(effects), 
        'aspect-square h-4 w-4 border border-[var(--es-plasma-1)] text-[var(--es-plasma-1)] ring-offset-[var(--es-bg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--es-plasma-1)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      style={{ '--corner': '3px' } as React.CSSProperties}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-2.5 w-2.5 bg-current" style={{ '--corner': '2px' } as React.CSSProperties} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup,RadioGroupItem };
