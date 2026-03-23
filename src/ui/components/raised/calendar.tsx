import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/ui/components/raised/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-4 bg-[var(--ra-surface)] rounded-[4px] shadow-[8px_8px_0_var(--ra-shadow)] border-2 border-[var(--ra-border)] font-mono', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-semibold text-[var(--ra-text)] uppercase tracking-wider',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 rounded-[2px]'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-[var(--text-muted)] rounded-[2px] w-9 font-medium text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-[2px] [&:has([aria-selected].day-outside)]:bg-[var(--ra-accent)]/50 [&:has([aria-selected])]:bg-[var(--ra-accent)] first:[&:has([aria-selected])]:rounded-l-[2px] last:[&:has([aria-selected])]:rounded-r-[2px] focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-[2px]'
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-[var(--ra-accent)] text-white hover:bg-[var(--ra-accent)] hover:text-white focus:bg-[var(--ra-accent)] focus:text-white shadow-none translate-x-[1px] translate-y-[1px]',
        day_today: 'bg-[var(--ra-bg)] text-[var(--ra-text)] border-2 border-[var(--ra-border)]',
        day_outside:
          'day-outside text-[var(--text-muted)] opacity-50 aria-selected:bg-[var(--ra-accent)]/50 aria-selected:text-[var(--text-muted)] aria-selected:opacity-30',
        day_disabled: 'text-[var(--text-muted)] opacity-50',
        day_range_middle:
          'aria-selected:bg-[var(--ra-accent)] aria-selected:text-white',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
