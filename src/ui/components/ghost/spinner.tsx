import type * as __BaseImport_spinner from '../_base/spinner';

import * as React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    effects?: GhostEffects
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, effects = "on", ...props }, ref) => (
    <div ref={ref} className={cn(ghostEffectsClass(effects), "flex items-center justify-center", className)} {...props}>
      <Loader2 className="h-6 w-6 animate-spin text-[var(--gh-text)] opacity-50" />
    </div>
  )
)
Spinner.displayName = "Spinner"

export { Spinner }
