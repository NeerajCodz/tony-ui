"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-none text-sm font-medium transition-colors hover:bg-[var(--ne-primary)] hover:text-[var(--ne-bg)] hover:shadow-[0_0_10px_var(--ne-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ne-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--ne-primary)] data-[state=on]:text-[var(--ne-bg)] data-[state=on]:shadow-[0_0_15px_var(--ne-primary),inset_0_0_5px_var(--ne-primary)] font-display uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-transparent text-[var(--ne-primary)] border border-[var(--ne-primary)]",
        outline:
          "border border-[var(--ne-text-secondary)] bg-transparent hover:bg-[var(--ne-primary)] hover:text-[var(--ne-bg)]",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
