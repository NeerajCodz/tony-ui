import * as React from "react"

import { cn } from "@/lib/utils"

export function Kbd({
  className,
  ...props
}: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded-none border border-[var(--ne-text-secondary)] bg-[var(--ne-bg)] px-1.5 font-mono text-[10px] font-medium text-[var(--ne-text-primary)] opacity-100 shadow-[0_0_5px_var(--ne-text-secondary)]",
        className
      )}
      {...props}
    />
  )
}
