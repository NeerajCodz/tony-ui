'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

export interface AnalogClockProps extends Omit<React.SVGAttributes<SVGSVGElement>, 'type'> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  timezone?: string;
  tickMs?: number;
}

const versionKey = 'angular-corner';

export const AnalogClock = React.forwardRef<SVGSVGElement, AnalogClockProps>(
  ({ className, timezone, tickMs = 1000, type, uiType, colors, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(resolvedType, colors);

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

    const faceColor =
      resolvedType === 'solid'
        ? palette.accentPrimary ?? palette.base ?? '#111'
        : resolvedType === 'inverse'
          ? palette.foreground ?? '#fff'
          : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a0a';

    const borderColor =
      resolvedType === 'outline' || resolvedType === 'contrast'
        ? palette.accentPrimary ?? palette.border
        : palette.border ?? '#444';

    const handColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

    const accentColor = palette.accentPrimary ?? '#ff6600';
    const glowColor = palette.glow ?? 'rgba(255,100,0,0.4)';

    return (
      <svg
        ref={ref}
        className={cn('w-32 h-32', className)}
        viewBox="0 0 100 100"
        role="img"
        aria-label="Analog clock"
        data-timezone={timezone ?? 'local'}
        data-version={versionKey}
        data-type={resolvedType}
        style={style}
        {...props}
      >
        <defs>
          <filter id="angular-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <polygon
          points="50,4 88,15 96,50 88,85 50,96 12,85 4,50 12,15"
          fill={faceColor}
          stroke={borderColor}
          strokeWidth="2"
          filter="url(#angular-glow)"
        />
        <polygon
          points="50,10 82,19 89,50 82,81 50,90 18,81 11,50 18,19"
          fill="none"
          stroke={borderColor}
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        {Array.from({ length: 12 }).map((_, index) => {
          const angle = ((index - 3) / 12) * Math.PI * 2;
          const x1 = 50 + Math.cos(angle) * 32;
          const y1 = 50 + Math.sin(angle) * 32;
          const x2 = 50 + Math.cos(angle) * 38;
          const y2 = 50 + Math.sin(angle) * 38;
          const isCardinal = index % 3 === 0;
          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isCardinal ? accentColor : handColor}
              strokeWidth={isCardinal ? '2.5' : '1.5'}
              strokeOpacity={isCardinal ? '1' : '0.6'}
            />
          );
        })}
        <line
          x1="50"
          y1="50"
          x2={50 + Math.cos(((hourAngle - 90) * Math.PI) / 180) * 18}
          y2={50 + Math.sin(((hourAngle - 90) * Math.PI) / 180) * 18}
          stroke={handColor}
          strokeWidth="4"
          strokeLinecap="square"
        />
        <line
          x1="50"
          y1="50"
          x2={50 + Math.cos(((minuteAngle - 90) * Math.PI) / 180) * 26}
          y2={50 + Math.sin(((minuteAngle - 90) * Math.PI) / 180) * 26}
          stroke={handColor}
          strokeWidth="2.5"
          strokeLinecap="square"
        />
        <line
          x1="50"
          y1="50"
          x2={50 + Math.cos(((secondAngle - 90) * Math.PI) / 180) * 30}
          y2={50 + Math.sin(((secondAngle - 90) * Math.PI) / 180) * 30}
          stroke={accentColor}
          strokeWidth="1.5"
          strokeLinecap="square"
          filter="url(#angular-glow)"
        />
        <polygon
          points="50,46 54,50 50,54 46,50"
          fill={accentColor}
        />
      </svg>
    );
  }
);

AnalogClock.displayName = 'AnalogClock';

export default AnalogClock;