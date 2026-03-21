'use client';

import * as React from 'react';
import { AspectRatioBase } from '../_base/aspect-ratio';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type AspectRatioProps = Omit<React.ComponentPropsWithoutRef<typeof AspectRatioBase>, 'type'> & StyledProps;

export const AspectRatio = React.forwardRef<React.ElementRef<typeof AspectRatioBase>, AspectRatioProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <AspectRatioBase
      ref={ref}
      className={cx('relative overflow-hidden', className)}
      style={getSurfaceStyle(version ?? 'border', type, uiType, colors, style)}
      {...props}
    />
  )
);

AspectRatio.displayName = 'AspectRatio';

export default AspectRatio;
