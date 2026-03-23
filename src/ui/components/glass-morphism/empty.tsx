import * as React from "react"
import { cn } from "@/lib/utils"
import { glassEffectsClass, type GlassEffects } from "./_effects"
import { PackageOpen } from "lucide-react"

const EmptyState = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { effects?: GlassEffects }
>(({ className, effects = "on", children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        glassEffectsClass(effects),
        "flex h-[450px] shrink-0 items-center justify-center rounded-lg border border-dashed border-[var(--gl-glass-border)]/30 bg-[var(--gl-glass-bg)]/20 backdrop-blur-sm",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--gl-glass-bg)]/30 backdrop-blur-md shadow-sm">
          <PackageOpen className="h-10 w-10 text-[var(--df-muted-text)]" />
        </div>
        <h3 className="mt-4 text-lg font-medium font-sans text-[var(--df-text)]">
          No data found
        </h3>
        <p className="mb-4 mt-2 text-sm text-[var(--df-muted-text)] font-sans">
          There is no data to display at this time.
        </p>
        {children}
      </div>
    </div>
  )
})
EmptyState.displayName = "EmptyState"

export { EmptyState }
