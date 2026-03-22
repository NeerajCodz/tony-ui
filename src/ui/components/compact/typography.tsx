import * as React from 'react';
import { TypographyBase, type TypographyBaseProps } from '../_base/typography';
import { cn } from '@/lib/utils';

export interface TypographyProps extends TypographyBaseProps {}

const getVariantStyles = (variant: string = 'body') => {
  switch (variant) {
    case 'h1': return 'font-mono font-bold tracking-[-0.01em] text-[var(--text-primary)] text-[24px]';
    case 'h2': return 'font-mono font-semibold tracking-normal text-[var(--text-primary)] text-[20px]';
    case 'h3': return 'font-mono font-semibold tracking-[0.02em] text-[var(--cp-accent)] text-[16px]';
    case 'h4': return 'font-mono font-semibold tracking-[0.04em] text-[var(--text-primary)] text-[14px]';
    case 'h5': return 'font-mono font-medium tracking-[0.08em] uppercase text-[var(--text-secondary)] text-[12px]';
    case 'h6': return 'font-mono font-medium tracking-[0.15em] uppercase text-[var(--cp-muted)] text-[11px]';
    case 'body': return 'font-mono font-normal text-[var(--cp-text)] text-[12px] leading-[1.5]';
    case 'label': return 'font-mono font-medium tracking-[0.08em] uppercase text-[var(--cp-muted)] text-[11px]';
    case 'code': return 'font-mono bg-[var(--cp-bg)] border border-[var(--cp-border)] px-1 py-0.5 rounded-sm text-[var(--cp-accent)] text-[11px]';
    default: return 'font-mono font-normal text-[var(--cp-text)] text-[12px]';
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
