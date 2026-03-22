import * as React from 'react';
import { TypographyBase, type TypographyBaseProps } from '../_base/typography';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';

export interface TypographyProps extends TypographyBaseProps {
  effects?: HoneyCombEffects;
}

const getVariantStyles = (variant: string = 'body') => {
  switch (variant) {
    case 'h1': return 'font-["Bebas_Neue"] font-normal tracking-[0.06em] uppercase text-[var(--hc-accent-bright)] text-[58px] leading-tight drop-shadow-[0_0_15px_rgba(255,200,60,0.5)]';
    case 'h2': return 'font-["Bebas_Neue"] font-normal tracking-[0.04em] uppercase text-[var(--text-primary)] text-[42px] leading-tight';
    case 'h3': return 'font-["Bebas_Neue"] font-normal tracking-[0.06em] uppercase text-[var(--hc-accent)] text-[28px]';
    case 'h4': return 'font-["Barlow"] font-semibold tracking-[0.08em] uppercase text-[var(--text-primary)] text-[20px]';
    case 'h5': return 'font-["Barlow"] font-semibold tracking-[0.15em] uppercase text-[var(--text-secondary)] text-[14px]';
    case 'h6': return 'font-["Barlow"] font-semibold tracking-[0.3em] uppercase text-[var(--hc-border)] text-[11px]';
    case 'body': return 'font-["Barlow"] font-normal text-[rgba(255,200,120,0.75)] text-[14px] leading-[1.7]';
    case 'label': return 'font-["Barlow"] font-normal uppercase tracking-[0.4em] text-[var(--hc-accent)] text-[10px]';
    case 'code': return 'font-["JetBrains_Mono"] bg-[var(--hc-surface)] border border-[var(--hc-border)]/30 px-1 py-0.5 rounded text-[var(--hc-accent)] text-sm';
    default: return 'font-["Barlow"] font-normal text-[rgba(255,200,120,0.75)] text-[14px]';
  }
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, effects = 'on', variant = 'body', ...props }, ref) => {
    return (
      <TypographyBase
        ref={ref}
        variant={variant}
        className={cn(honeyCombEffectsClass(effects), 
          getVariantStyles(variant),
          className
        )}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';
