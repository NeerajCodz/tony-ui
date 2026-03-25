import * as React from 'react';
import { RadioGroupPrimitive } from '../_base/radio-group';
import { Circle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <RadioGroupPrimitive.Root
    className={cn(terminalWindowEffectsClass(effects), 'grid gap-2', className)}
    {...props}
    ref={ref}
  />
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'aspect-square h-4 w-4 rounded-full border border-[var(--tm-phosphor)] text-[var(--tm-phosphor)] shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tm-phosphor)] disabled:cursor-not-allowed disabled:opacity-50 hover:bg-[var(--tm-phosphor)]/10',
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className='flex items-center justify-center'>
      <Circle className='h-2.5 w-2.5 fill-[var(--tm-phosphor)]' />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
