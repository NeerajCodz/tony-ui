import * as React from 'react';
import { TypographyBase, type TypographyBaseProps } from '../_base/typography';
import { cn } from '@/lib/utils';

export interface TypographyProps extends TypographyBaseProps {}

const getVariantStyles = (variant: string = 'body') => {
  switch (variant) {
    case 'h1': return 'font-mono font-black tracking-tighter uppercase text-[var(--ac-edge-light)] text-[56px] leading-tight';
    case 'h2': return 'font-mono font-bold tracking-tight uppercase text-[var(--text-primary)] text-[40px] leading-tight';
    case 'h3': return 'font-mono font-bold tracking-wide uppercase text-[var(--text-primary)] text-[28px]';
    case 'h4': return 'font-mono font-semibold tracking-wider uppercase text-[var(--ac-accent)] text-[20px]';
    case 'h5': return 'font-mono font-semibold tracking-widest uppercase text-[var(--text-secondary)] text-[16px]';
    case 'h6': return 'font-mono font-medium tracking-[0.3em] uppercase text-[var(--text-muted)] text-[14px]';
    case 'body': return 'font-mono font-normal text-[var(--text-secondary)] text-[14px] leading-relaxed';
    case 'label': return 'font-mono font-bold tracking-[0.4em] uppercase text-[var(--ac-accent)] text-[10px]';
    case 'code': return 'font-mono bg-[var(--ac-surface)] border border-[var(--ac-border)] px-1 py-0.5 rounded-none text-[var(--ac-accent)] text-sm';
    default: return 'font-mono font-normal text-[var(--text-secondary)] text-[14px]';
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
