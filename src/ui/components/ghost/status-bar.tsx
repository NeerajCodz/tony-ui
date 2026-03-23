import * as React from "react"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"

interface StatusBarProps extends React.HTMLAttributes<HTMLDivElement> {
    effects?: GhostEffects
}

const StatusBar = React.forwardRef<HTMLDivElement, StatusBarProps>(
  ({ className, effects = "on", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(ghostEffectsClass(effects),
        "flex h-6 w-full items-center justify-between border-t border-[var(--gh-border)] bg-[var(--gh-surface)] px-2 text-xs text-[var(--gh-text)] opacity-80",
        className
      )}
      {...props}
    />
  )
)
StatusBar.displayName = "StatusBar"

export { StatusBar }
