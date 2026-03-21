'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { SkeletonBase } from '../_base/skeleton';
import type { VariantColors } from '../../types/common';
import { normalizeColors } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'quantum-gate';

const SKELETON_CLIP_PATH = 'polygon(8px 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0 50%)';

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, type, uiType, colors, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);

    const baseColor = 'rgba(' + (palette.accentRgb ?? '100,100,255') + ', 0.15)';
    const shimmerColor = 'rgba(' + (palette.accentRgb ?? '100,100,255') + ', 0.3)';

    return (
      <SkeletonBase
        ref={ref}
        className={cn('relative overflow-hidden', className)}
        style={{
          clipPath: SKELETON_CLIP_PATH,
          backgroundColor: baseColor,
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent, ' + shimmerColor + ', transparent)',
            animation: 'shimmer 2s infinite',
          }}
        />
      </SkeletonBase>
    );
  }
);

Skeleton.displayName = 'Skeleton';

export { Skeleton };
export default Skeleton;