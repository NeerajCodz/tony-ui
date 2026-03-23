import * as React from 'react';
import { ButtonBase, type ButtonBaseProps } from '../_base/button';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'font-sans font-bold tracking-tight transition-all duration-200 ease-out inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lg-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--lg-bg)] disabled:opacity-50 disabled:pointer-events-none rounded-2xl',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--lg-surface)] border border-[var(--lg-border)] text-[var(--lg-text)] hover:border-[var(--lg-accent)] active:bg-[var(--lg-surface)]',
        solid: 'bg-[var(--lg-accent)] border border-[var(--lg-accent)] text-white hover:bg-[var(--lg-accent)]/90 active:scale-[0.98]',
        outline: 'bg-transparent border-2 border-[var(--lg-accent)] text-[var(--lg-accent)] hover:bg-[var(--lg-accent)]/10',
        ghost: 'bg-transparent border-none text-[var(--lg-text)] hover:bg-[var(--lg-surface)] hover:text-[var(--lg-accent)]',
        inverse: 'bg-[var(--lg-text)] border border-[var(--lg-bg)] text-[var(--lg-bg)] font-bold hover:opacity-90',
        contrast: 'bg-[#fff] border border-[#fff] text-[#000] hover:bg-[#eee]',
        soft: 'bg-[rgba(124,111,255,0.08)] border border-[rgba(124,111,255,0.1)] text-[var(--lg-text)] hover:bg-[rgba(124,111,255,0.15)]',
        neutral: 'bg-[var(--lg-surface)] border border-[var(--lg-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)]',
        subtle: 'bg-[var(--lg-surface)]/50 border-none text-[var(--text-secondary)] hover:bg-[var(--lg-surface)] hover:text-[var(--text-primary)]',
        elevated: 'bg-[var(--lg-surface)] border border-[var(--lg-border)] text-[var(--lg-text)] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform',
        flat: 'bg-transparent border-none text-[var(--lg-text)] hover:bg-[var(--lg-surface)]/50',
        tinted: 'bg-[var(--lg-accent)]/20 border border-[var(--lg-accent)]/30 text-[var(--lg-text)] hover:bg-[var(--lg-accent)]/30',
        link: 'bg-transparent border-none text-[var(--lg-accent)] hover:underline p-0 h-auto',
        disabled: 'bg-[var(--lg-surface)] border border-[var(--lg-border)]/50 text-[var(--text-muted)] opacity-50 cursor-not-allowed',
        unstyled: '',
      },
      size: {
        xs: 'h-8 px-3 text-xs rounded-lg',
        sm: 'h-10 px-4 text-sm rounded-xl',
        md: 'h-12 px-6 text-base rounded-2xl',
        lg: 'h-14 px-8 text-lg rounded-2xl',
        xl: 'h-16 px-10 text-xl rounded-3xl',
        icon: 'h-12 w-12 p-0 rounded-2xl',
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
