import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <div className={cn("animate-spin", className)} {...props}>
      <Loader2 className="h-4 w-4 text-[var(--hc-accent)]" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
