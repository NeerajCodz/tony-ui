import * as React from 'react';
import { AnalogClockBase, type AnalogClockBaseProps } from '../_base/analog-clock';
import { cn } from '@/lib/utils';

export interface AnalogClockProps extends AnalogClockBaseProps {}

const AnalogClock = React.forwardRef<SVGSVGElement, AnalogClockProps>(
  ({ className, type = 'default', size = 'md', ...props }, ref) => {
    const sizeStyles = {
      xs: 'w-16 h-16',
      sm: 'w-24 h-24',
      md: 'w-32 h-32',
      lg: 'w-48 h-48',
      xl: 'w-64 h-64',
    };

    return (
      <AnalogClockBase
        ref={ref}
        type={type}
        size={size}
        className={cn(
          'text-[var(--pd-text)]',
          sizeStyles[size as keyof typeof sizeStyles] || sizeStyles.md,
          '[&_circle]:stroke-[var(--pd-muted)]/60',
          '[&_line]:stroke-[var(--pd-text)]',
          '[&_[data-hand="second"]]:stroke-[var(--pd-accent)]',
          className
        )}
        {...props}
      />
    );
  }
);

AnalogClock.displayName = 'AnalogClock';

export { AnalogClock };
