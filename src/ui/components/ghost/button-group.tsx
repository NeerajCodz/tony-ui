import * as React from "react"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"
import type { ButtonGroupBaseProps } from '../_base/button-group';

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { effects?: GhostEffects }
>(({ className, effects = "on", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(ghostEffectsClass(effects), "flex -space-x-px", className)}
    {...props}
  />
))
ButtonGroup.displayName = "ButtonGroup"

export { ButtonGroup }
