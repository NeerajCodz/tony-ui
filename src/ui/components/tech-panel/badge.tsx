'use client';

import * as React from 'react';
import { BadgeBase } from '../_base/badge';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type BadgeProps = Omit<React.ComponentPropsWithoutRef<typeof BadgeBase>, 'type'> & StyledProps;

export const Badge = React.forwardRef<React.ElementRef<typeof BadgeBase>, BadgeProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <BadgeBase
      ref={ref}
      className={cx('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold', className)}
      style={getSurfaceStyle(version ?? 'tech-panel', type, uiType, colors, style)}
      {...props}
    />
  )
);

Badge.displayName = 'Badge';

export default Badge;
