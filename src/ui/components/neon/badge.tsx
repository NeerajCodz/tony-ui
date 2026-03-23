import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center border-2 px-3 py-1 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-display uppercase tracking-widest rounded-none shadow-[0_0_8px_currentColor]',
  {
    variants: {
      variant: {
        default:
          'border-[var(--ne-primary)] text-[var(--ne-primary)] bg-[var(--ne-bg)] hover:bg-[var(--ne-primary)] hover:text-[var(--ne-bg)]',
        secondary:
          'border-[var(--ne-secondary)] text-[var(--ne-secondary)] bg-[var(--ne-bg)] hover:bg-[var(--ne-secondary)] hover:text-[var(--ne-bg)]',
        destructive:
          'border-destructive text-destructive bg-[var(--ne-bg)] hover:bg-destructive hover:text-white',
        outline: 'text-[var(--ne-text)] border-[var(--ne-text)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
