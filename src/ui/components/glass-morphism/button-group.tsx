import * as React from "react"
import {
  ButtonGroupBase,
  type ButtonGroupBaseProps,
} from "../_base/button-group"
import { cn } from "@/lib/utils"
import { glassEffectsClass, type GlassEffects } from "./_effects"

export interface ButtonGroupProps extends ButtonGroupBaseProps {
  effects?: GlassEffects
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      className,
      effects = "on",
      orientation = "horizontal",
      attached = true,
      ...props
    },
    ref
  ) => {
    return (
      <ButtonGroupBase
        ref={ref}
        orientation={orientation}
        attached={attached}
        className={cn(
          glassEffectsClass(effects),
          "flex",
          orientation === "vertical" ? "flex-col" : "flex-row",
          // Glass morphism buttons look better with a tiny gap even if attached
          attached ? "gap-[1px]" : "gap-2",
          className
        )}
        {...props}
      />
    )
  }
)
ButtonGroup.displayName = "ButtonGroup"

export { ButtonGroup }
