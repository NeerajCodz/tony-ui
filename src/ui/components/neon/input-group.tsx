import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, orientation = "horizontal", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "vertical" ? "flex-col" : "flex-row",
          "[&>input]:rounded-none [&>input]:border-2 [&>input:not(:first-child)]:-ml-0.5 [&>input:not(:first-child)]:border-l-0",
          orientation === "vertical" &&
            "[&>input:not(:first-child)]:-mt-0.5 [&>input:not(:first-child)]:border-t-0 [&>input:not(:first-child)]:border-l-2",
          "shadow-[0_0_15px_var(--ne-accent)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
InputGroup.displayName = "InputGroup"

export { InputGroup }
