import * as React from "react";
import { cn } from "@/lib/utils";
import { KbdBase } from '../_base/kbd';

const Kbd = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <KbdBase
      ref={ref}
      className={cn(
        "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded-[4px] bg-[rgba(255,255,255,0.1)] px-1.5 font-mono text-[10px] font-medium text-[var(--pd-muted)] opacity-100",
        className
      )}
      {...props}
    />
  )
})
Kbd.displayName = "Kbd"

export { Kbd }
