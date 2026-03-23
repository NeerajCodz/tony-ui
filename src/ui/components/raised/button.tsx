import * as React from 'react';
import { ButtonBase, type ButtonBaseProps } from '../_base/button';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'font-mono font-bold uppercase tracking-wider transition-all duration-100 ease-out inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ra-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ra-bg)] disabled:opacity-50 disabled:pointer-events-none rounded-[4px] active:translate-x-[2px] active:translate-y-[2px]',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] text-[var(--ra-text)] shadow-[4px_4px_0_var(--ra-shadow)] hover:shadow-[6px_6px_0_var(--ra-shadow)] hover:-translate-x-[1px] hover:-translate-y-[1px] active:shadow-[2px_2px_0_var(--ra-shadow)]',
        solid: 'bg-[var(--ra-accent)] border-2 border-[var(--ra-accent)] text-white shadow-[4px_4px_0_var(--ra-shadow-accent)] hover:shadow-[6px_6px_0_var(--ra-shadow-accent)] hover:-translate-x-[1px] hover:-translate-y-[1px] active:shadow-[2px_2px_0_var(--ra-shadow-accent)]',
        outline: 'bg-transparent border-2 border-[var(--ra-accent)] text-[var(--ra-accent)] shadow-[4px_4px_0_var(--ra-accent)] hover:shadow-[6px_6px_0_var(--ra-accent)] hover:-translate-x-[1px] hover:-translate-y-[1px] active:shadow-[2px_2px_0_var(--ra-accent)]',
        ghost: 'bg-transparent border-none text-[var(--ra-text)] hover:bg-[var(--ra-surface)] active:bg-[var(--ra-surface)]/80 shadow-none active:translate-x-0 active:translate-y-0',
        inverse: 'bg-[var(--ra-text)] border-2 border-[var(--ra-bg)] text-[var(--ra-bg)] shadow-[4px_4px_0_var(--ra-border)] active:shadow-[2px_2px_0_var(--ra-border)]',
        contrast: 'bg-[#000] border-2 border-[#fff] text-[#fff] shadow-[4px_4px_0_#fff] hover:shadow-[6px_6px_0_#fff] active:shadow-[2px_2px_0_#fff]',
        soft: 'bg-[rgba(64,96,255,0.08)] border-2 border-[var(--ra-border)] text-[var(--text-secondary)] shadow-[2px_2px_0_var(--ra-shadow)] hover:shadow-[4px_4px_0_var(--ra-shadow)] active:shadow-[1px_1px_0_var(--ra-shadow)]',
        neutral: 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] shadow-[4px_4px_0_var(--ra-shadow)]',
        subtle: 'bg-[var(--ra-surface)]/50 border-none text-[var(--text-secondary)] hover:bg-[var(--ra-surface)] shadow-none',
        elevated: 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] text-[var(--ra-text)] shadow-[6px_6px_0_var(--ra-shadow)] hover:shadow-[8px_8px_0_var(--ra-shadow)] active:shadow-[4px_4px_0_var(--ra-shadow)]',
        flat: 'bg-transparent border-none text-[var(--ra-text)] hover:bg-[var(--ra-surface)]/50 shadow-none',
        tinted: 'bg-[var(--ra-accent)]/20 border-2 border-[var(--ra-accent)]/50 text-[var(--ra-text)] shadow-[4px_4px_0_var(--ra-shadow)]',
        link: 'bg-transparent border-none text-[var(--ra-accent)] hover:underline p-0 h-auto shadow-none active:translate-x-0 active:translate-y-0',
        disabled: 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)]/50 text-[var(--text-muted)] opacity-50 cursor-not-allowed shadow-none active:translate-x-0 active:translate-y-0',
        unstyled: '',
      },
      size: {
        xs: 'h-7 px-2 text-[10px]',
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      visualType: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps extends Omit<ButtonBaseProps, 'size' | 'visualType'>, VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, visualType, size, ...props }, ref) => {
    return (
      <ButtonBase
        ref={ref}
        visualType={visualType}
        size={size}
        className={cn(buttonVariants({ visualType, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
