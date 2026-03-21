'use client';

import * as React from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Compass } from 'lucide-react';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

const sizeMap = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-14 w-14',
} as const;

export type DirectionProps = React.HTMLAttributes<HTMLDivElement> &
  StyledProps & {
    direction?: 'up' | 'down' | 'left' | 'right' | 'ne' | 'nw' | 'se' | 'sw';
    size?: keyof typeof sizeMap;
    animated?: boolean;
  };

export const Direction = React.forwardRef<HTMLDivElement, DirectionProps>(
  ({ className, version, type, uiType, colors, style, direction = 'right', size = 'md', animated = true, children, ...props }, ref) => {
    const Icon =
      direction === 'up'
        ? ArrowUp
        : direction === 'down'
          ? ArrowDown
          : direction === 'left'
            ? ArrowLeft
            : direction === 'right'
              ? ArrowRight
              : Compass;

    return (
      <div
        ref={ref}
        className={cx('inline-flex items-center justify-center transition-transform', animated && 'hover:scale-105', sizeMap[size], className)}
        style={getSurfaceStyle(version, type, uiType, colors, style)}
        {...props}
      >
        {children ?? <Icon className="h-4/5 w-4/5" />}
      </div>
    );
  }
);

Direction.displayName = 'Direction';

export default Direction;
