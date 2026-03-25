import * as React from 'react';
import { DigitalClockBase, type DigitalClockBaseProps } from '../_base/digital-clock';
import { cn } from '@/lib/utils';

export interface DigitalClockProps extends DigitalClockBaseProps {}

const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps>(
  ({ className, type = 'default', size = 'md', ...props }, ref) => {
    const sizeStyles = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    };

    return (
      <DigitalClockBase
        ref={ref}
        type={type}
        size={size}
        className={cn(
          'inline-flex items-center gap-2 font-sans text-[var(--pd-text)]',
          '[&_[data-clock-time]]:tabular-nums',
          '[&_[data-clock-date]]:text-[var(--pd-muted)]',
          sizeStyles[size as keyof typeof sizeStyles] || sizeStyles.md,
          className
        )}
        {...props}
      />
    );
  }
);

DigitalClock.displayName = 'DigitalClock';

export { DigitalClock };
