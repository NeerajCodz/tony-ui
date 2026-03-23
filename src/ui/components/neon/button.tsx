"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ne-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden font-display rounded-none",
  {
    variants: {
      variant: {
        default:
          "border-2 border-[var(--ne-primary)] bg-[var(--ne-bg)] text-[var(--ne-primary)] shadow-[inset_0_0_6px_var(--ne-primary),0_0_8px_var(--ne-primary),0_0_20px_var(--ne-primary),0_0_40px_rgba(0,245,255,0.4)] hover:brightness-125 hover:shadow-[inset_0_0_10px_var(--ne-primary),0_0_15px_var(--ne-primary),0_0_30px_var(--ne-primary),0_0_60px_rgba(0,245,255,0.6)] active:brightness-150 active:scale-[0.98]",
        secondary:
          "border-2 border-[var(--ne-secondary)] bg-[var(--ne-bg)] text-[var(--ne-secondary)] shadow-[inset_0_0_6px_var(--ne-secondary),0_0_8px_var(--ne-secondary),0_0_20px_var(--ne-secondary),0_0_40px_rgba(255,0,144,0.4)] hover:brightness-125 hover:shadow-[inset_0_0_10px_var(--ne-secondary),0_0_15px_var(--ne-secondary),0_0_30px_var(--ne-secondary),0_0_60px_rgba(255,0,144,0.6)] active:brightness-150 active:scale-[0.98]",
        solid:
          "border-2 border-[var(--ne-primary)] bg-[var(--ne-primary)]/10 text-[var(--ne-primary)] shadow-[inset_0_0_10px_var(--ne-primary),0_0_15px_var(--ne-primary),0_0_30px_var(--ne-primary),0_0_60px_rgba(0,245,255,0.6)] hover:bg-[var(--ne-primary)]/20 active:bg-[var(--ne-primary)]/30",
        outline:
          "border border-[var(--ne-primary)] bg-transparent text-[var(--ne-primary)] shadow-[0_0_10px_var(--ne-primary)] hover:bg-[var(--ne-primary)]/10 hover:shadow-[0_0_20px_var(--ne-primary),inset_0_0_10px_var(--ne-primary)]",
        ghost:
          "text-[var(--ne-text-primary)] hover:text-[var(--ne-primary)] hover:drop-shadow-[0_0_8px_var(--ne-primary)]",
        destructive:
          "border-2 border-[var(--ne-orange)] bg-[var(--ne-bg)] text-[var(--ne-orange)] shadow-[inset_0_0_6px_var(--ne-orange),0_0_8px_var(--ne-orange),0_0_20px_var(--ne-orange),0_0_40px_rgba(255,102,0,0.4)] hover:brightness-125 hover:shadow-[inset_0_0_10px_var(--ne-orange),0_0_15px_var(--ne-orange),0_0_30px_var(--ne-orange),0_0_60px_rgba(255,102,0,0.6)]",
        link: "text-[var(--ne-primary)] underline-offset-4 hover:underline shadow-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-8 text-base",
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
