import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-sans tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-[var(--pd-bg)] text-[var(--pd-text)] hover:bg-[var(--pd-bg)]/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[var(--pd-accent)] bg-transparent hover:bg-[var(--pd-accent)] hover:text-white text-[var(--pd-text)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-[var(--pd-bg)]/50 hover:text-[var(--pd-text)] text-[var(--pd-text)]",
        link: "text-[var(--pd-accent)] underline-offset-4 hover:underline",
        solid: "bg-[rgba(85,112,255,0.15)] text-[var(--pd-text)] hover:bg-[rgba(85,112,255,0.25)]",
        inverse: "bg-[rgba(192,196,216,0.1)] text-[var(--pd-text)] hover:bg-[rgba(192,196,216,0.2)]",
        contrast: "bg-[rgba(255,255,255,0.07)] text-white hover:bg-[rgba(255,255,255,0.15)]",
        soft: "bg-[rgba(85,112,255,0.05)] text-[var(--pd-muted)] hover:bg-[rgba(85,112,255,0.1)] hover:text-[var(--pd-text)]",
      },
      size: {
        default: "h-12 px-8 py-2", // 24px horizontal padding equivalent roughly
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-md px-10",
        icon: "h-10 w-10",
        compact: "h-10 px-4", // 16px padding
        spacious: "h-16 px-10", // 32px padding
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
