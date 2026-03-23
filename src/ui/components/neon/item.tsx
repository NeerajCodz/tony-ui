import * as React from "react"

import { cn } from "@/lib/utils"

export function Item({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-none p-2 text-sm hover:bg-[var(--ne-primary)]/10 hover:shadow-[inset_0_0_5px_var(--ne-primary)] transition-all",
        className
      )}
      {...props}
    />
  )
}
