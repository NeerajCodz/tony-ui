import { cn } from '@/lib/utils';
import { buttonVariants } from '@/ui/components/circuit-board/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { DayPicker } from '../_base/calendar';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = ({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3 font-mono border border-[var(--cb-trace)] bg-[var(--cb-soldermask)] rounded-none shadow-[0_0_10px_var(--cb-trace)] text-[var(--cb-trace-lit)] uppercase tracking-wide', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ visualType: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 rounded-none border-[var(--cb-trace)] text-[var(--cb-trace-lit)]'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-[var(--cb-trace-dim)] rounded-none w-9 font-normal text-[0.8rem] border-b border-[var(--cb-trace)]',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-none [&:has([aria-selected].day-outside)]:bg-[var(--cb-trace)]/20 [&:has([aria-selected])]:bg-[var(--cb-trace)]/10 first:[&:has([aria-selected])]:rounded-l-none last:[&:has([aria-selected])]:rounded-r-none focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ visualType: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-none text-[var(--cb-trace-dim)] hover:text-[var(--cb-trace-lit)] hover:bg-[var(--cb-trace)]/20'
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-[var(--cb-trace)] text-[var(--cb-soldermask)] hover:bg-[var(--cb-trace)] hover:text-[var(--cb-soldermask)] focus:bg-[var(--cb-trace)] focus:text-[var(--cb-soldermask)] shadow-[0_0_10px_var(--cb-trace)]',
        day_today: 'bg-[var(--cb-trace)]/10 text-[var(--cb-trace-lit)] border border-[var(--cb-trace)]',
        day_outside:
          'day-outside text-[var(--cb-trace-dim)] opacity-50 aria-selected:bg-[var(--cb-trace)]/20 aria-selected:text-[var(--cb-trace-dim)] aria-selected:opacity-30',
        day_disabled: 'text-[var(--cb-trace-dim)] opacity-50',
        day_range_middle:
          'aria-selected:bg-[var(--cb-trace)]/10 aria-selected:text-[var(--cb-trace-lit)]',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...props }: { orientation?: 'left' | 'right' }) =>
          orientation === 'left' ? (
            <ChevronLeft className="h-4 w-4" {...props} />
          ) : (
            <ChevronRight className="h-4 w-4" {...props} />
          ),
      }}
      {...props}
    />
  );
};
Calendar.displayName = 'Calendar';

export { Calendar };

