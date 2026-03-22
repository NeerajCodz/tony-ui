import * as React from 'react';
import { ButtonBase, type ButtonBaseProps } from '../_base/button';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'font-mono font-medium text-xs transition-all duration-75 ease-in inline-flex items-center justify-center whitespace-nowrap rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--cp-accent)] disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--cp-bg)] border border-[var(--cp-border)] text-[var(--cp-text)] hover:border-[var(--cp-border)]/80 active:bg-[rgba(74,110,255,0.1)]',
        solid: 'bg-[var(--cp-accent)] border-none text-white hover:bg-[var(--cp-accent)]/90 active:bg-[var(--cp-accent)]/80',
        outline: 'bg-transparent border border-[var(--cp-accent)] text-[var(--cp-accent)] hover:bg-[var(--cp-accent)]/10 active:bg-[var(--cp-accent)]/20',
        ghost: 'bg-transparent border-none text-[var(--cp-text)] hover:bg-[var(--cp-bg)] active:bg-[var(--cp-bg)]/80',
        inverse: 'bg-[var(--cp-text)] border-none text-[var(--cp-bg)] hover:opacity-90 active:opacity-80',
        contrast: 'bg-black border border-white text-white hover:bg-[#111] active:bg-[#222]',
        soft: 'bg-[rgba(74,110,255,0.08)] border-none text-[var(--cp-muted)] hover:bg-[rgba(74,110,255,0.12)] active:bg-[rgba(74,110,255,0.16)]',
        neutral: 'bg-[var(--cp-bg)] border border-[var(--cp-border)] text-[var(--cp-text)] hover:text-[var(--cp-accent)]',
        subtle: 'bg-[var(--cp-bg)]/50 border-none text-[var(--cp-muted)] hover:bg-[var(--cp-bg)] hover:text-[var(--cp-text)]',
        elevated: 'bg-[var(--cp-bg)] border border-[var(--cp-border)] text-[var(--cp-text)] shadow-md hover:border-[var(--cp-accent)]',
        flat: 'bg-transparent border-none text-[var(--cp-text)] hover:bg-[var(--cp-bg)]/50',
        tinted: 'bg-[rgba(74,110,255,0.15)] border border-[rgba(74,110,255,0.3)] text-[var(--cp-accent)] hover:bg-[rgba(74,110,255,0.2)]',
        link: 'bg-transparent border-none text-[var(--cp-accent)] hover:underline p-0 h-auto',
        disabled: 'bg-[var(--cp-bg)] border border-[var(--cp-border)]/50 text-[var(--cp-muted)] opacity-50 cursor-not-allowed',
        unstyled: '',
      },
      size: {
        xs: 'h-5 px-2 text-[10px]',
        sm: 'h-6 px-2 text-[11px]',
        md: 'h-7 px-3 text-xs',
        lg: 'h-8 px-4 text-xs',
        xl: 'h-9 px-5 text-sm',
        icon: 'h-7 w-7 p-0',
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
