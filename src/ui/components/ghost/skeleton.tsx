import * as React from "react"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"

function Skeleton({
  className,
  effects = "on",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: GhostEffects }) {
  return (
    <div
      className={cn(ghostEffectsClass(effects), "animate-pulse rounded-sm bg-[var(--gh-surface)]", className)}
      {...props}
    />
  )
}

export { Skeleton }
