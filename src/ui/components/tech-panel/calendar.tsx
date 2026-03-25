import * as React from 'react';
import { DayPicker } from '../_base/calendar';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { buttonVariants } from './button'; // Use our button styles

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
    visualType?: string;
    variant?: string;
    effects?: TechPanelEffects;
};


export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ className, effects = 'on', classNames, showOutsideDays = true, visualType = 'default', variant, ...props }, ref) => {
    return (
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(techPanelEffectsClass(effects), 'p-3 bg-[var(--tp-panel)] border border-[var(--tp-border-outer)] font-mono rounded-none', className)}
        style={{ } as React.CSSProperties}
        classNames={{
          months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
          month: 'space-y-4',
          caption: 'flex justify-center pt-1 relative items-center',
          caption_label: 'text-sm font-bold uppercase tracking-wider font-display text-[var(--tp-accent)]',
          nav: 'space-x-1 flex items-center',
          nav_button: cn(
            'h-7 w-7 bg-transparent p-0 hover:bg-[var(--tp-accent)]/20 hover:text-[var(--tp-accent)] border border-[var(--tp-border-inner)] flex items-center justify-center transition-colors rounded-none'
          ),
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'w-full border-collapse space-y-1',
          head_row: 'flex',
          head_cell:
            'text-[var(--text-muted)] w-9 font-normal text-[0.8rem] uppercase tracking-wide',
          row: 'flex w-full mt-2',
          cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-[var(--tp-accent)]/10 first:[&:has([aria-selected])]:rounded-l-none last:[&:has([aria-selected])]:rounded-r-none focus-within:relative focus-within:z-20',
          day: cn(
            'h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-[var(--tp-accent)]/20 hover:text-[var(--tp-accent)] transition-colors data-[selected]:bg-[var(--tp-accent)] data-[selected]:text-[var(--tp-bg)] rounded-none'
          ),
          day_range_end: 'day-range-end',
          day_selected:
            'bg-[var(--tp-accent)] text-[var(--tp-bg)] hover:bg-[var(--tp-accent)] hover:text-[var(--tp-bg)] focus:bg-[var(--tp-accent)] focus:text-[var(--tp-bg)] font-bold',
          day_today: 'bg-[var(--tp-panel)] text-[var(--text-primary)] border border-[var(--tp-accent)]',
          day_outside:
            'day-outside text-[var(--text-muted)] opacity-50 aria-selected:bg-[var(--tp-accent)]/50 aria-selected:text-[var(--text-muted)] aria-selected:opacity-30',
          day_disabled: 'text-[var(--text-muted)] opacity-50',
          day_range_middle:
            'aria-selected:bg-[var(--tp-accent)]/10 aria-selected:text-[var(--tp-accent)]',
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

