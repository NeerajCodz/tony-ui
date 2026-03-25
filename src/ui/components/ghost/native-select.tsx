import * as React from "react"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"
import { NativeSelectBase } from '../_base/native-select';

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  effects?: GhostEffects
}

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, children, effects = "on", ...props }, ref) => {
    return (
      <div className="relative">
        <NativeSelectBase
          className={cn(ghostEffectsClass(effects),
            "flex h-10 w-full items-center justify-between rounded-sm border border-[var(--gh-border)] bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none hover:bg-[var(--gh-surface)] text-[var(--gh-text)]",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </NativeSelectBase>
      </div>
    )
  }
)
NativeSelect.displayName = "NativeSelect"

export { NativeSelect }
