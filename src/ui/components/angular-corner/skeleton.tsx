'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { SkeletonBase } from '../_base/skeleton';
import type { VariantColors } from '../../types/common';
import { normalizeColors } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

export interface SkeletonProps extends Omit<React.ComponentPropsWithoutRef<typeof SkeletonBase>, 'type'> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
  version?: string;
  animated?: boolean;
}

const versionKey = 'angular-corner';

const SKELETON_CLIP_PATH = 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)';

export const Skeleton = React.forwardRef<React.ElementRef<typeof SkeletonBase>, SkeletonProps>(
  ({ className, animated = true, type, uiType, colors, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);

    const backgroundColor =
      resolvedType === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.15)'
        : palette.muted ?? '#2a2a2a';

    return (
      <SkeletonBase
        ref={ref}
        className={cn(animated && 'animate-pulse', className)}
        style={{
          clipPath: SKELETON_CLIP_PATH,
          backgroundColor,
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export default Skeleton;