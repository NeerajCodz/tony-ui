import * as React from "react"

import { cn } from "@/lib/utils"

export function Item({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-none p-2 text-sm hover:bg-[var(--mg-accent)]/10 text-[var(--mg-text)] font-mono transition-colors",
        className
      )}
      {...props}
    />
  )
}
