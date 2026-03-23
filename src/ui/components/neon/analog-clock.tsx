import * as React from 'react';
import { cn } from '@/lib/utils';

interface AnalogClockProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  showSeconds?: boolean;
}

const AnalogClock = React.forwardRef<HTMLDivElement, AnalogClockProps>(
  ({ className, size = 200, showSeconds = true, ...props }, ref) => {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours % 12 + minutes / 60) / 12) * 360;

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex items-center justify-center rounded-full border-4 border-[var(--ne-primary)] bg-[var(--ne-bg)] shadow-[0_0_20px_var(--ne-primary)]',
          className
        )}
        style={{ width: size, height: size }}
        {...props}
      >
        {/* Clock Face Markers */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-full"
            style={{ transform: `rotate(${i * 30}deg)` }}
          >
            <div className="absolute left-1/2 top-2 h-3 w-1 -translate-x-1/2 bg-[var(--ne-primary)] shadow-[0_0_5px_var(--ne-primary)]" />
          </div>
        ))}

        {/* Hour Hand */}
        <div
          className="absolute left-1/2 top-1/2 h-1/3 w-1.5 -translate-x-1/2 -translate-y-full origin-bottom rounded-full bg-[var(--ne-primary)] shadow-[0_0_10px_var(--ne-primary)]"
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        />

        {/* Minute Hand */}
        <div
          className="absolute left-1/2 top-1/2 h-2/5 w-1 -translate-x-1/2 -translate-y-full origin-bottom rounded-full bg-[var(--ne-secondary)] shadow-[0_0_10px_var(--ne-secondary)]"
          style={{ transform: `rotate(${minuteDegrees}deg)` }}
        />

        {/* Second Hand */}
        {showSeconds && (
          <div
            className="absolute left-1/2 top-1/2 h-1/2 w-0.5 -translate-x-1/2 -translate-y-full origin-bottom bg-red-500 shadow-[0_0_10px_red]"
            style={{ transform: `rotate(${secondDegrees}deg)` }}
          />
        )}

        {/* Center Dot */}
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ne-primary)] shadow-[0_0_10px_var(--ne-primary)]" />
      </div>
    );
  }
);
AnalogClock.displayName = 'AnalogClock';

export { AnalogClock };
