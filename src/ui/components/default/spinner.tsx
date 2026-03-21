import * as React from 'react';
import { SpinnerBase, type SpinnerBaseProps } from '../_base/spinner';
import { cn } from '@/lib/utils';

export interface SpinnerProps extends SpinnerBaseProps {}

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'xs': return 'h-3 w-3';
    case 'sm': return 'h-4 w-4';
    case 'md': return 'h-6 w-6';
    case 'lg': return 'h-8 w-8';
    case 'xl': return 'h-12 w-12';
    default: return 'h-6 w-6';
  }
};

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size = 'md', ...props }, ref) => {
    return (
      <SpinnerBase
        ref={ref}
        size={size}
        className={cn(
          'text-[var(--df-accent)]',
          getSizeStyles(size),
          className
        )}
        {...props}
      />
    );
  }
);
Spinner.displayName = 'Spinner';
