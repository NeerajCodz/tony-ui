import * as React from 'react';
import { TypographyBase, type TypographyBaseProps } from '../_base/typography';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects } from './_effects';

export interface TypographyProps extends TypographyBaseProps {
  effects?: TacticalHudEffects;
}

const getVariantStyles = (variant: string = 'body') => {
  switch (variant) {
    case 'h1': return 'font-sans font-bold tracking-[-0.02em] text-[var(--th-primary)] text-[52px] leading-tight uppercase';
    case 'h2': return 'font-sans font-bold tracking-[-0.01em] text-[var(--th-primary)] text-[38px] leading-tight uppercase';
    case 'h3': return 'font-sans font-semibold tracking-[0.03em] text-[var(--th-primary)] text-[26px] uppercase';
    case 'h4': return 'font-sans font-semibold tracking-[0.06em] text-[var(--th-primary)] text-[18px] uppercase';
    case 'h5': return 'font-sans font-medium tracking-[0.1em] text-[var(--th-muted)] text-[14px] uppercase';
    case 'h6': return 'font-sans font-medium tracking-[0.15em] text-[var(--th-muted)] text-[12px] opacity-70 uppercase';
    case 'body': return 'font-sans font-normal text-[var(--th-secondary)] text-[14px] leading-[1.7]';
    case 'label': return 'font-sans font-semibold tracking-[0.2em] uppercase text-[var(--th-muted)] text-[11px]';
    case 'code': return 'font-sans bg-[var(--th-surface)]/50 border border-[var(--th-muted)]/30 px-1 py-0.5 rounded text-[var(--th-primary)] text-sm';
    default: return 'font-sans font-normal text-[var(--th-secondary)] text-[14px]';
  }
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, effects = 'on', variant = 'body', ...props }, ref) => {
    return (
      <TypographyBase
        ref={ref}
        variant={variant}
        className={cn(tacticalHudEffectsClass(effects), 
          getVariantStyles(variant),
          className
        )}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';
