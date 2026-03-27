import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { DayPicker } from '../_base/calendar';
import { glassEffectsClass, type GlassEffects } from './_effects';
import { buttonVariants } from './button';

export type CalendarProps = React.ComponentProps<typeof DayPicker> & { effects?: GlassEffects };

function Calendar({ className, classNames, showOutsideDays = true, effects = 'on', ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'p-3 border border-[var(--gl-glass-border)]/20 rounded-xl bg-[var(--gl-glass-bg)]/80 backdrop-blur-md font-display text-[var(--df-text)]',
        glassEffectsClass(effects),
        className
      )}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium text-[var(--df-text)]',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 border-[var(--gl-glass-border)]/20'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-[var(--df-muted-text)] rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-[var(--gl-accent)]/10 [&:has([aria-selected])]:bg-[var(--gl-accent)]/20 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-[var(--gl-accent)]/20 hover:text-[var(--gl-accent)]'
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-[var(--gl-accent)] text-primary-foreground hover:bg-[var(--gl-accent)] hover:text-primary-foreground focus:bg-[var(--gl-accent)] focus:text-primary-foreground',
        day_today: 'bg-[var(--gl-glass-bg)]/50 text-[var(--gl-accent)]',
        day_outside:
          'day-outside text-[var(--df-muted-text)] opacity-50 aria-selected:bg-[var(--gl-accent)]/10 aria-selected:text-[var(--df-muted-text)] aria-selected:opacity-30',
        day_disabled: 'text-[var(--df-muted-text)] opacity-30',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === 'right' ? (
            <ChevronRight className='h-4 w-4' />
          ) : (
            <ChevronLeft className='h-4 w-4' />
          ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };

