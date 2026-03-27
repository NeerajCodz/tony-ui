import * as React from "react";
import { cn } from "@/lib/utils";

interface AnalogClockProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: Date
}

const AnalogClock = React.forwardRef<HTMLDivElement, AnalogClockProps>(
  ({ className, value = new Date(), ...props }, ref) => {
    const [time, setTime] = React.useState(value)

    React.useEffect(() => {
      const timer = setInterval(() => setTime(new Date()), 1000)
      return () => clearInterval(timer)
    }, [])

    const seconds = time.getSeconds()
    const minutes = time.getMinutes()
    const hours = time.getHours() % 12

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-[var(--hc-border)] bg-[var(--hc-surface)] shadow-lg [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]",
          className
        )}
        {...props}
      >
        {/* Clock Face Markers */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-full"
            style={{ transform: `rotate(${i * 30}deg)` }}
          >
            <div className="mx-auto h-2 w-0.5 bg-[var(--hc-muted)]" />
          </div>
        ))}

        {/* Hands */}
        <div
          className="absolute bottom-1/2 left-1/2 h-8 w-1 origin-bottom -translate-x-1/2 rounded bg-[var(--hc-text)]"
          style={{ transform: `translateX(-50%) rotate(${hours * 30 + minutes * 0.5}deg)` }}
        />
        <div
          className="absolute bottom-1/2 left-1/2 h-10 w-0.5 origin-bottom -translate-x-1/2 rounded bg-[var(--hc-text)]"
          style={{ transform: `translateX(-50%) rotate(${minutes * 6}deg)` }}
        />
        <div
          className="absolute bottom-1/2 left-1/2 h-12 w-0.5 origin-bottom -translate-x-1/2 rounded bg-[var(--hc-accent)]"
          style={{ transform: `translateX(-50%) rotate(${seconds * 6}deg)` }}
        />

        {/* Center Dot */}
        <div className="absolute h-2 w-2 rounded-full bg-[var(--hc-accent)]" />
      </div>
    )
  }
)
AnalogClock.displayName = "AnalogClock"

export { AnalogClock }
