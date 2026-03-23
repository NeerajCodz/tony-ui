import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { getNeonGlow } from './_effects';

const badgeVariants = cva(
  'inline-flex items-center rounded-none border-2 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-display uppercase tracking-widest',
  {
    variants: {
      variant: {
        default:
          'border-[var(--ne-primary)] bg-[var(--ne-primary)] text-[var(--ne-bg)] hover:bg-[var(--ne-primary)]/80',
        secondary:
          'border-[var(--ne-secondary)] bg-[var(--ne-secondary)] text-[var(--ne-bg)] hover:bg-[var(--ne-secondary)]/80',
        destructive:
          'border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-[var(--ne-primary)] border-[var(--ne-primary)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
    effects?: boolean;
  }

function Badge({ className, variant, effects = true, ...props }: BadgeProps) {
  return (
    <div className={cn(
      badgeVariants({ variant }), 
      getNeonGlow(effects),
      className
    )} {...props} />
  );
}

export { Badge, badgeVariants };
