'use client';

import * as React from 'react';
import { SkeletonBase } from '../_base/skeleton';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type SkeletonProps = Omit<React.ComponentPropsWithoutRef<typeof SkeletonBase>, 'type'> &
  StyledProps & {
    animated?: boolean;
  };

export const Skeleton = React.forwardRef<React.ElementRef<typeof SkeletonBase>, SkeletonProps>(
  ({ className, animated = true, version, type, uiType, colors, style, ...props }, ref) => (
    <SkeletonBase
      ref={ref}
      className={cx(animated && 'animate-pulse', 'rounded', className)}
      style={getSurfaceStyle(version ?? 'large', type, uiType, colors, style)}
      {...props}
    />
  )
);

Skeleton.displayName = 'Skeleton';

export default Skeleton;
