import type * as __BaseImport_item from '../_base/item';

import * as React from "react"
import { cn } from "@/lib/utils"
import { ghostEffectsClass, type GhostEffects } from "./_effects"

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  effects?: GhostEffects
  disabled?: boolean
  selected?: boolean
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, effects = "on", disabled, selected, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-disabled={disabled}
        data-disabled={disabled}
        data-selected={selected}
        className={cn(ghostEffectsClass(effects),
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-[var(--gh-surface-hover)] focus:bg-[var(--gh-surface-hover)] data-[selected]:bg-[var(--gh-surface-hover)]",
          className
        )}
        {...props}
      />
    )
  }
)
Item.displayName = "Item"

export { Item }
