
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import * as React from "react";
import { ghostEffectsClass, type GhostEffects } from "./_effects";

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

export { Spinner };
