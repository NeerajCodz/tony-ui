import * as React from "react"

import { cn } from "@/lib/utils"

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode
}

export function NativeSelect({
  className,
  children,
  ...props
}: NativeSelectProps) {
  return (
    <div className="relative font-mono">
      <select
        className={cn(
          "w-full appearance-none rounded-none bg-[var(--mg-surface)] border border-[var(--mg-border)] px-3 py-2 text-sm ring-offset-background text-[var(--mg-text)] focus:outline-none focus:ring-2 focus:ring-[var(--mg-accent)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </select>
    </div>
  )
}
