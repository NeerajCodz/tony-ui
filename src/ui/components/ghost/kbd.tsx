import { cn } from "@/lib/utils";
import * as React from "react";
import { KbdBase } from '../_base/kbd';
import { ghostEffectsClass, type GhostEffects } from "./_effects";

interface KbdProps extends React.HTMLAttributes<HTMLDivElement> {
    effects?: GhostEffects
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, effects = "on", ...props }, ref) => (
    <KbdBase
      ref={ref}
      className={cn(ghostEffectsClass(effects),
        "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded-sm border border-[var(--gh-border)] bg-[var(--gh-surface)] px-1.5 font-mono text-[10px] font-medium text-[var(--gh-text)] opacity-100",
        className
      )}
      {...props}
    />
  )
)
Kbd.displayName = "Kbd"

export { Kbd };
