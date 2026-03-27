import * as React from 'react';
import { RadioGroupPrimitive } from '../_base/radio-group';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(tacticalHudEffectsClass(effects), 'grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', style, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(tacticalHudEffectsClass(effects), 
        'aspect-square h-4 w-4 bg-[var(--th-surface)] text-[var(--th-primary)] ring-offset-[var(--th-bg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--th-primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      style={{ ...bracketsStyle, '--corner': '4px', '--width': '1px', '--pip': '0px', ...style } as React.CSSProperties}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-2.5 w-2.5 bg-current" style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0 80%, 0 20%)' } as React.CSSProperties} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
