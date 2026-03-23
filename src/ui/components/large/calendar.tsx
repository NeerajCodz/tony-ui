import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/ui/components/large/button';

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
      className={cn('p-6 bg-[var(--lg-surface)] rounded-3xl shadow-xl border border-[var(--lg-border)]', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-6 sm:space-x-6 sm:space-y-0',
        month: 'space-y-6',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-base font-semibold text-[var(--lg-text)]',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-10 w-10 bg-transparent p-0 opacity-50 hover:opacity-100 rounded-xl'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-[var(--text-muted)] rounded-lg w-12 font-medium text-[0.9rem]',
        row: 'flex w-full mt-2',
        cell: 'h-12 w-12 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-xl [&:has([aria-selected].day-outside)]:bg-[var(--lg-accent)]/50 [&:has([aria-selected])]:bg-[var(--lg-accent)] first:[&:has([aria-selected])]:rounded-l-xl last:[&:has([aria-selected])]:rounded-r-xl focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-12 w-12 p-0 font-normal aria-selected:opacity-100 rounded-xl'
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-[var(--lg-accent)] text-white hover:bg-[var(--lg-accent)] hover:text-white focus:bg-[var(--lg-accent)] focus:text-white',
        day_today: 'bg-[var(--lg-bg)] text-[var(--lg-text)]',
        day_outside:
          'day-outside text-[var(--text-muted)] opacity-50 aria-selected:bg-[var(--lg-accent)]/50 aria-selected:text-[var(--text-muted)] aria-selected:opacity-30',
        day_disabled: 'text-[var(--text-muted)] opacity-50',
        day_range_middle:
          'aria-selected:bg-[var(--lg-accent)] aria-selected:text-white',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-5 w-5" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-5 w-5" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
