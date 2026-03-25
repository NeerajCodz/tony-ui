import * as React from 'react';
import { RadioGroupPrimitive } from '../_base/radio-group';
import { Circle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(quantumGateEffectsClass(effects), 'grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;


const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(quantumGateEffectsClass(effects), 
        'aspect-square h-4 w-4 border border-(--qg-iris-1) text-(--qg-iris-1) ring-offset-(--qg-bg) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--qg-iris-1) focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
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

export { RadioGroup, RadioGroupItem };
