import * as React from 'react';
import { DatePickerBase, type DatePickerBaseProps } from '@/ui/components/_base/date-picker';
import { cn } from '@/lib/utils';

const DatePicker = ({ className, ...props }: DatePickerBaseProps) => {
  return (
    <DatePickerBase
      className={cn('font-mono uppercase tracking-wide', className)}
      {...props}
    />
  );
};

export { DatePicker };
