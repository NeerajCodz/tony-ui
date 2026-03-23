import * as React from 'react';

import { cn } from '@/lib/utils';

interface DigitalClockProps extends React.HTMLAttributes<HTMLDivElement> {
  showSeconds?: boolean;
}

const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps>(
  ({ className, showSeconds = true, ...props }, ref) => {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-center rounded-none border-2 border-[var(--ne-primary)] bg-[var(--ne-bg)] px-6 py-4 font-mono text-4xl font-bold tracking-widest text-[var(--ne-primary)] shadow-[0_0_20px_var(--ne-primary)]',
          className
        )}
        {...props}
      >
        <span className="drop-shadow-[0_0_10px_var(--ne-primary)]">{hours}</span>
        <span className="animate-pulse">:</span>
        <span className="drop-shadow-[0_0_10px_var(--ne-primary)]">{minutes}</span>
        {showSeconds && (
          <>
            <span className="animate-pulse">:</span>
            <span className="drop-shadow-[0_0_10px_var(--ne-primary)]">{seconds}</span>
          </>
        )}
      </div>
    );
  }
);
DigitalClock.displayName = 'DigitalClock';

export { DigitalClock };
