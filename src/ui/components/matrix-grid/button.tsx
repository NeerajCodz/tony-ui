import * as React from 'react';
import { Slot } from '../_base/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden font-mono tracking-wider uppercase',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--mg-surface)] text-[var(--mg-text)] border border-[var(--mg-border)] hover:border-[var(--mg-accent)] hover:shadow-[0_0_10px_var(--mg-accent)]',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 border border-destructive',
        outline:
          'border border-[var(--mg-accent)] bg-transparent hover:bg-[var(--mg-accent)]/10 text-[var(--mg-accent)]',
        secondary:
          'bg-[var(--mg-surface)] text-[var(--mg-text-dim)] border border-[var(--mg-border)] hover:bg-[var(--mg-accent)]/5',
        ghost: 'hover:bg-[var(--mg-accent)]/10 hover:text-[var(--mg-accent)]',
        link: 'text-[var(--mg-text)] underline-offset-4 hover:underline',
        solid:
          'bg-[var(--mg-accent)]/10 text-[var(--mg-accent)] border border-[var(--mg-accent)] hover:bg-[var(--mg-accent)]/20 shadow-[0_0_15px_var(--mg-accent)]',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{props.children}</span>
        {variant === 'default' && (
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,85,0.05)_50%,transparent_75%)] bg-[length:250%_250%] opacity-0 transition-opacity duration-500 hover:opacity-100 animate-shine" />
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
