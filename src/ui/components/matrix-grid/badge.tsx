import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-none border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-mono tracking-widest uppercase",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--mg-accent)] text-[var(--mg-bg)] hover:bg-[var(--mg-accent)]/80",
        secondary:
          "border-transparent bg-[var(--mg-surface)] text-[var(--mg-text)] hover:bg-[var(--mg-surface)]/80 border-[var(--mg-border)]",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-[var(--mg-text)] border-[var(--mg-border)]",
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
