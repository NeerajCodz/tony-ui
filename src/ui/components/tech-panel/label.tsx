import * as React from 'react';
import { LabelBase, type LabelBaseProps } from '../_base/label';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { cva, type VariantProps } from 'class-variance-authority';

export const labelVariants = cva(
  'text-[9px] font-bold uppercase tracking-[0.2em] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      visualType: {
        default: 'text-[var(--tp-accent)]',
        solid: 'text-[var(--text-primary)] bg-[var(--tp-inset)] px-1 py-0.5',
        outline: 'text-[var(--tp-accent)] border border-[var(--tp-accent)] px-1 py-0.5',
        ghost: 'text-[var(--text-secondary)]',
        inverse: 'text-[var(--tp-bg)] bg-[var(--tp-accent)] px-1 py-0.5',
        contrast: 'text-[var(--tp-power-3)]',
        soft: 'text-[var(--text-muted)]',
      },
    },
    defaultVariants: {
      visualType: 'default',
    },
  }
);

export interface LabelProps extends Omit<LabelBaseProps, 'visualType'>, VariantProps<typeof labelVariants> {
  effects?: TechPanelEffects;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, effects = 'on', visualType, ...props }, ref) => {
    return (
      <LabelBase
        ref={ref}
        className={cn(techPanelEffectsClass(effects), labelVariants({ visualType }), className)}
        {...props}
      />
    );
  }
);
Label.displayName = 'Label';
