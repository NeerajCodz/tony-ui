import * as React from 'react';
import type { Locale } from 'date-fns';

export interface CalendarBaseProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  mode?: 'single' | 'multiple' | 'range';
  selected?: Date | Date[] | { from?: Date; to?: Date };
  onSelect?: (date: Date | Date[] | { from?: Date; to?: Date } | undefined) => void;
  disabled?: (date: Date) => boolean;
  locale?: Locale;
  month?: Date;
  onMonthChange?: (month: Date) => void;
}

export const CalendarBase = React.forwardRef<HTMLDivElement, CalendarBaseProps>(
  ({ mode, selected, onSelect, disabled, locale, month, onMonthChange, ...divProps }, ref) => (
    <div
      ref={ref}
      data-calendar-mode={mode}
      data-calendar-selected={selected ? 'true' : undefined}
      data-calendar-month={month?.toISOString()}
      {...divProps}
    />
  )
);
CalendarBase.displayName = 'CalendarBase';
