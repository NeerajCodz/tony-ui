'use client';

import * as React from 'react';

/**
 * Analog clock type variants
 */
export type AnalogClockType =
  | 'default'
  | 'minimal'
  | 'classic'
  | 'modern'
  | 'unstyled';

/**
 * Analog clock sizes
 */
export type AnalogClockSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// ============================================================================
// Analog Clock
// ============================================================================

export interface AnalogClockBaseProps extends React.SVGAttributes<SVGSVGElement> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: AnalogClockType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: AnalogClockSize;
  
  /**
   * IANA timezone string (e.g., 'America/New_York')
   */
  timezone?: string;
  
  /**
   * Update interval in milliseconds
   * @default 1000
   */
  tickMs?: number;
  
  /**
   * Whether to show the second hand
   * @default true
   */
  showSeconds?: boolean;
  
  /**
   * Whether to show hour markers
   * @default true
   */
  showMarkers?: boolean;
  
  /**
   * Whether to show numbers instead of markers
   * @default false
   */
  showNumbers?: boolean;
  
  /**
   * Whether to use smooth animation (CSS transitions)
   * @default false
   */
  smooth?: boolean;
}

/**
 * AnalogClockBase - Analog clock display
 * 
 * Renders an SVG analog clock with hour, minute, and second hands.
 * 
 * Features:
 * - Timezone support via IANA strings
 * - Configurable update interval
 * - Optional second hand
 * - Various visual styles
 * 
 * Accessibility:
 * - role="img"
 * - aria-label with current time
 * - aria-live for updates (optional)
 */
export const AnalogClockBase = React.forwardRef<SVGSVGElement, AnalogClockBaseProps>(
  (
    {
      type = 'default',
      size = 'md',
      timezone,
      tickMs = 1000,
      showSeconds = true,
      showMarkers = true,
      showNumbers = false,
      smooth = false,
      className,
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

    const timeString = resolved.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      ...(showSeconds ? { second: '2-digit' } : {}),
    });

    return (
      <svg
        ref={ref}
        className={className}
        viewBox="0 0 100 100"
        role="img"
        aria-label={`Analog clock showing ${timeString}`}
        data-type={type}
        data-size={size}
        data-timezone={timezone ?? 'local'}
        data-smooth={smooth || undefined}
        {...props}
      >
        {/* Clock face */}
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
        
        {/* Hour markers */}
        {showMarkers && !showNumbers && Array.from({ length: 12 }).map((_, index) => {
          const angle = ((index - 3) / 12) * Math.PI * 2;
          const x1 = 50 + Math.cos(angle) * 38;
          const y1 = 50 + Math.sin(angle) * 38;
          const x2 = 50 + Math.cos(angle) * 42;
          const y2 = 50 + Math.sin(angle) * 42;
          return <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.7" />;
        })}
        
        {/* Hour hand */}
        <line
          x1="50"
          y1="50"
          x2={50 + Math.cos(((hourAngle - 90) * Math.PI) / 180) * 20}
          y2={50 + Math.sin(((hourAngle - 90) * Math.PI) / 180) * 20}
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          data-hand="hour"
        />
        
        {/* Minute hand */}
        <line
          x1="50"
          y1="50"
          x2={50 + Math.cos(((minuteAngle - 90) * Math.PI) / 180) * 30}
          y2={50 + Math.sin(((minuteAngle - 90) * Math.PI) / 180) * 30}
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          data-hand="minute"
        />
        
        {/* Second hand */}
        {showSeconds && (
          <line
            x1="50"
            y1="50"
            x2={50 + Math.cos(((secondAngle - 90) * Math.PI) / 180) * 34}
            y2={50 + Math.sin(((secondAngle - 90) * Math.PI) / 180) * 34}
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.8"
            data-hand="second"
          />
        )}
        
        {/* Center dot */}
        <circle cx="50" cy="50" r="2.4" fill="currentColor" />
      </svg>
    );
  }
);

AnalogClockBase.displayName = 'AnalogClockBase';
