import * as React from "react"

import { cn } from "@/lib/utils"
import {
  FieldBase,
  type FieldBaseProps,
  FieldControlBase,
  type FieldControlBaseProps,
  FieldDescriptionBase,
  type FieldDescriptionBaseProps,
  FieldErrorBase,
  type FieldErrorBaseProps,
  FieldLabelBase,
  type FieldLabelBaseProps,
} from "@/ui/components/_base/field"
import { glassEffectsClass, type GlassEffects } from "./_effects"

export interface FieldProps extends FieldBaseProps {
  effects?: GlassEffects
}
export interface FieldLabelProps extends FieldLabelBaseProps {
  size?: "sm" | "md" | "lg"
  effects?: GlassEffects
}
export interface FieldDescriptionProps extends FieldDescriptionBaseProps {
  effects?: GlassEffects
}
export interface FieldErrorProps extends FieldErrorBaseProps {
  effects?: GlassEffects
}
export interface FieldControlProps extends FieldControlBaseProps {
  effects?: GlassEffects
}

const getSizeStyles = (size: string = "md") => {
  switch (size) {
    case "sm":
      return "gap-1.5"
    case "md":
      return "gap-2"
    case "lg":
      return "gap-3"
    default:
      return "gap-2"
  }
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      className,
      effects = "on",
      orientation = "vertical",
      size = "md",
      ...props
    },
    ref
  ) => {
    return (
      <FieldBase
        ref={ref}
        orientation={orientation}
        size={size}
        className={cn(
          glassEffectsClass(effects),
          "flex w-full group/field",
          orientation === "vertical" ? "flex-col" : "flex-row items-center",
          getSizeStyles(size),
          className
        )}
        {...props}
      />
    )
  }
)
Field.displayName = "Field"

export const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ className, effects = "on", size = "md", ...props }, ref) => {
    const sizeClass =
      size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm"
    return (
      <FieldLabelBase
        ref={ref}
        className={cn(
          glassEffectsClass(effects),
          "font-sans font-medium text-[var(--df-text)] group-focus-within/field:text-[var(--df-accent)] transition-colors",
          sizeClass,
          className
        )}
        {...props}
      />
    )
  }
)
FieldLabel.displayName = "FieldLabel"

export const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  FieldDescriptionProps
>(({ className, effects = "on", ...props }, ref) => {
  return (
    <FieldDescriptionBase
      ref={ref}
      className={cn(
        glassEffectsClass(effects),
        "text-[0.8rem] text-[var(--df-muted-text)] font-sans",
        className
      )}
      {...props}
    />
  )
})
FieldDescription.displayName = "FieldDescription"

export const FieldError = React.forwardRef<
  HTMLParagraphElement,
  FieldErrorProps
>(({ className, effects = "on", ...props }, ref) => {
  return (
    <FieldErrorBase
      ref={ref}
      className={cn(
        glassEffectsClass(effects),
        "text-[0.8rem] font-medium text-destructive font-sans",
        className
      )}
      {...props}
    />
  )
})
FieldError.displayName = "FieldError"

export const FieldControl = React.forwardRef<
  HTMLDivElement,
  FieldControlProps
>(({ className, effects = "on", ...props }, ref) => {
  return (
    <FieldControlBase
      ref={ref}
      className={cn(glassEffectsClass(effects), "relative w-full", className)}
      {...props}
    />
  )
})
FieldControl.displayName = "FieldControl"
