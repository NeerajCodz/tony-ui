'use client';

import * as React from 'react';

/**
 * Digital clock type variants
 */
export type DigitalClockType =
  | 'default'
  | 'minimal'
  | 'segment'
  | 'lcd'
  | 'unstyled';

/**
 * Digital clock sizes
 */
export type DigitalClockSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Time format
 */
export type DigitalClockFormat = '12h' | '24h';

// ============================================================================
// Digital Clock
// ============================================================================

export interface DigitalClockBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: DigitalClockType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: DigitalClockSize;
  
  /**
   * IANA timezone string (e.g., 'America/New_York')
   */
  timezone?: string;
  
  /**
   * Time format
   * @default '24h'
   */
  format?: DigitalClockFormat;
  
  /**
   * Whether to show seconds
   * @default true
   */
  showSeconds?: boolean;
  
  /**
   * Whether to show date
   * @default true
   */
  showDate?: boolean;
  
  /**
   * Update interval in milliseconds
   * @default 1000
   */
  tickMs?: number;
  
  /**
   * Whether to show blinking colon separator
   * @default false
   */
  blinkingSeparator?: boolean;
  
  /**
   * Semantic variant
   */
  variant?: string;
}

/**
 * DigitalClockBase - Digital clock display
 * 
 * Renders a digital time display with optional date.
 * 
 * Features:
 * - 12h/24h format
 * - Timezone support
 * - Optional seconds display
 * - Optional date display
 * - Various visual styles (LCD, segment, etc.)
 * 
 * Accessibility:
 * - Uses <time> element with datetime attribute
 * - aria-live for time updates
 */
export const DigitalClockBase = React.forwardRef<HTMLDivElement, DigitalClockBaseProps>(
  (
    {
      type = 'default',
      size = 'md',
      timezone,
      format = '24h',
      showSeconds = true,
      showDate = true,
      tickMs = 1000,
      blinkingSeparator = false,
      variant,
      className,
      children,
      ...props
    },
    ref
  ) => {
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
      <div
        ref={ref}
        className={className}
        data-type={type}
        data-size={size}
        data-format={format}
        data-variant={variant}
        data-blinking={blinkingSeparator || undefined}
        {...props}
      >
        <time
          dateTime={now.toISOString()}
          aria-live="polite"
          aria-atomic="true"
          data-clock-time
        >
          {timeFormatter.format(now)}
        </time>
        {showDate && (
          <div data-clock-date aria-hidden="true">
            {dateFormatter.format(now)}
          </div>
        )}
        {children}
      </div>
    );
  }
);

DigitalClockBase.displayName = 'DigitalClockBase';
