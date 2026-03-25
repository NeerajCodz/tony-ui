import * as React from "react"
import { Slot } from '../_base/button';
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--gh-surface)] text-[var(--gh-text)] hover:bg-[var(--gh-surface-hover)] border border-transparent hover:border-[var(--gh-border)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-sm",
        outline:
          "border border-[var(--gh-border)] bg-transparent hover:bg-[var(--gh-surface-hover)] text-[var(--gh-text)]",
        secondary:
          "bg-[var(--gh-surface-hover)] text-[var(--gh-text)] hover:bg-[var(--gh-surface)]",
        ghost: "hover:bg-[var(--gh-surface-hover)] hover:text-[var(--gh-text)] text-[var(--gh-text)]",
        link: "text-[var(--gh-text)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-sm px-3",
        lg: "h-11 rounded-sm px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  effects?: GhostEffects
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, effects = "on", ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(ghostEffectsClass(effects), buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
