import { cn } from '@/lib/utils';
import { DatePickerBase, type DatePickerBaseProps } from '@/ui/components/_base/date-picker';

const DatePicker = ({ className, ...props }: DatePickerBaseProps) => {
  return (
    <DatePickerBase
      className={cn('font-mono uppercase tracking-wide', className)}
      {...props}
    />
  );
};

export { DatePicker };
