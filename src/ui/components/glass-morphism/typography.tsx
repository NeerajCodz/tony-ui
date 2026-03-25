import type * as __BaseImport_typography from '../_base/typography';

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { glassEffectsClass, type GlassEffects } from "./_effects"

const typographyVariants = cva(
  "text-[var(--df-text)] font-sans tracking-tight",
  {
    variants: {
      variant: {
        h1: "scroll-m-20 text-4xl font-extrabold lg:text-5xl drop-shadow-sm",
        h2: "scroll-m-20 text-3xl font-semibold lg:text-4xl drop-shadow-sm",
        h3: "scroll-m-20 text-2xl font-semibold lg:text-3xl",
        h4: "scroll-m-20 text-xl font-semibold lg:text-2xl",
        p: "leading-7 [&:not(:first-child)]:mt-6 text-[var(--df-text)]/90",
        blockquote:
          "mt-6 border-l-2 border-[var(--df-accent)] pl-6 italic text-[var(--df-text)]/80 bg-[var(--gl-glass-bg)]/30 p-4 rounded-r-lg backdrop-blur-sm",
        list: "my-6 ml-6 list-disc [&>li]:mt-2",
        lead: "text-xl text-[var(--df-muted-text)]",
        large: "text-lg font-semibold",
        small: "text-sm font-medium leading-none opacity-70",
        muted: "text-sm text-[var(--df-muted-text)]",
      },
    },
    defaultVariants: {
      variant: "p",
    },
  }
)

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
  effects?: GlassEffects
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, effects = "on", ...props }, ref) => {
    const Comp = as || "p"
    // Apply glass effect only for block elements that might benefit from it, or if explicitly requested?
    // Typography usually doesn't need glass background unless it's a blockquote or similar.
    // The current implementation adds glass effect to blockquote in variants.
    // We'll leave effects prop unused for now or apply it if needed.
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref as any}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }
