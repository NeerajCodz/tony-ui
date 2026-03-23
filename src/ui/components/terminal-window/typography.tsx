import * as React from 'react';
import { TypographyBase, type TypographyBaseProps } from '../_base/typography';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

export interface TypographyProps extends TypographyBaseProps {
  effects?: TerminalWindowEffects;
}

const getVariantStyles = (variant: string = 'body') => {
  switch (variant) {
    case 'h1': return 'font-mono font-bold tracking-[0.05em] text-[var(--tm-phosphor)] text-[48px] leading-tight uppercase [text-shadow:0_0_8px_var(--tm-phosphor)]';
    case 'h2': return 'font-mono font-bold tracking-[0.04em] text-[var(--tm-phosphor)] text-[32px] leading-tight uppercase [text-shadow:0_0_6px_var(--tm-phosphor)]';
    case 'h3': return 'font-mono font-normal tracking-[0.06em] text-[var(--tm-phosphor)]/90 text-[22px] uppercase';
    case 'h4': return 'font-mono font-normal tracking-[0.1em] text-[var(--tm-phosphor)]/80 text-[16px] uppercase';
    case 'h5': return 'font-mono font-normal tracking-[0.1em] text-[var(--tm-phosphor-dim)] text-[14px] uppercase';
    case 'h6': return 'font-mono font-normal tracking-[0.15em] text-[var(--tm-phosphor-dim)] text-[12px] uppercase';
    case 'body': return 'font-mono font-normal text-[var(--tm-phosphor)]/85 text-[15px] leading-[1.8]';
    case 'label': return 'font-mono font-bold tracking-[0.2em] uppercase text-[var(--tm-phosphor)] text-[11px]';
    case 'code': return 'font-mono bg-[var(--tm-phosphor)]/10 border border-[var(--tm-phosphor)]/30 px-1 py-0.5 text-[var(--tm-phosphor)] text-sm';
    default: return 'font-mono font-normal text-[var(--tm-phosphor)]/85 text-[15px]';
  }
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, effects = 'on', variant = 'body', ...props }, ref) => {
    return (
      <TypographyBase
        ref={ref}
        variant={variant}
        className={cn(terminalWindowEffectsClass(effects), 
          getVariantStyles(variant),
          className
        )}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';
