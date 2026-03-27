import { cn } from "@/lib/utils";
import * as React from "react";
import { ghostEffectsClass, type GhostEffects } from "./_effects";

interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
    effects?: GhostEffects
}

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ className, children, effects = "on", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(ghostEffectsClass(effects),
        "flex h-full min-h-[100px] w-full flex-col items-center justify-center space-y-2 rounded-sm border border-dashed border-[var(--gh-border)] bg-transparent p-8 text-center",
        className
      )}
      {...props}
    >
      <div className="text-[var(--gh-text)] opacity-50">{children || "No data available"}</div>
    </div>
  )
)
Empty.displayName = "Empty"

export { Empty };
