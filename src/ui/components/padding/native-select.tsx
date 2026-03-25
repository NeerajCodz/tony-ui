import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { NativeSelectBase } from '../_base/native-select';

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative font-sans">
        <NativeSelectBase
          className={cn(
            "flex h-10 w-full appearance-none items-center justify-between rounded-[8px] border-none bg-[rgba(255,255,255,0.03)] px-3 py-2 text-sm text-[var(--pd-text)] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[var(--pd-accent)] disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </NativeSelectBase>
        <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
      </div>
    )
  }
)
NativeSelect.displayName = "NativeSelect"

export { NativeSelect }
