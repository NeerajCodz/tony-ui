'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { BadgeBase } from '../_base/badge';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

export interface BadgeProps extends Omit<React.ComponentPropsWithoutRef<typeof BadgeBase>, 'type'> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  version?: string;
}

const versionKey = 'angular-corner';

// Angular clipped corners for badge
const BADGE_CLIP_PATH = 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)';

export const Badge = React.forwardRef<React.ElementRef<typeof BadgeBase>, BadgeProps>(
  ({ className, type, uiType, colors, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(resolvedType, colors);

    // Compute background based on type
    const backgroundColor =
      resolvedType === 'solid'
        ? palette.accentPrimary ?? palette.base
        : resolvedType === 'soft' && palette.accentRgb
          ? `rgba(${palette.accentRgb}, 0.15)`
          : resolvedType === 'inverse'
            ? palette.foreground
            : resolvedType === 'ghost'
              ? 'transparent'
              : (typeStyles.backgroundColor as string | undefined) ?? palette.base;

    // Compute border based on type
    const borderColor =
      resolvedType === 'outline' || resolvedType === 'contrast'
        ? palette.accentPrimary ?? palette.border
        : resolvedType === 'ghost'
          ? 'transparent'
          : palette.border;

    // Compute text color based on type
    const textColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : (typeStyles.color as string | undefined) ?? palette.foreground;

    return (
      <BadgeBase
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider',
          className
        )}
        style={{
          clipPath: BADGE_CLIP_PATH,
          backgroundColor,
          border: `1px solid ${borderColor}`,
          color: textColor,
          boxShadow:
            resolvedType === 'ghost' ? 'none' : `0 0 6px ${palette.glow ?? 'rgba(0,0,0,0.2)'}`,
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

export default Badge;
