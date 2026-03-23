import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

interface DirectionProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  dir?: "ltr" | "rtl"
}

const Direction = React.forwardRef<HTMLDivElement, DirectionProps>(
  ({ asChild, dir = "ltr", ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return <Comp ref={ref} dir={dir} {...props} />
  }
)
Direction.displayName = "Direction"

export { Direction }
