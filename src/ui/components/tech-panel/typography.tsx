import * as React from 'react';
import { TypographyBase, type TypographyBaseProps } from '../_base/typography';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';

export interface TypographyProps extends TypographyBaseProps {
  effects?: TechPanelEffects;
}

const getVariantStyles = (variant: string = 'body') => {
  switch (variant) {
    case 'h1': return 'font-display font-bold tracking-tight text-[var(--text-primary)] text-[48px] leading-tight uppercase';
    case 'h2': return 'font-display font-bold tracking-tight text-[var(--text-primary)] text-[36px] leading-tight uppercase';
    case 'h3': return 'font-display font-semibold tracking-wide text-[var(--text-primary)] text-[24px] uppercase';
    case 'h4': return 'font-display font-semibold tracking-wide text-[var(--text-primary)] text-[20px] uppercase';
    case 'h5': return 'font-display font-medium tracking-wide text-[var(--text-primary)] text-[16px] uppercase';
    case 'h6': return 'font-display font-medium tracking-wider text-[var(--text-muted)] text-[14px] uppercase';
    case 'body': return 'font-mono font-normal text-[var(--text-secondary)] text-[14px] leading-[1.6]';
    case 'label': return 'font-display font-semibold tracking-[0.1em] uppercase text-[var(--text-muted)] text-[11px]';
    case 'code': return 'font-mono bg-[var(--tp-inset)] border border-[var(--tp-border-inner)] px-1 py-0.5 rounded-none text-[var(--tp-accent)] text-sm';
    default: return 'font-mono font-normal text-[var(--text-secondary)] text-[14px]';
  }
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, effects = 'on', variant = 'body', ...props }, ref) => {
    return (
      <TypographyBase
        ref={ref}
        variant={variant}
        className={cn(techPanelEffectsClass(effects), 
          getVariantStyles(variant),
          className
        )}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';
