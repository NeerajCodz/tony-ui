import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest font-display relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--hc-accent)] text-primary-foreground shadow hover:bg-[var(--hc-accent)]/90 text-black font-bold clip-hex-button",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 clip-hex-button",
        outline:
          "border border-[var(--hc-accent)] bg-transparent shadow-sm hover:bg-[var(--hc-accent)]/10 text-[var(--hc-accent)] clip-hex-button",
        secondary:
          "bg-[var(--hc-surface)] text-[var(--hc-accent)] shadow-sm hover:bg-[var(--hc-surface)]/80 border border-[var(--hc-border)] clip-hex-button",
        ghost: "hover:bg-[var(--hc-hex-hover)] hover:text-[var(--hc-accent)] clip-hex-button",
        link: "text-[var(--hc-accent)] underline-offset-4 hover:underline",
        hex: "bg-[var(--hc-surface)] border border-[var(--hc-border)] text-[var(--hc-accent)] hover:bg-[var(--hc-hex-hover)] clip-polygon-hex aspect-square p-0 flex items-center justify-center",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
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
        style={{
          clipPath:
            variant !== "link" && variant !== "hex"
              ? "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
              : variant === "hex"
              ? "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              : undefined,
        }}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
