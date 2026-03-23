import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/ui/components/_base/button'; 
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

export type CalendarProps = React.ComponentProps<typeof DayPicker> & { effects?: TerminalWindowEffects };

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  effects = 'on',
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(terminalWindowEffectsClass(effects), 'p-3 border border-[var(--tm-phosphor)] bg-[var(--tm-bg)] text-[var(--tm-phosphor)]', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium font-mono uppercase tracking-widest',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ visualType: 'outline' }),
          'h-7 w-7 bg-transparent p-0 hover:opacity-100 rounded-none border-[var(--tm-phosphor)]'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-[var(--tm-phosphor-dim)] rounded-none w-9 font-normal text-[0.8rem] font-mono uppercase',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:bg-[var(--tm-phosphor)]/20 [&:has([aria-selected].day-outside)]:bg-[var(--tm-phosphor)]/10 [&:has([aria-selected])]:bg-[var(--tm-phosphor)]/20 first:[&:has([aria-selected])]:rounded-l-none last:[&:has([aria-selected])]:rounded-r-none focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ visualType: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-none font-mono hover:bg-[var(--tm-phosphor)]/20 hover:text-[var(--tm-phosphor)]'
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-[var(--tm-phosphor)] text-[var(--tm-bg)] hover:bg-[var(--tm-phosphor)] hover:text-[var(--tm-bg)] focus:bg-[var(--tm-phosphor)] focus:text-[var(--tm-bg)]',
        day_today: 'bg-[var(--tm-phosphor)]/10 text-[var(--tm-phosphor)] border border-[var(--tm-phosphor)]',
        day_outside:
          'day-outside text-[var(--tm-phosphor-dim)] opacity-50 aria-selected:bg-[var(--tm-phosphor)]/10 aria-selected:text-[var(--tm-phosphor-dim)] aria-selected:opacity-30',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-[var(--tm-phosphor)]/10 aria-selected:text-[var(--tm-phosphor)]',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className='h-4 w-4' />,
        IconRight: ({ ...props }) => <ChevronRight className='h-4 w-4' />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
