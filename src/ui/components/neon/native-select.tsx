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
    <div className="relative">
      <select
        className={cn(
          "w-full appearance-none bg-[var(--ne-bg)] border-2 border-[var(--ne-primary)] px-3 py-2 text-sm shadow-[0_0_5px_var(--ne-primary),inset_0_0_5px_var(--ne-primary)] text-[var(--ne-text-primary)] focus:outline-none focus:shadow-[0_0_15px_var(--ne-primary),inset_0_0_10px_var(--ne-primary)] disabled:cursor-not-allowed disabled:opacity-50 font-code",
          className
        )}
        {...props}
      >
        {children}
      </select>
    </div>
  )
}
