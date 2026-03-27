import * as React from 'react';
import { DayPicker } from '../_base/calendar';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';
import { ChevronLeft, ChevronRight } from 'lucide-react';
 // Use our button styles

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
    visualType?: string;
    variant?: string;
    effects?: QuantumGateEffects;
};


export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ className, effects = 'on', classNames, showOutsideDays = true, visualType = 'default', variant, ...props }, _ref) => {
    return (
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(quantumGateEffectsClass(effects), 'p-3 bg-[var(--qg-surface)] border border-[var(--qg-border)] font-sans', className)}
        style={{ '--corner': '12px' } as React.CSSProperties}
        classNames={{
          months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
          month: 'space-y-4',
          caption: 'flex justify-center pt-1 relative items-center',
          caption_label: 'text-sm font-bold uppercase tracking-wider font-sans',
          nav: 'space-x-1 flex items-center',
          nav_button: cn(
            'h-7 w-7 bg-transparent p-0 hover:bg-[var(--qg-iris-1)]/20 hover:text-[var(--qg-iris-1)] border border-[var(--qg-border)] flex items-center justify-center transition-colors'
          ),
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'w-full border-collapse space-y-1',
          head_row: 'flex',
          head_cell:
            'text-[var(--text-muted)] w-9 font-normal text-[0.8rem] uppercase tracking-wide',
          row: 'flex w-full mt-2',
          cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-[var(--qg-iris-1)]/10 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
          day: cn(
            'h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-[var(--qg-iris-1)]/20 hover:text-[var(--qg-iris-1)] transition-colors data-[selected]:bg-[var(--qg-iris-1)] data-[selected]:text-[var(--qg-bg)]'
          ),
          day_range_end: 'day-range-end',
          day_selected:
            'bg-[var(--qg-iris-1)] text-[var(--qg-bg)] hover:bg-[var(--qg-iris-1)] hover:text-[var(--qg-bg)] focus:bg-[var(--qg-iris-1)] focus:text-[var(--qg-bg)] font-bold',
          day_today: 'bg-[var(--qg-surface)] text-[var(--text-primary)] border border-[var(--qg-iris-1)]',
          day_outside:
            'day-outside text-[var(--text-muted)] opacity-50 aria-selected:bg-[var(--qg-iris-1)]/50 aria-selected:text-[var(--text-muted)] aria-selected:opacity-30',
          day_disabled: 'text-[var(--text-muted)] opacity-50',
          day_range_middle:
            'aria-selected:bg-[var(--qg-iris-1)]/10 aria-selected:text-[var(--qg-iris-1)]',
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

