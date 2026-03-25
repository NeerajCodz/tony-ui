import * as React from 'react';
import { BadgeBase, type BadgeBaseProps } from '../_base/badge';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { cva, type VariantProps } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center rounded-sm px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--tp-accent)]',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--tp-panel)] border border-[var(--tp-border-inner)] text-[var(--tp-accent)]',
        solid: 'bg-[var(--tp-accent)] text-[var(--tp-bg)] border border-[var(--tp-accent)]',
        outline: 'text-[var(--tp-accent)] border border-[var(--tp-accent)]',
        ghost: 'bg-transparent text-[var(--text-secondary)]',
        inverse: 'bg-[var(--tp-inset)] text-[var(--tp-power-3)] border border-[var(--tp-power-3)]',
        contrast: 'bg-[#000] text-[var(--tp-power-3)] border border-[var(--tp-power-3)]',
        soft: 'bg-[var(--tp-border-inner)]/30 text-[var(--text-muted)]',
      },
    },
    defaultVariants: {
      visualType: 'default',
    },
  }
);

export interface BadgeProps extends Omit<BadgeBaseProps, 'visualType'>, VariantProps<typeof badgeVariants> {
  effects?: TechPanelEffects;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, effects = 'on', visualType, ...props }, ref) => {
    return (
      <BadgeBase
        ref={ref}
        type={visualType}
        className={cn(
          techPanelEffectsClass(effects),
          badgeVariants({ visualType }),
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';
