import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--gh-surface)] text-[var(--gh-text)] hover:bg-[var(--gh-surface-hover)]",
        secondary:
          "border-transparent bg-[var(--gh-surface-hover)] text-[var(--gh-text)] hover:bg-[var(--gh-surface)]",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-[var(--gh-text)] border-[var(--gh-border)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
    effects?: GhostEffects
}

function Badge({ className, variant, effects = "on", ...props }: BadgeProps) {
  return (
    <div className={cn(ghostEffectsClass(effects), badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
