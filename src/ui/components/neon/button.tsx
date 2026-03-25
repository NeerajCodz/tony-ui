import * as React from 'react';
import { Slot } from '../_base/button';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { getNeonGlow } from './_effects';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-display uppercase tracking-widest border-2 border-[var(--ne-primary)]',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--ne-primary)] text-[var(--ne-bg)] hover:bg-[var(--ne-primary)]/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'bg-transparent text-[var(--ne-primary)] hover:bg-[var(--ne-primary)] hover:text-[var(--ne-bg)]',
        secondary:
          'bg-[var(--ne-secondary)] text-[var(--ne-bg)] hover:bg-[var(--ne-secondary)]/80',
        ghost: 'border-transparent hover:bg-[var(--ne-primary)] hover:text-[var(--ne-bg)]',
        link: 'text-[var(--ne-primary)] underline-offset-4 hover:underline border-none',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-none px-3',
        lg: 'h-11 rounded-none px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  effects?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, effects = true, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          getNeonGlow(effects && variant !== 'ghost' && variant !== 'link' && variant !== 'outline'),
          variant === 'outline' && effects ? getNeonGlow(true, 'text') : ''
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
