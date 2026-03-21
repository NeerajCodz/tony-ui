import * as React from 'react';
import { AnalogClockBase, type AnalogClockBaseProps } from '@/ui/components/_base/analog-clock';
import { cn } from '@/lib/utils';

export interface AnalogClockProps extends AnalogClockBaseProps {}

const AnalogClock = React.forwardRef<SVGSVGElement, AnalogClockProps>(
  ({ className, type = 'default', size = 'md', ...props }, ref) => {
    // Size variants (container size)
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
          'text-foreground',
          sizeStyles[size as keyof typeof sizeStyles] || sizeStyles.md,
          // Styles for specific parts of the clock
          '[&_circle]:stroke-border',
          '[&_line]:stroke-foreground',
          // Second hand specific color
          '[&_[data-hand="second"]]:stroke-primary',
          type === 'minimal' && '[&_circle]:hidden [&_line]:stroke-foreground/80',
          type === 'modern' && '[&_circle]:stroke-primary/20 [&_circle]:fill-primary/5',
          className
        )}
        {...props}
      />
    );
  }
);

AnalogClock.displayName = 'AnalogClock';

export { AnalogClock };
