'use client';

import * as React from 'react';

export interface DigitalClockBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  timezone?: string;
  format?: '12h' | '24h';
  showSeconds?: boolean;
  tickMs?: number;
}

export const DigitalClockBase = React.forwardRef<HTMLDivElement, DigitalClockBaseProps>(
  ({ className, timezone, format = '24h', showSeconds = true, tickMs = 1000, children, ...props }, ref) => {
    const [now, setNow] = React.useState(() => new Date());

    React.useEffect(() => {
      const cadence = Number.isFinite(tickMs) ? Math.max(250, tickMs) : 1000;
      const timer = window.setInterval(() => setNow(new Date()), cadence);
      return () => window.clearInterval(timer);
    }, [tickMs]);

    const timeFormatter = React.useMemo(
      () =>
        new Intl.DateTimeFormat(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          ...(showSeconds ? { second: '2-digit' } : {}),
          hour12: format === '12h',
          timeZone: timezone,
        }),
      [format, showSeconds, timezone]
    );

    const dateFormatter = React.useMemo(
      () =>
        new Intl.DateTimeFormat(undefined, {
          weekday: 'short',
          month: 'short',
          day: '2-digit',
          timeZone: timezone,
        }),
      [timezone]
    );

    return (
      <div ref={ref} className={className} data-clock-format={format} {...props}>
        <time dateTime={now.toISOString()} className="block tabular-nums text-lg font-semibold leading-none">
          {timeFormatter.format(now)}
        </time>
        <div className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] opacity-70">{dateFormatter.format(now)}</div>
        {children}
      </div>
    );
  }
);

DigitalClockBase.displayName = 'DigitalClockBase';
