'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ProgressBase } from '../_base/progress';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  value?: number;
  max?: number;
  showValue?: boolean;
}

const versionKey = 'quantum-gate';

const PROGRESS_CLIP_PATH = 'polygon(8px 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0 50%)';

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, type, uiType, colors, value = 0, max = 100, showValue, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(resolvedType, colors);

    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    const trackColor =
      resolvedType === 'inverse'
        ? palette.base ?? '#fff'
        : 'rgba(' + (palette.accentRgb ?? '100,100,255') + ', 0.2)';

    const indicatorColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : palette.accentPrimary ?? '#8080ff';

    const textColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#e0e0ff';

    return (
      <div className={cn('relative', className)} style={style}>
        <ProgressBase
          ref={ref}
          value={value}
          max={max}
          className="relative h-4 w-full overflow-hidden"
          style={{
            clipPath: PROGRESS_CLIP_PATH,
            backgroundColor: trackColor,
            boxShadow: 'inset 0 0 8px rgba(0,0,0,0.3)',
          }}
          data-version={versionKey}
          data-type={resolvedType}
          {...props}
        >
          <div
            className="h-full transition-all duration-300 ease-out"
            style={{
              width: percentage + '%',
              clipPath: PROGRESS_CLIP_PATH,
              backgroundColor: indicatorColor,
              boxShadow: '0 0 12px ' + indicatorColor + ', inset 0 0 6px rgba(255,255,255,0.2)',
            }}
          />
        </ProgressBase>
        {showValue && (
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-medium tabular-nums pr-4"
            style={{
              color: textColor,
              textShadow: '0 0 4px ' + (palette.glow ?? 'rgba(100,100,255,0.5)'),
            }}
          >
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export { Progress };
export default Progress;