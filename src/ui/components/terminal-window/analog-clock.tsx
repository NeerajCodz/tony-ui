import * as React from 'react';
import { AnalogClockBase, type AnalogClockBaseProps } from '../_base/analog-clock';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

export interface AnalogClockProps extends AnalogClockBaseProps {
  effects?: TerminalWindowEffects;
}

const sizeClasses = {
  xs: 'w-16 h-16',
  sm: 'w-24 h-24',
  md: 'w-32 h-32',
  lg: 'w-48 h-48',
  xl: 'w-64 h-64',
} as const;

const AnalogClock = React.forwardRef<SVGSVGElement, AnalogClockProps>(
  ({ className, size = 'md', effects = 'on', ...props }, ref) => {
    return (
      <AnalogClockBase
        ref={ref}
        size={size}
        className={cn(
          terminalWindowEffectsClass(effects),
          sizeClasses[size],
          'text-[var(--tm-phosphor)] [&_[data-hand="second"]]:stroke-[var(--tm-red)]',
          className
        )}
        {...props}
      />
    );
  }
);
AnalogClock.displayName = 'AnalogClock';

export { AnalogClock };
