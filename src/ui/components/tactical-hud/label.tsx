import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects } from './_effects';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-sans uppercase tracking-wide'
);

const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & { effects?: TacticalHudEffects } &
    VariantProps<typeof labelVariants>
>(({ className, effects = 'on', ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
