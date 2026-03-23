import * as React from "react"
import { cn } from "@/lib/utils"

export interface DigitalClockProps extends React.HTMLAttributes<HTMLDivElement> {
  showSeconds?: boolean
  use24Hour?: boolean
}

export function DigitalClock({
  className,
  showSeconds = true,
  use24Hour = false,
  ...props
}: DigitalClockProps) {
  const [date, setDate] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, "0")

  let hours = date.getHours()
  const ampm = hours >= 12 ? "PM" : "AM"
  if (!use24Hour) {
    hours = hours % 12 || 12
  }

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-none border-2 border-[var(--ne-accent)] bg-[var(--ne-surface)] px-6 py-4 font-display text-4xl tracking-widest text-[var(--ne-accent)] shadow-[0_0_20px_var(--ne-accent)]",
        className
      )}
      {...props}
    >
      <span className="drop-shadow-[0_0_10px_var(--ne-accent)]">{formatNumber(hours)}</span>
      <span className="mx-2 animate-pulse drop-shadow-[0_0_10px_var(--ne-accent)]">:</span>
      <span className="drop-shadow-[0_0_10px_var(--ne-accent)]">{formatNumber(date.getMinutes())}</span>
      {showSeconds && (
        <>
          <span className="mx-2 animate-pulse drop-shadow-[0_0_10px_var(--ne-accent)]">:</span>
          <span className="drop-shadow-[0_0_10px_var(--ne-accent)]">{formatNumber(date.getSeconds())}</span>
        </>
      )}
      {!use24Hour && (
        <span className="ml-4 text-xl text-[var(--ne-muted)] drop-shadow-[0_0_5px_var(--ne-muted)]">{ampm}</span>
      )}
    </div>
  )
}
