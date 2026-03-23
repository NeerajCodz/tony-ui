import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { matrixGridBg } from "./_effects"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono tracking-wider border",
  {
    variants: {
      variant: {
        default: `bg-[var(--mg-surface)] text-[var(--mg-text-dim)] border-[var(--mg-border)] hover:bg-[var(--mg-surface)]/80 hover:text-[var(--mg-text)] hover:border-[var(--mg-accent)] ${matrixGridBg}`,
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive",
        outline:
          "border border-[var(--mg-accent)] bg-transparent text-[var(--mg-accent)] hover:bg-[var(--mg-accent)] hover:text-[var(--mg-bg)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-secondary",
        ghost: "hover:bg-[var(--mg-surface)] hover:text-[var(--mg-text)] border-transparent text-[var(--mg-text-dim)]",
        link: "text-[var(--mg-accent)] underline-offset-4 hover:underline border-transparent",
        solid: "bg-[rgba(0,180,60,0.1)] text-[var(--mg-accent)] border-[var(--mg-accent)] hover:bg-[rgba(0,180,60,0.2)]",
        inverse: "bg-[var(--mg-accent)] text-[var(--mg-bg)] border-transparent hover:bg-[var(--mg-accent)]/90",
        contrast: "bg-black text-[var(--mg-accent)] border-[var(--mg-accent)] border-2 hover:bg-black/80",
        soft: "bg-[rgba(0,100,40,0.04)] text-[var(--mg-text-dim)] border-[rgba(0,180,60,0.15)] hover:bg-[rgba(0,100,40,0.1)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-none px-3",
        lg: "h-11 rounded-none px-8",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
