import { cn } from '@/lib/utils';
import * as React from 'react';
import { ProgressBase, ProgressFillBase, type ProgressBaseProps } from '../_base/progress';

export interface ProgressProps extends ProgressBaseProps {}

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-1';
    case 'md': return 'h-2';
    case 'lg': return 'h-3';
    case 'xl': return 'h-4';
    default: return 'h-2';
  }
};

export const Progress = React.forwardRef<React.ComponentRef<typeof ProgressBase>, ProgressProps>(
  ({ className, size = 'md', ...props }, ref) => {
    return (
      <ProgressBase
        ref={ref}
        size={size}
        className={cn(
          'relative w-full overflow-hidden rounded-full bg-[var(--df-surface)]',
          getSizeStyles(size),
          className
        )}
        {...props}
      >
        <ProgressFillBase
          className="h-full w-full flex-1 bg-[var(--df-accent)] transition-all"
        />
      </ProgressBase>
    );
  }
);
Progress.displayName = 'Progress';
