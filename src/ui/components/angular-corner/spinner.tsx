import { cn } from '@/lib/utils';
import * as React from 'react';
import { SpinnerBase, type SpinnerBaseProps } from '../_base/spinner';

export interface SpinnerProps extends SpinnerBaseProps {}

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'xs': return 'h-3 w-3 border-[1.5px]';
    case 'sm': return 'h-4 w-4 border-2';
    case 'md': return 'h-6 w-6 border-2';
    case 'lg': return 'h-9 w-9 border-[3px]';
    case 'xl': return 'h-12 w-12 border-4';
    default: return 'h-6 w-6 border-2';
  }
};

const getVariantStyles = (variant: string = 'default') => {
  switch (variant) {
    case 'primary': return 'border-[var(--ac-accent)]/30 border-t-[var(--ac-accent)]';
    case 'secondary': return 'border-[var(--text-secondary)]/30 border-t-[var(--text-secondary)]';
    case 'accent': return 'border-[var(--ac-accent)]/30 border-t-[var(--ac-accent)]';
    case 'destructive': return 'border-[var(--ac-destructive)]/30 border-t-[var(--ac-destructive)]';
    case 'ghost': return 'border-[var(--text-muted)]/30 border-t-[var(--text-muted)]';
    default: return 'border-[var(--ac-accent)]/30 border-t-[var(--ac-accent)]';
  }
};

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = 'md', variant = 'default', ...props }, ref) => {
    return (
      <SpinnerBase
        ref={ref}
        size={size}
        variant={variant}
        className={cn(
          'animate-spin rounded-full border-t-transparent',
          getSizeStyles(size),
          getVariantStyles(variant),
          className
        )}
        {...props}
      />
    );
  }
);
Spinner.displayName = 'Spinner';
