'use client';

import * as React from 'react';
import { CalendarBase } from '../_base/calendar';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type CalendarProps = Omit<React.ComponentPropsWithoutRef<typeof CalendarBase>, 'type'> & StyledProps;

export const Calendar = React.forwardRef<React.ElementRef<typeof CalendarBase>, CalendarProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <CalendarBase
      ref={ref}
      className={cx('p-2', className)}
      style={getSurfaceStyle(version ?? 'tactical-hud', type, uiType, colors, style)}
      {...props}
    />
  )
);

Calendar.displayName = 'Calendar';

export default Calendar;
