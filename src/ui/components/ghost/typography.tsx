import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"

const typographyVariants = cva("text-[var(--gh-text)] font-display", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      list: "my-6 ml-6 list-disc [&>li]:mt-2",
      lead: "text-xl text-[var(--gh-text)] opacity-80",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-[var(--gh-text)] opacity-60",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  effects?: GhostEffects
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "blockquote" | "ul"
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, effects = "on", ...props }, ref) => {
    const Comp: React.ElementType =
      as ||
      (variant === "list"
        ? "ul"
        : variant === "lead"
          ? "p"
          : variant === "large"
            ? "div"
            : variant === "muted"
              ? "p"
              : variant || "p")
    return React.createElement(Comp, {
      ...props,
      ref,
      className: cn(ghostEffectsClass(effects), typographyVariants({ variant, className })),
    })
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }
