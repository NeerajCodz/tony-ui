import * as React from 'react';
import { TypographyBase, type TypographyBaseProps } from '../_base/typography';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';

export interface TypographyProps extends TypographyBaseProps {
  effects?: QuantumGateEffects;
}

const getVariantStyles = (variant: string = 'body') => {
  switch (variant) {
    case 'h1': return 'font-sans font-bold tracking-[0.1em] uppercase bg-gradient-to-br from-[var(--qg-iris-2)] to-[var(--qg-iris-1)] bg-clip-text text-transparent text-[50px] leading-tight drop-shadow-[0_0_10px_rgba(102,0,255,0.5)]';
    case 'h2': return 'font-sans font-bold tracking-[0.06em] uppercase text-[var(--text-primary)] text-[36px] leading-tight';
    case 'h3': return 'font-sans font-bold tracking-[0.1em] uppercase text-[var(--qg-iris-2)] text-[24px]';
    case 'h4': return 'font-sans font-normal tracking-[0.15em] uppercase text-[var(--text-secondary)] text-[18px]';
    case 'h5': return 'font-sans font-normal tracking-[0.25em] uppercase text-[var(--qg-iris-1)] text-[13px] opacity-80';
    case 'h6': return 'font-sans font-normal tracking-[0.4em] uppercase text-[var(--text-muted)] text-[11px]';
    case 'body': return 'font-sans font-normal text-[rgba(200,180,255,0.8)] text-[13px] leading-[1.7]';
    case 'label': return 'font-sans font-semibold tracking-[0.2em] uppercase text-[var(--qg-iris-1)] text-[10px]';
    case 'code': return 'font-sans bg-[var(--qg-surface)] border border-[var(--qg-border)]/30 px-1 py-0.5 rounded text-[var(--qg-iris-1)] text-sm';
    default: return 'font-sans font-normal text-[rgba(200,180,255,0.8)] text-[13px]';
  }
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, effects = 'on', variant = 'body', ...props }, ref) => {
    return (
      <TypographyBase
        ref={ref}
        variant={variant}
        className={cn(quantumGateEffectsClass(effects), 
          getVariantStyles(variant),
          className
        )}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';
