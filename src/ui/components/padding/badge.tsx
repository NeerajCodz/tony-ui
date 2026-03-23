import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-[8px] border px-4 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-sans tracking-wide",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--pd-bg)] text-[var(--pd-text)] hover:bg-[var(--pd-bg)]/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-[var(--pd-text)] border-[var(--pd-accent)]",
        solid: "border-transparent bg-[rgba(85,112,255,0.15)] text-[var(--pd-text)]",
        inverse: "border-transparent bg-[rgba(192,196,216,0.1)] text-[var(--pd-text)]",
        contrast: "border-transparent bg-[rgba(255,255,255,0.07)] text-white",
        soft: "border-transparent bg-[rgba(85,112,255,0.05)] text-[var(--pd-muted)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
