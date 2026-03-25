import * as React from "react"
import { TextareaBase } from '../_base/textarea';

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <TextareaBase
        className={cn(
          "flex min-h-[120px] w-full rounded-[8px] border border-transparent bg-[rgba(255,255,255,0.05)] px-4 py-3 text-sm ring-offset-background placeholder:text-[var(--pd-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pd-accent)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-sans text-[var(--pd-text)] transition-all hover:bg-[rgba(255,255,255,0.08)]",
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
