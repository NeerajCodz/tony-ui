'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { VariantColors } from '@/ui/types/common';
import { ProgressBase, ProgressIndicatorBase } from '../_base/progress';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressBase> {
  version?: string;
  variant?: string;
  type?: ComponentType;
  colors?: VariantColors;
  showValue?: boolean;
}

const versionKey = 'angular-corner';

const PROGRESS_CLIP_PATH = 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)';

const Progress = forwardRef<React.ElementRef<typeof ProgressBase>, ProgressProps>(
  ({ className, value, type = 'default', colors, showValue, style, ...props }, ref) => {
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(type, colors);

    const trackBg =
      type === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.15)'
        : type === 'inverse'
          ? palette.foreground
          : palette.base ?? '#1f1f1f';

    const indicatorColor =
      type === 'solid' || type === 'default'
        ? palette.accentPrimary ?? palette.foreground
        : type === 'contrast'
          ? palette.foreground
          : type === 'inverse'
            ? palette.base
            : (typeStyles.backgroundColor as string | undefined) ?? palette.accentPrimary;

    const borderColor =
      type === 'outline' || type === 'contrast'
        ? palette.accentPrimary ?? palette.border
        : type === 'ghost'
          ? 'transparent'
          : palette.border;

    return (
      <ProgressBase
        ref={ref}
        className={cn('relative h-4 w-full overflow-hidden', className)}
        style={{
          clipPath: PROGRESS_CLIP_PATH,
          backgroundColor: trackBg,
          border: '2px solid ' + borderColor,
          ...style,
        }}
        data-version={versionKey}
        data-type={type}
        {...props}
      >
        <ProgressIndicatorBase
          className="h-full transition-all duration-300"
          style={{
            width: (value ?? 0) + '%',
            backgroundColor: indicatorColor,
            boxShadow: '0 0 8px ' + (palette.glow ?? indicatorColor),
          }}
        />
        {showValue && (
          <span
            className="absolute inset-0 flex items-center justify-center text-xs font-bold"
            style={{ color: palette.foreground }}
          >
            {Math.round(value ?? 0)}%
          </span>
        )}
      </ProgressBase>
    );
  }
);
Progress.displayName = 'Progress';

export { Progress };
export default Progress;