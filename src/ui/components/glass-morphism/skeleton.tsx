import * as React from "react"
import { cn } from "@/lib/utils"
import { glassEffectsClass, type GlassEffects } from "./_effects"
import { SkeletonBase } from '../_base/skeleton';

const Skeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { effects?: GlassEffects }
>(({ className, effects = "on", ...props }, ref) => {
  return (
    <SkeletonBase
      ref={ref}
      className={cn(
        glassEffectsClass(effects),
        "animate-pulse rounded-md bg-[var(--gl-glass-bg)]/30 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  )
})
Skeleton.displayName = "Skeleton"

export { Skeleton }
