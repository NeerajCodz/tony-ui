import * as React from "react"
import { cn } from "@/lib/utils"
import { glassEffectsClass, type GlassEffects } from "./_effects"

interface DigitalClockProps extends React.HTMLAttributes<HTMLDivElement> {
  effects?: GlassEffects
  size?: "sm" | "md" | "lg" | "xl"
}

const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps>(
  ({ className, effects = "on", size = "md", ...props }, ref) => {
    const [time, setTime] = React.useState(new Date())

    React.useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date())
      }, 1000)
      return () => clearInterval(timer)
    }, [])

    const sizeClasses = {
      sm: "text-lg p-2",
      md: "text-2xl p-4",
      lg: "text-4xl p-6",
      xl: "text-6xl p-8",
    }

    return (
      <div
        ref={ref}
        className={cn(
          glassEffectsClass(effects),
          "font-sans font-medium tracking-wider text-[var(--df-text)] bg-[var(--gl-glass-bg)]/30 backdrop-blur-md border border-[var(--gl-glass-border)]/30 rounded-lg shadow-sm flex items-center justify-center",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {time.toLocaleTimeString()}
      </div>
    )
  }
)
DigitalClock.displayName = "DigitalClock"

export { DigitalClock }
