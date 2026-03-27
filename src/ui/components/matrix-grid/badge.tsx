import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';


const badgeVariants = cva(
  'inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-mono uppercase tracking-wider',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-[var(--mg-accent)] text-[var(--mg-bg)] hover:bg-[var(--mg-accent)]/80 shadow-[0_0_8px_var(--mg-accent)]',
        secondary:
          'border-transparent bg-[var(--mg-text-dim)] text-[var(--mg-bg)] hover:bg-[var(--mg-text-dim)]/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-[var(--mg-text)] border-[var(--mg-text)]',
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
