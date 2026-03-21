import React from 'react';
import { cn } from '@/lib/utils';
import type { VariantColors } from '../../types/common';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  colors?: VariantColors;
  variant?: string;
  version?: string;
}

const getTypeStyles = (type: ComponentType, colors?: VariantColors): React.CSSProperties => {
  if (!colors) return {};

  const base = colors.base;
  const foreground = colors.foreground;
  const border = colors.border;
  const glow = colors.glow;
  const accent = colors.accent?.primary ?? colors.base;
  const muted = colors.muted ?? colors.border;

  switch (type) {
    case 'solid':
      return {
        backgroundColor: accent,
        color: foreground,
        border: border ? `1px solid ${border}` : undefined,
        boxShadow: glow ? `0 0 12px ${glow}` : undefined,
      };
    case 'outline':
      return {
        backgroundColor: 'transparent',
        color: accent ?? foreground,
        border: border ? `1px solid ${border}` : (accent ? `1px solid ${accent}` : undefined),
      };
    case 'ghost':
      return {
        backgroundColor: 'transparent',
        color: foreground,
        border: 'none',
      };
    case 'inverse':
      return {
        backgroundColor: foreground,
        color: base ?? accent,
        border: foreground ? `1px solid ${foreground}` : undefined,
      };
    case 'contrast':
      return {
        backgroundColor: border ?? accent,
        color: foreground,
        border: accent ? `2px solid ${accent}` : undefined,
        fontWeight: 700,
      };
    case 'soft':
      return {
        backgroundColor: base ? `color-mix(in srgb, ${base} 12%, transparent)` : undefined,
        color: foreground,
        border: muted ? `1px solid ${muted}` : undefined,
      };
    case 'default':
    default:
      return {
        backgroundColor: base,
        color: foreground,
        border: border ? `1px solid ${border}` : undefined,
      };
  }
};

import {
  ChartBase,
  ChartContainerBase,
  ChartTooltipBase,
  ChartLegendBase,
} from '../_base/chart';

export interface ChartProps extends React.ComponentProps<typeof ChartBase>, StyledProps {}
export interface ChartContainerProps extends React.ComponentProps<typeof ChartContainerBase>, StyledProps {}
export interface ChartTooltipProps extends React.ComponentProps<typeof ChartTooltipBase>, StyledProps {}
export interface ChartLegendProps extends React.ComponentProps<typeof ChartLegendBase>, StyledProps {}

const versionIdentityClass = 'chart-padding';

const ChartRoot = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => (
    <ChartBase
      ref={ref}
      className={cn('chart-root', versionIdentityClass, className)}
      style={{ ...getTypeStyles(type, colors), ...style }}
      {...props}
    />
  )
);
ChartRoot.displayName = 'Chart';

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => (
    <ChartContainerBase
      ref={ref}
      className={cn('chart-container', `${versionIdentityClass}__container`, className)}
      style={{ ...getTypeStyles(type, colors), ...style }}
      {...props}
    />
  )
);
ChartContainer.displayName = 'ChartContainer';

const ChartTooltip = React.forwardRef<HTMLDivElement, ChartTooltipProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => (
    <ChartTooltipBase
      ref={ref}
      className={cn('chart-tooltip', `${versionIdentityClass}__tooltip`, className)}
      style={{ ...getTypeStyles(type, colors), ...style }}
      {...props}
    />
  )
);
ChartTooltip.displayName = 'ChartTooltip';

const ChartLegend = React.forwardRef<HTMLDivElement, ChartLegendProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => (
    <ChartLegendBase
      ref={ref}
      className={cn('chart-legend', `${versionIdentityClass}__legend`, className)}
      style={{ ...getTypeStyles(type, colors), ...style }}
      {...props}
    />
  )
);
ChartLegend.displayName = 'ChartLegend';

export const Chart = Object.assign(ChartRoot, {
  Container: ChartContainer,
  Tooltip: ChartTooltip,
  Legend: ChartLegend,
});

export { ChartContainer, ChartTooltip, ChartLegend };
export default Chart;
