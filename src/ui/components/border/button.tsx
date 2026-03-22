import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonBase, type ButtonBaseProps } from '@/ui/components/_base/button';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--br-accent)] disabled:pointer-events-none disabled:opacity-50 font-mono relative',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--br-bg)] text-[var(--text-primary)] border border-dashed border-[var(--br-border-main)] hover:border-[var(--br-border-bright)] hover:text-white',
        solid: 'bg-[var(--br-accent-dim)] text-[var(--br-accent)] border-[2px] border-solid border-[var(--br-accent)] hover:bg-[var(--br-accent)] hover:text-white',
        outline: 'bg-transparent text-[var(--br-accent)] border border-dashed border-[var(--br-accent)] hover:bg-[var(--br-accent-dim)]',
        ghost: 'bg-transparent text-[var(--text-secondary)] hover:text-[var(--br-accent)] hover:bg-[var(--br-surface)]',
        inverse: 'bg-[var(--br-accent)] text-[var(--br-bg)] border-[2px] border-[var(--br-bg)] hover:bg-[var(--br-accent-dim)]',
        contrast: 'bg-black text-white border border-double border-white hover:bg-white hover:text-black',
        soft: 'bg-[rgba(108,142,255,0.05)] text-[var(--text-secondary)] border border-[var(--br-border-dim)] hover:border-[var(--br-accent)] hover:text-[var(--br-accent)]',
        neutral: 'bg-[var(--br-surface)] text-[var(--text-primary)] border border-[var(--br-border-dim)] hover:border-[var(--text-secondary)]',
        subtle: 'bg-transparent text-[var(--text-secondary)] border border-transparent hover:border-[var(--br-border-dim)]',
        elevated: 'bg-[var(--br-surface)] text-[var(--text-primary)] shadow-md border border-[var(--br-border-dim)]',
        flat: 'bg-transparent text-[var(--text-primary)] hover:bg-[var(--br-surface)]',
        tinted: 'bg-[var(--br-accent-dim)] text-[var(--br-accent)] border border-[var(--br-accent)]',
        link: 'text-[var(--br-accent)] underline-offset-4 hover:underline',
        disabled: 'bg-[var(--br-surface)] text-[var(--text-muted)] border border-[var(--br-border-dim)] cursor-not-allowed',
        unstyled: '',
      },
      size: {
        xs: 'h-5 px-2 text-[10px]',
        sm: 'h-7 px-3 text-xs',
        md: 'h-9 px-4 py-2',
        lg: 'h-11 px-8',
        xl: 'h-[52px] px-10 text-lg',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      visualType: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps extends ButtonBaseProps, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, visualType, size, asChild = false, ...props }, ref) => {
    return (
      <ButtonBase
        ref={ref}
        asChild={asChild}
        visualType={visualType}
        size={size}
        className={cn(buttonVariants({ visualType, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
