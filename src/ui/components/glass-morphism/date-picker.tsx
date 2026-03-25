import { format } from '../_base/date-picker';
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Calendar } from "./calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"
import { glassEffectsClass, type GlassEffects } from "./_effects"

export interface DatePickerProps {
  date?: Date
  setDate?: (date: Date | undefined) => void
  effects?: GlassEffects
  className?: string
}

export function DatePicker({ date, setDate, effects = "on", className }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal text-[var(--df-text)] bg-[var(--gl-glass-bg)]/30 border-[var(--gl-glass-border)]/30",
            !date && "text-muted-foreground",
            className
          )}
          effects={effects}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" effects={effects}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

