import * as React from 'react';
import { TypographyBase, type TypographyBaseProps } from '../_base/typography';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';

export interface TypographyProps extends TypographyBaseProps {
  effects?: HoloFrameEffects;
}

const getVariantStyles = (variant: string = 'body') => {
  switch (variant) {
    case 'h1': return 'font-sans font-bold tracking-[-0.04em] text-[var(--hf-text)] text-[52px] leading-tight';
    case 'h2': return 'font-sans font-bold tracking-[-0.03em] text-[var(--hf-text)]/90 text-[38px] leading-tight';
    case 'h3': return 'font-sans font-semibold tracking-[-0.01em] text-[var(--hf-text)]/85 text-[26px]';
    case 'h4': return 'font-sans font-semibold tracking-normal text-[var(--hf-text)]/80 text-[18px]';
    case 'h5': return 'font-sans font-medium tracking-[0.04em] text-[var(--hf-text)]/70 text-[14px]';
    case 'h6': return 'font-sans font-normal tracking-[0.1em] text-[var(--hf-text)]/60 text-[12px]';
    case 'body': return 'font-sans font-normal text-[var(--hf-text)]/75 text-[14px] leading-[1.7]';
    case 'label': return 'font-sans font-semibold tracking-[0.1em] uppercase text-[var(--hf-text)]/70 text-[11px]';
    case 'code': return 'font-mono bg-[var(--hf-surface)]/50 border border-[var(--hf-border-dim)]/30 px-1 py-0.5 rounded text-[var(--hf-text)] text-sm';
    default: return 'font-sans font-normal text-[var(--hf-text)]/75 text-[14px]';
  }
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, effects = 'on', variant = 'body', ...props }, ref) => {
    return (
      <TypographyBase
        ref={ref}
        variant={variant}
        className={cn(holoFrameEffectsClass(effects), 
          getVariantStyles(variant),
          className
        )}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';
