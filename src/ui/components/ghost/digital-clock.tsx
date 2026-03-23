import * as React from "react"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"

interface DigitalClockProps extends React.HTMLAttributes<HTMLDivElement> {
    effects?: GhostEffects
}

const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps>(
  ({ className, effects = "on", ...props }, ref) => {
    const [time, setTime] = React.useState(new Date())

    React.useEffect(() => {
      const timer = setInterval(() => setTime(new Date()), 1000)
      return () => clearInterval(timer)
    }, [])

    return (
      <div
        ref={ref}
        className={cn(ghostEffectsClass(effects),
          "flex items-center justify-center rounded-sm border border-[var(--gh-border)] bg-[var(--gh-surface)] p-4 text-4xl font-mono text-[var(--gh-text)] tabular-nums shadow-md",
          className
        )}
        {...props}
      >
        {time.toLocaleTimeString([], { hour12: false })}
      </div>
    )
  }
)
DigitalClock.displayName = "DigitalClock"

export { DigitalClock }
