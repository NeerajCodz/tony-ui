import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { getNeonGlow } from './_effects';

const toggleVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-all hover:bg-[var(--ne-primary)]/10 hover:text-[var(--ne-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--ne-primary)] data-[state=on]:text-[var(--ne-bg)] font-display uppercase tracking-widest border-2 border-transparent',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border-[var(--ne-primary)] text-[var(--ne-primary)] hover:bg-[var(--ne-primary)] hover:text-[var(--ne-bg)]',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-12 px-5',
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
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants> & { effects?: boolean }
>(({ className, variant, size, effects = true, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(
      toggleVariants({ variant, size, className }),
      effects && variant === 'outline' && getNeonGlow(true),
      effects && "data-[state=on]:shadow-[0_0_15px_var(--ne-primary)]"
    )}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
