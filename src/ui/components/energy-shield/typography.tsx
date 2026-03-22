import * as React from 'react';
import { TypographyBase, type TypographyBaseProps } from '../_base/typography';
import { cn } from '@/lib/utils';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';

export interface TypographyProps extends TypographyBaseProps {
  effects?: EnergyShieldEffects;
}

const getVariantStyles = (variant: string = 'body') => {
  switch (variant) {
    case 'h1': return 'font-sans font-bold tracking-[-0.02em] text-[var(--es-plasma-2)] text-[52px] leading-tight [text-shadow:0_0_40px_var(--es-plasma-1),0_0_80px_var(--es-plasma-3)]';
    case 'h2': return 'font-sans font-bold tracking-[-0.01em] text-[var(--text-primary)] text-[38px] leading-tight';
    case 'h3': return 'font-sans font-semibold tracking-[0.03em] text-[var(--es-plasma-1)] text-[26px]';
    case 'h4': return 'font-sans font-semibold tracking-[0.06em] text-[var(--text-primary)] text-[18px]';
    case 'h5': return 'font-sans font-medium tracking-[0.1em] text-[var(--text-secondary)] text-[14px]';
    case 'h6': return 'font-sans font-medium tracking-[0.15em] text-[var(--es-plasma-1)] text-[12px] opacity-70';
    case 'body': return 'font-sans font-normal text-[rgba(200,220,255,0.85)] text-[14px] leading-[1.7]';
    case 'label': return 'font-sans font-semibold tracking-[0.2em] uppercase text-[var(--es-plasma-1)] text-[11px]';
    case 'code': return 'font-mono bg-[var(--es-surface)] border border-[var(--es-hex-line)]/30 px-1 py-0.5 rounded text-[var(--es-plasma-1)] text-sm';
    default: return 'font-sans font-normal text-[rgba(200,220,255,0.85)] text-[14px]';
  }
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, effects = 'on', variant = 'body', ...props }, ref) => {
    return (
      <TypographyBase
        ref={ref}
        variant={variant}
        className={cn(energyShieldEffectsClass(effects), 
          getVariantStyles(variant),
          className
        )}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';
