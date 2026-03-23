import * as React from "react"
import { cn } from "@/lib/utils"

interface DigitalClockProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: Date
  showSeconds?: boolean
}

const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps>(
  ({ className, value, showSeconds = true, ...props }, ref) => {
    const [time, setTime] = React.useState(value || new Date())

    React.useEffect(() => {
      if (value) return
      const timer = setInterval(() => setTime(new Date()), 1000)
      return () => clearInterval(timer)
    }, [value])

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center border border-[var(--hc-border)] bg-[var(--hc-surface)] px-4 py-2 font-mono text-xl font-bold tracking-widest text-[var(--hc-accent)] [clip-path:polygon(10%_0,100%_0,100%_100%,0_100%,0_20%)]",
          className
        )}
        {...props}
      >
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: showSeconds ? "2-digit" : undefined,
        })}
      </div>
    )
  }
)
DigitalClock.displayName = "DigitalClock"

export { DigitalClock }
