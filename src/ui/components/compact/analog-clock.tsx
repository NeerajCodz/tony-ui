import * as React from 'react';
import { cn } from '@/lib/utils';

interface AnalogClockProps extends React.SVGAttributes<SVGSVGElement> {
  visualType?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const AnalogClock = React.forwardRef<SVGSVGElement, AnalogClockProps>(
  ({ className, size = 'md', visualType = 'outline', ...props }, ref) => {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }, []);

    const secondsRatio = time.getSeconds() / 60;
    const minutesRatio = (secondsRatio + time.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + time.getHours()) / 12;

    const sizeClasses = {
        xs: 'w-16 h-16',
        sm: 'w-24 h-24',
        md: 'w-32 h-32',
        lg: 'w-48 h-48',
        xl: 'w-64 h-64'
    };

    return (
      <svg
        ref={ref}
        className={cn('bg-[var(--cp-bg)] text-[var(--text-primary)] border border-[var(--cp-border)] rounded-full', sizeClasses[size], className)}
        viewBox="0 0 100 100"
                // SVG viewBox 0 0 100 100.
        {...props}
      >
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--cp-border)]" />
        
        {/* Markers */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="10"
            x2="50"
            y2="15"
            transform={`rotate(${i * 30} 50 50)`}
            stroke="currentColor"
            strokeWidth="2"
            className="text-[var(--text-muted)]"
          />
        ))}

        {/* Hour Hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="25"
          stroke="currentColor"
          strokeWidth="4"
          transform={`rotate(${hoursRatio * 360} 50 50)`}
          className="text-[var(--text-primary)]"
        />

        {/* Minute Hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="15"
          stroke="currentColor"
          strokeWidth="3"
          transform={`rotate(${minutesRatio * 360} 50 50)`}
          className="text-[var(--text-primary)]"
        />

        {/* Second Hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="10"
          stroke="currentColor"
          strokeWidth="1"
          transform={`rotate(${secondsRatio * 360} 50 50)`}
          className="text-[var(--cp-accent)]"
        />
        
        <circle cx="50" cy="50" r="3" fill="currentColor" className="text-[var(--cp-accent)]" />
      </svg>
    );
  }
);
AnalogClock.displayName = 'AnalogClock';

export { AnalogClock };
