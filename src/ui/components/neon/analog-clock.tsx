import * as React from "react"
import { cn } from "@/lib/utils"

export interface AnalogClockProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  showSeconds?: boolean
  showTicks?: boolean
}

export function AnalogClock({
  className,
  size = 200,
  showSeconds = true,
  showTicks = true,
  ...props
}: AnalogClockProps) {
  const [date, setDate] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()

  const secondDegrees = (seconds / 60) * 360
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360
  const hourDegrees = ((hours + minutes / 60) / 12) * 360

  return (
    <div
      className={cn(
        "relative rounded-full border-4 border-[var(--ne-accent)] bg-[var(--ne-surface)] shadow-[0_0_30px_var(--ne-accent)]",
        className
      )}
      style={{ width: size, height: size }}
      {...props}
    >
      {/* Clock Face */}
      <div className="absolute inset-0 rounded-full bg-radial-gradient from-transparent to-[var(--ne-bg)]/50" />
      
      {/* Center Dot */}
      <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ne-accent)] shadow-[0_0_10px_var(--ne-accent)] z-20" />

      {/* Hour Hand */}
      <div
        className="absolute left-1/2 top-1/2 h-[25%] w-2 -translate-x-1/2 origin-bottom rounded-full bg-[var(--ne-text)] shadow-[0_0_5px_var(--ne-text)] z-10"
        style={{ transform: `translateX(-50%) rotate(${hourDegrees}deg)` }}
      />

      {/* Minute Hand */}
      <div
        className="absolute left-1/2 top-1/2 h-[35%] w-1.5 -translate-x-1/2 origin-bottom rounded-full bg-[var(--ne-text)] shadow-[0_0_5px_var(--ne-text)] z-10"
        style={{ transform: `translateX(-50%) rotate(${minuteDegrees}deg)` }}
      />

      {/* Second Hand */}
      {showSeconds && (
        <div
          className="absolute left-1/2 top-1/2 h-[40%] w-0.5 -translate-x-1/2 origin-bottom bg-[var(--ne-accent)] shadow-[0_0_8px_var(--ne-accent)] z-10"
          style={{ transform: `translateX(-50%) rotate(${secondDegrees}deg)` }}
        />
      )}

      {/* Ticks */}
      {showTicks &&
        Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-2 h-4 w-1 -translate-x-1/2 bg-[var(--ne-muted)]"
            style={{
              transform: `translateX(-50%) rotate(${i * 30}deg)`,
              transformOrigin: `50% ${size / 2 - 8}px`,
            }}
          />
        ))}
    </div>
  )
}
