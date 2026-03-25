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
          'inline-flex items-center justify-center rounded-2xl bg-[var(--lg-surface)] px-6 py-4 text-4xl font-bold tracking-widest text-[var(--lg-text)] shadow-md border border-[var(--lg-border)]',
          className
        )}
        {...props}
      >
        <span>{formatTime(time.getHours())}</span>
        <span className="mx-1 animate-pulse">:</span>
        <span>{formatTime(time.getMinutes())}</span>
        {showSeconds && (
          <>
            <span className="mx-1 animate-pulse">:</span>
            <span className="text-[var(--lg-accent)]">{formatTime(time.getSeconds())}</span>
          </>
        )}
      </div>
    );
  }
);
DigitalClock.displayName = 'DigitalClock';

export { DigitalClock };
