
import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/ui/components/padding/label";

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  description?: string
  error?: string
  required?: boolean
  htmlFor?: string
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, label, description, error, required, htmlFor, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-2 font-sans", className)} {...props}>
        {label && (
          <Label htmlFor={htmlFor} className={cn(error && "text-destructive")}>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
        )}
        {children}
        {description && !error && (
          <p className="text-sm text-[var(--pd-muted)]">{description}</p>
        )}
        {error && (
          <p className="text-sm font-medium text-destructive">{error}</p>
        )}
      </div>
    )
  }
)
Field.displayName = "Field"

export { Field }
