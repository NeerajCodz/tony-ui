import type * as __BaseImport_field from '../_base/field';

import * as React from "react"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  effects?: GhostEffects
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, effects = "on", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(ghostEffectsClass(effects), "flex flex-col space-y-2", className)}
        {...props}
      />
    )
  }
)
Field.displayName = "Field"

export { Field }
