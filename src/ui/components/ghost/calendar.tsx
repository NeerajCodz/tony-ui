import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./button"
import { ghostEffectsClass, type GhostEffects } from "./_effects"

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
    effects?: GhostEffects
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  effects = "on",
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(ghostEffectsClass(effects), "p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-sm w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-sm [&:has([aria-selected].day-outside)]:bg-[var(--gh-surface-hover)]/50 [&:has([aria-selected])]:bg-[var(--gh-surface-hover)] first:[&:has([aria-selected])]:rounded-l-sm last:[&:has([aria-selected])]:rounded-r-sm focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-[var(--gh-surface-hover)] text-[var(--gh-text-hover)] hover:bg-[var(--gh-surface-hover)] hover:text-[var(--gh-text-hover)] focus:bg-[var(--gh-surface-hover)] focus:text-[var(--gh-text-hover)]",
        day_today: "bg-[var(--gh-surface)]/50 text-[var(--gh-text)]",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-[var(--gh-surface-hover)]/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-[var(--gh-surface-hover)] aria-selected:text-[var(--gh-text-hover)]",
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
