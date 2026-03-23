import * as React from "react"

import { cn } from "@/lib/utils"

export function Empty({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center space-y-2 p-8 text-center text-sm text-[var(--mg-text-dim)] font-mono",
        className
      )}
      {...props}
    />
  )
}
