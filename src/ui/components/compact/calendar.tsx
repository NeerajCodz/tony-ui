import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { DayPicker } from '../_base/calendar';

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
    visualType?: string;
    variant?: string;
};

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ className, classNames, showOutsideDays = true, visualType = 'default', variant, ...props }, _ref) => {
    return (
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn('p-3 bg-[var(--cp-bg)] border border-[var(--cp-border)] font-mono', className)}
        classNames={{
          months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
          month: 'space-y-4',
          caption: 'flex justify-center pt-1 relative items-center',
          caption_label: 'text-sm font-bold  tracking-normal font-mono',
          nav: 'space-x-1 flex items-center',
          nav_button: cn(
            'h-7 w-7 bg-transparent p-0 hover:bg-[var(--cp-accent)]/20 hover:text-[var(--cp-accent)] border border-[var(--cp-border)] flex items-center justify-center transition-colors'
          ),
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'w-full border-collapse space-y-1',
          head_row: 'flex',
          head_cell:
            'text-[var(--text-muted)] w-9 font-normal text-[0.8rem]  tracking-wide',
          row: 'flex w-full mt-2',
          cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-[var(--cp-accent)]/10 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
          day: cn(
            'h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-[var(--cp-accent)]/20 hover:text-[var(--cp-accent)] transition-colors data-[selected]:bg-[var(--cp-accent)] data-[selected]:text-[var(--cp-bg)]'
          ),
          day_range_end: 'day-range-end',
          day_selected:
            'bg-[var(--cp-accent)] text-[var(--cp-bg)] hover:bg-[var(--cp-accent)] hover:text-[var(--cp-bg)] focus:bg-[var(--cp-accent)] focus:text-[var(--cp-bg)] font-bold',
          day_today: 'bg-[var(--cp-bg)] text-[var(--text-primary)] border border-[var(--cp-accent)]',
          day_outside:
            'day-outside text-[var(--text-muted)] opacity-50 aria-selected:bg-[var(--cp-accent)]/50 aria-selected:text-[var(--text-muted)] aria-selected:opacity-30',
          day_disabled: 'text-[var(--text-muted)] opacity-50',
          day_range_middle:
            'aria-selected:bg-[var(--cp-accent)]/10 aria-selected:text-[var(--cp-accent)]',
          day_hidden: 'invisible',
          ...classNames,
        }}
        components={{
          Chevron: ({ orientation, ...props }: any) => {
            if (orientation === 'left') return <ChevronLeft className="h-4 w-4" {...props} />;
            if (orientation === 'right') return <ChevronRight className="h-4 w-4" {...props} />;
            return <ChevronLeft className="h-4 w-4" {...props} />;
          }
        }}
        {...props}
      />
    );
  }
);
Calendar.displayName = 'Calendar';

