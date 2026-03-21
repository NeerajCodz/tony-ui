'use client';

import * as React from 'react';
import { SeparatorBase } from '../_base/separator';
import { cx, getPalette, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type SeparatorProps = Omit<React.ComponentPropsWithoutRef<typeof SeparatorBase>, 'type'> & StyledProps;

export const Separator = React.forwardRef<React.ElementRef<typeof SeparatorBase>, SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, version, type, uiType, colors, style, ...props }, ref) => {
    const palette = getPalette(colors);
    return (
      <SeparatorBase
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cx('shrink-0', orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]', className)}
        style={{
          ...getSurfaceStyle(version ?? 'padding', type, uiType, colors, style, {
            borderless: true,
            disableClip: true,
            disableGlow: true,
          }),
          backgroundColor: palette.border,
        }}
        {...props}
      />
    );
  }
);

Separator.displayName = 'Separator';

export default Separator;
