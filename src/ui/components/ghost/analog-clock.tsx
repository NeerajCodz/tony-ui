import * as React from "react"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"

interface AnalogClockProps extends React.HTMLAttributes<HTMLDivElement> {
    effects?: GhostEffects
}

const AnalogClock = React.forwardRef<HTMLDivElement, AnalogClockProps>(
  ({ className, effects = "on", ...props }, ref) => {
    const [time, setTime] = React.useState(new Date())

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
        className={cn(ghostEffectsClass(effects),
          "relative h-32 w-32 rounded-full border-2 border-[var(--gh-border)] bg-[var(--gh-surface)] shadow-md",
          className
        )}
        {...props}
      >
        {/* Hour Hand */}
        <div
          className="absolute left-1/2 top-1/2 h-8 w-1 origin-bottom -translate-x-1/2 -translate-y-full rounded-full bg-[var(--gh-text)]"
          style={{
            transform: `translateX(-50%) translateY(-100%) rotate(${(hours + minutes / 60) * 30}deg)`,
          }}
        />
        {/* Minute Hand */}
        <div
          className="absolute left-1/2 top-1/2 h-12 w-0.5 origin-bottom -translate-x-1/2 -translate-y-full rounded-full bg-[var(--gh-text)] opacity-80"
          style={{
            transform: `translateX(-50%) translateY(-100%) rotate(${(minutes + seconds / 60) * 6}deg)`,
          }}
        />
        {/* Second Hand */}
        <div
          className="absolute left-1/2 top-1/2 h-14 w-px origin-bottom -translate-x-1/2 -translate-y-full bg-[var(--gh-text-hover)]"
          style={{
            transform: `translateX(-50%) translateY(-100%) rotate(${seconds * 6}deg)`,
          }}
        />
        {/* Center Dot */}
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gh-text)]" />
      </div>
    )
  }
)
AnalogClock.displayName = "AnalogClock"

export { AnalogClock }
