import { cn } from '@/lib/utils';
import { ButtonBase, type ButtonBaseProps } from '@/ui/components/_base/button';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--cb-trace-lit)] disabled:pointer-events-none disabled:opacity-50 font-mono relative uppercase tracking-[0.1em]',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--cb-soldermask)] text-[var(--cb-trace-lit)] border border-dashed border-[var(--cb-trace)] hover:border-[var(--cb-trace-lit)] hover:shadow-[0_0_8px_var(--cb-trace)]',
        solid: 'bg-[var(--cb-trace-dim)] text-[var(--cb-node-active)] border border-solid border-[var(--cb-trace-lit)] hover:bg-[var(--cb-trace)] hover:text-white',
        outline: 'bg-transparent text-[var(--cb-trace-lit)] border border-dashed border-[var(--cb-trace-lit)] hover:bg-[var(--cb-trace-dim)]',
        ghost: 'bg-transparent text-[var(--text-secondary)] hover:text-[var(--cb-trace-lit)] hover:bg-[var(--cb-soldermask)]',
        inverse: 'bg-[var(--cb-trace-lit)] text-[var(--cb-soldermask)] border border-solid border-[var(--cb-soldermask)] hover:bg-[var(--cb-node-active)]',
        contrast: 'bg-black text-[var(--cb-copper)] border border-solid border-[var(--cb-copper)] hover:bg-[var(--cb-copper)] hover:text-black',
        soft: 'bg-[rgba(0,255,136,0.04)] text-[rgba(0,255,136,0.5)] border border-[var(--cb-trace)] hover:border-[var(--cb-trace-lit)]',
        neutral: 'bg-[var(--cb-soldermask)] text-[var(--text-primary)] border border-[var(--cb-trace-dim)] hover:border-[var(--cb-trace)]',
        subtle: 'bg-transparent text-[var(--text-secondary)] border border-transparent hover:border-[var(--cb-trace-dim)]',
        elevated: 'bg-[var(--cb-soldermask)] text-[var(--cb-trace-lit)] shadow-[0_0_10px_var(--cb-trace)] border border-[var(--cb-trace)]',
        flat: 'bg-transparent text-[var(--cb-trace-lit)] hover:bg-[var(--cb-soldermask)]',
        tinted: 'bg-[var(--cb-trace-dim)] text-[var(--cb-trace-lit)] border border-[var(--cb-trace)]',
        link: 'text-[var(--cb-trace-lit)] underline-offset-4 hover:underline',
        disabled: 'bg-[var(--cb-soldermask)] text-[var(--cb-trace-dim)] border border-[var(--cb-trace-dim)] cursor-not-allowed',
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

export { Button,buttonVariants };
