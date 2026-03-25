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
          'relative flex items-center justify-center rounded-none bg-[var(--mg-surface)] border border-[var(--mg-border)] shadow-[0_0_15px_rgba(0,255,85,0.1)]',
          className
        )}
        style={{ width: size, height: size }}
        {...props}
      >
        <div className="absolute inset-2 border border-[var(--mg-border)]/50 rounded-full" />
        
        {/* Hour Hand */}
        <div
          className="absolute bottom-1/2 left-1/2 w-1.5 origin-bottom bg-[var(--mg-text)]"
          style={{
            height: '25%',
            transform: `translateX(-50%) rotate(${hourRatio * 360}deg)`,
          }}
        />

        {/* Minute Hand */}
        <div
          className="absolute bottom-1/2 left-1/2 w-1 origin-bottom bg-[var(--mg-text-dim)]"
          style={{
            height: '35%',
            transform: `translateX(-50%) rotate(${minuteRatio * 360}deg)`,
          }}
        />

        {/* Second Hand */}
        <div
          className="absolute bottom-1/2 left-1/2 w-0.5 origin-bottom bg-[var(--mg-accent)] shadow-[0_0_5px_var(--mg-accent)]"
          style={{
            height: '45%',
            transform: `translateX(-50%) rotate(${secondRatio * 360}deg)`,
          }}
        />

        {/* Center Dot */}
        <div className="absolute h-2 w-2 bg-[var(--mg-accent)] shadow-[0_0_5px_var(--mg-accent)]" />
        
        {/* Markers */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 bg-[var(--mg-border)]"
            style={{
              top: '5px',
              left: '50%',
              transformOrigin: `0 ${size / 2 - 5}px`,
              transform: `translateX(-50%) rotate(${i * 30}deg)`,
            }}
          />
        ))}
      </div>
    );
  }
);
AnalogClock.displayName = 'AnalogClock';

export { AnalogClock };
