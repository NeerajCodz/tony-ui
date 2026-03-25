import * as React from 'react';
import { cn } from '@/lib/utils';
import type { AnalogClockBaseProps } from '../_base/analog-clock';

interface AnalogClockProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const AnalogClock = React.forwardRef<HTMLDivElement, AnalogClockProps>(
  ({ className, size = 200, ...props }, ref) => {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }, []);

    const secondRatio = time.getSeconds() / 60;
    const minuteRatio = (secondRatio + time.getMinutes()) / 60;
    const hourRatio = (minuteRatio + time.getHours()) / 12;

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex items-center justify-center rounded-full bg-[var(--ra-surface)] border-4 border-[var(--ra-border)] shadow-[8px_8px_0_var(--ra-shadow)]',
          className
        )}
        style={{ width: size, height: size }}
        {...props}
      >
        <div className="absolute inset-2 rounded-full border-2 border-dashed border-[var(--text-muted)]/40" />
        
        {/* Hour Hand */}
        <div
          className="absolute bottom-1/2 left-1/2 w-2 origin-bottom bg-[var(--ra-text)]"
          style={{
            height: '25%',
            transform: `translateX(-50%) rotate(${hourRatio * 360}deg)`,
          }}
        />

        {/* Minute Hand */}
        <div
          className="absolute bottom-1/2 left-1/2 w-1.5 origin-bottom bg-[var(--text-secondary)]"
          style={{
            height: '35%',
            transform: `translateX(-50%) rotate(${minuteRatio * 360}deg)`,
          }}
        />

        {/* Second Hand */}
        <div
          className="absolute bottom-1/2 left-1/2 w-1 origin-bottom bg-[var(--ra-destructive)]"
          style={{
            height: '40%',
            transform: `translateX(-50%) rotate(${secondRatio * 360}deg)`,
          }}
        />

        {/* Center Dot */}
        <div className="absolute h-4 w-4 bg-[var(--ra-text)] border-2 border-[var(--ra-border)]" />
      </div>
    );
  }
);
AnalogClock.displayName = 'AnalogClock';

export { AnalogClock };
