import * as React from 'react';
import { TogglePrimitive } from '../_base/toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';


const toggleVariants = cva(
  'inline-flex items-center justify-center text-sm font-display font-medium uppercase tracking-wider transition-colors hover:bg-[var(--tp-accent)]/10 hover:text-[var(--tp-accent)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tp-accent)] disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--tp-accent)] data-[state=on]:text-[var(--tp-bg)] border border-[var(--tp-border-outer)] rounded-none',
  {
    variants: {
      variant: {
        default: 'bg-[var(--tp-panel)]',
        outline:
          'bg-transparent hover:bg-[var(--tp-accent)]/10 hover:text-[var(--tp-accent)]',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & { effects?: TechPanelEffects } &
    VariantProps<typeof toggleVariants>
>(({ className, effects = 'on', variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(techPanelEffectsClass(effects), toggleVariants({ variant, size, className }))}
    style={{ } as React.CSSProperties}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
