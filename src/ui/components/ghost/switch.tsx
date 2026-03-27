import { cn } from "@/lib/utils";
import * as React from "react";
import { SwitchPrimitive } from '../_base/switch';
import { ghostEffectsClass, type GhostEffects } from "./_effects";

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & { effects?: GhostEffects }
>(({ className, effects = "on", ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(ghostEffectsClass(effects),
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--gh-surface-hover)] data-[state=unchecked]:bg-[var(--gh-surface)]/50",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-[var(--gh-text)] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch };
