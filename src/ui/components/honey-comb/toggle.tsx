import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';


const toggleVariants = cva(
  'inline-flex items-center justify-center text-sm font-["Barlow"] font-medium uppercase tracking-wider transition-colors hover:bg-[var(--hc-surface)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hc-plasma-1)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--hc-plasma-1)] data-[state=on]:text-[var(--hc-bg)] border border-[var(--hc-hex-line)] ring-offset-[var(--hc-bg)] ',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'bg-transparent hover:bg-[var(--hc-surface)] hover:text-[var(--text-primary)]',
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
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & { effects?: HoneyCombEffects } &
    VariantProps<typeof toggleVariants>
>(({ className, effects = 'on', variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(honeyCombEffectsClass(effects), toggleVariants({ variant, size, className }))}
    style={{ } as React.CSSProperties}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
