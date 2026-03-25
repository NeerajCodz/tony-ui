import type * as __BaseImport_badge from '../_base/badge';

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { glassEffectsClass, type GlassEffects } from "./_effects"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-display backdrop-blur-sm",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--df-accent)] text-primary-foreground hover:bg-[var(--df-accent)]/80 shadow-[0_0_10px_var(--gl-accent-dim)]",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-[var(--df-text)] border-[var(--gl-glass-border)]/50",
        glass:
          "bg-[var(--gl-glass-bg)]/40 border border-[var(--gl-glass-border)]/30 text-[var(--df-text)] shadow-sm",
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
  effects?: GlassEffects
}

function Badge({ className, variant, effects = "on", ...props }: BadgeProps) {
  return (
    <div
      className={cn(glassEffectsClass(effects), badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
