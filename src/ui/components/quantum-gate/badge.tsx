'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { BadgeBase } from '../_base/badge';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'quantum-gate';

const BADGE_CLIP_PATH = 'polygon(8px 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0 50%)';

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, type, uiType, colors, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(resolvedType, colors);

    const backgroundColor =
      resolvedType === 'solid'
        ? palette.accentPrimary ?? palette.base
        : resolvedType === 'soft' && palette.accentRgb
          ? 'rgba(' + palette.accentRgb + ', 0.2)'
          : resolvedType === 'inverse'
            ? palette.foreground
            : resolvedType === 'ghost'
              ? 'transparent'
              : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a12';

    const borderColor =
      resolvedType === 'outline' || resolvedType === 'contrast'
        ? palette.accentPrimary ?? palette.border
        : resolvedType === 'ghost'
          ? 'transparent'
          : palette.border ?? '#3a3a5a';

    const textColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#e0e0ff';

    return (
      <BadgeBase
        ref={ref}
        className={cn(
          'inline-flex items-center px-3 py-0.5 text-xs font-semibold uppercase tracking-wider',
          className
        )}
        style={{
          clipPath: BADGE_CLIP_PATH,
          backgroundColor,
          border: '1px solid ' + borderColor,
          color: textColor,
          letterSpacing: '0.06em',
          boxShadow: resolvedType !== 'ghost' ? '0 0 8px ' + (palette.glow ?? 'rgba(100,100,255,0.3)') : 'none',
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
export default Badge;