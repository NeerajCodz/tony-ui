import * as React from 'react';
import { DayPicker } from '../_base/calendar';
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/components/honey-comb/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 border border-[var(--hc-border)] bg-[var(--hc-surface)] [clip-path:polygon(3%_0%,97%_0%,100%_3%,100%_97%,97%_100%,3%_100%,0%_97%,0%_3%)]", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium font-display uppercase tracking-wider text-[var(--hc-accent)]",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] font-display uppercase",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-[var(--hc-hex-hover)] [clip-path:polygon(15%_0%,85%_0%,100%_50%,85%_100%,15%_100%,0%_50%)]"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-[var(--hc-accent)] text-[var(--hc-bg)] hover:bg-[var(--hc-accent)] hover:text-[var(--hc-bg)] focus:bg-[var(--hc-accent)] focus:text-[var(--hc-bg)]",
        day_today: "bg-[var(--hc-surface)] text-[var(--hc-text)] border border-[var(--hc-accent)]",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === 'right' ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }

