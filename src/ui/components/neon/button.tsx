import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-bold uppercase tracking-widest ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden font-display rounded-none',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--ne-bg)] text-[var(--ne-primary)] border-2 border-[var(--ne-primary)] shadow-[0_0_10px_var(--ne-primary),inset_0_0_10px_var(--ne-primary)] hover:bg-[var(--ne-primary)] hover:text-[var(--ne-bg)] hover:shadow-[0_0_20px_var(--ne-primary),inset_0_0_20px_var(--ne-primary)]',
        destructive:
          'bg-[var(--ne-bg)] text-destructive border-2 border-destructive shadow-[0_0_10px_rgba(255,0,0,0.5)] hover:bg-destructive hover:text-white',
        outline:
          'border-2 border-[var(--ne-primary)] bg-transparent text-[var(--ne-primary)] hover:bg-[var(--ne-primary)] hover:text-[var(--ne-bg)] shadow-[0_0_5px_var(--ne-primary)]',
        secondary:
          'bg-[var(--ne-bg)] text-[var(--ne-secondary)] border-2 border-[var(--ne-secondary)] shadow-[0_0_10px_var(--ne-secondary),inset_0_0_5px_var(--ne-secondary)] hover:bg-[var(--ne-secondary)] hover:text-[var(--ne-bg)]',
        ghost: 'hover:bg-[var(--ne-primary)]/10 hover:text-[var(--ne-primary)] hover:shadow-[0_0_10px_var(--ne-primary)]',
        link: 'text-[var(--ne-primary)] underline-offset-4 hover:underline shadow-none',
        solid:
          'bg-[var(--ne-primary)] text-[var(--ne-bg)] border-2 border-[var(--ne-primary)] shadow-[0_0_15px_var(--ne-primary)] hover:bg-[var(--ne-bg)] hover:text-[var(--ne-primary)]',
      },
      size: {
        default: 'h-12 px-6 py-2',
        sm: 'h-10 px-4',
        lg: 'h-14 px-10 text-base',
        icon: 'h-12 w-12',
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
        <span className="relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{props.children}</span>
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
