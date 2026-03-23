import * as React from "react"
import { cn } from "@/lib/utils"
import { glassEffectsClass, type GlassEffects } from "./_effects"

interface AnalogClockProps extends React.SVGAttributes<SVGSVGElement> {
  effects?: GlassEffects
  size?: "xs" | "sm" | "md" | "lg" | "xl"
}

const AnalogClock = React.forwardRef<SVGSVGElement, AnalogClockProps>(
  ({ className, effects = "on", size = "md", ...props }, ref) => {
    const [time, setTime] = React.useState(new Date())

    React.useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date())
      }, 1000)
      return () => clearInterval(timer)
    }, [])

    const secondsRatio = time.getSeconds() / 60
    const minutesRatio = (time.getMinutes() + secondsRatio) / 60
    const hoursRatio = (time.getHours() % 12 + minutesRatio) / 12

    const sizeClasses = {
      xs: "w-16 h-16",
      sm: "w-24 h-24",
      md: "w-32 h-32",
      lg: "w-48 h-48",
      xl: "w-64 h-64",
    }

    return (
      <svg
        ref={ref}
        className={cn(
          glassEffectsClass(effects),
          "rounded-full bg-[var(--gl-glass-bg)]/30 backdrop-blur-md border border-[var(--gl-glass-border)]/50 text-[var(--df-text)] shadow-lg",
          sizeClasses[size],
          className
        )}
        viewBox="0 0 100 100"
        {...props}
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-[var(--gl-glass-border)]/50"
        />

        {/* Markers */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const x1 = 50 + 40 * Math.sin(angle)
          const y1 = 50 - 40 * Math.cos(angle)
          const x2 = 50 + 45 * Math.sin(angle)
          const y2 = 50 - 45 * Math.cos(angle)
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth={i % 3 === 0 ? 2 : 1}
              className={
                i % 3 === 0
                  ? "text-[var(--df-text)]"
                  : "text-[var(--df-muted-text)]"
              }
            />
          )
        })}

        {/* Hour Hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="25"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${hoursRatio * 360} 50 50)`}
          className="text-[var(--df-text)]"
        />

        {/* Minute Hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="15"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${minutesRatio * 360} 50 50)`}
          className="text-[var(--df-text)]"
        />

        {/* Second Hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform={`rotate(${secondsRatio * 360} 50 50)`}
          className="text-[var(--df-accent)]"
        />

        <circle
          cx="50"
          cy="50"
          r="2"
          fill="currentColor"
          className="text-[var(--df-accent)]"
        />
      </svg>
    )
  }
)
AnalogClock.displayName = "AnalogClock"

export { AnalogClock }
