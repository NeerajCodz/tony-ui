'use client';

import * as React from 'react';
import { KbdBase } from '../_base/kbd';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type KbdProps = Omit<React.ComponentPropsWithoutRef<typeof KbdBase>, 'type'> & StyledProps;

export const Kbd = React.forwardRef<React.ElementRef<typeof KbdBase>, KbdProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <KbdBase
      ref={ref}
      className={cx('inline-flex min-h-5 items-center rounded px-1.5 text-[10px] font-medium uppercase tracking-wide', className)}
      style={getSurfaceStyle(version ?? 'padding', type, uiType, colors, style)}
      {...props}
    />
  )
);

Kbd.displayName = 'Kbd';

export default Kbd;
