import * as React from "react"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

export interface SpinnerProps extends React.ComponentProps<"svg"> {}

export function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <Loader2
      className={cn("h-4 w-4 animate-spin text-[var(--mg-accent)]", className)}
      {...props}
    />
  )
}
