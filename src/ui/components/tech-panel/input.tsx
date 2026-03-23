import * as React from 'react';
import { InputBase, type InputBaseProps } from '../_base/input';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { cva, type VariantProps } from 'class-variance-authority';

export const inputVariants = cva(
  'flex w-full rounded-none bg-transparent px-3 py-2 text-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tp-accent)] disabled:cursor-not-allowed disabled:opacity-50 font-mono tracking-wide',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--tp-inset)] border border-[var(--tp-border-inner)] text-[var(--text-primary)] shadow-[inset_0_0_0_2px_var(--tp-inset-border)] focus-visible:border-[var(--tp-accent)]',
        solid: 'bg-[var(--tp-inset)] border border-[var(--tp-accent)] text-[var(--text-primary)]',
        outline: 'border border-[var(--tp-border-outer)] text-[var(--text-primary)] bg-[var(--tp-bg)]',
        ghost: 'border-none bg-[var(--tp-border-inner)]/20 text-[var(--text-primary)]',
        inverse: 'bg-[var(--tp-accent)]/10 border border-[var(--tp-accent)] text-[var(--text-primary)]',
        contrast: 'bg-[#000] border border-[var(--tp-power-3)] text-[var(--tp-power-3)]',
        soft: 'bg-[var(--tp-border-inner)]/30 border border-[var(--tp-border-inner)] text-[var(--text-primary)]',
      },
      size: {
        default: 'h-10',
        sm: 'h-8 px-2 text-xs',
        lg: 'h-12 px-4 text-base',
      }
    },
    defaultVariants: {
      visualType: 'default',
      size: 'default',
    },
  }
);

export interface InputProps extends Omit<InputBaseProps, 'visualType' | 'size'>, VariantProps<typeof inputVariants> {
  effects?: TechPanelEffects;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, effects = 'on', visualType, size, type, ...props }, ref) => {
    return (
      <InputBase
        ref={ref}
        type={type}
        visualType={visualType}
        size={size}
        className={cn(
          techPanelEffectsClass(effects),
          inputVariants({ visualType, size }),
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
