'use client';

import * as React from 'react';

export interface AnalogClockBaseProps extends React.SVGAttributes<SVGSVGElement> {
  timezone?: string;
  tickMs?: number;
}

export const AnalogClockBase = React.forwardRef<SVGSVGElement, AnalogClockBaseProps>(
  ({ className, timezone, tickMs = 1000, ...props }, ref) => {
    const [now, setNow] = React.useState(() => new Date());

    React.useEffect(() => {
      const cadence = Number.isFinite(tickMs) ? Math.max(250, tickMs) : 1000;
      const timer = window.setInterval(() => setNow(new Date()), cadence);
      return () => window.clearInterval(timer);
    }, [tickMs]);

    const resolved = React.useMemo(() => {
      if (!timezone) return now;
      const locale = now.toLocaleString('en-US', { timeZone: timezone });
      return new Date(locale);
    }, [now, timezone]);

    const hours = resolved.getHours() % 12;
    const minutes = resolved.getMinutes();
    const seconds = resolved.getSeconds();

    const hourAngle = hours * 30 + minutes * 0.5;
    const minuteAngle = minutes * 6 + seconds * 0.1;
    const secondAngle = seconds * 6;

    return (
      <svg
        ref={ref}
        className={className}
        viewBox="0 0 100 100"
        role="img"
        aria-label="Analog clock"
        data-timezone={timezone ?? 'local'}
        {...props}
      >
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
        {Array.from({ length: 12 }).map((_, index) => {
          const angle = (index / 12) * Math.PI * 2;
          const x1 = 50 + Math.cos(angle) * 38;
          const y1 = 50 + Math.sin(angle) * 38;
          const x2 = 50 + Math.cos(angle) * 42;
          const y2 = 50 + Math.sin(angle) * 42;
          return <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.7" />;
        })}
        <line
          x1="50"
          y1="50"
          x2={50 + Math.cos(((hourAngle - 90) * Math.PI) / 180) * 20}
          y2={50 + Math.sin(((hourAngle - 90) * Math.PI) / 180) * 20}
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="50"
          y1="50"
          x2={50 + Math.cos(((minuteAngle - 90) * Math.PI) / 180) * 30}
          y2={50 + Math.sin(((minuteAngle - 90) * Math.PI) / 180) * 30}
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <line
          x1="50"
          y1="50"
          x2={50 + Math.cos(((secondAngle - 90) * Math.PI) / 180) * 34}
          y2={50 + Math.sin(((secondAngle - 90) * Math.PI) / 180) * 34}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
        <circle cx="50" cy="50" r="2.4" fill="currentColor" />
      </svg>
    );
  }
);

AnalogClockBase.displayName = 'AnalogClockBase';
