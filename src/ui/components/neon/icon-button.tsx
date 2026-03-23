import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "./button"

export interface IconButtonProps extends ButtonProps {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn("aspect-square p-2", className)}
        {...props}
      />
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton }
