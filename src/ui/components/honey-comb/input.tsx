
import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, style, ...props }, ref) => {
    return (
      <div className="relative group">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full bg-[var(--hc-surface)] border-none px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-[var(--hc-text-primary)] font-body",
            className
          )}
          style={{
            clipPath: "polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)",
            ...style,
          }}
          ref={ref}
          {...props}
        />
        <div 
          className="absolute inset-0 pointer-events-none border border-[var(--hc-border)] group-focus-within:border-[var(--hc-accent)] transition-colors"
          style={{
            clipPath: "polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)",
          }}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
