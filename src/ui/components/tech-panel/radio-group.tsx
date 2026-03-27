import * as React from 'react';
import { RadioGroupPrimitive } from '../_base/radio-group';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(techPanelEffectsClass(effects), 'grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(techPanelEffectsClass(effects), 
        'aspect-square h-4 w-4 border border-[var(--tp-border-outer)] text-[var(--tp-accent)] ring-offset-[var(--tp-bg)] focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tp-accent)] disabled:cursor-not-allowed disabled:opacity-50 rounded-none bg-[var(--tp-inset)] data-[state=checked]:border-[var(--tp-accent)]',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-2 w-2 bg-current rounded-none" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
