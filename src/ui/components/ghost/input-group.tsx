import { cn } from "@/lib/utils";
import * as React from "react";
import { ghostEffectsClass, type GhostEffects } from "./_effects";

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

export { InputGroup };
