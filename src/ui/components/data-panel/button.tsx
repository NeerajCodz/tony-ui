import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { ButtonBase, type ButtonBaseProps } from '../_base/button';

export const buttonVariants = cva(
  'font-mono font-bold uppercase tracking-wider transition-all duration-300 ease-out inline-flex items-center justify-center whitespace-nowrap rounded-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--dp-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--dp-bg)] disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--dp-surface)] border border-[var(--dp-border)] text-[var(--dp-data)] hover:border-[var(--dp-accent)] active:bg-[var(--dp-header-bg)]',
        solid: 'bg-[var(--dp-header-accent)] border border-[var(--dp-accent)] text-[var(--dp-accent)] hover:bg-[var(--dp-accent-dim)] hover:shadow-[inset_0_0_12px_rgba(0,136,255,0.3)] active:brightness-110',
        outline: 'bg-transparent border border-[var(--dp-accent)] text-[var(--dp-accent)] hover:bg-[var(--dp-accent)]/10 active:bg-[var(--dp-accent)]/20',
        ghost: 'bg-transparent border-none text-[var(--text-secondary)] hover:bg-[var(--dp-surface)] hover:text-[var(--dp-accent)] active:bg-[var(--dp-surface)]/80',
        inverse: 'bg-[var(--dp-accent)] border border-[var(--dp-bg)] text-[var(--dp-bg)] font-bold hover:opacity-90 active:opacity-80',
        contrast: 'bg-[#000] border border-[var(--dp-critical)] text-[var(--dp-critical)] hover:bg-[#001133] active:bg-[#002244]',
        soft: 'bg-[rgba(0,136,255,0.05)] border border-[var(--dp-border)]/50 text-[var(--text-secondary)] hover:bg-[rgba(0,136,255,0.08)] active:bg-[rgba(0,136,255,0.12)]',
        neutral: 'bg-[var(--dp-surface)] border border-[var(--dp-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)]',
        subtle: 'bg-[var(--dp-surface)]/50 border-none text-[var(--text-secondary)] hover:bg-[var(--dp-surface)] hover:text-[var(--text-primary)]',
        elevated: 'bg-[var(--dp-surface)] border border-[var(--dp-border)] text-[var(--text-primary)] shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:border-[var(--dp-accent)] hover:shadow-[0_4px_16px_rgba(0,136,255,0.2)]',
        flat: 'bg-transparent border-none text-[var(--text-primary)] hover:bg-[var(--dp-surface)]/50',
        tinted: 'bg-[var(--dp-accent)]/20 border border-[var(--dp-accent)]/50 text-[var(--dp-data)] hover:bg-[var(--dp-accent)]/30',
        link: 'bg-transparent border-none text-[var(--dp-accent)] hover:underline hover:text-[var(--dp-data)] p-0 h-auto',
        disabled: 'bg-[var(--dp-bg)] border border-[var(--dp-border)]/50 text-[var(--text-muted)] opacity-50 cursor-not-allowed',
        unstyled: '',
      },
      size: {
        xs: 'h-5 px-2 text-[10px]',
        sm: 'h-7 px-3 text-xs',
        md: 'h-9 px-4 text-sm',
        lg: 'h-11 px-5 text-base',
        xl: 'h-[52px] px-6 text-lg',
        icon: 'h-9 w-9 p-0',
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
