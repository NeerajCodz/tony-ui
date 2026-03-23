import * as React from 'react';
import { ButtonBase, type ButtonBaseProps } from '../_base/button';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'font-display font-bold uppercase tracking-wider transition-all duration-200 ease-out inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tp-accent)] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--tp-panel)] border border-[var(--tp-border-outer)] text-[rgba(140,180,220,0.7)] hover:text-[var(--tp-accent)] hover:border-[var(--tp-accent)]',
        solid: 'bg-[var(--tp-inset)] border border-[var(--tp-accent)] text-[var(--text-primary)] shadow-[inset_0_0_0_2px_var(--tp-inset-border)] hover:bg-[var(--tp-accent)] hover:text-[var(--tp-bg)] hover:shadow-none',
        outline: 'bg-transparent border border-[var(--tp-border-outer)] text-[var(--tp-accent)] hover:bg-[var(--tp-accent)]/10 hover:border-[var(--tp-accent)]',
        ghost: 'bg-transparent border-none text-[var(--text-secondary)] hover:bg-[var(--tp-border-inner)]/50 hover:text-[var(--tp-accent)]',
        inverse: 'bg-[var(--tp-accent)]/20 border border-[var(--tp-accent)] text-[var(--text-primary)] hover:bg-[var(--tp-accent)]/30',
        contrast: 'bg-[#000] border border-[var(--tp-power-3)] text-[var(--tp-power-3)] hover:bg-[var(--tp-power-3)]/10',
        soft: 'bg-[rgba(10,14,26,0.5)] border border-[var(--tp-border-inner)] text-[var(--text-muted)] hover:text-[var(--text-primary)]',
        destructive: 'bg-[var(--tp-inset)] border border-[var(--df-destructive)] text-[var(--df-destructive)] hover:bg-[var(--df-destructive)] hover:text-white',
        link: 'text-[var(--tp-accent)] underline-offset-4 hover:underline',
      },
      size: {
        xs: 'h-6 px-2 text-[10px]',
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      visualType: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps extends Omit<ButtonBaseProps, 'size' | 'visualType'>, VariantProps<typeof buttonVariants> {
  effects?: TechPanelEffects;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, effects = 'on', visualType, size, ...props }, ref) => {
    return (
      <ButtonBase
        ref={ref}
        visualType={visualType}
        size={size}
        className={cn(
          techPanelEffectsClass(effects),
          buttonVariants({ visualType, size }),
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
