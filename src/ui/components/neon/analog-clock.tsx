import * as React from 'react';
import type { AnalogClockBaseProps } from '../_base/analog-clock';

import { cn } from '@/lib/utils';
import { getNeonGlow } from './_effects';

interface AnalogClockProps extends React.HTMLAttributes<HTMLDivElement> {
    effects?: boolean;
}

const AnalogClock = React.forwardRef<HTMLDivElement, AnalogClockProps>(
  ({ className, effects = true, ...props }, ref) => {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
      const timer = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    return (
      <div
        ref={ref}
        className={cn(
          "relative h-32 w-32 rounded-full border-2 border-[var(--ne-primary)] bg-[var(--ne-bg)]",
          getNeonGlow(effects, 'high'),
          className
        )}
        {...props}
      >
        {/* Hour Hand */}
        <div
          className="absolute left-1/2 top-1/2 h-8 w-1 -translate-x-1/2 -translate-y-full origin-bottom bg-[var(--ne-primary)]"
          style={{
            transform: `translateX(-50%) translateY(-100%) rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`,
          }}
        />
        {/* Minute Hand */}
        <div
          className="absolute left-1/2 top-1/2 h-10 w-0.5 -translate-x-1/2 -translate-y-full origin-bottom bg-[var(--ne-primary)]/80"
          style={{
            transform: `translateX(-50%) translateY(-100%) rotate(${minutes * 6}deg)`,
          }}
        />
        {/* Second Hand */}
        <div
          className="absolute left-1/2 top-1/2 h-12 w-px -translate-x-1/2 -translate-y-full origin-bottom bg-[var(--ne-secondary)]"
          style={{
            transform: `translateX(-50%) translateY(-100%) rotate(${seconds * 6}deg)`,
          }}
        />
        {/* Center Dot */}
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ne-primary)]" />
      </div>
    );
  }
);
AnalogClock.displayName = 'AnalogClock';

export { AnalogClock };
