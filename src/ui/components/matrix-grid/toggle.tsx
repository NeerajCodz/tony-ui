import * as React from 'react';
import { TogglePrimitive } from '../_base/toggle';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const toggleVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors hover:bg-[var(--mg-surface)] hover:text-[var(--mg-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--mg-accent)]/10 data-[state=on]:text-[var(--mg-accent)] data-[state=on]:border-[var(--mg-accent)] border border-transparent font-mono uppercase tracking-wider',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-[var(--mg-border)] bg-transparent hover:bg-[var(--mg-surface)] hover:text-[var(--mg-text)]',
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
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
