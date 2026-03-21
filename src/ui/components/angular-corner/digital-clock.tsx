'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

export interface DigitalClockProps extends React.HTMLAttributes<HTMLDivElement>, StyledProps {
  timezone?: string;
  format?: '12h' | '24h';
  showSeconds?: boolean;
  tickMs?: number;
}

const versionKey = 'angular-corner';

const CLOCK_CLIP_PATH = 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)';

export const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps>(
  ({ className, timezone, format = '24h', showSeconds = true, tickMs = 1000, type, uiType, colors, style, children, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(resolvedType, colors);

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

    const backgroundColor =
      resolvedType === 'solid'
        ? palette.accentPrimary ?? palette.base
        : resolvedType === 'soft' && palette.accentRgb
          ? 'rgba(' + palette.accentRgb + ', 0.95)'
          : resolvedType === 'inverse'
            ? palette.foreground
            : resolvedType === 'ghost'
              ? 'transparent'
              : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a0a';

    const borderColor =
      resolvedType === 'outline' || resolvedType === 'contrast'
        ? palette.accentPrimary ?? palette.border
        : resolvedType === 'ghost'
          ? 'transparent'
          : palette.border ?? '#333';

    const textColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

    const accentColor = palette.accentPrimary ?? '#ff6600';

    return (
      <div
        ref={ref}
        className={cn('inline-flex flex-col items-center justify-center px-6 py-4', className)}
        data-clock-format={format}
        data-version={versionKey}
        data-type={resolvedType}
        style={{
          clipPath: CLOCK_CLIP_PATH,
          backgroundColor,
          border: '2px solid ' + borderColor,
          boxShadow: '0 0 12px ' + (palette.glow ?? 'rgba(0,0,0,0.3)'),
          ...style,
        }}
        {...props}
      >
        <time
          dateTime={now.toISOString()}
          className="block tabular-nums font-bold leading-none"
          style={{
            color: accentColor,
            fontSize: '2rem',
            letterSpacing: '0.12em',
            textShadow: '0 0 8px ' + accentColor,
            fontFamily: 'monospace',
          }}
        >
          {timeFormatter.format(now)}
        </time>
        <div
          className="mt-2 uppercase tracking-widest"
          style={{
            color: textColor,
            opacity: 0.7,
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
          }}
        >
          {dateFormatter.format(now)}
        </div>
        {children}
      </div>
    );
  }
);

DigitalClock.displayName = 'DigitalClock';

export default DigitalClock;