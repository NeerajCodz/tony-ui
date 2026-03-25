import * as React from 'react';
import { Slot } from '../_base/icon-button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const iconButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-transparent font-mono',
  {
    variants: {
      variant: {
        default: 'bg-[var(--mg-surface)] text-[var(--mg-text)] border border-[var(--mg-border)] hover:border-[var(--mg-accent)] hover:shadow-[0_0_8px_var(--mg-accent)]',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-[var(--mg-border)] bg-transparent hover:bg-[var(--mg-accent)]/10 text-[var(--mg-accent)]',
        secondary:
          'bg-[var(--mg-surface)] text-[var(--mg-text-dim)] border border-[var(--mg-border)] hover:bg-[var(--mg-accent)]/5',
        ghost: 'hover:bg-[var(--mg-accent)]/10 hover:text-[var(--mg-accent)]',
      },
      size: {
        default: 'h-10 w-10',
        sm: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-14 w-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton, iconButtonVariants };
