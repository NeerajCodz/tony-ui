import * as React from "react"
import { TextareaBase } from '../_base/textarea';

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, style, ...props }, ref) => {
    return (
      <TextareaBase
        className={cn(
          "flex min-h-[80px] w-full bg-[var(--hc-surface)] border border-[var(--hc-border)] px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--hc-accent)] disabled:cursor-not-allowed disabled:opacity-50 text-[var(--hc-text-primary)] font-body",
          className
        )}
        style={{
            clipPath: "polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)",
            ...style
        }}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
