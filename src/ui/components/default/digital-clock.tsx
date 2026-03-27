import { cn } from '@/lib/utils';
import { DigitalClockBase, type DigitalClockBaseProps } from '@/ui/components/_base/digital-clock';
import * as React from 'react';

export interface DigitalClockProps extends DigitalClockBaseProps {}

const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps>(
  ({ className, type = 'default', size = 'md', ...props }, ref) => {
    // Style variants
    const typeStyles = {
      default: 'font-mono text-foreground',
      minimal: 'font-sans font-light text-foreground',
      segment: 'font-mono bg-black text-green-500 p-2 rounded border border-green-900 shadow-[0_0_10px_rgba(34,197,94,0.2)]',
      lcd: 'font-mono bg-[#9ea792] text-[#2c3325] p-2 rounded border-4 border-[#8b9480] shadow-inner',
      unstyled: '',
    };

    // Size variants
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
          'inline-flex items-center gap-2',
          typeStyles[type as keyof typeof typeStyles] || typeStyles.default,
          sizeStyles[size as keyof typeof sizeStyles] || sizeStyles.md,
          // Blinking separator animation
          '[&_[data-clock-time]]:tabular-nums',
          props.blinkingSeparator && '[&_[data-clock-time]]:animate-pulse',
          className
        )}
        {...props}
      />
    );
  }
);

DigitalClock.displayName = 'DigitalClock';

export { DigitalClock };
