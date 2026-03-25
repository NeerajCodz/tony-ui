import * as React from "react"
import { cn } from "@/lib/utils"
import { glassEffectsClass, type GlassEffects } from "./_effects"
import { KbdBase } from '../_base/kbd';

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  effects?: GlassEffects
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, effects = "on", ...props }, ref) => {
    return (
      <KbdBase
        ref={ref}
        className={cn(
          glassEffectsClass(effects),
          "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-[var(--gl-glass-border)]/30 bg-[var(--gl-glass-bg)]/30 px-1.5 font-sans text-[10px] font-medium text-[var(--df-muted-text)] opacity-100 shadow-sm backdrop-blur-sm",
          className
        )}
        {...props}
      />
    )
  }
)
Kbd.displayName = "Kbd"

export { Kbd }
