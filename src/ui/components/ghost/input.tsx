import type * as __BaseImport_input from '../_base/input';

import * as React from "react"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  effects?: GhostEffects
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, effects = "on", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(ghostEffectsClass(effects),
          "flex h-10 w-full rounded-sm border border-transparent bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gh-accent)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-[var(--gh-surface)] hover:border-[var(--gh-border)] text-[var(--gh-text)] font-display transition-all",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
