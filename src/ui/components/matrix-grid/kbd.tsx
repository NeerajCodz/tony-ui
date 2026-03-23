import * as React from "react"

import { cn } from "@/lib/utils"

export function Kbd({
  className,
  ...props
}: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded-none border border-[var(--mg-border)] bg-[var(--mg-surface)] px-1.5 font-mono text-[10px] font-medium text-[var(--mg-text-dim)] opacity-100",
        className
      )}
      {...props}
    />
  )
}
