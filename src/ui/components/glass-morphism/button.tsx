import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { glassEffectsClass, type GlassEffects } from './_effects';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-display active:scale-95 duration-200',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--gl-accent)] text-primary-foreground shadow-md hover:bg-[var(--gl-accent)]/90 hover:shadow-lg hover:shadow-[var(--gl-accent)]/20',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md',
        outline:
          'border border-[var(--gl-glass-border)]/30 bg-transparent hover:bg-[var(--gl-glass-bg)]/50 hover:text-[var(--gl-accent)] hover:border-[var(--gl-accent)]/30 backdrop-blur-sm',
        secondary:
          'bg-[var(--gl-secondary)] text-secondary-foreground hover:bg-[var(--gl-secondary)]/80 backdrop-blur-md',
        ghost: 'hover:bg-[var(--gl-glass-bg)]/30 hover:text-[var(--gl-accent)]',
        link: 'text-[var(--gl-accent)] underline-offset-4 hover:underline',
        glass: 'bg-[var(--gl-glass-bg)]/40 border border-[var(--gl-glass-border)]/20 backdrop-blur-md hover:bg-[var(--gl-glass-bg)]/60 text-[var(--df-text)] shadow-sm hover:shadow-md hover:shadow-[var(--gl-accent)]/10',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-lg px-3',
        lg: 'h-11 rounded-xl px-8',
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
  effects?: GlassEffects;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, effects = 'on', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    // If variant is glass, we don't apply the full container effect, just the variant style
    const effectClass = (variant === 'glass' && effects === 'on') ? '' : ''; 

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), effectClass)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
