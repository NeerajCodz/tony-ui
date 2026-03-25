import * as React from "react"
import { cn } from "@/lib/utils"
import { glassEffectsClass, glassInputClass, type GlassEffects } from "./_effects"

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  effects?: GlassEffects
}

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, effects = "on", children, ...props }, ref) => {
    return (
        <select
          className={cn(
            glassEffectsClass(effects),
            glassInputClass(effects),
            "flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm placeholder:text-[var(--df-muted-text)] focus:outline-none focus:ring-1 focus:ring-[var(--df-ring)] disabled:cursor-not-allowed disabled:opacity-50 font-sans text-[var(--df-text)] appearance-none",
            className
          )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    )
  }
)
NativeSelect.displayName = "NativeSelect"

export { NativeSelect }
