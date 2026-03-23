import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-none border-2 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground font-body shadow-[inset_0_0_6px_var(--ne-primary),0_0_8px_var(--ne-primary),0_0_20px_var(--ne-primary),0_0_40px_rgba(0,245,255,0.3)]",
  {
    variants: {
      variant: {
        default: "bg-[var(--ne-bg)] text-[var(--ne-text-primary)] border-[var(--ne-primary)] [&>svg]:text-[var(--ne-primary)] [&>svg]:drop-shadow-[0_0_5px_var(--ne-primary)]",
        destructive:
          "border-[var(--ne-orange)] text-[var(--ne-orange)] [&>svg]:text-[var(--ne-orange)] shadow-[inset_0_0_6px_var(--ne-orange),0_0_8px_var(--ne-orange),0_0_20px_var(--ne-orange),0_0_40px_rgba(255,102,0,0.3)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-display font-bold uppercase tracking-wider leading-none", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed text-[var(--ne-text-secondary)]", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
