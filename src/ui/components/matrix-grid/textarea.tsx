import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-none border border-[var(--mg-border)] bg-[var(--mg-surface)] px-3 py-2 text-sm ring-offset-background placeholder:text-[var(--mg-text-dim)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mg-accent)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--mg-text)] placeholder:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
