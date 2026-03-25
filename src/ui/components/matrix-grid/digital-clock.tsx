import * as React from 'react';
import { cn } from '@/lib/utils';
import type { DigitalClockBaseProps } from '../_base/digital-clock';

interface DigitalClockProps extends React.HTMLAttributes<HTMLDivElement> {
  showSeconds?: boolean;
}

const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps>(
  ({ className, showSeconds = true, ...props }, ref) => {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }, []);

    const formatTime = (val: number) => val.toString().padStart(2, '0');

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center border border-[var(--mg-border)] bg-[var(--mg-surface)] px-4 py-2 text-2xl font-bold tracking-widest text-[var(--mg-accent)] font-mono shadow-[0_0_10px_var(--mg-accent)]',
          className
        )}
        {...props}
      >
        <span className="text-shadow-glow">{formatTime(time.getHours())}</span>
        <span className="mx-1 animate-pulse text-[var(--mg-text-dim)]">:</span>
        <span className="text-shadow-glow">{formatTime(time.getMinutes())}</span>
        {showSeconds && (
          <>
            <span className="mx-1 animate-pulse text-[var(--mg-text-dim)]">:</span>
            <span className="text-[var(--mg-text)] text-lg">{formatTime(time.getSeconds())}</span>
          </>
        )}
      </div>
    );
  }
);
DigitalClock.displayName = 'DigitalClock';

export { DigitalClock };
