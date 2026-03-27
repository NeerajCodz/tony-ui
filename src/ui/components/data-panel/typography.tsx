import { cn } from '@/lib/utils';
import * as React from 'react';
import { TypographyBase, type TypographyBaseProps } from '../_base/typography';

export interface TypographyProps extends TypographyBaseProps {}

const getVariantStyles = (variant: string = 'body') => {
  switch (variant) {
    case 'h1': return 'font-mono font-extrabold tracking-[-0.03em] uppercase text-[var(--text-primary)] text-[44px] leading-tight';
    case 'h2': return 'font-mono font-bold tracking-[-0.01em] text-[var(--text-primary)] text-[32px] leading-tight';
    case 'h3': return 'font-mono font-bold tracking-[0.04em] uppercase text-[var(--dp-accent)] text-[22px]';
    case 'h4': return 'font-mono font-semibold tracking-[0.08em] uppercase text-[var(--dp-data)] text-[16px]';
    case 'h5': return 'font-mono font-medium tracking-[0.15em] uppercase text-[var(--text-secondary)] text-[13px]';
    case 'h6': return 'font-mono font-medium tracking-[0.25em] uppercase text-[var(--text-muted)] text-[11px]';
    case 'body': return 'font-mono font-normal text-[var(--dp-data)] text-[13px] leading-[1.6]';
    case 'label': return 'font-mono font-medium tracking-[0.4em] uppercase text-[var(--dp-accent)] text-[10px]';
    case 'code': return 'font-mono bg-[var(--dp-surface)] border border-[var(--dp-border)] px-1 py-0.5 rounded-none text-[var(--dp-accent)] text-sm';
    default: return 'font-mono font-normal text-[var(--dp-data)] text-[13px]';
  }
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'body', ...props }, ref) => {
    return (
      <TypographyBase
        ref={ref}
        variant={variant}
        className={cn(
          getVariantStyles(variant),
          className
        )}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';
