import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-[4px] text-sm font-medium ring-offset-[var(--ra-bg)] transition-all hover:bg-[var(--ra-surface)] hover:text-[var(--ra-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ra-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--ra-accent)] data-[state=on]:text-white shadow-[2px_2px_0_var(--ra-shadow)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_var(--ra-shadow)] data-[state=on]:shadow-inner',
  {
    variants: {
      variant: {
        default: 'bg-transparent border-2 border-transparent hover:border-[var(--ra-border)]',
        outline:
          'border-2 border-[var(--ra-border)] bg-transparent hover:bg-[var(--ra-surface)] hover:text-[var(--ra-text)]',
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
