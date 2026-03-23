import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva("font-display uppercase tracking-widest", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-6xl font-black text-[var(--ne-primary)] drop-shadow-[0_0_10px_var(--ne-primary)] drop-shadow-[0_0_30px_var(--ne-primary)] drop-shadow-[0_0_60px_var(--ne-primary)]",
      h2: "scroll-m-20 text-4xl font-black text-[var(--ne-text-primary)] drop-shadow-[0_0_5px_var(--ne-text-primary)]",
      h3: "scroll-m-20 text-2xl font-bold text-[var(--ne-primary)] drop-shadow-[0_0_8px_var(--ne-primary)]",
      h4: "scroll-m-20 text-xl font-bold text-[var(--ne-text-primary)] tracking-[0.1em]",
      h5: "scroll-m-20 text-base font-bold text-[var(--ne-secondary)] tracking-[0.2em] drop-shadow-[0_0_5px_var(--ne-secondary)]",
      h6: "scroll-m-20 text-xs font-semibold text-[var(--ne-text-secondary)] tracking-[0.35em]",
      p: "font-body text-base leading-7 text-[var(--ne-text-secondary)] tracking-normal normal-case",
      blockquote:
        "mt-6 border-l-2 border-[var(--ne-primary)] pl-6 italic text-[var(--ne-text-primary)]",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2 font-body normal-case",
      lead: "text-xl text-[var(--ne-text-secondary)] font-body normal-case",
      large: "text-lg font-semibold text-[var(--ne-text-primary)] font-body normal-case",
      small: "text-sm font-medium leading-none text-[var(--ne-text-secondary)] font-body normal-case",
      muted: "text-sm text-muted-foreground font-body normal-case",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean
}

const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h1"
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }
