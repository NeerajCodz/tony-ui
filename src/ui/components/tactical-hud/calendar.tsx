import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { buttonVariants } from './button'; // Use our button styles

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
    visualType?: string;
    variant?: string;
    effects?: TacticalHudEffects;
};


export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ className, effects = 'on', classNames, showOutsideDays = true, visualType = 'default', variant, style, ...props }, ref) => {
    return (
      <div className={cn(tacticalHudEffectsClass(effects), "p-3 bg-[var(--th-surface)]/50 inline-block", className)} style={{ ...bracketsStyle, ...style }}>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(tacticalHudEffectsClass(effects), 'p-3 font-sans')}
        classNames={{
          months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
          month: 'space-y-4',
          caption: 'flex justify-center pt-1 relative items-center',
          caption_label: 'text-sm font-bold uppercase tracking-wider font-sans text-[var(--th-primary)]',
          nav: 'space-x-1 flex items-center',
          nav_button: cn(
            buttonVariants({ visualType: 'outline' }),
            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity'
          ),
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'w-full border-collapse space-y-1',
          head_row: 'flex',
          head_cell:
            'text-[var(--th-muted)] w-9 font-normal text-[0.8rem] uppercase tracking-wide font-sans',
          row: 'flex w-full mt-2',
          cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-[var(--th-primary)]/10 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
          day: cn(
            buttonVariants({ visualType: 'ghost' }),
            'h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-[var(--th-primary)]/20 hover:text-[var(--th-active)] transition-colors data-[selected]:bg-[var(--th-primary)] data-[selected]:text-[var(--th-bg)]'
          ),
          day_range_end: 'day-range-end',
          day_selected:
            'bg-[var(--th-primary)] text-[var(--th-bg)] hover:bg-[var(--th-primary)] hover:text-[var(--th-bg)] focus:bg-[var(--th-primary)] focus:text-[var(--th-bg)] font-bold',
          day_today: 'bg-[var(--th-surface)] text-[var(--th-primary)] ring-1 ring-[var(--th-primary)]',
          day_outside:
            'day-outside text-[var(--th-muted)] opacity-50 aria-selected:bg-[var(--th-primary)]/50 aria-selected:text-[var(--th-muted)] aria-selected:opacity-30',
          day_disabled: 'text-[var(--th-muted)] opacity-50',
          day_range_middle:
            'aria-selected:bg-[var(--th-primary)]/10 aria-selected:text-[var(--th-primary)]',
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
      </div>
    );
  }
);
Calendar.displayName = 'Calendar';
