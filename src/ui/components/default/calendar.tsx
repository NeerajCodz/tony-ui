import * as React from 'react';
import { DayPicker } from '../_base/calendar';
import { CalendarBase, type CalendarBaseProps } from '../_base/calendar';
import { cn } from '@/lib/utils';// Assuming this exists or I define styles inline. Button styles.
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
    visualType?: string;
    variant?: string;
};

// Map DayPicker styles to our design system
export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ className, classNames, showOutsideDays = true, visualType = 'default', variant, ...props }, ref) => {
    return (
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn('p-3', className)}
        classNames={{
          months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
          month: 'space-y-4',
          caption: 'flex justify-center pt-1 relative items-center',
          caption_label: 'text-sm font-medium',
          nav: 'space-x-1 flex items-center',
          nav_button: cn(
            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 border border-[var(--df-border)] rounded-md flex items-center justify-center transition-opacity'
          ),
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'w-full border-collapse space-y-1',
          head_row: 'flex',
          head_cell:
            'text-[var(--df-muted)] rounded-md w-9 font-normal text-[0.8rem]',
          row: 'flex w-full mt-2',
          cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-[var(--df-accent)]/50 [&:has([aria-selected])]:bg-[var(--df-accent)]/10 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
          day: cn(
            'h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-md hover:bg-[var(--df-surface)] hover:text-[var(--df-text)] transition-colors'
          ),
          day_range_end: 'day-range-end',
          day_selected:
            'bg-[var(--df-accent)] text-white hover:bg-[var(--df-accent)] hover:text-white focus:bg-[var(--df-accent)] focus:text-white',
          day_today: 'bg-[var(--df-surface)] text-[var(--df-text)] border border-[var(--df-border)]',
          day_outside:
            'day-outside text-[var(--df-muted)] opacity-50 aria-selected:bg-[var(--df-accent)]/50 aria-selected:text-[var(--df-muted)] aria-selected:opacity-30',
          day_disabled: 'text-[var(--df-muted)] opacity-50',
          day_range_middle:
            'aria-selected:bg-[var(--df-accent)]/10 aria-selected:text-[var(--df-accent)]',
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

