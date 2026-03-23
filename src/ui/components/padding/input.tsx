import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-[8px] border border-transparent bg-[rgba(255,255,255,0.05)] px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--pd-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pd-accent)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-sans text-[var(--pd-text)] transition-all hover:bg-[rgba(255,255,255,0.08)]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
