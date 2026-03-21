import * as React from 'react';

export interface DatePickerBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  disabled?: (date: Date) => boolean;
}

export const DatePickerBase = React.forwardRef<HTMLDivElement, DatePickerBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
DatePickerBase.displayName = 'DatePickerBase';
