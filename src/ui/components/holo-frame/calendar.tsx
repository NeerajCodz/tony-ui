import * as React from 'react';
import { DayPicker } from '../_base/calendar';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { ChevronLeft, ChevronRight } from 'lucide-react';
 // Use our button styles

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
    visualType?: string;
    variant?: string;
    effects?: HoloFrameEffects;
};

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ className, effects = 'on', classNames, showOutsideDays = true, visualType = 'default', variant, ...props }, _ref) => {
    return (
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(holoFrameEffectsClass(effects), 'p-3 bg-[var(--hf-surface)] border border-[var(--hf-border-dim)] font-mono', className)}
        style={{ '--corner': '12px' } as React.CSSProperties}
        classNames={{
          months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
          month: 'space-y-4',
          caption: 'flex justify-center pt-1 relative items-center',
          caption_label: 'text-sm font-bold uppercase tracking-wider font-sans',
          nav: 'space-x-1 flex items-center',
          nav_button: cn(
            'h-7 w-7 bg-transparent p-0 hover:bg-[var(--hf-border-main)]/20 hover:text-[var(--hf-border-main)] border border-[var(--hf-border-dim)] flex items-center justify-center transition-colors'
          ),
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'w-full border-collapse space-y-1',
          head_row: 'flex',
          head_cell:
            'text-[var(--hf-text)] w-9 font-normal text-[0.8rem] uppercase tracking-wide',
          row: 'flex w-full mt-2',
          cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-[var(--hf-border-main)]/10 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
          day: cn(
            'h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-[var(--hf-border-main)]/20 hover:text-[var(--hf-border-main)] transition-colors data-[selected]:bg-[var(--hf-border-main)] data-[selected]:text-[var(--hf-bg)]'
          ),
          day_range_end: 'day-range-end',
          day_selected:
            'bg-[var(--hf-border-main)] text-[var(--hf-bg)] hover:bg-[var(--hf-border-main)] hover:text-[var(--hf-bg)] focus:bg-[var(--hf-border-main)] focus:text-[var(--hf-bg)] font-bold',
          day_today: 'bg-[var(--hf-surface)] text-[var(--hf-text)] border border-[var(--hf-border-main)]',
          day_outside:
            'day-outside text-[var(--hf-text)] opacity-50 aria-selected:bg-[var(--hf-border-main)]/50 aria-selected:text-[var(--hf-text)] aria-selected:opacity-30',
          day_disabled: 'text-[var(--hf-text)] opacity-50',
          day_range_middle:
            'aria-selected:bg-[var(--hf-border-main)]/10 aria-selected:text-[var(--hf-border-main)]',
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

