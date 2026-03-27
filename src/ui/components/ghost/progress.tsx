import { cn } from "@/lib/utils";
import * as React from "react";
import { ProgressPrimitive } from '../_base/progress';
import { ghostEffectsClass, type GhostEffects } from "./_effects";

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { effects?: GhostEffects }
>(({ className, value, effects = "on", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(ghostEffectsClass(effects),
      "relative h-2 w-full overflow-hidden rounded-full bg-[var(--gh-surface)]/50",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-[var(--gh-text)] transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress };
