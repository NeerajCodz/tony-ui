import * as React from 'react';
import { cn } from '@/lib/utils';

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
          'inline-flex items-center justify-center rounded-[4px] bg-[var(--ra-surface)] px-4 py-3 text-3xl font-bold tracking-widest text-[var(--ra-text)] shadow-[4px_4px_0_var(--ra-shadow)] border-2 border-[var(--ra-border)] font-mono',
          className
        )}
        {...props}
      >
        <span>{formatTime(time.getHours())}</span>
        <span className="mx-1 animate-pulse text-[var(--text-muted)]">:</span>
        <span>{formatTime(time.getMinutes())}</span>
        {showSeconds && (
          <>
            <span className="mx-1 animate-pulse text-[var(--text-muted)]">:</span>
            <span className="text-[var(--ra-accent)]">{formatTime(time.getSeconds())}</span>
          </>
        )}
      </div>
    );
  }
);
DigitalClock.displayName = 'DigitalClock';

export { DigitalClock };
