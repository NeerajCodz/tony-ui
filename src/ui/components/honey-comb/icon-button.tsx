import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/ui/components/honey-comb/button"

interface IconButtonProps extends ButtonProps {
  icon?: React.ReactNode
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, icon, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn("p-2 aspect-square", className)}
        {...props}
      >
        {icon || children}
      </Button>
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton }
