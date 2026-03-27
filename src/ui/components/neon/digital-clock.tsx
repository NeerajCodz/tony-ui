import * as React from 'react';

import { cn } from '@/lib/utils';
import { getNeonGlow } from './_effects';

interface DigitalClockProps extends React.HTMLAttributes<HTMLDivElement> {
    effects?: boolean;
}

const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps>(
  ({ className, effects = true, ...props }, ref) => {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
      const timer = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center rounded-none border-2 border-[var(--ne-primary)] bg-[var(--ne-bg)] px-4 py-2 font-mono text-2xl text-[var(--ne-primary)]",
          getNeonGlow(effects, 'text'),
          effects && getNeonGlow(true),
          className
        )}
        {...props}
      >
        {time.toLocaleTimeString()}
      </div>
    );
  }
);
DigitalClock.displayName = 'DigitalClock';

export { DigitalClock };
