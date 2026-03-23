import * as React from "react"
import { cn } from "@/lib/utils"
import { ButtonProps } from "./button"

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = "horizontal", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "vertical" ? "flex-col" : "flex-row",
          "[&>button]:rounded-none [&>button]:border-2 [&>button:not(:first-child)]:-ml-0.5 [&>button:not(:first-child)]:border-l-0",
          orientation === "vertical" &&
            "[&>button:not(:first-child)]:-mt-0.5 [&>button:not(:first-child)]:border-t-0 [&>button:not(:first-child)]:border-l-2",
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
ButtonGroup.displayName = "ButtonGroup"

export { ButtonGroup }
