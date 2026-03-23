"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/ui/components/neon/button"

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
      className={cn(
        "p-3 border-2 border-[var(--ne-primary)] bg-[var(--ne-bg)] shadow-[inset_0_0_10px_var(--ne-primary),0_0_20px_var(--ne-primary)] w-fit rounded-none font-display uppercase tracking-wider",
        className
      )}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-bold text-[var(--ne-primary)] drop-shadow-[0_0_5px_var(--ne-primary)]",
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
          "text-[var(--ne-text-secondary)] rounded-none w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-none [&:has([aria-selected].day-outside)]:bg-[var(--ne-primary)]/10 [&:has([aria-selected])]:bg-[var(--ne-primary)]/20 first:[&:has([aria-selected])]:rounded-l-none last:[&:has([aria-selected])]:rounded-r-none focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-none hover:bg-[var(--ne-primary)]/20 hover:text-[var(--ne-primary)]"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-[var(--ne-primary)] text-[var(--ne-bg)] hover:bg-[var(--ne-primary)] hover:text-[var(--ne-bg)] focus:bg-[var(--ne-primary)] focus:text-[var(--ne-bg)] shadow-[0_0_10px_var(--ne-primary)]",
        day_today: "bg-[var(--ne-text-secondary)]/10 text-[var(--ne-text-primary)]",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-[var(--ne-primary)]/10 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-[var(--ne-primary)]/10 aria-selected:text-[var(--ne-primary)]",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
