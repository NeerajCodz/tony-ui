import * as React from "react"

import { cn } from "@/lib/utils"

export function Item({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}
