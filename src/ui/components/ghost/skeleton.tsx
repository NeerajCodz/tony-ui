import * as React from "react"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"
import { SkeletonBase } from '../_base/skeleton';

function Skeleton({
  className,
  effects = "on",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: GhostEffects }) {
  return (
    <SkeletonBase
      className={cn(ghostEffectsClass(effects), "animate-pulse rounded-sm bg-[var(--gh-surface)]", className)}
      {...props}
    />
  )
}

export { Skeleton }
