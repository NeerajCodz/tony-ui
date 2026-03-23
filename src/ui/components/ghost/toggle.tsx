import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-sm text-sm font-medium ring-offset-background transition-colors hover:bg-[var(--gh-surface-hover)] hover:text-[var(--gh-text-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--gh-surface-hover)] data-[state=on]:text-[var(--gh-text-hover)]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-[var(--gh-border)] bg-transparent hover:bg-[var(--gh-surface-hover)] hover:text-[var(--gh-text-hover)]",
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
  React.ComponentRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants> & { effects?: GhostEffects }
>(({ className, variant, size, effects = "on", ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(ghostEffectsClass(effects), toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
