import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-none border-2 px-2.5 py-0.5 text-xs font-bold uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ne-primary)] focus:ring-offset-2 font-display tracking-wider",
  {
    variants: {
      variant: {
        default:
          "border-[var(--ne-primary)] bg-[var(--ne-bg)] text-[var(--ne-primary)] shadow-[inset_0_0_4px_var(--ne-primary),0_0_6px_var(--ne-primary),0_0_15px_var(--ne-primary)]",
        secondary:
          "border-[var(--ne-secondary)] bg-[var(--ne-bg)] text-[var(--ne-secondary)] shadow-[inset_0_0_4px_var(--ne-secondary),0_0_6px_var(--ne-secondary),0_0_15px_var(--ne-secondary)]",
        destructive:
          "border-[var(--ne-orange)] bg-[var(--ne-bg)] text-[var(--ne-orange)] shadow-[inset_0_0_4px_var(--ne-orange),0_0_6px_var(--ne-orange),0_0_15px_var(--ne-orange)]",
        outline:
          "border-[var(--ne-text-primary)] text-[var(--ne-text-primary)] shadow-[0_0_5px_var(--ne-text-primary)]",
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
