import * as React from "react"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"
import type { InputGroupBaseProps } from '../_base/input-group';

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { effects?: GhostEffects }
>(({ className, effects = "on", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(ghostEffectsClass(effects), "flex w-full items-center space-x-2", className)}
    {...props}
  />
))
InputGroup.displayName = "InputGroup"

export { InputGroup }
