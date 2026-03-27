import { cn } from "@/lib/utils";
import * as React from "react";
import { glassEffectsClass, type GlassEffects } from "./_effects";

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { effects?: GlassEffects }
>(({ className, effects = "on", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        glassEffectsClass(effects),
        "flex items-center space-x-2",
        className
      )}
      {...props}
    />
  )
})
InputGroup.displayName = "InputGroup"

export { InputGroup };
