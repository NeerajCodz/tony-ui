import * as React from "react"
import { cn } from "@/lib/utils"
import { glassEffectsClass, type GlassEffects } from "./_effects"

export interface StatusBarProps extends React.HTMLAttributes<HTMLDivElement> {
  effects?: GlassEffects
  status?: "ready" | "busy" | "error" | "offline"
  label?: string
}

const StatusBar = React.forwardRef<HTMLDivElement, StatusBarProps>(
  (
    { className, effects = "on", status = "ready", label, ...props },
    ref
  ) => {
    const statusColors = {
      ready: "bg-[var(--df-success)]",
      busy: "bg-[var(--df-warning)]",
      error: "bg-[var(--df-error)]",
      offline: "bg-[var(--df-muted-text)]",
    }

    return (
      <div
        ref={ref}
        className={cn(
          glassEffectsClass(effects),
          "flex h-8 items-center justify-between rounded-md border border-[var(--gl-glass-border)]/30 bg-[var(--gl-glass-bg)]/30 px-3 text-xs backdrop-blur-md",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "h-2 w-2 rounded-full shadow-[0_0_8px_currentColor]",
              statusColors[status]
            )}
          />
          <span className="font-medium text-[var(--df-text)] font-sans">
            {label || status.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-4 text-[var(--df-muted-text)] font-sans">
          <span>SYSTEM</span>
          <span>ONLINE</span>
        </div>
      </div>
    )
  }
)
StatusBar.displayName = "StatusBar"

export { StatusBar }
