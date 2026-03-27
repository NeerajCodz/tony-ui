
import * as React from "react";
import { cn } from "@/lib/utils";

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
  disabled?: boolean
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, active, disabled, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex items-center p-3 rounded-[6px] transition-colors font-sans",
          "hover:bg-[rgba(255,255,255,0.03)]",
          active && "bg-[rgba(255,255,255,0.05)] text-[var(--pd-text)]",
          disabled && "pointer-events-none opacity-50",
          className
        )}
        {...props}
      />
    )
  }
)
Item.displayName = "Item"

export { Item }
