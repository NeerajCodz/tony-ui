import * as React from "react";
import { SpinnerBase, type SpinnerBaseProps } from "../_base/spinner";
import { cn } from "@/lib/utils";
import { glassEffectsClass, type GlassEffects } from "./_effects";

export interface SpinnerProps extends SpinnerBaseProps {
  effects?: GlassEffects
}

const getSizeStyles = (size: string = "md") => {
  switch (size) {
    case "xs":
      return "h-3 w-3 border-[1.5px]"
    case "sm":
      return "h-4 w-4 border-2"
    case "md":
      return "h-6 w-6 border-2"
    case "lg":
      return "h-9 w-9 border-[3px]"
    case "xl":
      return "h-12 w-12 border-4"
    default:
      return "h-6 w-6 border-2"
  }
}

const getVariantStyles = (variant: string = "default") => {
  switch (variant) {
    case "primary":
      return "border-[var(--df-accent)]/30 border-t-[var(--df-accent)]"
    case "secondary":
      return "border-[var(--df-muted-text)]/30 border-t-[var(--df-muted-text)]"
    case "accent":
      return "border-[var(--df-accent)]/30 border-t-[var(--df-accent)]"
    case "destructive":
      return "border-destructive/30 border-t-destructive"
    case "ghost":
      return "border-[var(--df-muted-text)]/30 border-t-[var(--df-muted-text)]"
    default:
      return "border-[var(--df-accent)]/30 border-t-[var(--df-accent)]"
  }
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (
    { className, effects = "on", size = "md", variant = "default", ...props },
    ref
  ) => {
    return (
      <SpinnerBase
        ref={ref}
        size={size}
        variant={variant}
        className={cn(
          glassEffectsClass(effects),
          "animate-spin rounded-full border-t-transparent",
          getSizeStyles(size),
          getVariantStyles(variant),
          className
        )}
        {...props}
      />
    )
  }
)
Spinner.displayName = "Spinner"
