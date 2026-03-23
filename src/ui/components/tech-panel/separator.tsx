import * as React from 'react';
import { SeparatorBase, type SeparatorBaseProps } from '../_base/separator';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { cva, type VariantProps } from 'class-variance-authority';

export const separatorVariants = cva(
  'shrink-0',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--tp-border-inner)]',
        solid: 'bg-[var(--tp-accent)] h-[2px]',
        outline: 'bg-transparent border-t border-[var(--tp-border-outer)]',
        ghost: 'bg-[var(--tp-border-inner)]/50',
        inverse: 'bg-[var(--tp-accent)]/50',
        contrast: 'bg-[var(--tp-power-3)]',
        soft: 'bg-[var(--tp-border-inner)]/30',
      },
      orientation: {
        horizontal: 'h-[1px] w-full',
        vertical: 'h-full w-[1px]',
      },
    },
    defaultVariants: {
      visualType: 'default',
      orientation: 'horizontal',
    },
  }
);

export interface SeparatorProps extends Omit<SeparatorBaseProps, 'visualType'>, VariantProps<typeof separatorVariants> {
  effects?: TechPanelEffects;
}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, effects = 'on', visualType, orientation = 'horizontal', decorative = true, ...props }, ref) => {
    return (
      <SeparatorBase
        ref={ref}
        visualType={visualType}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          techPanelEffectsClass(effects),
          separatorVariants({ visualType, orientation }),
          className
        )}
        {...props}
      />
    );
  }
);
Separator.displayName = 'Separator';
