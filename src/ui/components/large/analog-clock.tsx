import * as React from 'react';
import { cn } from '@/lib/utils';

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
          'relative flex items-center justify-center rounded-full bg-[var(--lg-surface)] border-2 border-[var(--lg-border)] shadow-xl',
          className
        )}
        style={{ width: size, height: size }}
        {...props}
      >
        <div className="absolute inset-2 rounded-full border border-[var(--text-muted)]/20" />
        
        {/* Hour Hand */}
        <div
          className="absolute bottom-1/2 left-1/2 w-1.5 origin-bottom rounded-full bg-[var(--lg-text)]"
          style={{
            height: '30%',
            transform: `translateX(-50%) rotate(${hourRatio * 360}deg)`,
          }}
        />

        {/* Minute Hand */}
        <div
          className="absolute bottom-1/2 left-1/2 w-1 origin-bottom rounded-full bg-[var(--text-secondary)]"
          style={{
            height: '40%',
            transform: `translateX(-50%) rotate(${minuteRatio * 360}deg)`,
          }}
        />

        {/* Second Hand */}
        <div
          className="absolute bottom-1/2 left-1/2 w-0.5 origin-bottom rounded-full bg-[var(--lg-accent)]"
          style={{
            height: '45%',
            transform: `translateX(-50%) rotate(${secondRatio * 360}deg)`,
          }}
        />

        {/* Center Dot */}
        <div className="absolute h-3 w-3 rounded-full bg-[var(--lg-accent)]" />
      </div>
    );
  }
);
AnalogClock.displayName = 'AnalogClock';

export { AnalogClock };
