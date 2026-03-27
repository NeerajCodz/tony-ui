
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 uppercase tracking-wider font-display",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--hc-accent)] text-black hover:bg-[var(--hc-accent)]/80",
        secondary:
          "border-transparent bg-[var(--hc-surface)] text-[var(--hc-accent)] hover:bg-[var(--hc-surface)]/80 border-[var(--hc-border)]",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-[var(--hc-accent)] border-[var(--hc-accent)]",
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
    <div
      className={cn(badgeVariants({ variant }), className)}
      style={{
        clipPath: "polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)",
      }}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
